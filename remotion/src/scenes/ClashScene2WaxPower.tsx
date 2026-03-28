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

  // Wax texture background pan
  const texturePanX = interpolate(frame, [0, 130], [-5, 5]);
  const textureScale = interpolate(frame, [0, 130], [1.15, 1.0], { extrapolateRight: "clamp" });
  const textureFade = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" });

  // Wax product hero - center stage with dramatic scale
  const productDelay = 20;
  const productOpacity = interpolate(frame, [productDelay, productDelay + 30], [0, 1], { extrapolateRight: "clamp" });
  const productScale = spring({ frame: frame - productDelay, fps, config: { damping: 12, stiffness: 80 } });
  const productFloat = Math.sin(frame * 0.03) * 8;

  // Gold rim light pulse
  const rimPulse = interpolate(Math.sin(frame * 0.05), [-1, 1], [0.3, 0.7]);

  // Text
  const tagSpring = spring({ frame: frame - 45, fps, config: { damping: 18 } });
  const titleSpring = spring({ frame: frame - 55, fps, config: { damping: 14 } });
  const specSpring1 = spring({ frame: frame - 75, fps, config: { damping: 20 } });
  const specSpring2 = spring({ frame: frame - 85, fps, config: { damping: 20 } });
  const specSpring3 = spring({ frame: frame - 95, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0604" }}>
      {/* Wax texture background */}
      <AbsoluteFill style={{
        opacity: textureFade * 0.4,
        transform: `scale(${textureScale}) translateX(${texturePanX}%)`,
      }}>
        <Img src={staticFile("images/clash-wax-texture.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Warm golden gradient overlay */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at ${isVertical ? "50% 40%" : "35% 50%"}, rgba(212, 175, 55, ${rimPulse * 0.15}) 0%, transparent 55%)`,
      }} />

      {/* Real wax product - hero center */}
      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: isVertical ? "center" : "flex-start",
        padding: isVertical ? "0" : "0 0 0 15%",
        opacity: productOpacity,
        transform: `scale(${interpolate(productScale, [0, 1], [0.8, 1])}) translateY(${productFloat}px)`,
      }}>
        <Img
          src={staticFile("images/wax-real.png")}
          style={{
            height: isVertical ? "50%" : "75%",
            objectFit: "contain",
            filter: `drop-shadow(0 0 60px rgba(212, 175, 55, ${rimPulse})) drop-shadow(0 25px 50px rgba(0,0,0,0.8))`,
          }}
        />
      </AbsoluteFill>

      {/* Side gradient for text */}
      <AbsoluteFill style={{
        background: isVertical
          ? "linear-gradient(to top, rgba(10,6,4,0.95) 0%, transparent 45%)"
          : "linear-gradient(to left, rgba(10,6,4,0.92) 0%, transparent 50%)",
      }} />

      {/* Text overlay */}
      <AbsoluteFill style={{
        justifyContent: isVertical ? "flex-end" : "center",
        alignItems: isVertical ? "center" : "flex-end",
        padding: isVertical ? "0 50px 160px" : "0 100px 0 0",
      }}>
        <div style={{ textAlign: isVertical ? "center" : "right" }}>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: isVertical ? 12 : 11,
            letterSpacing: "0.5em",
            color: "rgba(212, 175, 55, 0.85)",
            textTransform: "uppercase",
            marginBottom: 14,
            opacity: tagSpring,
            transform: `translateY(${interpolate(tagSpring, [0, 1], [15, 0])}px)`,
          }}>
            Dense • Bold • Sculptural
          </div>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: isVertical ? 56 : 64,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
            opacity: titleSpring,
            transform: `translateY(${interpolate(titleSpring, [0, 1], [25, 0])}px)`,
            background: "linear-gradient(135deg, #d4af37, #f5e6a3, #d4af37)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            THE WAX
          </div>
          {/* Spec pills */}
          <div style={{ display: "flex", gap: 12, marginTop: 24, justifyContent: isVertical ? "center" : "flex-end", flexWrap: "wrap" }}>
            {[
              { label: "FIRM HOLD", spring: specSpring1 },
              { label: "WET LOOK", spring: specSpring2 },
              { label: "NO ALCOHOL", spring: specSpring3 },
            ].map((spec) => (
              <div key={spec.label} style={{
                fontFamily: "sans-serif",
                fontSize: 9,
                letterSpacing: "0.2em",
                color: "rgba(212, 175, 55, 0.9)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                padding: "6px 14px",
                opacity: spec.spring,
                transform: `translateY(${interpolate(spec.spring, [0, 1], [10, 0])}px)`,
              }}>
                {spec.label}
              </div>
            ))}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
