import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const ClashScene1DarkReveal: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgBrightness = interpolate(frame, [0, 70], [0, 0.6], { extrapolateRight: "clamp" });
  const bgScale = interpolate(frame, [0, 150], [1.2, 1.0], { extrapolateRight: "clamp" });

  // Wax enters from left with dramatic delay
  const waxOpacity = interpolate(frame, [20, 55], [0, 1], { extrapolateRight: "clamp" });
  const waxX = interpolate(frame, [20, 75], [-300, isVertical ? -70 : -200], { extrapolateRight: "clamp" });
  const waxScale = spring({ frame: frame - 20, fps, config: { damping: 14, stiffness: 80 } });
  const waxFloat = Math.sin(frame * 0.025) * 5;

  // Anti-frizz enters from right
  const frizzOpacity = interpolate(frame, [35, 70], [0, 1], { extrapolateRight: "clamp" });
  const frizzX = interpolate(frame, [35, 90], [300, isVertical ? 70 : 200], { extrapolateRight: "clamp" });
  const frizzScale = spring({ frame: frame - 35, fps, config: { damping: 14, stiffness: 80 } });
  const frizzFloat = Math.sin(frame * 0.025 + Math.PI) * 5;

  // Center energy builds
  const energyOpacity = interpolate(frame, [60, 100], [0, 0.6], { extrapolateRight: "clamp" });
  const energyScale = interpolate(frame, [60, 140], [0.3, 1.8], { extrapolateRight: "clamp" });

  // Gold light sweep
  const sweepX = interpolate(frame, [30, 120], [-120, 250]);

  // Text
  const titleSpring = spring({ frame: frame - 90, fps, config: { damping: 12 } });
  const subSpring = spring({ frame: frame - 105, fps, config: { damping: 18 } });

  // Dual glow pulses
  const goldPulse = interpolate(Math.sin(frame * 0.04), [-1, 1], [0.08, 0.2]);
  const purplePulse = interpolate(Math.sin(frame * 0.04 + 2), [-1, 1], [0.08, 0.2]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#030108" }}>
      <AbsoluteFill style={{ transform: `scale(${bgScale})`, filter: `brightness(${bgBrightness})` }}>
        <Img src={staticFile("images/clash-bg-studio.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Dual ambient glows */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at 30% 50%, rgba(50, 100, 220, ${goldPulse}) 0%, transparent 40%), radial-gradient(ellipse at 70% 50%, rgba(128, 0, 255, ${purplePulse}) 0%, transparent 40%)`,
      }} />

      {/* Gold sweep */}
      <AbsoluteFill style={{
        background: `linear-gradient(105deg, transparent ${sweepX - 15}%, rgba(212, 175, 55, 0.04) ${sweepX}%, transparent ${sweepX + 15}%)`,
        pointerEvents: "none",
      }} />

      {/* Center energy buildup */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{
          width: 250, height: 250, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(128,0,255,0.1) 50%, transparent 70%)",
          opacity: energyOpacity,
          transform: `scale(${energyScale})`,
        }} />
      </AbsoluteFill>

      {/* Wax product - left */}
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center",
        opacity: waxOpacity,
        transform: `translateX(${waxX}px) scale(${interpolate(waxScale, [0, 1], [0.6, 1])}) translateY(${waxFloat}px)`,
      }}>
        <Img src={staticFile("images/wax-cutout.png")} style={{
          height: isVertical ? "35%" : "55%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 50px rgba(50, 100, 220, 0.5)) drop-shadow(0 20px 40px rgba(0,0,0,0.8))`,
        }} />
      </AbsoluteFill>

      {/* Anti-frizz product - right */}
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center",
        opacity: frizzOpacity,
        transform: `translateX(${frizzX}px) scale(${interpolate(frizzScale, [0, 1], [0.6, 1])}) translateY(${frizzFloat}px)`,
      }}>
        <Img src={staticFile("images/antifrizz-cutout.png")} style={{
          height: isVertical ? "40%" : "60%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 50px rgba(128, 0, 255, 0.5)) drop-shadow(0 20px 40px rgba(0,0,0,0.8))`,
        }} />
      </AbsoluteFill>

      {/* Bottom gradient */}
      <AbsoluteFill style={{ background: "linear-gradient(to top, rgba(3,1,8,0.95) 0%, transparent 35%)" }} />

      {/* Text */}
      <AbsoluteFill style={{
        justifyContent: "flex-end", alignItems: "center",
        padding: isVertical ? "0 40px 180px" : "0 0 70px",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 52 : 60, fontWeight: 900,
            color: "white", letterSpacing: "-0.02em", lineHeight: 1.0,
            opacity: titleSpring,
            transform: `scale(${interpolate(titleSpring, [0, 1], [0.8, 1])})`,
          }}>
            TWO FORCES
          </div>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 12 : 11,
            letterSpacing: "0.5em", color: "rgba(212, 175, 55, 0.8)",
            textTransform: "uppercase", marginTop: 14,
            opacity: subSpring,
            transform: `translateY(${interpolate(subSpring, [0, 1], [15, 0])}px)`,
          }}>
            One Premium Collection
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
