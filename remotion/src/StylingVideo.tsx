import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { Scene1Powder } from "./scenes/Scene1Powder";
import { Scene2DuoReveal } from "./scenes/Scene2DuoReveal";
import { Scene3WaxMacro } from "./scenes/Scene3WaxMacro";
import { Scene4CareProducts } from "./scenes/Scene4CareProducts";
import { Scene5LineupFinale } from "./scenes/Scene5LineupFinale";

type Props = {
  orientation: "horizontal" | "vertical";
};

export const StylingVideo: React.FC<Props> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const isVertical = orientation === "vertical";

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0510" }}>
      {/* Persistent animated background */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at ${50 + Math.sin(frame * 0.008) * 15}% ${40 + Math.cos(frame * 0.006) * 10}%, rgba(128, 0, 255, 0.12) 0%, transparent 60%)`,
        }}
      />

      {/* Floating particles */}
      <AbsoluteFill>
        {Array.from({ length: 20 }).map((_, i) => {
          const x = ((i * 137.5) % 100);
          const baseY = ((i * 73.7) % 100);
          const speed = 0.15 + (i % 5) * 0.05;
          const y = (baseY + frame * speed) % 120 - 10;
          const size = 1 + (i % 3);
          const opacity = interpolate(
            Math.sin(frame * 0.02 + i),
            [-1, 1],
            [0.05, 0.25]
          );

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${x}%`,
                top: `${y}%`,
                width: size,
                height: size,
                borderRadius: "50%",
                backgroundColor: `rgba(180, 120, 255, ${opacity})`,
              }}
            />
          );
        })}
      </AbsoluteFill>

      {/* Scene transitions */}
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene1Powder isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={110}>
          <Scene2DuoReveal isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 25 })}
        />
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene3WaxMacro isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={110}>
          <Scene4CareProducts isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={185}>
          <Scene5LineupFinale isVertical={isVertical} />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      {/* Persistent vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(5, 2, 10, 0.7) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
