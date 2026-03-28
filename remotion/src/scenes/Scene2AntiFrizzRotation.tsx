import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene2AntiFrizzRotation: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Bottle slow rotation simulation via horizontal drift + slight tilt
  const bottleX = interpolate(frame, [0, 120], [-5, 5]);
  const bottleRotate = interpolate(frame, [0, 120], [-3, 3]);
  const bottleScale = interpolate(frame, [0, 30], [0.9, 1.0], { extrapolateRight: "clamp" });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  // Purple glow pulse
  const glowIntensity = interpolate(Math.sin(frame * 0.04), [-1, 1], [0.2, 0.45]);

  // Spec cards spring in
  const spec1 = spring({ frame: frame - 40, fps, config: { damping: 16 } });
  const spec2 = spring({ frame: frame - 55, fps, config: { damping: 16 } });
  const spec3 = spring({ frame: frame - 70, fps, config: { damping: 16 } });

  const specs = [
    { label: "FRIZZ CONTROL", value: "24HR", spring: spec1 },
    { label: "KRAFINA ENRICHED", value: "100%", spring: spec2 },
    { label: "CURL DEFINITION", value: "10X", spring: spec3 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      {/* Dark reflective surface */}
      <AbsoluteFill
        style={{
          background: "linear-gradient(to bottom, #050210 0%, #0a0520 60%, #0f0830 100%)",
        }}
      />

      {/* Purple ambient glow */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 55%, rgba(128, 0, 255, ${glowIntensity}) 0%, transparent 55%)`,
        }}
      />

      {/* Reflection line */}
      <div
        style={{
          position: "absolute",
          bottom: isVertical ? "35%" : "25%",
          left: "10%",
          right: "10%",
          height: 1,
          background: "linear-gradient(to right, transparent, rgba(168, 85, 247, 0.3), transparent)",
        }}
      />

      {/* Real bottle */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: isVertical ? "center" : "center",
          opacity,
          transform: `scale(${bottleScale}) translateX(${bottleX}px) rotate(${bottleRotate}deg)`,
        }}
      >
        <Img
          src={staticFile("images/antifrizz-real.png")}
          style={{
            height: isVertical ? "55%" : "75%",
            objectFit: "contain",
            filter: `drop-shadow(0 0 80px rgba(128, 0, 255, 0.5)) drop-shadow(0 30px 50px rgba(0,0,0,0.7))`,
          }}
        />
      </AbsoluteFill>

      {/* Bottle reflection (flipped, faded) */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          opacity: 0.15,
          transform: `scaleY(-1) translateY(${isVertical ? "25%" : "45%"})`,
        }}
      >
        <Img
          src={staticFile("images/antifrizz-real.png")}
          style={{
            height: isVertical ? "55%" : "75%",
            objectFit: "contain",
            filter: "blur(2px)",
          }}
        />
      </AbsoluteFill>

      {/* Spec cards */}
      <AbsoluteFill
        style={{
          justifyContent: isVertical ? "flex-end" : "center",
          alignItems: isVertical ? "center" : "flex-end",
          padding: isVertical ? "0 40px 120px" : "0 80px 0 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isVertical ? "row" : "column",
            gap: isVertical ? 30 : 24,
          }}
        >
          {specs.map((spec, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                opacity: spec.spring,
                transform: `translateY(${interpolate(spec.spring, [0, 1], [30, 0])}px)`,
              }}
            >
              <div
                style={{
                  fontFamily: "sans-serif",
                  fontSize: isVertical ? 30 : 34,
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #a855f7, #c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                }}
              >
                {spec.value}
              </div>
              <div
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  color: "rgba(255, 255, 255, 0.4)",
                  marginTop: 6,
                }}
              >
                {spec.label}
              </div>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
