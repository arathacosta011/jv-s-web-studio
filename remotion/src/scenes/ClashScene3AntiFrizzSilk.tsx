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

  // Serum texture bg
  const serumPanY = interpolate(frame, [0, 140], [3, -3]);
  const serumScale = interpolate(frame, [0, 140], [1.12, 1.0], { extrapolateRight: "clamp" });
  const serumFade = interpolate(frame, [0, 20], [0, 0.3], { extrapolateRight: "clamp" });

  // Product
  const productSpring = spring({ frame: frame - 12, fps, config: { damping: 14, stiffness: 65 } });
  const productFloat = Math.sin(frame * 0.022) * 5;
  const productRotate = interpolate(frame, [12, 140], [3, -3], { extrapolateRight: "clamp" });

  // Purple glow
  const glowPulse = interpolate(Math.sin(frame * 0.04), [-1, 1], [0.2, 0.45]);

  // Light streak
  const streakX = interpolate(frame, [20, 110], [-80, 220]);

  // Text
  const tagSpring = spring({ frame: frame - 48, fps, config: { damping: 18 } });
  const titleSpring = spring({ frame: frame - 58, fps, config: { damping: 12 } });
  const line2Spring = spring({ frame: frame - 72, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      {/* Serum texture bg */}
      <AbsoluteFill style={{
        opacity: serumFade,
        transform: `scale(${serumScale}) translateY(${serumPanY}%)`,
      }}>
        <Img src={staticFile("images/clash-serum-texture.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Purple ambient glow */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at ${isVertical ? "50% 35%" : "60% 50%"}, rgba(128, 0, 255, ${glowPulse * 0.18}) 0%, transparent 50%)`,
      }} />

      {/* Light streak */}
      <AbsoluteFill style={{
        background: `linear-gradient(95deg, transparent ${streakX - 12}%, rgba(168, 85, 247, 0.04) ${streakX}%, transparent ${streakX + 12}%)`,
        pointerEvents: "none",
      }} />

      {/* Anti-frizz product */}
      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: isVertical ? "center" : "flex-end",
        padding: isVertical ? "0" : "0 12% 0 0",
        transform: `scale(${interpolate(productSpring, [0, 1], [0.7, 1])}) translateY(${productFloat}px) rotate(${productRotate}deg)`,
        opacity: interpolate(productSpring, [0, 0.3], [0, 1], { extrapolateRight: "clamp" }),
      }}>
        <Img src={staticFile("images/antifrizz-cutout.png")} style={{
          height: isVertical ? "52%" : "72%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 55px rgba(128, 0, 255, ${glowPulse})) drop-shadow(0 25px 50px rgba(0,0,0,0.8))`,
        }} />
      </AbsoluteFill>

      {/* Gradient for text */}
      <AbsoluteFill style={{
        background: isVertical
          ? "linear-gradient(to top, rgba(5,2,16,0.95) 0%, transparent 40%)"
          : "linear-gradient(to right, rgba(5,2,16,0.93) 0%, transparent 45%)",
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
            letterSpacing: "0.5em", color: "rgba(168, 85, 247, 0.85)",
            textTransform: "uppercase", marginBottom: 14,
            opacity: tagSpring,
            transform: `translateY(${interpolate(tagSpring, [0, 1], [12, 0])}px)`,
          }}>
            Smooth • Glossy • Refined
          </div>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 48 : 58, fontWeight: 900,
            letterSpacing: "-0.03em", lineHeight: 0.95,
            opacity: titleSpring,
            transform: `translateY(${interpolate(titleSpring, [0, 1], [20, 0])}px)`,
            background: "linear-gradient(135deg, #a855f7, #d8b4fe, #a855f7)",
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
