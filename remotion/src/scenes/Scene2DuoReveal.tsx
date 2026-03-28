import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene2DuoReveal: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Image reveal
  const brightness = interpolate(frame, [0, 45], [0.2, 1.0], { extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, 110], [1.08, 1.0], { extrapolateRight: "clamp" });

  // Glow pulse
  const glowOpacity = interpolate(Math.sin(frame * 0.04), [-1, 1], [0.12, 0.3]);

  // Text
  const line1 = spring({ frame: frame - 30, fps, config: { damping: 20 } });
  const line2 = spring({ frame: frame - 45, fps, config: { damping: 18 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      {/* Ambient glow */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 55%, rgba(128, 0, 255, ${glowOpacity}) 0%, transparent 50%)`,
        }}
      />

      {/* Product image */}
      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
          filter: `brightness(${brightness})`,
        }}
      >
        <Img
          src={staticFile("images/spray-pomade-duo.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Overlay */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          padding: isVertical ? "0 40px 240px" : "0 0 80px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 13 : 11,
              letterSpacing: "0.4em",
              color: "rgba(180, 120, 255, 0.7)",
              textTransform: "uppercase",
              marginBottom: 14,
              opacity: line1,
              transform: `translateY(${interpolate(line1, [0, 1], [15, 0])}px)`,
            }}
          >
            Texture & Hold
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 50 : 52,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              opacity: line2,
              transform: `scale(${interpolate(line2, [0, 1], [0.9, 1])})`,
            }}
          >
            THE DUO
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
