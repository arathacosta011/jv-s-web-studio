import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

// Scene 5: Final hero - products settle into power pose, minimal branding
export const CosmicScene5Finale: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // BG
  const bgScale = interpolate(frame, [0, 200], [1.12, 1.0], { extrapolateRight: "clamp" });
  const bgBrightness = interpolate(frame, [0, 40], [0.2, 0.6], { extrapolateRight: "clamp" });

  // Products settle into final position
  const waxSpring = spring({ frame: frame - 10, fps, config: { damping: 18, stiffness: 50 } });
  const frizzSpring = spring({ frame: frame - 20, fps, config: { damping: 18, stiffness: 50 } });

  // Final position: side by side, slightly tilted, floating
  const waxX = isVertical ? -50 : -160;
  const frizzX = isVertical ? 50 : 160;
  const waxRotate = -8;
  const frizzRotate = 5;

  const breathe = Math.sin(frame * 0.015) * 4;

  // Golden glow pulse
  const goldGlow = interpolate(Math.sin(frame * 0.025), [-1, 1], [0.06, 0.18]);

  // End fade
  const endFade = interpolate(frame, [170, 200], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Lens flare crescendo
  const finalFlareOpacity = interpolate(frame, [60, 100], [0, 0.06], { extrapolateRight: "clamp" });
  const finalFlareX = interpolate(frame, [60, 200], [20, 80]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#050200", opacity: endFade }}>
      {/* Cosmic BG */}
      <AbsoluteFill style={{ transform: `scale(${bgScale})`, filter: `brightness(${bgBrightness})` }}>
        <Img src={staticFile("images/cosmic-bg-1.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Warm ambient */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at 50% 55%, rgba(212, 175, 55, ${goldGlow}) 0%, transparent 50%)`,
      }} />

      {/* Wax final */}
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center",
        opacity: waxSpring,
        transform: `translateX(${waxX}px) translateY(${breathe + interpolate(waxSpring, [0, 1], [60, 0])}px) rotate(${waxRotate}deg) scale(${interpolate(waxSpring, [0, 1], [0.6, 1])})`,
      }}>
        <Img src={staticFile("images/wax-cutout.png")} style={{
          height: isVertical ? "38%" : "55%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 55px rgba(212, 175, 55, 0.5)) drop-shadow(0 25px 50px rgba(0,0,0,0.8))`,
        }} />
      </AbsoluteFill>

      {/* Anti-frizz final */}
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center",
        opacity: frizzSpring,
        transform: `translateX(${frizzX}px) translateY(${-breathe + interpolate(frizzSpring, [0, 1], [60, 0])}px) rotate(${frizzRotate}deg) scale(${interpolate(frizzSpring, [0, 1], [0.6, 1])})`,
      }}>
        <Img src={staticFile("images/antifrizz-cutout.png")} style={{
          height: isVertical ? "42%" : "58%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 55px rgba(128, 0, 255, 0.4)) drop-shadow(0 25px 50px rgba(0,0,0,0.8))`,
        }} />
      </AbsoluteFill>

      {/* Final lens flare */}
      <AbsoluteFill style={{
        background: `linear-gradient(90deg, transparent ${finalFlareX - 2}%, rgba(255, 240, 200, ${finalFlareOpacity}) ${finalFlareX}%, transparent ${finalFlareX + 2}%)`,
        pointerEvents: "none",
      }} />
    </AbsoluteFill>
  );
};
