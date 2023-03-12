import { newSpecPage } from '@stencil/core/testing';
import { WebtrainingVideoPlayer } from '../webtraining-video-player';

describe('webtraining-video-player', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebtrainingVideoPlayer],
      html: `<webtraining-video-player></webtraining-video-player>`,
    });
    expect(page.root).toEqualHtml(`
      <webtraining-video-player>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </webtraining-video-player>
    `);
  });
});
