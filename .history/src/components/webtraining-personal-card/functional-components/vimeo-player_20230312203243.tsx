import { FunctionalComponent, h } from "@stencil/core";

interface VideoInterface {
    videoSource: string;
}

export const vimeoPlayer: FunctionalComponent<VideoInterface> = ({ videoSource }) => {
  return (
    <div>
      <iframe src={videoSource} title="YouTube video player" frameborder="0"></iframe>
      
    </div>
  );
};