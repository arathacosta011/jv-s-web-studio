import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene1AntiFrizzMacro: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Slow cinematic zoom in
  const scale = interpolate(frame, [0, 130], [1.0, 1.15], { extrapolateRight: "clamp" });
  const opacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" });

  // Gentle drift
  const panX = interpolate(frame, [0, 130], [-1, 2]);
  const panY = interpolate(frame, [0, 130], [1, -1]);

  // Gold light sweep
  const sweepX = interpolate(frame, [20, 100], [-120, 220]);

  // Text animations
  const tagSpring = spring({ frame: frame - 45, fps, config: { damping: 18 } });
  const titleSpring = spring({ frame: frame - 60, fps, config: { damping: 15 } });
  const subtitleSpring = spring({ frame: frame - 75, fps, config: { damping: 15 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0604" }}>
      <AbsoluteFill style={{ opacity, transform: `scale(${scale}) translate(${panX}%, ${panY}%)` }}>
        <Img
          src={staticFile("images/antifrizz-hero-macro.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Gold light sweep */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(105deg, transparent ${sweepX - 25}%, rgba(212, 175, 55, 0.08) ${sweepX}%, transparent ${sweepX + 25}%)`,
          pointerEvents: "none",
        }}
      />

      {/* Bottom gradient for text */}
      <AbsoluteFill
        style={{
          background: isVertical
            ? "linear-gradient(to top, rgba(10,6,4,0.95) 0%, transparent 50%)"
            : "linear-gradient(to right, rgba(10,6,4,0.92) 0%, transparent 55%)",
        }}
      />

      {/* Text overlay */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: isVertical ? "center" : "flex-start",
          padding: isVertical ? "0 50px 220px" : "0 0 90px 110px",
        }}
      >
        <div style={{ textAlign: isVertical ? "center" : "left" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 12 : 11,
              letterSpacing: "0.5em",
              color: "rgba(212, 175, 55, 0.85)",
              textTransform: "uppercase",
              marginBottom: 16,
              opacity: tagSpring,
              transform: `translateY(${interpolate(tagSpring, [0, 1], [20, 0])}px)`,
            }}
          >
            JV HEEM Premium Collection
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 54 : 50,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              opacity: titleSpring,
              transform: `translateY(${interpolate(titleSpring, [0, 1], [25, 0])}px)`,
            }}
          >
            ANTI-FRIZZ
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 54 : 50,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginTop: 2,
              opacity: titleSpring,
              transform: `translateY(${interpolate(titleSpring, [0, 1], [25, 0])}px)`,
              background: "linear-gradient(135deg, #d4af37, #f5d680)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SERUM
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 14 : 13,
              letterSpacing: "0.15em",
              color: "rgba(255, 255, 255, 0.5)",
              marginTop: 18,
              opacity: subtitleSpring,
              transform: `translateY(${interpolate(subtitleSpring, [0, 1], [15, 0])}px)`,
            }}
          >
            LUXURY HAIR CARE
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
