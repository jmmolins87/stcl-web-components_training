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
          {this.provider === 'Vimeo' && (
            <div>
              <div>
                <iframe src="https://player.vimeo.com/video/806311047?h=7a4daebb0c" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
              <p>
                <a href="https://vimeo.com/806311047">Expedia - Plates (DC)</a> from <a href="https://vimeo.com/akacanada">CANADA</a> on <a href="https://vimeo.com">Vimeo</a>.
              </p>
              <h3>{this.provider}</h3>
            </div>
          )}
        </div>
      </Host>
    );
  }

}


