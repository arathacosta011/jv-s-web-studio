import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const Scene1AntiFrizzMacro: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background slow zoom
  const bgScale = interpolate(frame, [0, 130], [1.1, 1.0], { extrapolateRight: "clamp" });

  // Bottle reveal - starts dark, fades in and scales up
  const bottleOpacity = interpolate(frame, [10, 40], [0, 1], { extrapolateRight: "clamp" });
  const bottleScale = interpolate(frame, [10, 60], [0.85, 1.0], { extrapolateRight: "clamp" });
  const bottleY = interpolate(frame, [10, 60], [30, 0], { extrapolateRight: "clamp" });

  // Slow cinematic drift on the bottle
  const bottleDriftX = interpolate(frame, [0, 130], [-1, 1]);

  // Purple light sweep
  const sweepX = interpolate(frame, [20, 100], [-120, 220]);

  // Text animations
  const tagSpring = spring({ frame: frame - 50, fps, config: { damping: 18 } });
  const titleSpring = spring({ frame: frame - 65, fps, config: { damping: 15 } });
  const subtitleSpring = spring({ frame: frame - 80, fps, config: { damping: 15 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050210" }}>
      {/* Cinematic BG */}
      <AbsoluteFill style={{ transform: `scale(${bgScale})` }}>
        <Img
          src={staticFile("images/bg-studio-1.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Purple ambient glow */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 60%, rgba(128, 0, 255, 0.15) 0%, transparent 60%)`,
        }}
      />

      {/* Real HEEM Anti-Frizz bottle */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity: bottleOpacity,
          transform: `scale(${bottleScale}) translateY(${bottleY}px) translateX(${bottleDriftX}%)`,
        }}
      >
        <Img
          src={staticFile("images/antifrizz-real.png")}
          style={{
            height: isVertical ? "65%" : "80%",
            objectFit: "contain",
            filter: `drop-shadow(0 0 60px rgba(128, 0, 255, 0.4)) drop-shadow(0 20px 40px rgba(0,0,0,0.6))`,
          }}
        />
      </AbsoluteFill>

      {/* Light sweep */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(105deg, transparent ${sweepX - 25}%, rgba(168, 85, 247, 0.06) ${sweepX}%, transparent ${sweepX + 25}%)`,
          pointerEvents: "none",
        }}
      />

      {/* Bottom gradient for text */}
      <AbsoluteFill
        style={{
          background: isVertical
            ? "linear-gradient(to top, rgba(5,2,16,0.95) 0%, transparent 45%)"
            : "linear-gradient(to top, rgba(5,2,16,0.9) 0%, transparent 40%)",
        }}
      />

      {/* Text overlay */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: isVertical ? "center" : "flex-start",
          padding: isVertical ? "0 50px 180px" : "0 0 80px 100px",
        }}
      >
        <div style={{ textAlign: isVertical ? "center" : "left" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 12 : 11,
              letterSpacing: "0.5em",
              color: "rgba(168, 85, 247, 0.85)",
              textTransform: "uppercase",
              marginBottom: 16,
              opacity: tagSpring,
              transform: `translateY(${interpolate(tagSpring, [0, 1], [20, 0])}px)`,
            }}
          >
            The Heem® Premium Collection
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
            ANTI-FRIZZ
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: isVertical ? 18 : 16,
              fontWeight: 300,
              letterSpacing: "0.15em",
              color: "rgba(255, 255, 255, 0.5)",
              marginTop: 12,
              opacity: subtitleSpring,
              transform: `translateY(${interpolate(subtitleSpring, [0, 1], [15, 0])}px)`,
            }}
          >
            CURL ENHANCER • CONTROLS FRIZZ • INTENSIFIES SHINE
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
