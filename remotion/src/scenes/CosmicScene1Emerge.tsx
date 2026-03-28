import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

// Scene 1: Both products emerge from darkness floating in cosmic space
export const CosmicScene1Emerge: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // BG slow zoom
  const bgScale = interpolate(frame, [0, 150], [1.2, 1.0], { extrapolateRight: "clamp" });
  const bgBrightness = interpolate(frame, [0, 50], [0.1, 0.8], { extrapolateRight: "clamp" });

  // Wax floats in from left, tilted
  const waxOpacity = interpolate(frame, [15, 50], [0, 1], { extrapolateRight: "clamp" });
  const waxX = interpolate(frame, [15, 80], [-400, isVertical ? -20 : -120], { extrapolateRight: "clamp" });
  const waxY = interpolate(frame, [15, 80], [100, isVertical ? -80 : 20], { extrapolateRight: "clamp" });
  const waxRotate = interpolate(frame, [15, 150], [-25, -8], { extrapolateRight: "clamp" });
  const waxScale = spring({ frame: frame - 15, fps, config: { damping: 18, stiffness: 50 } });
  const waxFloat = Math.sin(frame * 0.02) * 6;

  // Anti-frizz floats in from right
  const frizzOpacity = interpolate(frame, [30, 65], [0, 1], { extrapolateRight: "clamp" });
  const frizzX = interpolate(frame, [30, 95], [400, isVertical ? 20 : 120], { extrapolateRight: "clamp" });
  const frizzY = interpolate(frame, [30, 95], [-100, isVertical ? 60 : -30], { extrapolateRight: "clamp" });
  const frizzRotate = interpolate(frame, [30, 150], [20, 5], { extrapolateRight: "clamp" });
  const frizzScale = spring({ frame: frame - 30, fps, config: { damping: 18, stiffness: 50 } });
  const frizzFloat = Math.sin(frame * 0.02 + Math.PI) * 6;

  // Lens flare sweep
  const flareX = interpolate(frame, [40, 120], [-30, 130]);
  const flareOpacity = interpolate(frame, [40, 70, 100, 120], [0, 0.15, 0.15, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050200" }}>
      {/* Cosmic BG */}
      <AbsoluteFill style={{ transform: `scale(${bgScale})`, filter: `brightness(${bgBrightness})` }}>
        <Img src={staticFile("images/cosmic-bg-1.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Warm ambient glow */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at 50% 60%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)`,
      }} />

      {/* Wax product floating */}
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center",
        opacity: waxOpacity,
        transform: `translateX(${waxX}px) translateY(${waxY + waxFloat}px) rotate(${waxRotate}deg) scale(${interpolate(waxScale, [0, 1], [0.5, 1])})`,
      }}>
        <Img src={staticFile("images/wax-cutout.png")} style={{
          height: isVertical ? "32%" : "50%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 50px rgba(212, 175, 55, 0.4)) drop-shadow(0 20px 40px rgba(0,0,0,0.8))`,
        }} />
      </AbsoluteFill>

      {/* Anti-frizz product floating */}
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center",
        opacity: frizzOpacity,
        transform: `translateX(${frizzX}px) translateY(${frizzY + frizzFloat}px) rotate(${frizzRotate}deg) scale(${interpolate(frizzScale, [0, 1], [0.5, 1])})`,
      }}>
        <Img src={staticFile("images/antifrizz-cutout.png")} style={{
          height: isVertical ? "38%" : "55%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 50px rgba(168, 85, 247, 0.35)) drop-shadow(0 20px 40px rgba(0,0,0,0.8))`,
        }} />
      </AbsoluteFill>

      {/* Lens flare */}
      <AbsoluteFill style={{
        background: `linear-gradient(90deg, transparent ${flareX - 3}%, rgba(255, 240, 200, ${flareOpacity}) ${flareX}%, transparent ${flareX + 3}%)`,
        pointerEvents: "none",
      }} />
    </AbsoluteFill>
  );
};
