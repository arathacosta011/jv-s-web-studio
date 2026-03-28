import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const ClashScene1DarkReveal: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Both products start in total darkness, slowly revealed
  const bgBrightness = interpolate(frame, [0, 60], [0, 0.7], { extrapolateRight: "clamp" });
  const bgScale = interpolate(frame, [0, 140], [1.15, 1.0], { extrapolateRight: "clamp" });

  // Wax enters from left
  const waxOpacity = interpolate(frame, [15, 50], [0, 1], { extrapolateRight: "clamp" });
  const waxX = interpolate(frame, [15, 70], [-120, isVertical ? -60 : -180], { extrapolateRight: "clamp" });
  const waxScale = interpolate(frame, [15, 70], [0.7, 1], { extrapolateRight: "clamp" });

  // Anti-frizz enters from right
  const frizzOpacity = interpolate(frame, [30, 65], [0, 1], { extrapolateRight: "clamp" });
  const frizzX = interpolate(frame, [30, 85], [120, isVertical ? 60 : 180], { extrapolateRight: "clamp" });
  const frizzScale = interpolate(frame, [30, 85], [0.7, 1], { extrapolateRight: "clamp" });

  // Dramatic light pulse between products
  const pulseOpacity = interpolate(frame, [70, 100], [0, 0.5], { extrapolateRight: "clamp" });
  const pulseScale = interpolate(frame, [70, 140], [0.5, 1.5], { extrapolateRight: "clamp" });

  // Title text
  const titleSpring = spring({ frame: frame - 85, fps, config: { damping: 15 } });
  const subSpring = spring({ frame: frame - 100, fps, config: { damping: 18 } });

  // Gold sweep
  const sweepX = interpolate(frame, [40, 120], [-150, 250]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#030108" }}>
      {/* BG */}
      <AbsoluteFill style={{ transform: `scale(${bgScale})`, filter: `brightness(${bgBrightness})` }}>
        <Img src={staticFile("images/clash-bg-studio.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Gold sweep light */}
      <AbsoluteFill style={{
        background: `linear-gradient(105deg, transparent ${sweepX - 20}%, rgba(212, 175, 55, 0.06) ${sweepX}%, transparent ${sweepX + 20}%)`,
        pointerEvents: "none",
      }} />

      {/* Center energy pulse */}
      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, rgba(128,0,255,0.2) 40%, transparent 70%)",
          opacity: pulseOpacity,
          transform: `scale(${pulseScale})`,
        }} />
      </AbsoluteFill>

      {/* Wax product - left side */}
      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: waxOpacity,
        transform: `translateX(${waxX}px) scale(${waxScale})`,
      }}>
        <Img
          src={staticFile("images/wax-real.png")}
          style={{
            height: isVertical ? "40%" : "65%",
            objectFit: "contain",
            filter: `drop-shadow(0 0 40px rgba(212, 175, 55, 0.5)) drop-shadow(0 15px 30px rgba(0,0,0,0.7))`,
          }}
        />
      </AbsoluteFill>

      {/* Anti-frizz product - right side */}
      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: frizzOpacity,
        transform: `translateX(${frizzX}px) scale(${frizzScale})`,
      }}>
        <Img
          src={staticFile("images/antifrizz-real.png")}
          style={{
            height: isVertical ? "45%" : "70%",
            objectFit: "contain",
            filter: `drop-shadow(0 0 40px rgba(128, 0, 255, 0.5)) drop-shadow(0 15px 30px rgba(0,0,0,0.7))`,
          }}
        />
      </AbsoluteFill>

      {/* Bottom gradient */}
      <AbsoluteFill style={{
        background: "linear-gradient(to top, rgba(3,1,8,0.95) 0%, transparent 40%)",
      }} />

      {/* Text */}
      <AbsoluteFill style={{
        justifyContent: "flex-end",
        alignItems: "center",
        padding: isVertical ? "0 40px 180px" : "0 0 70px",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: isVertical ? 48 : 56,
            fontWeight: 900,
            color: "white",
            letterSpacing: "-0.02em",
            lineHeight: 1.0,
            opacity: titleSpring,
            transform: `scale(${interpolate(titleSpring, [0, 1], [0.85, 1])})`,
          }}>
            TWO FORCES
          </div>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: isVertical ? 12 : 11,
            letterSpacing: "0.5em",
            color: "rgba(212, 175, 55, 0.8)",
            textTransform: "uppercase",
            marginTop: 14,
            opacity: subSpring,
            transform: `translateY(${interpolate(subSpring, [0, 1], [15, 0])}px)`,
          }}>
            One Collection
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
