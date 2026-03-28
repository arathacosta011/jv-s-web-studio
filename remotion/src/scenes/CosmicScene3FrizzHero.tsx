import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

// Scene 3: Anti-Frizz hero - dramatic floating with purple cosmic energy
export const CosmicScene3FrizzHero: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // BG
  const bgPanX = interpolate(frame, [0, 140], [-2, 4]);
  const bgScale = interpolate(frame, [0, 140], [1.08, 1.0], { extrapolateRight: "clamp" });

  // Product
  const productSpring = spring({ frame: frame - 5, fps, config: { damping: 18, stiffness: 45 } });
  const productFloat = Math.sin(frame * 0.02) * 8;
  const productRotate = interpolate(frame, [0, 140], [10, -6], { extrapolateRight: "clamp" });
  const productDriftX = interpolate(frame, [0, 140], [20, -20], { extrapolateRight: "clamp" });

  // Purple rim glow
  const rimPulse = interpolate(Math.sin(frame * 0.038), [-1, 1], [0.25, 0.55]);

  // Lens flare from opposite side
  const flareX = interpolate(frame, [10, 100], [110, -10]);
  const flareOpacity = interpolate(frame, [10, 35, 80, 100], [0, 0.1, 0.1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#030108" }}>
      {/* Cosmic BG - same bg but tinted purple */}
      <AbsoluteFill style={{ transform: `scale(${bgScale}) translateX(${bgPanX}%)` }}>
        <Img src={staticFile("images/cosmic-bg-1.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "hue-rotate(260deg) brightness(0.7)" }} />
      </AbsoluteFill>

      {/* Purple glow behind product */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at 50% 50%, rgba(128, 0, 255, ${rimPulse * 0.15}) 0%, transparent 45%)`,
      }} />

      {/* Anti-frizz product */}
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center",
        transform: `scale(${interpolate(productSpring, [0, 1], [0.6, 1])}) translateY(${productFloat}px) translateX(${productDriftX}px) rotate(${productRotate}deg)`,
        opacity: interpolate(productSpring, [0, 0.2], [0, 1], { extrapolateRight: "clamp" }),
      }}>
        <Img src={staticFile("images/antifrizz-cutout.png")} style={{
          height: isVertical ? "55%" : "72%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 65px rgba(128, 0, 255, ${rimPulse})) drop-shadow(0 30px 60px rgba(0,0,0,0.9))`,
        }} />
      </AbsoluteFill>

      {/* Lens flare */}
      <AbsoluteFill style={{
        background: `linear-gradient(90deg, transparent ${flareX - 2}%, rgba(200, 180, 255, ${flareOpacity}) ${flareX}%, transparent ${flareX + 2}%)`,
        pointerEvents: "none",
      }} />
    </AbsoluteFill>
  );
};
