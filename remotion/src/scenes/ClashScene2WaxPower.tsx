import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const ClashScene2WaxPower: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Wax texture bg — macro pan
  const texturePanX = interpolate(frame, [0, 140], [-3, 3]);
  const textureScale = interpolate(frame, [0, 140], [1.15, 1.0], { extrapolateRight: "clamp" });
  const textureFade = interpolate(frame, [0, 30], [0, 0.4], { extrapolateRight: "clamp" });

  // Product hero — cinematic push-in
  const productSpring = spring({ frame: frame - 12, fps, config: { damping: 14, stiffness: 55 } });
  const productFloat = Math.sin(frame * 0.022) * 5;
  const productRotate = interpolate(frame, [12, 140], [-1.5, 1.5], { extrapolateRight: "clamp" });
  const productScale = interpolate(frame, [12, 130], [0.95, 1.08], { extrapolateRight: "clamp" });

  // Warm gold rim glow
  const rimPulse = interpolate(Math.sin(frame * 0.04), [-1, 1], [0.25, 0.5]);

  // Gold light sweep across product
  const sweepX = interpolate(frame, [20, 100], [-100, 220]);

  // Text
  const tagSpring = spring({ frame: frame - 50, fps, config: { damping: 18 } });
  const titleSpring = spring({ frame: frame - 60, fps, config: { damping: 12 } });
  const line2Spring = spring({ frame: frame - 72, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0806" }}>
      {/* Wax texture bg */}
      <AbsoluteFill style={{
        opacity: textureFade,
        transform: `scale(${textureScale}) translateX(${texturePanX}%)`,
      }}>
        <Img src={staticFile("images/clash-wax-texture.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Dark overlay */}
      <AbsoluteFill style={{
        background: "radial-gradient(ellipse at center, rgba(10,8,6,0.3) 0%, rgba(10,8,6,0.85) 70%)",
      }} />

      {/* Warm gold ambient glow behind product */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at ${isVertical ? "50% 38%" : "38% 50%"}, rgba(212, 175, 55, ${rimPulse * 0.15}) 0%, transparent 45%)`,
      }} />

      {/* Gold light sweep */}
      <AbsoluteFill style={{
        background: `linear-gradient(105deg, transparent ${sweepX - 15}%, rgba(212, 175, 55, 0.05) ${sweepX}%, transparent ${sweepX + 15}%)`,
        pointerEvents: "none",
      }} />

      {/* Wax product hero */}
      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: isVertical ? "center" : "flex-start",
        padding: isVertical ? "0" : "0 0 0 12%",
        transform: `scale(${interpolate(productSpring, [0, 1], [0.6, productScale])}) translateY(${productFloat}px) rotate(${productRotate}deg)`,
        opacity: interpolate(productSpring, [0, 0.3], [0, 1], { extrapolateRight: "clamp" }),
      }}>
        <Img src={staticFile("images/wax-cutout.png")} style={{
          height: isVertical ? "48%" : "70%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 50px rgba(212, 175, 55, ${rimPulse})) drop-shadow(0 30px 60px rgba(0,0,0,0.85))`,
        }} />
      </AbsoluteFill>

      {/* Side gradient for text readability */}
      <AbsoluteFill style={{
        background: isVertical
          ? "linear-gradient(to top, rgba(10,8,6,0.97) 0%, transparent 40%)"
          : "linear-gradient(to left, rgba(10,8,6,0.95) 0%, transparent 45%)",
      }} />

      {/* Text */}
      <AbsoluteFill style={{
        justifyContent: isVertical ? "flex-end" : "center",
        alignItems: isVertical ? "center" : "flex-end",
        padding: isVertical ? "0 50px 150px" : "0 90px 0 0",
      }}>
        <div style={{ textAlign: isVertical ? "center" : "right" }}>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 12 : 11,
            letterSpacing: "0.5em", color: "rgba(212, 175, 55, 0.85)",
            textTransform: "uppercase", marginBottom: 14,
            opacity: tagSpring,
            transform: `translateY(${interpolate(tagSpring, [0, 1], [12, 0])}px)`,
          }}>
            Dense · Bold · Sculptural
          </div>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 58 : 68, fontWeight: 900,
            letterSpacing: "-0.03em", lineHeight: 0.95,
            opacity: titleSpring,
            transform: `translateY(${interpolate(titleSpring, [0, 1], [20, 0])}px)`,
            background: "linear-gradient(135deg, #d4af37, #f5e6a3, #d4af37)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            THE WAX
          </div>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 15 : 13,
            letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)",
            marginTop: 18, fontWeight: 300,
            opacity: line2Spring,
            transform: `translateY(${interpolate(line2Spring, [0, 1], [10, 0])}px)`,
          }}>
            FIRM HOLD · WET LOOK · NO ALCOHOL
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
