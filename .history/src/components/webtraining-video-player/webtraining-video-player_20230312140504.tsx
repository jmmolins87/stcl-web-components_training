import { Component, Host, h, Prop } from '@stencil/core';


@Component({
  tag: 'webtraining-video-player',
  styleUrl: 'webtraining-video-player.scss',
  shadow: true,
})
export class WebtrainingVideoPlayer {

  @Prop() videoSource: string;

  render() {

    if( !this.videoSource ) {
      <div class="alert alert__danger">
        <span>No hay ningún vídeo que reproducir</span>
      </div>
    }

    return (
      <Host>
        <div class="video-container">
        <iframe src={ this.videoSource } title="YouTube video player" frameborder="0"></iframe>
        </div>
      </Host>
    );
  }

}
