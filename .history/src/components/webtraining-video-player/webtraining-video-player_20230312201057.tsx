import { Component, Host, h, Prop } from '@stencil/core';


@Component({
  tag: 'webtraining-video-player',
  styleUrl: 'webtraining-video-player.scss',
  shadow: true,
})
export class WebtrainingVideoPlayer {

  @Prop() videoSource: string;
  @Prop() provider: string;

  render() {

    if( !this.videoSource ) {
      return <div class="alert alert__danger">
        <span>No hay ningún vídeo que reproducir</span>
      </div>
    }

    return (
      <Host>
        <div class="video-container">
          {this.provider === 'YouTube' && (
            <div>
              <iframe src={this.videoSource} title="YouTube video player" frameborder="0"></iframe>
              <h3>{this.provider}</h3>
            </div>
          )}
          ,
          {this.provider === 'YouTube' && (
            <div>
              <iframe
                frameborder="0"
              ></iframe>
              <script src={ this.videoSource }></script>
              <h3>{this.provider}</h3>
            </div>
          )}
        </div>
      </Host>
    );
  }

}
