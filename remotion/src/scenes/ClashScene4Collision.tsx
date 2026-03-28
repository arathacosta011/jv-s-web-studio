import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const ClashScene4Collision: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Collision background
  const collisionFade = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const collisionScale = interpolate(frame, [0, 130], [1.05, 1.15], { extrapolateRight: "clamp" });

  // Products rush toward center and stop
  const clashFrame = 40;
  const waxX = interpolate(frame, [0, clashFrame], [isVertical ? -200 : -500, isVertical ? -80 : -160], { extrapolateRight: "clamp" });
  const frizzX = interpolate(frame, [5, clashFrame + 5], [isVertical ? 200 : 500, isVertical ? 80 : 160], { extrapolateRight: "clamp" });

  // Impact flash at clash moment
  const flashOpacity = frame >= clashFrame && frame <= clashFrame + 8
    ? interpolate(frame, [clashFrame, clashFrame + 3, clashFrame + 8], [0, 0.6, 0], { extrapolateRight: "clamp" })
    : 0;

  // Post-clash shake
  const shakeX = frame >= clashFrame && frame < clashFrame + 15
    ? Math.sin((frame - clashFrame) * 2.5) * interpolate(frame, [clashFrame, clashFrame + 15], [8, 0], { extrapolateRight: "clamp" })
    : 0;

  // Products settle with subtle float
  const postFloat = frame > clashFrame + 15 ? Math.sin((frame - clashFrame) * 0.03) * 5 : 0;

  // Both products scale on impact
  const impactScale = frame >= clashFrame
    ? spring({ frame: frame - clashFrame, fps, config: { damping: 8, stiffness: 200 } })
    : interpolate(frame, [0, clashFrame], [0.7, 1], { extrapolateRight: "clamp" });

  // "VS" text
  const vsSpring = spring({ frame: frame - clashFrame - 5, fps, config: { damping: 10 } });

  // Bottom text
  const tagSpring = spring({ frame: frame - 70, fps, config: { damping: 18 } });
  const titleSpring = spring({ frame: frame - 80, fps, config: { damping: 15 } });

  // Energy waves from center
  const waveScale1 = frame > clashFrame ? interpolate(frame, [clashFrame, clashFrame + 60], [0, 3], { extrapolateRight: "clamp" }) : 0;
  const waveOpacity1 = frame > clashFrame ? interpolate(frame, [clashFrame, clashFrame + 60], [0.4, 0], { extrapolateRight: "clamp" }) : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#030108" }}>
      {/* Collision splash background */}
      <AbsoluteFill style={{
        opacity: collisionFade,
        transform: `scale(${collisionScale})`,
      }}>
        <Img src={staticFile("images/clash-collision.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Dark overlay for product visibility */}
      <AbsoluteFill style={{
        background: "radial-gradient(ellipse at center, rgba(3,1,8,0.3) 0%, rgba(3,1,8,0.85) 70%)",
      }} />

      {/* Energy wave rings */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{
          width: 200, height: 200, borderRadius: "50%",
          border: "2px solid rgba(212,175,55,0.3)",
          opacity: waveOpacity1,
          transform: `scale(${waveScale1})`,
        }} />
      </AbsoluteFill>

      {/* Impact flash */}
      <AbsoluteFill style={{
        backgroundColor: "rgba(255, 220, 150, 1)",
        opacity: flashOpacity,
      }} />

      {/* Scene shake wrapper */}
      <AbsoluteFill style={{ transform: `translateX(${shakeX}px)` }}>
        {/* Wax - left */}
        <AbsoluteFill style={{
          justifyContent: "center",
          alignItems: "center",
          transform: `translateX(${waxX}px) translateY(${postFloat}px) scale(${interpolate(impactScale, [0, 1], [0.7, 1])})`,
        }}>
          <Img
            src={staticFile("images/wax-real.png")}
            style={{
              height: isVertical ? "38%" : "60%",
              objectFit: "contain",
              filter: `drop-shadow(0 0 50px rgba(212, 175, 55, 0.6)) drop-shadow(0 15px 30px rgba(0,0,0,0.7))`,
            }}
          />
        </AbsoluteFill>

        {/* Anti-frizz - right */}
        <AbsoluteFill style={{
          justifyContent: "center",
          alignItems: "center",
          transform: `translateX(${frizzX}px) translateY(${-postFloat}px) scale(${interpolate(impactScale, [0, 1], [0.7, 1])})`,
        }}>
          <Img
            src={staticFile("images/antifrizz-real.png")}
            style={{
              height: isVertical ? "42%" : "65%",
              objectFit: "contain",
              filter: `drop-shadow(0 0 50px rgba(128, 0, 255, 0.6)) drop-shadow(0 15px 30px rgba(0,0,0,0.7))`,
            }}
          />
        </AbsoluteFill>
      </AbsoluteFill>

      {/* VS text */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{
          fontFamily: "sans-serif",
          fontSize: isVertical ? 60 : 72,
          fontWeight: 900,
          letterSpacing: "0.1em",
          opacity: vsSpring,
          transform: `scale(${interpolate(vsSpring, [0, 1], [2, 1])})`,
          background: "linear-gradient(180deg, #d4af37, #f5e6a3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "none",
        }}>
          VS
        </div>
      </AbsoluteFill>

      {/* Bottom text */}
      <AbsoluteFill style={{
        justifyContent: "flex-end",
        alignItems: "center",
        padding: isVertical ? "0 40px 140px" : "0 0 60px",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: isVertical ? 11 : 10,
            letterSpacing: "0.5em",
            color: "rgba(212, 175, 55, 0.7)",
            textTransform: "uppercase",
            marginBottom: 10,
            opacity: tagSpring,
          }}>
            Hold vs Silk • Strength vs Smoothness
          </div>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: isVertical ? 40 : 48,
            fontWeight: 900,
            color: "white",
            letterSpacing: "-0.02em",
            opacity: titleSpring,
            transform: `scale(${interpolate(titleSpring, [0, 1], [0.9, 1])})`,
          }}>
            THE CLASH
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
