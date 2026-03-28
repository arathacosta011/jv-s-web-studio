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

  // Collision bg
  const collisionFade = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const collisionScale = interpolate(frame, [0, 150], [1.05, 1.18], { extrapolateRight: "clamp" });

  const clashFrame = 35;

  // Products rush toward center
  const waxX = interpolate(frame, [0, clashFrame], [isVertical ? -250 : -550, isVertical ? -90 : -170], { extrapolateRight: "clamp" });
  const frizzX = interpolate(frame, [3, clashFrame + 3], [isVertical ? 250 : 550, isVertical ? 90 : 170], { extrapolateRight: "clamp" });
  const rushScale = interpolate(frame, [0, clashFrame], [0.6, 1], { extrapolateRight: "clamp" });

  // Impact flash
  const flashOpacity = frame >= clashFrame && frame <= clashFrame + 6
    ? interpolate(frame, [clashFrame, clashFrame + 2, clashFrame + 6], [0, 0.5, 0], { extrapolateRight: "clamp" })
    : 0;

  // Screen shake
  const shakeX = frame >= clashFrame && frame < clashFrame + 12
    ? Math.sin((frame - clashFrame) * 3) * interpolate(frame, [clashFrame, clashFrame + 12], [10, 0], { extrapolateRight: "clamp" })
    : 0;
  const shakeY = frame >= clashFrame && frame < clashFrame + 12
    ? Math.cos((frame - clashFrame) * 2.5) * interpolate(frame, [clashFrame, clashFrame + 12], [5, 0], { extrapolateRight: "clamp" })
    : 0;

  // Post-clash settle
  const postFloat = frame > clashFrame + 12 ? Math.sin((frame - clashFrame) * 0.025) * 4 : 0;

  // Impact bounce
  const impactBounce = frame >= clashFrame
    ? spring({ frame: frame - clashFrame, fps, config: { damping: 8, stiffness: 180 } })
    : 1;

  // Energy waves
  const wave1Scale = frame > clashFrame ? interpolate(frame, [clashFrame, clashFrame + 50], [0, 3.5], { extrapolateRight: "clamp" }) : 0;
  const wave1Opacity = frame > clashFrame ? interpolate(frame, [clashFrame, clashFrame + 50], [0.5, 0], { extrapolateRight: "clamp" }) : 0;
  const wave2Scale = frame > clashFrame + 8 ? interpolate(frame, [clashFrame + 8, clashFrame + 60], [0, 3], { extrapolateRight: "clamp" }) : 0;
  const wave2Opacity = frame > clashFrame + 8 ? interpolate(frame, [clashFrame + 8, clashFrame + 60], [0.3, 0], { extrapolateRight: "clamp" }) : 0;

  // VS text
  const vsSpring = spring({ frame: frame - clashFrame - 3, fps, config: { damping: 8, stiffness: 150 } });

  // Bottom text
  const tagSpring = spring({ frame: frame - 75, fps, config: { damping: 18 } });
  const titleSpring = spring({ frame: frame - 85, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#030108" }}>
      {/* Collision splash bg */}
      <AbsoluteFill style={{ opacity: collisionFade, transform: `scale(${collisionScale})` }}>
        <Img src={staticFile("images/clash-collision.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>

      {/* Dark overlay */}
      <AbsoluteFill style={{
        background: "radial-gradient(ellipse at center, rgba(3,1,8,0.2) 0%, rgba(3,1,8,0.8) 65%)",
      }} />

      {/* Energy waves */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{
          position: "absolute", width: 180, height: 180, borderRadius: "50%",
          border: "1.5px solid rgba(212,175,55,0.4)",
          opacity: wave1Opacity, transform: `scale(${wave1Scale})`,
        }} />
        <div style={{
          position: "absolute", width: 140, height: 140, borderRadius: "50%",
          border: "1px solid rgba(168,85,247,0.3)",
          opacity: wave2Opacity, transform: `scale(${wave2Scale})`,
        }} />
      </AbsoluteFill>

      {/* Flash */}
      <AbsoluteFill style={{ backgroundColor: "rgba(255, 230, 170, 1)", opacity: flashOpacity }} />

      {/* Shake wrapper */}
      <AbsoluteFill style={{ transform: `translate(${shakeX}px, ${shakeY}px)` }}>
        {/* Wax left */}
        <AbsoluteFill style={{
          justifyContent: "center", alignItems: "center",
          transform: `translateX(${waxX}px) translateY(${postFloat}px) scale(${rushScale * interpolate(impactBounce, [0, 1], [0.85, 1])})`,
        }}>
          <Img src={staticFile("images/wax-cutout.png")} style={{
            height: isVertical ? "35%" : "55%",
            objectFit: "contain",
            filter: `drop-shadow(0 0 45px rgba(50, 100, 220, 0.6)) drop-shadow(0 15px 30px rgba(0,0,0,0.7))`,
          }} />
        </AbsoluteFill>

        {/* Anti-frizz right */}
        <AbsoluteFill style={{
          justifyContent: "center", alignItems: "center",
          transform: `translateX(${frizzX}px) translateY(${-postFloat}px) scale(${rushScale * interpolate(impactBounce, [0, 1], [0.85, 1])})`,
        }}>
          <Img src={staticFile("images/antifrizz-cutout.png")} style={{
            height: isVertical ? "40%" : "60%",
            objectFit: "contain",
            filter: `drop-shadow(0 0 45px rgba(128, 0, 255, 0.6)) drop-shadow(0 15px 30px rgba(0,0,0,0.7))`,
          }} />
        </AbsoluteFill>
      </AbsoluteFill>

      {/* VS */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{
          fontFamily: "sans-serif", fontSize: isVertical ? 56 : 68, fontWeight: 900,
          letterSpacing: "0.12em",
          opacity: vsSpring,
          transform: `scale(${interpolate(vsSpring, [0, 1], [2.5, 1])})`,
          background: "linear-gradient(180deg, #d4af37, #f5e6a3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          VS
        </div>
      </AbsoluteFill>

      {/* Bottom text */}
      <AbsoluteFill style={{
        justifyContent: "flex-end", alignItems: "center",
        padding: isVertical ? "0 40px 130px" : "0 0 55px",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 11 : 10,
            letterSpacing: "0.4em", color: "rgba(212, 175, 55, 0.7)",
            textTransform: "uppercase", marginBottom: 10,
            opacity: tagSpring,
          }}>
            Hold vs Silk · Strength vs Smoothness
          </div>
          <div style={{
            fontFamily: "sans-serif", fontSize: isVertical ? 42 : 50, fontWeight: 900,
            color: "white", letterSpacing: "-0.02em",
            opacity: titleSpring,
            transform: `scale(${interpolate(titleSpring, [0, 1], [0.85, 1])})`,
          }}>
            THE CLASH
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
