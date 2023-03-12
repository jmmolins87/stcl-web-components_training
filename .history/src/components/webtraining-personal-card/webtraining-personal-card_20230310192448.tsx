import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'webtraining-personal-card',
  styleUrl: 'webtraining-personal-card.scss',
  shadow: true,
})
export class WebtrainingPersonalCard {

  render() {
    return (
      <Host>
        <div class="wrap-personal-card">
          <div class="wrap-personal-card__img"></div>
          <div class="wrap-personal-card__name"></div>
          <div class="wrap-personal-card__description"></div>
        </div>
      </Host>
    );
  }

}
