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

  // Dramatic slow pan across the serum texture
  const scale = interpolate(frame, [0, 130], [1.3, 1.05], { extrapolateRight: "clamp" });
  const panX = interpolate(frame, [0, 130], [8, -5]);
  const panY = interpolate(frame, [0, 130], [-3, 2]);
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Gold shimmer overlay
  const shimmerPos = interpolate(frame, [0, 130], [-50, 150]);

  // Text
  const textSpring = spring({ frame: frame - 40, fps, config: { damping: 20 } });
  const tagSpring = spring({ frame: frame - 55, fps, config: { damping: 18 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0604" }}>
      <AbsoluteFill style={{ opacity, transform: `scale(${scale}) translate(${panX}%, ${panY}%)` }}>
        <Img
          src={staticFile("images/antifrizz-serum-texture.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Shimmer */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(120deg, transparent ${shimmerPos - 15}%, rgba(245, 214, 128, 0.06) ${shimmerPos}%, transparent ${shimmerPos + 15}%)`,
          pointerEvents: "none",
        }}
      />

      {/* Text overlay */}
      <AbsoluteFill
        style={{
          background: isVertical
            ? "linear-gradient(to top, rgba(10,6,4,0.9) 0%, transparent 40%)"
            : "linear-gradient(to left, rgba(10,6,4,0.85) 0%, transparent 50%)",
        }}
      />

      <AbsoluteFill
        style={{
          justifyContent: isVertical ? "flex-end" : "center",
          alignItems: isVertical ? "center" : "flex-end",
          padding: isVertical ? "0 50px 180px" : "0 100px 0 0",
        }}
      >
        <div style={{ textAlign: isVertical ? "center" : "right" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 36 : 40,
              fontWeight: 200,
              color: "white",
              letterSpacing: "0.08em",
              lineHeight: 1.2,
              opacity: textSpring,
              transform: `translateY(${interpolate(textSpring, [0, 1], [20, 0])}px)`,
            }}
          >
            Liquid
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 48 : 52,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginTop: 4,
              opacity: textSpring,
              transform: `translateY(${interpolate(textSpring, [0, 1], [20, 0])}px)`,
              background: "linear-gradient(135deg, #d4af37, #f5d680, #d4af37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            GOLD
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 10,
              letterSpacing: "0.4em",
              color: "rgba(212, 175, 55, 0.6)",
              marginTop: 14,
              opacity: tagSpring,
              transform: `translateY(${interpolate(tagSpring, [0, 1], [15, 0])}px)`,
            }}
          >
            PREMIUM KERATIN FORMULA
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
