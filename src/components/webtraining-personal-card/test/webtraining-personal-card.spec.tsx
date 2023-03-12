import { newSpecPage } from '@stencil/core/testing';
import { WebtrainingPersonalCard } from '../webtraining-personal-card';

describe('webtraining-personal-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebtrainingPersonalCard],
      html: `<webtraining-personal-card></webtraining-personal-card>`,
    });
    expect(page.root).toEqualHtml(`
      <webtraining-personal-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </webtraining-personal-card>
    `);
  });
});
