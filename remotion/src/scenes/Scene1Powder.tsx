import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene1Powder: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Slow zoom out from macro
  const scale = interpolate(frame, [0, 120], [1.35, 1.0], { extrapolateRight: "clamp" });
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Subtle drift
  const panX = interpolate(frame, [0, 120], [4, -2]);
  const panY = interpolate(frame, [0, 120], [2, -1]);

  // Light sweep
  const sweepX = interpolate(frame, [15, 90], [-100, 200]);

  // Text
  const tagSpring = spring({ frame: frame - 40, fps, config: { damping: 18 } });
  const titleSpring = spring({ frame: frame - 55, fps, config: { damping: 15 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      <AbsoluteFill style={{ opacity, transform: `scale(${scale}) translate(${panX}%, ${panY}%)` }}>
        <Img
          src={staticFile("images/styling-powder-hero.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Light sweep */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(105deg, transparent ${sweepX - 20}%, rgba(180, 120, 255, 0.07) ${sweepX}%, transparent ${sweepX + 20}%)`,
          pointerEvents: "none",
        }}
      />

      {/* Bottom gradient */}
      <AbsoluteFill
        style={{
          background: isVertical
            ? "linear-gradient(to top, rgba(5,2,10,0.95) 0%, transparent 45%)"
            : "linear-gradient(to right, rgba(5,2,10,0.9) 0%, transparent 50%)",
        }}
      />

      {/* Text */}
      <AbsoluteFill
        style={{
          justifyContent: isVertical ? "flex-end" : "flex-end",
          alignItems: isVertical ? "center" : "flex-start",
          padding: isVertical ? "0 50px 200px" : "0 0 80px 100px",
        }}
      >
        <div style={{ textAlign: isVertical ? "center" : "left" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 13 : 11,
              letterSpacing: "0.4em",
              color: "rgba(180, 120, 255, 0.8)",
              textTransform: "uppercase",
              marginBottom: 14,
              opacity: tagSpring,
              transform: `translateY(${interpolate(tagSpring, [0, 1], [20, 0])}px)`,
            }}
          >
            #1 Best Seller
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 52 : 48,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              opacity: titleSpring,
              transform: `translateY(${interpolate(titleSpring, [0, 1], [25, 0])}px)`,
            }}
          >
            STYLING
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 52 : 48,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginTop: 2,
              opacity: titleSpring,
              transform: `translateY(${interpolate(titleSpring, [0, 1], [25, 0])}px)`,
              background: "linear-gradient(135deg, #a855f7, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            POWDER
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
