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

  // Wax texture bg
  const texturePanX = interpolate(frame, [0, 140], [-4, 4]);
  const textureScale = interpolate(frame, [0, 140], [1.15, 1.0], { extrapolateRight: "clamp" });
  const textureFade = interpolate(frame, [0, 25], [0, 0.35], { extrapolateRight: "clamp" });

  // Product hero
  const productSpring = spring({ frame: frame - 15, fps, config: { damping: 12, stiffness: 70 } });
  const productFloat = Math.sin(frame * 0.028) * 6;
  const productRotate = interpolate(frame, [15, 140], [-2, 2], { extrapolateRight: "clamp" });

  // Blue/gold rim light pulse
  const rimPulse = interpolate(Math.sin(frame * 0.045), [-1, 1], [0.25, 0.55]);

  // Light sweep across product
  const sweepX = interpolate(frame, [25, 100], [-100, 200]);

  // Text
  const tagSpring = spring({ frame: frame - 50, fps, config: { damping: 18 } });
  const titleSpring = spring({ frame: frame - 60, fps, config: { damping: 12 } });
  const line2Spring = spring({ frame: frame - 72, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#060412" }}>
      {/* Texture bg */}
      <AbsoluteFill style={{
        opacity: textureFade,
        transform: `scale(${textureScale}) translateX(${texturePanX}%)`,
      }}>
        <Img src={staticFile("images/clash-wax-texture.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Blue ambient glow */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at ${isVertical ? "50% 38%" : "40% 50%"}, rgba(50, 100, 220, ${rimPulse * 0.2}) 0%, transparent 50%)`,
      }} />

      {/* Light sweep */}
      <AbsoluteFill style={{
        background: `linear-gradient(105deg, transparent ${sweepX - 18}%, rgba(100, 160, 255, 0.04) ${sweepX}%, transparent ${sweepX + 18}%)`,
        pointerEvents: "none",
      }} />

      {/* Wax product hero */}
      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: isVertical ? "center" : "flex-start",
        padding: isVertical ? "0" : "0 0 0 12%",
        transform: `scale(${interpolate(productSpring, [0, 1], [0.7, 1])}) translateY(${productFloat}px) rotate(${productRotate}deg)`,
        opacity: interpolate(productSpring, [0, 0.3], [0, 1], { extrapolateRight: "clamp" }),
      }}>
        <Img src={staticFile("images/wax-cutout.png")} style={{
          height: isVertical ? "48%" : "70%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 60px rgba(50, 100, 220, ${rimPulse})) drop-shadow(0 30px 60px rgba(0,0,0,0.8))`,
        }} />
      </AbsoluteFill>

      {/* Side gradient */}
      <AbsoluteFill style={{
        background: isVertical
          ? "linear-gradient(to top, rgba(6,4,18,0.95) 0%, transparent 40%)"
          : "linear-gradient(to left, rgba(6,4,18,0.93) 0%, transparent 45%)",
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
            letterSpacing: "0.5em", color: "rgba(100, 160, 255, 0.85)",
            textTransform: "uppercase", marginBottom: 14,
            opacity: tagSpring,
            transform: `translateY(${interpolate(tagSpring, [0, 1], [12, 0])}px)`,
          }}>
            Dense • Bold • Sculptural
          </div>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 58 : 68, fontWeight: 900,
            letterSpacing: "-0.03em", lineHeight: 0.95,
            opacity: titleSpring,
            transform: `translateY(${interpolate(titleSpring, [0, 1], [20, 0])}px)`,
            background: "linear-gradient(135deg, #4a8cff, #a0c4ff, #4a8cff)",
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
