import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

// Scene 2: Wax hero - dramatic floating close-up like lopezzyent concealer jar
export const CosmicScene2WaxHero: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // BG drift
  const bgPanX = interpolate(frame, [0, 140], [3, -3]);
  const bgScale = interpolate(frame, [0, 140], [1.1, 1.0], { extrapolateRight: "clamp" });

  // Wax product - large, floating, slowly rotating
  const productSpring = spring({ frame: frame - 5, fps, config: { damping: 20, stiffness: 40 } });
  const productFloat = Math.sin(frame * 0.018) * 10;
  const productRotate = interpolate(frame, [0, 140], [-12, 8], { extrapolateRight: "clamp" });
  const productDriftX = interpolate(frame, [0, 140], [-15, 15], { extrapolateRight: "clamp" });

  // Golden rim glow pulse
  const rimPulse = interpolate(Math.sin(frame * 0.04), [-1, 1], [0.3, 0.6]);

  // Horizontal lens flare streak
  const flareY = 50 + Math.sin(frame * 0.015) * 5;
  const flareOpacity = interpolate(frame, [20, 40], [0, 0.08], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050200" }}>
      {/* Cosmic BG */}
      <AbsoluteFill style={{ transform: `scale(${bgScale}) translateX(${bgPanX}%)` }}>
        <Img src={staticFile("images/cosmic-bg-2.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Warm glow behind product */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, ${rimPulse * 0.12}) 0%, transparent 45%)`,
      }} />

      {/* Wax product - dramatic floating */}
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center",
        transform: `scale(${interpolate(productSpring, [0, 1], [0.6, 1])}) translateY(${productFloat}px) translateX(${productDriftX}px) rotate(${productRotate}deg)`,
        opacity: interpolate(productSpring, [0, 0.2], [0, 1], { extrapolateRight: "clamp" }),
      }}>
        <Img src={staticFile("images/wax-cutout.png")} style={{
          height: isVertical ? "50%" : "70%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 70px rgba(212, 175, 55, ${rimPulse})) drop-shadow(0 30px 60px rgba(0,0,0,0.9))`,
        }} />
      </AbsoluteFill>

      {/* Horizontal lens flare */}
      <AbsoluteFill style={{
        background: `linear-gradient(180deg, transparent ${flareY - 1}%, rgba(200, 220, 255, ${flareOpacity}) ${flareY}%, transparent ${flareY + 1}%)`,
        pointerEvents: "none",
      }} />
    </AbsoluteFill>
  );
};
