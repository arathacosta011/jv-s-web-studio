import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene3WaxMacro: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Slow pan across macro detail
  const panX = interpolate(frame, [0, 120], [-4, 4]);
  const scale = interpolate(frame, [0, 120], [1.1, 1.0], { extrapolateRight: "clamp" });
  const fadeIn = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });

  // Text
  const tagSpring = spring({ frame: frame - 25, fps, config: { damping: 18 } });
  const titleSpring = spring({ frame: frame - 40, fps, config: { damping: 15 } });
  const subSpring = spring({ frame: frame - 60, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      <AbsoluteFill
        style={{
          opacity: fadeIn,
          transform: `scale(${scale}) translateX(${panX}%)`,
        }}
      >
        <Img
          src={staticFile("images/wax-macro.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Gradient */}
      <AbsoluteFill
        style={{
          background: isVertical
            ? "linear-gradient(to top, rgba(5,2,10,0.92) 0%, transparent 50%)"
            : "linear-gradient(to right, rgba(5,2,10,0.88) 0%, transparent 55%)",
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
              marginBottom: 16,
              opacity: tagSpring,
              transform: `translateY(${interpolate(tagSpring, [0, 1], [15, 0])}px)`,
            }}
          >
            Versatile Hold
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 60 : 68,
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
              fontSize: isVertical ? 60 : 68,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              marginTop: 4,
              opacity: titleSpring,
              transform: `translateY(${interpolate(titleSpring, [0, 1], [25, 0])}px)`,
              background: "linear-gradient(135deg, #a855f7, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            WAX
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 14 : 12,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.15em",
              marginTop: 20,
              opacity: subSpring,
              transform: `translateY(${interpolate(subSpring, [0, 1], [10, 0])}px)`,
            }}
          >
            WET LOOK · FIRM HOLD · NO ALCOHOL
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
