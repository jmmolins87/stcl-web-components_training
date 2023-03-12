import { Component, Host, h, Prop } from '@stencil/core';
import { urlToHttpOptions } from 'url';

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
        <iframe src={ this.videoSource } title="YouTube video player" frameborder="0"></iframe>
        </div>
      </Host>
    );
  }

}
