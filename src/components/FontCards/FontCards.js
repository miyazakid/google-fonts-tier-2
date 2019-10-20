import React, { PureComponent } from 'react';

import classes from './FontCards.module.css';
import FontCard from './FontCard/FontCard';

class FontCards extends PureComponent {

    render () {
      let cardCollection = [];
      this.props.fonts.map((font, index) => {
        return cardCollection.push(
            <FontCard key={font.id} font={font.family} text={this.props.text}/>)
      });

      return (
          <div className={classes.FontCards}>
          {cardCollection}
          </div>
      );
  }
}

export default FontCards;
