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

  // Serum texture background
  const serumPanY = interpolate(frame, [0, 130], [3, -3]);
  const serumScale = interpolate(frame, [0, 130], [1.1, 1.0], { extrapolateRight: "clamp" });
  const serumFade = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Anti-frizz product
  const productDelay = 15;
  const productOpacity = interpolate(frame, [productDelay, productDelay + 30], [0, 1], { extrapolateRight: "clamp" });
  const productScale = spring({ frame: frame - productDelay, fps, config: { damping: 15, stiffness: 60 } });
  const productFloat = Math.sin(frame * 0.025) * 6;
  const productRotate = interpolate(frame, [productDelay, 130], [-3, 3], { extrapolateRight: "clamp" });

  // Purple glow pulse
  const glowPulse = interpolate(Math.sin(frame * 0.04), [-1, 1], [0.2, 0.5]);

  // Light streak
  const streakX = interpolate(frame, [30, 110], [-100, 200]);

  // Text
  const tagSpring = spring({ frame: frame - 50, fps, config: { damping: 18 } });
  const titleSpring = spring({ frame: frame - 60, fps, config: { damping: 14 } });
  const specSpring1 = spring({ frame: frame - 78, fps, config: { damping: 20 } });
  const specSpring2 = spring({ frame: frame - 88, fps, config: { damping: 20 } });
  const specSpring3 = spring({ frame: frame - 98, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      {/* Serum texture background */}
      <AbsoluteFill style={{
        opacity: serumFade * 0.35,
        transform: `scale(${serumScale}) translateY(${serumPanY}%)`,
      }}>
        <Img src={staticFile("images/clash-serum-texture.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Purple ambient glow */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at ${isVertical ? "50% 35%" : "65% 50%"}, rgba(128, 0, 255, ${glowPulse * 0.2}) 0%, transparent 55%)`,
      }} />

      {/* Light streak */}
      <AbsoluteFill style={{
        background: `linear-gradient(95deg, transparent ${streakX - 15}%, rgba(168, 85, 247, 0.05) ${streakX}%, transparent ${streakX + 15}%)`,
        pointerEvents: "none",
      }} />

      {/* Real anti-frizz product */}
      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: isVertical ? "center" : "flex-end",
        padding: isVertical ? "0" : "0 15% 0 0",
        opacity: productOpacity,
        transform: `scale(${interpolate(productScale, [0, 1], [0.85, 1])}) translateY(${productFloat}px) rotate(${productRotate}deg)`,
      }}>
        <Img
          src={staticFile("images/antifrizz-real.png")}
          style={{
            height: isVertical ? "55%" : "78%",
            objectFit: "contain",
            filter: `drop-shadow(0 0 50px rgba(128, 0, 255, ${glowPulse})) drop-shadow(0 20px 40px rgba(0,0,0,0.7))`,
          }}
        />
      </AbsoluteFill>

      {/* Gradient for text */}
      <AbsoluteFill style={{
        background: isVertical
          ? "linear-gradient(to top, rgba(5,2,16,0.95) 0%, transparent 45%)"
          : "linear-gradient(to right, rgba(5,2,16,0.92) 0%, transparent 50%)",
      }} />

      {/* Text */}
      <AbsoluteFill style={{
        justifyContent: isVertical ? "flex-end" : "center",
        alignItems: isVertical ? "center" : "flex-start",
        padding: isVertical ? "0 50px 160px" : "0 0 0 100px",
      }}>
        <div style={{ textAlign: isVertical ? "center" : "left" }}>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: isVertical ? 12 : 11,
            letterSpacing: "0.5em",
            color: "rgba(168, 85, 247, 0.85)",
            textTransform: "uppercase",
            marginBottom: 14,
            opacity: tagSpring,
            transform: `translateY(${interpolate(tagSpring, [0, 1], [15, 0])}px)`,
          }}>
            Smooth • Glossy • Refined
          </div>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: isVertical ? 48 : 56,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
            opacity: titleSpring,
            transform: `translateY(${interpolate(titleSpring, [0, 1], [25, 0])}px)`,
            background: "linear-gradient(135deg, #a855f7, #d8b4fe, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            ANTI-FRIZZ
          </div>
          {/* Spec pills */}
          <div style={{ display: "flex", gap: 12, marginTop: 24, justifyContent: isVertical ? "center" : "flex-start", flexWrap: "wrap" }}>
            {[
              { label: "CURL ENHANCER", spring: specSpring1 },
              { label: "CONTROLS FRIZZ", spring: specSpring2 },
              { label: "INTENSIFIES SHINE", spring: specSpring3 },
            ].map((spec) => (
              <div key={spec.label} style={{
                fontFamily: "sans-serif",
                fontSize: 9,
                letterSpacing: "0.2em",
                color: "rgba(168, 85, 247, 0.9)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
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
