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

  // BG
  const bgFade = interpolate(frame, [0, 35], [0, 1], { extrapolateRight: "clamp" });
  const bgScale = interpolate(frame, [0, 210], [1.1, 1.0], { extrapolateRight: "clamp" });

  // Products rise into hero position
  const waxSpring = spring({ frame: frame - 18, fps, config: { damping: 16, stiffness: 50 } });
  const frizzSpring = spring({ frame: frame - 28, fps, config: { damping: 16, stiffness: 50 } });
  const waxY = interpolate(waxSpring, [0, 1], [100, 0]);
  const frizzY = interpolate(frizzSpring, [0, 1], [100, 0]);

  // Gentle breathing
  const breathe = Math.sin(frame * 0.015) * 3;

  // Gold glow pulse
  const goldGlow = interpolate(Math.sin(frame * 0.03), [-1, 1], [0.08, 0.2]);

  // Text
  const brandSpring = spring({ frame: frame - 55, fps, config: { damping: 16 } });
  const taglineSpring = spring({ frame: frame - 70, fps, config: { damping: 20 } });
  const ctaSpring = spring({ frame: frame - 90, fps, config: { damping: 15 } });

  // Cinematic light bar sweep
  const barX = interpolate(frame, [100, 180], [-20, 120]);

  // Final subtle flash
  const finalFlash = frame > 180 ? interpolate(frame, [180, 190, 210], [0, 0.08, 0], { extrapolateRight: "clamp" }) : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0806" }}>
      {/* BG */}
      <AbsoluteFill style={{ opacity: bgFade, transform: `scale(${bgScale})` }}>
        <Img src={staticFile("images/clash-finale-bg.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Dark overlay to push products forward */}
      <AbsoluteFill style={{
        background: "radial-gradient(ellipse at center, rgba(10,8,6,0.2) 0%, rgba(10,8,6,0.75) 65%)",
      }} />

      {/* Golden ambient glow */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, ${goldGlow}) 0%, transparent 40%)`,
      }} />

      {/* Light bar sweep */}
      <AbsoluteFill style={{
        background: `linear-gradient(90deg, transparent ${barX - 2}%, rgba(255,255,255,0.03) ${barX}%, transparent ${barX + 2}%)`,
        pointerEvents: "none",
      }} />

      {/* Products side by side — hero composition */}
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center",
        flexDirection: isVertical ? "column" : "row",
        gap: isVertical ? 30 : 100,
      }}>
        {/* Wax */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          opacity: waxSpring,
          transform: `translateY(${waxY + breathe}px)`,
        }}>
          <Img src={staticFile("images/wax-cutout.png")} style={{
            height: isVertical ? 250 : 350,
            objectFit: "contain",
            filter: `drop-shadow(0 0 45px rgba(212, 175, 55, 0.4)) drop-shadow(0 20px 40px rgba(0,0,0,0.7))`,
          }} />
        </div>

        {/* Anti-frizz */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          opacity: frizzSpring,
          transform: `translateY(${frizzY - breathe}px)`,
        }}>
          <Img src={staticFile("images/antifrizz-cutout.png")} style={{
            height: isVertical ? 280 : 370,
            objectFit: "contain",
            filter: `drop-shadow(0 0 45px rgba(212, 175, 55, 0.35)) drop-shadow(0 20px 40px rgba(0,0,0,0.7))`,
          }} />
        </div>
      </AbsoluteFill>

      {/* Top brand */}
      <AbsoluteFill style={{
        justifyContent: "flex-start", alignItems: "center",
        padding: isVertical ? "100px 0 0" : "50px 0 0",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 11 : 10,
            letterSpacing: "0.6em", color: "rgba(212, 175, 55, 0.6)",
            textTransform: "uppercase",
            opacity: taglineSpring,
            transform: `translateY(${interpolate(taglineSpring, [0, 1], [10, 0])}px)`,
          }}>
            The Heem® Premium Collection
          </div>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 44 : 54, fontWeight: 900,
            letterSpacing: "-0.02em", marginTop: 8,
            opacity: brandSpring,
            transform: `scale(${interpolate(brandSpring, [0, 1], [0.85, 1])})`,
            background: "linear-gradient(180deg, #ffffff, #e8dcc8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            CHOOSE YOUR WEAPON
          </div>
        </div>
      </AbsoluteFill>

      {/* Bottom CTA */}
      <AbsoluteFill style={{
        justifyContent: "flex-end", alignItems: "center",
        padding: isVertical ? "0 0 90px" : "0 0 45px",
      }}>
        <div style={{
          fontFamily: "sans-serif", fontSize: isVertical ? 14 : 13,
          letterSpacing: "0.35em", textTransform: "uppercase",
          opacity: ctaSpring,
          transform: `translateY(${interpolate(ctaSpring, [0, 1], [12, 0])}px)`,
          background: "linear-gradient(90deg, #d4af37, #f5e6a3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          heembyjv.com
        </div>
      </AbsoluteFill>

      {/* Final flash */}
      <AbsoluteFill style={{
        backgroundColor: "rgba(255,240,200,1)", opacity: finalFlash,
        pointerEvents: "none",
      }} />
    </AbsoluteFill>
  );
};
