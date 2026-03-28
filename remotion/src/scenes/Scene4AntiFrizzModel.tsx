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

  // Model shot slow zoom
  const scale = interpolate(frame, [0, 120], [1.08, 1.0], { extrapolateRight: "clamp" });
  const opacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const panX = interpolate(frame, [0, 120], [2, -1]);

  // Bottle slides in from the side
  const bottleSpring = spring({ frame: frame - 25, fps, config: { damping: 14 } });

  // Quote text
  const quoteSpring = spring({ frame: frame - 40, fps, config: { damping: 20 } });
  const nameSpring = spring({ frame: frame - 60, fps, config: { damping: 18 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      {/* Model background */}
      <AbsoluteFill style={{ opacity, transform: `scale(${scale}) translateX(${panX}%)` }}>
        <Img
          src={staticFile("images/antifrizz-lifestyle.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Gradient overlay */}
      <AbsoluteFill
        style={{
          background: isVertical
            ? "linear-gradient(to top, rgba(5,2,16,0.95) 0%, transparent 45%), linear-gradient(to left, rgba(5,2,16,0.7) 0%, transparent 40%)"
            : "linear-gradient(to left, rgba(5,2,16,0.92) 0%, transparent 50%)",
        }}
      />

      {/* Real bottle overlay on right side */}
      <div
        style={{
          position: "absolute",
          right: isVertical ? "5%" : "6%",
          bottom: isVertical ? "30%" : "8%",
          opacity: bottleSpring,
          transform: `translateX(${interpolate(bottleSpring, [0, 1], [80, 0])}px)`,
        }}
      >
        <Img
          src={staticFile("images/antifrizz-real.png")}
          style={{
            height: isVertical ? 240 : 350,
            objectFit: "contain",
            filter: "drop-shadow(0 0 50px rgba(128, 0, 255, 0.5)) drop-shadow(0 15px 30px rgba(0,0,0,0.5))",
          }}
        />
      </div>

      {/* Quote text */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: isVertical ? "center" : "flex-start",
          padding: isVertical ? "0 50px 140px" : "0 0 90px 100px",
        }}
      >
        <div style={{ textAlign: isVertical ? "center" : "left", maxWidth: isVertical ? 500 : 420 }}>
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
            "Hydrate. Define. Shine."
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 10,
              letterSpacing: "0.4em",
              color: "rgba(168, 85, 247, 0.7)",
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
