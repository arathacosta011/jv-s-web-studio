import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const ClashScene3AntiFrizzSilk: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Serum texture bg — slow vertical pan
  const serumPanY = interpolate(frame, [0, 140], [2, -2]);
  const serumScale = interpolate(frame, [0, 140], [1.1, 1.0], { extrapolateRight: "clamp" });
  const serumFade = interpolate(frame, [0, 25], [0, 0.35], { extrapolateRight: "clamp" });

  // Product — cinematic float
  const productSpring = spring({ frame: frame - 10, fps, config: { damping: 16, stiffness: 50 } });
  const productFloat = Math.sin(frame * 0.018) * 4;
  const productRotate = interpolate(frame, [10, 140], [2, -2], { extrapolateRight: "clamp" });
  const productScale = interpolate(frame, [10, 130], [0.95, 1.06], { extrapolateRight: "clamp" });

  // Warm amber glow
  const glowPulse = interpolate(Math.sin(frame * 0.035), [-1, 1], [0.2, 0.45]);

  // Light streak
  const streakX = interpolate(frame, [15, 110], [-80, 230]);

  // Text
  const tagSpring = spring({ frame: frame - 48, fps, config: { damping: 18 } });
  const titleSpring = spring({ frame: frame - 58, fps, config: { damping: 12 } });
  const line2Spring = spring({ frame: frame - 72, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0806" }}>
      {/* Serum texture bg */}
      <AbsoluteFill style={{
        opacity: serumFade,
        transform: `scale(${serumScale}) translateY(${serumPanY}%)`,
      }}>
        <Img src={staticFile("images/clash-serum-texture.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Dark overlay */}
      <AbsoluteFill style={{
        background: "radial-gradient(ellipse at center, rgba(10,8,6,0.25) 0%, rgba(10,8,6,0.85) 70%)",
      }} />

      {/* Warm amber glow behind product */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at ${isVertical ? "50% 35%" : "62% 50%"}, rgba(180, 140, 40, ${glowPulse * 0.14}) 0%, transparent 45%)`,
      }} />

      {/* Light streak */}
      <AbsoluteFill style={{
        background: `linear-gradient(95deg, transparent ${streakX - 10}%, rgba(245, 215, 130, 0.04) ${streakX}%, transparent ${streakX + 10}%)`,
        pointerEvents: "none",
      }} />

      {/* Anti-frizz product */}
      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: isVertical ? "center" : "flex-end",
        padding: isVertical ? "0" : "0 12% 0 0",
        transform: `scale(${interpolate(productSpring, [0, 1], [0.6, productScale])}) translateY(${productFloat}px) rotate(${productRotate}deg)`,
        opacity: interpolate(productSpring, [0, 0.3], [0, 1], { extrapolateRight: "clamp" }),
      }}>
        <Img src={staticFile("images/antifrizz-cutout.png")} style={{
          height: isVertical ? "52%" : "72%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 50px rgba(212, 175, 55, ${glowPulse * 0.7})) drop-shadow(0 25px 50px rgba(0,0,0,0.85))`,
        }} />
      </AbsoluteFill>

      {/* Gradient for text */}
      <AbsoluteFill style={{
        background: isVertical
          ? "linear-gradient(to top, rgba(10,8,6,0.97) 0%, transparent 40%)"
          : "linear-gradient(to right, rgba(10,8,6,0.95) 0%, transparent 45%)",
      }} />

      {/* Text */}
      <AbsoluteFill style={{
        justifyContent: isVertical ? "flex-end" : "center",
        alignItems: isVertical ? "center" : "flex-start",
        padding: isVertical ? "0 50px 150px" : "0 0 0 90px",
      }}>
        <div style={{ textAlign: isVertical ? "center" : "left" }}>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 12 : 11,
            letterSpacing: "0.5em", color: "rgba(212, 175, 55, 0.85)",
            textTransform: "uppercase", marginBottom: 14,
            opacity: tagSpring,
            transform: `translateY(${interpolate(tagSpring, [0, 1], [12, 0])}px)`,
          }}>
            Smooth · Glossy · Refined
          </div>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 48 : 58, fontWeight: 900,
            letterSpacing: "-0.03em", lineHeight: 0.95,
            opacity: titleSpring,
            transform: `translateY(${interpolate(titleSpring, [0, 1], [20, 0])}px)`,
            background: "linear-gradient(135deg, #d4af37, #f5e6a3, #d4af37)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            ANTI-FRIZZ
          </div>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 15 : 13,
            letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)",
            marginTop: 18, fontWeight: 300,
            opacity: line2Spring,
            transform: `translateY(${interpolate(line2Spring, [0, 1], [10, 0])}px)`,
          }}>
            CURL ENHANCER · CONTROLS FRIZZ · SHINE
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
