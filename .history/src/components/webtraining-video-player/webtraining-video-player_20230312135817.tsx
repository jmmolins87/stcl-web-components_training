import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'webtraining-video-player',
  styleUrl: 'webtraining-video-player.scss',
  shadow: true,
})
export class WebtrainingVideoPlayer {

  @Prop() videoSource: string;

  render() {
    return (
      <Host>
        <div class="video-container">
        <iframe src="https://www.youtube.com/embed/zurGo4wUGEc" title="YouTube video player" frameborder="0"></iframe>
        </div>
      </Host>
    );
  }

}
