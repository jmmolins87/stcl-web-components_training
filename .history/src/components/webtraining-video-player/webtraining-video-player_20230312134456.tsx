import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'webtraining-video-player',
  styleUrl: 'webtraining-video-player.css',
  shadow: true,
})
export class WebtrainingVideoPlayer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
