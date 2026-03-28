import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene4CareProducts: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Reveal from dark
  const brightness = interpolate(frame, [0, 50], [0.15, 1.0], { extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, 110], [1.06, 1.0], { extrapolateRight: "clamp" });

  // Glow
  const glowOpacity = interpolate(Math.sin(frame * 0.05), [-1, 1], [0.1, 0.28]);

  // Text
  const line1 = spring({ frame: frame - 35, fps, config: { damping: 20 } });
  const line2 = spring({ frame: frame - 50, fps, config: { damping: 16 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(128, 0, 255, ${glowOpacity}) 0%, transparent 55%)`,
        }}
      />

      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
          filter: `brightness(${brightness})`,
        }}
      >
        <Img
          src={staticFile("images/antifrizz-aftershave.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Bottom overlay */}
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
            Hydrate & Finish
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 46 : 48,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              opacity: line2,
              transform: `scale(${interpolate(line2, [0, 1], [0.92, 1])})`,
            }}
          >
            THE ESSENTIALS
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
