import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { ClashScene1DarkReveal } from "./scenes/ClashScene1DarkReveal";
import { ClashScene2WaxPower } from "./scenes/ClashScene2WaxPower";
import { ClashScene3AntiFrizzSilk } from "./scenes/ClashScene3AntiFrizzSilk";
import { ClashScene4Collision } from "./scenes/ClashScene4Collision";
import { ClashScene5Finale } from "./scenes/ClashScene5Finale";

type Props = {
  orientation: "horizontal" | "vertical";
};

export const ClashVideo: React.FC<Props> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const isVertical = orientation === "vertical";

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0806" }}>
      {/* Persistent warm gold ambient bg */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at ${50 + Math.sin(frame * 0.005) * 12}% ${50 + Math.cos(frame * 0.007) * 8}%, rgba(212, 175, 55, 0.04) 0%, transparent 55%)`,
      }} />

      {/* Floating gold particles */}
      <AbsoluteFill>
        {Array.from({ length: 20 }).map((_, i) => {
          const x = ((i * 137.5) % 100);
          const baseY = ((i * 73.7) % 100);
          const speed = 0.08 + (i % 5) * 0.025;
          const y = (baseY + frame * speed) % 120 - 10;
          const size = 1 + (i % 3);
          const opacity = interpolate(Math.sin(frame * 0.018 + i), [-1, 1], [0.02, 0.14]);

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
                backgroundColor: `rgba(212, 175, 55, ${opacity})`,
              }}
            />
          );
        })}
      </AbsoluteFill>

      {/* Scene transitions */}
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={140}>
          <ClashScene1DarkReveal isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 25 })}
        />
        <TransitionSeries.Sequence durationInFrames={130}>
          <ClashScene2WaxPower isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 25 })}
        />
        <TransitionSeries.Sequence durationInFrames={130}>
          <ClashScene3AntiFrizzSilk isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={140}>
          <ClashScene4Collision isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={210}>
          <ClashScene5Finale isVertical={isVertical} />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      {/* Persistent vignette */}
      <AbsoluteFill style={{
        background: "radial-gradient(ellipse at center, transparent 35%, rgba(10, 8, 6, 0.75) 100%)",
        pointerEvents: "none",
      }} />
    </AbsoluteFill>
  );
};
