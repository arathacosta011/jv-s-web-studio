import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene4AntiFrizzModel: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Slow cinematic zoom
  const scale = interpolate(frame, [0, 120], [1.1, 1.0], { extrapolateRight: "clamp" });
  const opacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const panX = interpolate(frame, [0, 120], [2, -1]);

  // Quote text
  const quoteSpring = spring({ frame: frame - 30, fps, config: { damping: 20 } });
  const nameSpring = spring({ frame: frame - 50, fps, config: { damping: 18 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0604" }}>
      <AbsoluteFill style={{ opacity, transform: `scale(${scale}) translateX(${panX}%)` }}>
        <Img
          src={staticFile("images/antifrizz-model.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Gradient overlay */}
      <AbsoluteFill
        style={{
          background: isVertical
            ? "linear-gradient(to top, rgba(10,6,4,0.95) 0%, transparent 45%)"
            : "linear-gradient(to right, rgba(10,6,4,0.9) 0%, transparent 50%)",
        }}
      />

      {/* Text */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: isVertical ? "center" : "flex-start",
          padding: isVertical ? "0 50px 180px" : "0 0 90px 100px",
        }}
      >
        <div style={{ textAlign: isVertical ? "center" : "left", maxWidth: isVertical ? 500 : 450 }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 22 : 24,
              fontWeight: 300,
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: 1.5,
              fontStyle: "italic",
              opacity: quoteSpring,
              transform: `translateY(${interpolate(quoteSpring, [0, 1], [20, 0])}px)`,
            }}
          >
            "Confidence starts with
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 22 : 24,
              fontWeight: 300,
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: 1.5,
              fontStyle: "italic",
              opacity: quoteSpring,
              transform: `translateY(${interpolate(quoteSpring, [0, 1], [20, 0])}px)`,
            }}
          >
            flawless hair."
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 10,
              letterSpacing: "0.4em",
              color: "rgba(212, 175, 55, 0.7)",
              marginTop: 20,
              opacity: nameSpring,
              transform: `translateY(${interpolate(nameSpring, [0, 1], [15, 0])}px)`,
            }}
          >
            HEEM — ELEVATE YOUR STANDARD
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
