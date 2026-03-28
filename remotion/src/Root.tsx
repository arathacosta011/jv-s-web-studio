import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";
import { StylingVideo } from "./StylingVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="heem-promo-horizontal"
        component={MainVideo}
        durationInFrames={550}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ orientation: "horizontal" as const }}
      />
      <Composition
        id="heem-promo-vertical"
        component={MainVideo}
        durationInFrames={550}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ orientation: "vertical" as const }}
      />
      <Composition
        id="heem-styling-horizontal"
        component={StylingVideo}
        durationInFrames={550}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ orientation: "horizontal" as const }}
      />
      <Composition
        id="heem-styling-vertical"
        component={StylingVideo}
        durationInFrames={550}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ orientation: "vertical" as const }}
      />
    </>
  );
};
