import React from 'react';

class Card extends React.Component {

  render() {
    return (
      <section className='card'>
        {!this.props.loading && 
          <div>
            <div className='card__title-wrapper'>
              <h1 className='card__title'>Advice #{this.props.index}</h1>
            </div>
            <div className='card__paragraph-wrapper'>
              <p className='card__paragraph'>“{this.props.advice}”</p>
            </div>
            <picture className='card__divider'>
              <source srcSet='../../images/pattern-divider-desktop.svg' media='(min-width: 400px)' />
              <img src="../../images/pattern-divider-mobile.svg" alt="pattern divider" />
            </picture>
            <div className='card__dice-icon' onClick={this.props.onClick}>
              <img src="../../images/icon-dice.svg" alt="icon dice"/>
            </div>
          </div>
        }
    </section>
    )
  }
}

export default Card;