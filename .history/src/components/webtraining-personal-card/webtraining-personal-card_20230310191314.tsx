import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'webtraining-personal-card',
  styleUrl: 'webtraining-personal-card.css',
  shadow: true,
})
export class WebtrainingPersonalCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
