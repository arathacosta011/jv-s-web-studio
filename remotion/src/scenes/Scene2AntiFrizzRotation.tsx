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

  // Slow zoom out revealing the full rotating bottle
  const scale = interpolate(frame, [0, 120], [1.2, 1.0], { extrapolateRight: "clamp" });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  // Subtle rotation simulation via pan
  const panX = interpolate(frame, [0, 120], [-3, 3]);

  // Spec cards spring in
  const spec1 = spring({ frame: frame - 35, fps, config: { damping: 16 } });
  const spec2 = spring({ frame: frame - 50, fps, config: { damping: 16 } });
  const spec3 = spring({ frame: frame - 65, fps, config: { damping: 16 } });

  const specs = [
    { label: "FRIZZ CONTROL", value: "24HR", spring: spec1 },
    { label: "KERATIN INFUSED", value: "100%", spring: spec2 },
    { label: "SHINE FACTOR", value: "10X", spring: spec3 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#080504" }}>
      <AbsoluteFill style={{ opacity, transform: `scale(${scale}) translateX(${panX}%)` }}>
        <Img
          src={staticFile("images/antifrizz-rotating.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Ambient gold glow */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at ${isVertical ? "50% 70%" : "30% 60%"}, rgba(212, 175, 55, 0.06) 0%, transparent 60%)`,
        }}
      />

      {/* Spec cards */}
      <AbsoluteFill
        style={{
          justifyContent: isVertical ? "flex-end" : "center",
          alignItems: isVertical ? "center" : "flex-end",
          padding: isVertical ? "0 40px 160px" : "0 80px 0 0",
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
                  fontSize: isVertical ? 32 : 36,
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #d4af37, #f5d680)",
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
                  color: "rgba(255, 255, 255, 0.45)",
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
