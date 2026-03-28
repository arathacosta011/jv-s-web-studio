import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";

export const RemotionRoot = () => (
  <>
    <Composition
      id="heem-promo-horizontal"
      component={MainVideo}
      durationInFrames={600}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{ orientation: "horizontal" as const }}
    />
    <Composition
      id="heem-promo-vertical"
      component={MainVideo}
      durationInFrames={600}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{ orientation: "vertical" as const }}
    />
  </>
);
