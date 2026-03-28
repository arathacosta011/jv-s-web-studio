import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene2Silhouette: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Silhouette slowly brightens
  const brightness = interpolate(frame, [0, 60], [0.3, 1.0], { extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, 110], [1.05, 1.0], { extrapolateRight: "clamp" });

  // Glow pulse
  const glowOpacity = interpolate(Math.sin(frame * 0.05), [-1, 1], [0.15, 0.35]);

  // Text
  const textSpring = spring({ frame: frame - 35, fps, config: { damping: 20, stiffness: 150 } });
  const textOpacity = interpolate(textSpring, [0, 1], [0, 1]);
  const textScale = interpolate(textSpring, [0, 1], [0.9, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      {/* Purple glow behind product */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 55%, rgba(128, 0, 255, ${glowOpacity}) 0%, transparent 50%)`,
        }}
      />

      {/* Silhouette image */}
      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
          filter: `brightness(${brightness})`,
        }}
      >
        <Img
          src={staticFile("images/silhouette-reveal.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Text overlay */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          padding: isVertical ? "0 40px 250px" : "0 0 80px",
        }}
      >
        <div
          style={{
            opacity: textOpacity,
            transform: `scale(${textScale})`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 14 : 12,
              letterSpacing: "0.4em",
              color: "rgba(180, 120, 255, 0.7)",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            From the Darkness
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 56 : 52,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            REVEALED
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
