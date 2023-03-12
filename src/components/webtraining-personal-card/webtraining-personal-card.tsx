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
  @Prop() personalRole: string;
  @Prop() personalDescription: string;

  render() {
    return (
      <Host>
        <div class="wrap-personal-card">
          <div class="alert alert-danger">Estilos de Bootstrap dentro del Shadow Dom</div>
          <div class="wrap-personal-card__img">
            <img src={this.personalImg} alt={this.personalName} title={this.personalName} />
          </div>
          <div class="wrap-personal-card__name">
            <h2>{this.personalName}</h2>
            <h2>{this.personalLastName}</h2>
          </div>
          <div class="wrap-personal-card__role">
            <h3>{this.personalRole}</h3>
          </div>
          <div class="wrap-personal-card__description">
            <p>{this.personalDescription}</p>
          </div>
        </div>
      </Host>
    );
  }
}
