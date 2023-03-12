import { 
  Component, 
  Host, 
  h, 
  Prop 
} from '@stencil/core';

@Component({
  tag: 'webtraining-personal-card',
  styleUrl: 'webtraining-personal-card.scss',
  shadow: true,
})
export class WebtrainingPersonalCard {

  @Prop() personalImg: string;
  @Prop() personalName: string;
  @Prop() personalLastName: string;

  render() {
    return (
      <Host>
        <div class="wrap-personal-card">
          <div class="wrap-personal-card__img">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Juanma" />
          </div>
          <div class="wrap-personal-card__name">
            <h2>Juanma</h2>
            <h2>Molins Cortés</h2>
          </div>
          <div class="wrap-personal-card__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil omnis obcaecati quia architecto accusamus exercitationem dolorum blanditiis veniam autem.
          </div>
        </div>
      </Host>
    );
  }
}
