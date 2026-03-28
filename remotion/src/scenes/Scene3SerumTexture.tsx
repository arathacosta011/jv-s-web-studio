import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene3SerumTexture: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Dramatic slow pan across the cream texture
  const scale = interpolate(frame, [0, 130], [1.3, 1.05], { extrapolateRight: "clamp" });
  const panX = interpolate(frame, [0, 130], [8, -5]);
  const panY = interpolate(frame, [0, 130], [-3, 2]);
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Shimmer
  const shimmerPos = interpolate(frame, [0, 130], [-50, 150]);

  // Text
  const textSpring = spring({ frame: frame - 40, fps, config: { damping: 20 } });
  const tagSpring = spring({ frame: frame - 55, fps, config: { damping: 18 } });

  // Small bottle overlay fading in
  const bottleSpring = spring({ frame: frame - 60, fps, config: { damping: 15 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      <AbsoluteFill style={{ opacity, transform: `scale(${scale}) translate(${panX}%, ${panY}%)` }}>
        <Img
          src={staticFile("images/antifrizz-cream-texture.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Shimmer */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(120deg, transparent ${shimmerPos - 15}%, rgba(168, 85, 247, 0.06) ${shimmerPos}%, transparent ${shimmerPos + 15}%)`,
          pointerEvents: "none",
        }}
      />

      {/* Gradient overlay */}
      <AbsoluteFill
        style={{
          background: isVertical
            ? "linear-gradient(to top, rgba(5,2,16,0.9) 0%, transparent 40%)"
            : "linear-gradient(to left, rgba(5,2,16,0.85) 0%, transparent 50%)",
        }}
      />

      {/* Small bottle on the right/bottom */}
      <div
        style={{
          position: "absolute",
          right: isVertical ? "15%" : "8%",
          bottom: isVertical ? "25%" : "10%",
          opacity: bottleSpring,
          transform: `translateY(${interpolate(bottleSpring, [0, 1], [40, 0])}px)`,
        }}
      >
        <Img
          src={staticFile("images/antifrizz-real.png")}
          style={{
            height: isVertical ? 200 : 280,
            objectFit: "contain",
            filter: "drop-shadow(0 0 40px rgba(128, 0, 255, 0.4))",
          }}
        />
      </div>

      {/* Text */}
      <AbsoluteFill
        style={{
          justifyContent: isVertical ? "flex-end" : "center",
          alignItems: isVertical ? "center" : "flex-start",
          padding: isVertical ? "0 50px 140px" : "0 0 0 100px",
        }}
      >
        <div style={{ textAlign: isVertical ? "center" : "left" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 34 : 38,
              fontWeight: 200,
              color: "white",
              letterSpacing: "0.08em",
              lineHeight: 1.2,
              opacity: textSpring,
              transform: `translateY(${interpolate(textSpring, [0, 1], [20, 0])}px)`,
            }}
          >
            Premium
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 46 : 50,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginTop: 4,
              opacity: textSpring,
              transform: `translateY(${interpolate(textSpring, [0, 1], [20, 0])}px)`,
              background: "linear-gradient(135deg, #a855f7, #c084fc, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FORMULA
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 10,
              letterSpacing: "0.4em",
              color: "rgba(168, 85, 247, 0.6)",
              marginTop: 14,
              opacity: tagSpring,
              transform: `translateY(${interpolate(tagSpring, [0, 1], [15, 0])}px)`,
            }}
          >
            ENRICHED WITH KRAFINA
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
