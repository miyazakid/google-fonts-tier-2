import React, { Component } from 'react';

import classes from './FontCards.module.css';
import Aux from '../../hoc/Aux/Aux';
import FontCard from './FontCard/FontCard';

class FontCards extends Component {

  render() {

    return (
        <div className={classes.FontCards}>
          <FontCard />
          <FontCard />
          <FontCard />
          <FontCard />
          <FontCard />
        </div>
    );
  }
}

export default FontCards;
