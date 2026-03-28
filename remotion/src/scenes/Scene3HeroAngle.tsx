import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene3HeroAngle: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Slow rotation feel via pan
  const panX = interpolate(frame, [0, 120], [-3, 3]);
  const scale = interpolate(frame, [0, 120], [1.05, 1.0], { extrapolateRight: "clamp" });
  const fadeIn = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  // Text stagger
  const line1Spring = spring({ frame: frame - 25, fps, config: { damping: 18 } });
  const line2Spring = spring({ frame: frame - 40, fps, config: { damping: 18 } });
  const line3Spring = spring({ frame: frame - 55, fps, config: { damping: 18 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      {/* Hero product image */}
      <AbsoluteFill
        style={{
          opacity: fadeIn,
          transform: `scale(${scale}) translateX(${panX}%)`,
        }}
      >
        <Img
          src={staticFile(isVertical ? "images/hero-clipper-vertical.jpg" : "images/hero-clipper-wide.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Gradient overlay for text */}
      <AbsoluteFill
        style={{
          background: isVertical
            ? "linear-gradient(to top, rgba(5,2,10,0.9) 0%, transparent 50%)"
            : "linear-gradient(to right, rgba(5,2,10,0.85) 0%, transparent 55%)",
        }}
      />

      {/* Text */}
      <AbsoluteFill
        style={{
          justifyContent: isVertical ? "flex-end" : "center",
          alignItems: isVertical ? "center" : "flex-start",
          padding: isVertical ? "0 50px 200px" : "0 0 0 100px",
        }}
      >
        <div style={{ textAlign: isVertical ? "center" : "left" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 13 : 11,
              letterSpacing: "0.4em",
              color: "rgba(180, 120, 255, 0.7)",
              textTransform: "uppercase",
              marginBottom: 20,
              opacity: line1Spring,
              transform: `translateY(${interpolate(line1Spring, [0, 1], [20, 0])}px)`,
            }}
          >
            Premium Grooming
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 64 : 72,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              opacity: line2Spring,
              transform: `translateY(${interpolate(line2Spring, [0, 1], [30, 0])}px)`,
            }}
          >
            HEEM
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 64 : 72,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              marginTop: 4,
              opacity: line3Spring,
              transform: `translateY(${interpolate(line3Spring, [0, 1], [30, 0])}px)`,
              background: "linear-gradient(135deg, #a855f7, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CLIPPER
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
