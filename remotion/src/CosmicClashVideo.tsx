import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { CosmicScene1Emerge } from "./scenes/CosmicScene1Emerge";
import { CosmicScene2WaxHero } from "./scenes/CosmicScene2WaxHero";
import { CosmicScene3FrizzHero } from "./scenes/CosmicScene3FrizzHero";
import { CosmicScene4DualOrbit } from "./scenes/CosmicScene4DualOrbit";
import { CosmicScene5Finale } from "./scenes/CosmicScene5Finale";

type Props = {
  orientation: "horizontal" | "vertical";
};

export const CosmicClashVideo: React.FC<Props> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const isVertical = orientation === "vertical";

  return (
    <AbsoluteFill style={{ backgroundColor: "#050200" }}>
      {/* Persistent golden floating particles */}
      <AbsoluteFill>
        {Array.from({ length: 30 }).map((_, i) => {
          const x = ((i * 137.5) % 100);
          const baseY = ((i * 73.7) % 100);
          const speed = 0.06 + (i % 7) * 0.02;
          const y = (baseY + frame * speed) % 130 - 15;
          const size = 1 + (i % 4) * 0.5;
          const opacity = interpolate(
            Math.sin(frame * 0.015 + i * 0.7),
            [-1, 1],
            [0.02, 0.2]
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
                backgroundColor: `rgba(212, 175, 55, ${opacity})`,
              }}
            />
          );
        })}
      </AbsoluteFill>

      {/* Scene transitions - all smooth fades like lopezzyent */}
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={150}>
          <CosmicScene1Emerge isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={140}>
          <CosmicScene2WaxHero isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={140}>
          <CosmicScene3FrizzHero isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={150}>
          <CosmicScene4DualOrbit isVertical={isVertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={200}>
          <CosmicScene5Finale isVertical={isVertical} />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      {/* Persistent vignette */}
      <AbsoluteFill style={{
        background: "radial-gradient(ellipse at center, transparent 30%, rgba(5, 2, 0, 0.6) 100%)",
        pointerEvents: "none",
      }} />
    </AbsoluteFill>
  );
};
