import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

// Scene 4: Both products together, floating in cosmic orbit around each other
export const CosmicScene4DualOrbit: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // BG
  const bgScale = interpolate(frame, [0, 150], [1.1, 1.0], { extrapolateRight: "clamp" });
  const bgBrightness = interpolate(frame, [0, 30], [0.3, 0.7], { extrapolateRight: "clamp" });

  // Orbital motion - products circle each other gently
  const orbitAngle = interpolate(frame, [0, 150], [0, Math.PI * 0.6]);
  const orbitRadius = isVertical ? 120 : 200;

  const waxX = Math.cos(orbitAngle) * orbitRadius;
  const waxY = Math.sin(orbitAngle) * orbitRadius * 0.4; // elliptical
  const frizzX = Math.cos(orbitAngle + Math.PI) * orbitRadius;
  const frizzY = Math.sin(orbitAngle + Math.PI) * orbitRadius * 0.4;

  // Products scale in
  const waxSpring = spring({ frame: frame - 5, fps, config: { damping: 15 } });
  const frizzSpring = spring({ frame: frame - 15, fps, config: { damping: 15 } });

  // Individual floats
  const waxFloat = Math.sin(frame * 0.025) * 5;
  const frizzFloat = Math.sin(frame * 0.025 + 2) * 5;

  // Wax tilt
  const waxRotate = interpolate(frame, [0, 150], [-15, 10], { extrapolateRight: "clamp" });
  const frizzRotate = interpolate(frame, [0, 150], [12, -8], { extrapolateRight: "clamp" });

  // Center energy glow
  const centerGlow = interpolate(Math.sin(frame * 0.03), [-1, 1], [0.05, 0.15]);

  // Lens flare
  const flarePos = 50 + Math.sin(frame * 0.012) * 20;
  const flareOpacity = interpolate(Math.sin(frame * 0.025), [-1, 1], [0.03, 0.1]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#050200" }}>
      {/* Cosmic BG */}
      <AbsoluteFill style={{ transform: `scale(${bgScale})`, filter: `brightness(${bgBrightness})` }}>
        <Img src={staticFile("images/cosmic-bg-3.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Center energy */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{
          width: 400, height: 400, borderRadius: "50%",
          background: `radial-gradient(circle, rgba(212,175,55,${centerGlow}) 0%, rgba(128,0,255,${centerGlow * 0.5}) 40%, transparent 70%)`,
        }} />
      </AbsoluteFill>

      {/* Wax orbiting */}
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center",
        opacity: waxSpring,
        transform: `translateX(${waxX}px) translateY(${waxY + waxFloat}px) rotate(${waxRotate}deg) scale(${interpolate(waxSpring, [0, 1], [0.5, 1])})`,
      }}>
        <Img src={staticFile("images/wax-cutout.png")} style={{
          height: isVertical ? "35%" : "50%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 50px rgba(212, 175, 55, 0.45)) drop-shadow(0 20px 40px rgba(0,0,0,0.8))`,
        }} />
      </AbsoluteFill>

      {/* Anti-frizz orbiting */}
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center",
        opacity: frizzSpring,
        transform: `translateX(${frizzX}px) translateY(${frizzY + frizzFloat}px) rotate(${frizzRotate}deg) scale(${interpolate(frizzSpring, [0, 1], [0.5, 1])})`,
      }}>
        <Img src={staticFile("images/antifrizz-cutout.png")} style={{
          height: isVertical ? "40%" : "55%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 50px rgba(128, 0, 255, 0.4)) drop-shadow(0 20px 40px rgba(0,0,0,0.8))`,
        }} />
      </AbsoluteFill>

      {/* Lens flare */}
      <AbsoluteFill style={{
        background: `linear-gradient(180deg, transparent ${flarePos - 1}%, rgba(255, 240, 200, ${flareOpacity}) ${flarePos}%, transparent ${flarePos + 1}%)`,
        pointerEvents: "none",
      }} />
    </AbsoluteFill>
  );
};
