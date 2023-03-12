import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'webtraining-video-player',
  styleUrl: 'webtraining-video-player.scss',
  shadow: true,
})
export class WebtrainingVideoPlayer {

  render() {
    return (
      <Host>
        <iframe
          width="100"
          height="auto"
          src="https://www.youtube.com/embed/zurGo4wUGEc"
          title="YouTube video player"
          frameborder="0">
        </iframe>
      </Host>
    );
  }

}
