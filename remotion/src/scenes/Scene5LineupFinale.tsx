import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene5LineupFinale: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Hero reveal
  const heroSpring = spring({ frame, fps, config: { damping: 25, stiffness: 100 } });
  const heroScale = interpolate(heroSpring, [0, 1], [1.15, 1.0]);
  const heroOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Float
  const floatY = Math.sin(frame * 0.03) * 4;

  // Text
  const titleSpring = spring({ frame: frame - 30, fps, config: { damping: 15 } });
  const subSpring = spring({ frame: frame - 50, fps, config: { damping: 18 } });
  const ctaSpring = spring({ frame: frame - 70, fps, config: { damping: 20 } });

  // End fade
  const endFade = interpolate(frame, [155, 185], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210", opacity: endFade }}>
      {/* Ambient glow */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 45%, rgba(128, 0, 255, 0.15) 0%, transparent 55%)`,
        }}
      />

      {/* Hero lineup image */}
      <AbsoluteFill
        style={{
          opacity: heroOpacity,
          transform: `scale(${heroScale}) translateY(${floatY}px)`,
        }}
      >
        <Img
          src={staticFile(isVertical ? "images/powder-vertical.jpg" : "images/full-lineup.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Bottom gradient */}
      <AbsoluteFill
        style={{
          background: isVertical
            ? "linear-gradient(to top, rgba(5,2,10,1) 0%, rgba(5,2,10,0.6) 30%, transparent 55%)"
            : "linear-gradient(to top, rgba(5,2,10,0.95) 0%, rgba(5,2,10,0.4) 35%, transparent 55%)",
        }}
      />

      {/* Final text */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          padding: isVertical ? "0 50px 180px" : "0 0 90px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 13 : 11,
              letterSpacing: "0.5em",
              color: "rgba(180, 120, 255, 0.6)",
              textTransform: "uppercase",
              marginBottom: 16,
              opacity: titleSpring,
            }}
          >
            The Complete Collection
          </div>

          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 56 : 68,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              opacity: titleSpring,
              transform: `translateY(${interpolate(titleSpring, [0, 1], [25, 0])}px)`,
            }}
          >
            HEEM
          </div>

          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 18 : 16,
              fontWeight: 400,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.15em",
              marginTop: 16,
              opacity: subSpring,
              transform: `translateY(${interpolate(subSpring, [0, 1], [15, 0])}px)`,
            }}
          >
            STYLE. TEXTURE. FINISH.
          </div>

          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 14 : 13,
              fontWeight: 600,
              color: "#a855f7",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginTop: 30,
              opacity: ctaSpring,
              transform: `translateY(${interpolate(ctaSpring, [0, 1], [10, 0])}px)`,
            }}
          >
            HEEMBYJV.COM
          </div>

          <div
            style={{
              width: interpolate(ctaSpring, [0, 1], [0, 120]),
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), transparent)",
              margin: "16px auto 0",
            }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
