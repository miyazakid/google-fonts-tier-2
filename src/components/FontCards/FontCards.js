import React, { PureComponent } from 'react';

import classes from './FontCards.module.css';
import FontCard from './FontCard/FontCard';

class FontCards extends PureComponent {

    render () {
      let cardCollection = [];
      this.props.fonts.map((font, index) => {
        return cardCollection.push(
            <FontCard
                key={font.id}
                font={font.family}
                fontSize={this.props.fontSize}
                text={this.props.text}
                listCard={this.props.displayState}/>)
      });

      return (
          <div className={[classes.FontCards, classes[this.props.displayState]].join(' ')}>
          {cardCollection}
          </div>
      );
  }
}

export default FontCards;
