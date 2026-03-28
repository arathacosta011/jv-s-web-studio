import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const ClashScene5Finale: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Finale background
  const bgFade = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const bgScale = interpolate(frame, [0, 200], [1.08, 1.0], { extrapolateRight: "clamp" });

  // Products rise into final hero position
  const waxSpring = spring({ frame: frame - 20, fps, config: { damping: 15, stiffness: 60 } });
  const frizzSpring = spring({ frame: frame - 30, fps, config: { damping: 15, stiffness: 60 } });

  const waxY = interpolate(waxSpring, [0, 1], [80, 0]);
  const frizzY = interpolate(frizzSpring, [0, 1], [80, 0]);

  // Subtle breathing
  const breathe = Math.sin(frame * 0.02) * 3;

  // Gold and purple dual glow
  const goldGlow = interpolate(Math.sin(frame * 0.03), [-1, 1], [0.1, 0.25]);
  const purpleGlow = interpolate(Math.sin(frame * 0.035 + 1.5), [-1, 1], [0.1, 0.25]);

  // Brand text
  const brandSpring = spring({ frame: frame - 60, fps, config: { damping: 18 } });
  const taglineSpring = spring({ frame: frame - 75, fps, config: { damping: 20 } });
  const ctaSpring = spring({ frame: frame - 95, fps, config: { damping: 15 } });

  // Price tags
  const waxPriceSpring = spring({ frame: frame - 110, fps, config: { damping: 20 } });
  const frizzPriceSpring = spring({ frame: frame - 120, fps, config: { damping: 20 } });

  // Final flash
  const finalFlash = frame > 170 ? interpolate(frame, [170, 180, 200], [0, 0.15, 0], { extrapolateRight: "clamp" }) : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#030108" }}>
      {/* Finale background */}
      <AbsoluteFill style={{ opacity: bgFade, transform: `scale(${bgScale})` }}>
        <Img src={staticFile("images/clash-finale-bg.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Dual ambient glows */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at 30% 50%, rgba(212, 175, 55, ${goldGlow}) 0%, transparent 40%), radial-gradient(ellipse at 70% 50%, rgba(128, 0, 255, ${purpleGlow}) 0%, transparent 40%)`,
      }} />

      {/* Products side by side */}
      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: isVertical ? "column" : "row",
        gap: isVertical ? 20 : 80,
      }}>
        {/* Wax */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: waxSpring,
          transform: `translateY(${waxY + breathe}px)`,
        }}>
          <Img
            src={staticFile("images/wax-real.png")}
            style={{
              height: isVertical ? 280 : 380,
              objectFit: "contain",
              filter: `drop-shadow(0 0 40px rgba(212, 175, 55, 0.5)) drop-shadow(0 20px 40px rgba(0,0,0,0.6))`,
            }}
          />
          <div style={{
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: "rgba(212, 175, 55, 0.9)",
            marginTop: 16,
            letterSpacing: "0.15em",
            opacity: waxPriceSpring,
            transform: `translateY(${interpolate(waxPriceSpring, [0, 1], [10, 0])}px)`,
          }}>
            $20.00
          </div>
        </div>

        {/* Anti-frizz */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: frizzSpring,
          transform: `translateY(${frizzY - breathe}px)`,
        }}>
          <Img
            src={staticFile("images/antifrizz-real.png")}
            style={{
              height: isVertical ? 300 : 400,
              objectFit: "contain",
              filter: `drop-shadow(0 0 40px rgba(128, 0, 255, 0.5)) drop-shadow(0 20px 40px rgba(0,0,0,0.6))`,
            }}
          />
          <div style={{
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: "rgba(168, 85, 247, 0.9)",
            marginTop: 16,
            letterSpacing: "0.15em",
            opacity: frizzPriceSpring,
            transform: `translateY(${interpolate(frizzPriceSpring, [0, 1], [10, 0])}px)`,
          }}>
            $22.99
          </div>
        </div>
      </AbsoluteFill>

      {/* Top brand text */}
      <AbsoluteFill style={{
        justifyContent: "flex-start",
        alignItems: "center",
        padding: isVertical ? "120px 0 0" : "60px 0 0",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: isVertical ? 11 : 10,
            letterSpacing: "0.6em",
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            opacity: taglineSpring,
            transform: `translateY(${interpolate(taglineSpring, [0, 1], [10, 0])}px)`,
          }}>
            The Heem® Premium Collection
          </div>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: isVertical ? 42 : 52,
            fontWeight: 900,
            color: "white",
            letterSpacing: "-0.02em",
            marginTop: 8,
            opacity: brandSpring,
            transform: `scale(${interpolate(brandSpring, [0, 1], [0.9, 1])})`,
          }}>
            CHOOSE YOUR WEAPON
          </div>
        </div>
      </AbsoluteFill>

      {/* Bottom CTA */}
      <AbsoluteFill style={{
        justifyContent: "flex-end",
        alignItems: "center",
        padding: isVertical ? "0 0 100px" : "0 0 50px",
      }}>
        <div style={{
          fontFamily: "sans-serif",
          fontSize: isVertical ? 13 : 12,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          opacity: ctaSpring,
          transform: `translateY(${interpolate(ctaSpring, [0, 1], [15, 0])}px)`,
          background: "linear-gradient(90deg, #d4af37, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          heembyjv.com
        </div>
      </AbsoluteFill>

      {/* Final flash */}
      <AbsoluteFill style={{
        backgroundColor: "rgba(255,255,255,1)",
        opacity: finalFlash,
        pointerEvents: "none",
      }} />
    </AbsoluteFill>
  );
};
