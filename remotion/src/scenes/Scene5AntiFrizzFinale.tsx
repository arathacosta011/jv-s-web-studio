import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene5AntiFrizzFinale: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // BG slow zoom
  const bgScale = interpolate(frame, [0, 185], [1.05, 1.0], { extrapolateRight: "clamp" });

  // Bottle grand entrance
  const bottleSpring = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 80 } });
  const bottleFloat = Math.sin(frame * 0.03) * 5;

  // Purple glow pulse
  const glowPulse = interpolate(Math.sin(frame * 0.035), [-1, 1], [0.25, 0.5]);

  // Text
  const brandSpring = spring({ frame: frame - 50, fps, config: { damping: 18 } });
  const tagSpring = spring({ frame: frame - 70, fps, config: { damping: 15 } });
  const priceSpring = spring({ frame: frame - 85, fps, config: { damping: 16 } });
  const ctaSpring = spring({ frame: frame - 100, fps, config: { damping: 14 } });

  // Final fade out
  const fadeOut = interpolate(frame, [160, 185], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210", opacity: fadeOut }}>
      {/* Pedestal BG */}
      <AbsoluteFill style={{ transform: `scale(${bgScale})` }}>
        <Img
          src={staticFile("images/bg-studio-pedestal.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Pulsing purple glow behind bottle */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(128, 0, 255, ${glowPulse}) 0%, transparent 45%)`,
        }}
      />

      {/* Real bottle — trophy reveal */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity: bottleSpring,
          transform: `scale(${interpolate(bottleSpring, [0, 1], [0.7, 1])}) translateY(${interpolate(bottleSpring, [0, 1], [60, 0]) + bottleFloat}px)`,
        }}
      >
        <Img
          src={staticFile("images/antifrizz-real.png")}
          style={{
            height: isVertical ? "50%" : "70%",
            objectFit: "contain",
            filter: `drop-shadow(0 0 100px rgba(128, 0, 255, 0.6)) drop-shadow(0 25px 50px rgba(0,0,0,0.7))`,
          }}
        />
      </AbsoluteFill>

      {/* Bottom text */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          padding: isVertical ? "0 40px 120px" : "0 0 60px 0",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 40 : 44,
              fontWeight: 900,
              color: "white",
              letterSpacing: "0.05em",
              opacity: brandSpring,
              transform: `translateY(${interpolate(brandSpring, [0, 1], [20, 0])}px)`,
            }}
          >
            THE HEEM
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 40 : 44,
              fontWeight: 900,
              letterSpacing: "0.05em",
              marginTop: 2,
              opacity: brandSpring,
              transform: `translateY(${interpolate(brandSpring, [0, 1], [20, 0])}px)`,
              background: "linear-gradient(135deg, #a855f7, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ANTIFRIZZ
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 11,
              letterSpacing: "0.3em",
              color: "rgba(255, 255, 255, 0.45)",
              marginTop: 16,
              opacity: tagSpring,
              transform: `translateY(${interpolate(tagSpring, [0, 1], [15, 0])}px)`,
            }}
          >
            CURL ENHANCER • CONTROLS FRIZZ • INTENSIFIES SHINE
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 22 : 24,
              fontWeight: 700,
              color: "white",
              marginTop: 20,
              opacity: priceSpring,
              transform: `translateY(${interpolate(priceSpring, [0, 1], [15, 0])}px)`,
            }}
          >
            $22.99
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 10,
              letterSpacing: "0.5em",
              color: "rgba(168, 85, 247, 0.8)",
              marginTop: 14,
              opacity: ctaSpring,
              transform: `translateY(${interpolate(ctaSpring, [0, 1], [10, 0])}px)`,
            }}
          >
            HEEMBYJV.COM
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
