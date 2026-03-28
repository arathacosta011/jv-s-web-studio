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

  // Slow fade from total darkness
  const bgBrightness = interpolate(frame, [0, 80], [0, 0.5], { extrapolateRight: "clamp" });
  const bgScale = interpolate(frame, [0, 150], [1.15, 1.0], { extrapolateRight: "clamp" });

  // Gold highlight tracing edges in darkness
  const highlightSweep1 = interpolate(frame, [5, 60], [-50, 150]);
  const highlightSweep2 = interpolate(frame, [15, 70], [150, -50]);

  // Wax emerges from left darkness
  const waxOpacity = interpolate(frame, [25, 60], [0, 1], { extrapolateRight: "clamp" });
  const waxX = interpolate(frame, [25, 80], [-250, isVertical ? -65 : -180], { extrapolateRight: "clamp" });
  const waxScale = spring({ frame: frame - 25, fps, config: { damping: 16, stiffness: 60 } });
  const waxFloat = Math.sin(frame * 0.02) * 4;

  // Anti-frizz emerges from right darkness
  const frizzOpacity = interpolate(frame, [40, 75], [0, 1], { extrapolateRight: "clamp" });
  const frizzX = interpolate(frame, [40, 95], [250, isVertical ? 65 : 180], { extrapolateRight: "clamp" });
  const frizzScale = spring({ frame: frame - 40, fps, config: { damping: 16, stiffness: 60 } });
  const frizzFloat = Math.sin(frame * 0.02 + Math.PI) * 4;

  // Center golden energy builds
  const energyOpacity = interpolate(frame, [65, 110], [0, 0.5], { extrapolateRight: "clamp" });
  const energyScale = interpolate(frame, [65, 140], [0.2, 2.0], { extrapolateRight: "clamp" });

  // Gold rim light pulse
  const goldPulse = interpolate(Math.sin(frame * 0.035), [-1, 1], [0.15, 0.4]);

  // Text
  const titleSpring = spring({ frame: frame - 95, fps, config: { damping: 14 } });
  const subSpring = spring({ frame: frame - 110, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0806" }}>
      {/* Studio BG */}
      <AbsoluteFill style={{ transform: `scale(${bgScale})`, filter: `brightness(${bgBrightness})` }}>
        <Img src={staticFile("images/clash-bg-studio.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Warm gold ambient glow */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at 50% 55%, rgba(212, 175, 55, ${goldPulse * 0.12}) 0%, transparent 50%)`,
      }} />

      {/* Gold light sweep traces */}
      <AbsoluteFill style={{
        background: `linear-gradient(105deg, transparent ${highlightSweep1 - 8}%, rgba(212, 175, 55, 0.06) ${highlightSweep1}%, transparent ${highlightSweep1 + 8}%)`,
        pointerEvents: "none",
      }} />
      <AbsoluteFill style={{
        background: `linear-gradient(75deg, transparent ${highlightSweep2 - 6}%, rgba(245, 215, 130, 0.04) ${highlightSweep2}%, transparent ${highlightSweep2 + 6}%)`,
        pointerEvents: "none",
      }} />

      {/* Center golden energy */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, rgba(180,140,40,0.06) 40%, transparent 70%)",
          opacity: energyOpacity,
          transform: `scale(${energyScale})`,
        }} />
      </AbsoluteFill>

      {/* Wax product — left */}
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center",
        opacity: waxOpacity,
        transform: `translateX(${waxX}px) scale(${interpolate(waxScale, [0, 1], [0.5, 1])}) translateY(${waxFloat}px)`,
      }}>
        <Img src={staticFile("images/wax-cutout.png")} style={{
          height: isVertical ? "35%" : "55%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 40px rgba(212, 175, 55, ${goldPulse})) drop-shadow(0 20px 50px rgba(0,0,0,0.9))`,
        }} />
      </AbsoluteFill>

      {/* Anti-frizz product — right */}
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center",
        opacity: frizzOpacity,
        transform: `translateX(${frizzX}px) scale(${interpolate(frizzScale, [0, 1], [0.5, 1])}) translateY(${frizzFloat}px)`,
      }}>
        <Img src={staticFile("images/antifrizz-cutout.png")} style={{
          height: isVertical ? "40%" : "60%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 40px rgba(212, 175, 55, ${goldPulse * 0.8})) drop-shadow(0 20px 50px rgba(0,0,0,0.9))`,
        }} />
      </AbsoluteFill>

      {/* Bottom gradient */}
      <AbsoluteFill style={{ background: "linear-gradient(to top, rgba(10,8,6,0.97) 0%, transparent 35%)" }} />

      {/* Text */}
      <AbsoluteFill style={{
        justifyContent: "flex-end", alignItems: "center",
        padding: isVertical ? "0 40px 180px" : "0 0 70px",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 52 : 60, fontWeight: 900,
            letterSpacing: "-0.02em", lineHeight: 1.0,
            opacity: titleSpring,
            transform: `scale(${interpolate(titleSpring, [0, 1], [0.8, 1])})`,
            background: "linear-gradient(180deg, #ffffff, #e8dcc8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            TWO FORCES
          </div>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 12 : 11,
            letterSpacing: "0.5em", color: "rgba(212, 175, 55, 0.85)",
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
