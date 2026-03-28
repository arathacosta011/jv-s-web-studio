import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene1Macro: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Slow zoom into blade macro
  const scale = interpolate(frame, [0, 120], [1.3, 1.0], { extrapolateRight: "clamp" });
  const opacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" });

  // Subtle pan
  const panX = interpolate(frame, [0, 120], [5, -3]);
  const panY = interpolate(frame, [0, 120], [3, -2]);

  // Text reveal
  const textOpacity = interpolate(frame, [40, 65], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const textY = interpolate(frame, [40, 65], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Light sweep
  const sweepX = interpolate(frame, [10, 80], [-100, 200]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      {/* Image with zoom + pan */}
      <AbsoluteFill style={{ opacity, transform: `scale(${scale}) translate(${panX}%, ${panY}%)` }}>
        <Img
          src={staticFile("images/blade-macro.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AbsoluteFill>

      {/* Light sweep effect */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(105deg, transparent ${sweepX - 20}%, rgba(180, 120, 255, 0.08) ${sweepX}%, transparent ${sweepX + 20}%)`,
          pointerEvents: "none",
        }}
      />

      {/* Bottom text */}
      <AbsoluteFill
        style={{
          justifyContent: isVertical ? "flex-end" : "flex-end",
          alignItems: isVertical ? "center" : "flex-start",
          padding: isVertical ? "0 60px 200px" : "0 0 80px 100px",
        }}
      >
        <div
          style={{
            opacity: textOpacity,
            transform: `translateY(${textY}px)`,
            textAlign: isVertical ? "center" : "left",
          }}
        >
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 14 : 12,
              letterSpacing: "0.35em",
              color: "rgba(180, 120, 255, 0.8)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Precision Engineered
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 48 : 42,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            THE BLADE
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
