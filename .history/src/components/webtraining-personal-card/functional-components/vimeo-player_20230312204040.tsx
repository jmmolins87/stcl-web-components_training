import { FunctionalComponent, h } from '@stencil/core';

interface YouTubeInterface {
    videoSource: string;
}

export const YouTubePlayer: FunctionalComponent<YouTubeInterface> = ({ videoSource }) => {
    return (
        <div>
            <iframe src={videoSource} title="YouTube video player" frameborder="0"></iframe>
        </div>
    );
};
