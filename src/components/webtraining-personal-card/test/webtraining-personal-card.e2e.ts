import { newE2EPage } from '@stencil/core/testing';

describe('webtraining-personal-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<webtraining-personal-card></webtraining-personal-card>');

    const element = await page.find('webtraining-personal-card');
    expect(element).toHaveClass('hydrated');
  });
});
