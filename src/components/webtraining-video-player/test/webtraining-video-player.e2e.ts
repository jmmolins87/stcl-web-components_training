import { newE2EPage } from '@stencil/core/testing';

describe('webtraining-video-player', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<webtraining-video-player></webtraining-video-player>');

    const element = await page.find('webtraining-video-player');
    expect(element).toHaveClass('hydrated');
  });
});
