import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";
import { StylingVideo } from "./StylingVideo";
import { AntiFrizzVideo } from "./AntiFrizzVideo";
import { ClashVideo } from "./ClashVideo";

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
      <Composition
        id="heem-antifrizz-horizontal"
        component={AntiFrizzVideo}
        durationInFrames={590}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ orientation: "horizontal" as const }}
      />
      <Composition
        id="heem-antifrizz-vertical"
        component={AntiFrizzVideo}
        durationInFrames={590}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ orientation: "vertical" as const }}
      />
      <Composition
        id="heem-clash-horizontal"
        component={ClashVideo}
        durationInFrames={650}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ orientation: "horizontal" as const }}
      />
      <Composition
        id="heem-clash-vertical"
        component={ClashVideo}
        durationInFrames={650}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ orientation: "vertical" as const }}
      />
    </>
  );
};
