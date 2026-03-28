import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene4LogoDetail: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Push-in zoom on logo
  const scale = interpolate(frame, [0, 110], [1.0, 1.15], { extrapolateRight: "clamp" });
  const fadeIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Text
  const textSpring = spring({ frame: frame - 30, fps, config: { damping: 15, stiffness: 120 } });

  // Stats stagger
  const stat1 = spring({ frame: frame - 50, fps, config: { damping: 20 } });
  const stat2 = spring({ frame: frame - 60, fps, config: { damping: 20 } });
  const stat3 = spring({ frame: frame - 70, fps, config: { damping: 20 } });

  const stats = [
    { label: "PRECISION", value: "0.5MM", spring: stat1 },
    { label: "RUNTIME", value: "4HRS", spring: stat2 },
    { label: "GRADE", value: "PRO", spring: stat3 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      <AbsoluteFill style={{ opacity: fadeIn, transform: `scale(${scale})` }}>
        <Img
          src={staticFile("images/logo-detail.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Overlay gradient */}
      <AbsoluteFill
        style={{
          background: isVertical
            ? "linear-gradient(to top, rgba(5,2,10,0.95) 0%, rgba(5,2,10,0.3) 40%, transparent 70%)"
            : "linear-gradient(to top, rgba(5,2,10,0.9) 0%, transparent 50%)",
        }}
      />

      {/* Text + Stats */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          padding: isVertical ? "0 50px 180px" : "0 0 80px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 14 : 12,
              letterSpacing: "0.35em",
              color: "rgba(180, 120, 255, 0.7)",
              textTransform: "uppercase",
              marginBottom: 12,
              opacity: textSpring,
            }}
          >
            Craftsmanship in Detail
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 44 : 48,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              opacity: textSpring,
              transform: `translateY(${interpolate(textSpring, [0, 1], [20, 0])}px)`,
            }}
          >
            BUILT DIFFERENT
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: isVertical ? 40 : 60,
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  opacity: stat.spring,
                  transform: `translateY(${interpolate(stat.spring, [0, 1], [15, 0])}px)`,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: isVertical ? 28 : 32,
                    fontWeight: 900,
                    color: "#a855f7",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.25em",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
