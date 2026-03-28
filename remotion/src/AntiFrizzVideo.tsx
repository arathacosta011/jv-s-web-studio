import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { Scene1AntiFrizzMacro } from "./scenes/Scene1AntiFrizzMacro";
import { Scene2AntiFrizzRotation } from "./scenes/Scene2AntiFrizzRotation";
import { Scene3SerumTexture } from "./scenes/Scene3SerumTexture";
import { Scene4AntiFrizzModel } from "./scenes/Scene4AntiFrizzModel";
import { Scene5AntiFrizzFinale } from "./scenes/Scene5AntiFrizzFinale";

type Props = {
  orientation: "horizontal" | "vertical";
};

export const AntiFrizzVideo: React.FC<Props> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const isVertical = orientation === "vertical";

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      {/* Persistent animated background */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at ${50 + Math.sin(frame * 0.008) * 15}% ${40 + Math.cos(frame * 0.006) * 10}%, rgba(128, 0, 255, 0.1) 0%, transparent 60%)`,
        }}
      />

      {/* Floating particles */}
      <AbsoluteFill>
        {Array.from({ length: 18 }).map((_, i) => {
          const x = ((i * 137.5) % 100);
          const baseY = ((i * 73.7) % 100);
          const speed = 0.12 + (i % 5) * 0.04;
          const y = (baseY + frame * speed) % 120 - 10;
          const size = 1 + (i % 3);
          const opacity = interpolate(
            Math.sin(frame * 0.02 + i),
            [-1, 1],
            [0.03, 0.2]
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
                backgroundColor: `rgba(168, 85, 247, ${opacity})`,
              }}
            />
          );
        })}
      </AbsoluteFill>

      {/* Scene transitions */}
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={130}>
          <Scene1AntiFrizzMacro isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene2AntiFrizzRotation isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 25 })}
        />
        <TransitionSeries.Sequence durationInFrames={130}>
          <Scene3SerumTexture isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene4AntiFrizzModel isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={185}>
          <Scene5AntiFrizzFinale isVertical={isVertical} />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      {/* Persistent vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(5, 2, 16, 0.7) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
