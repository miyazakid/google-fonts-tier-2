import React, { Component } from 'react';

import classes from './FontCards.module.css';
import Aux from '../../hoc/Aux/Aux';
import FontCard from './FontCard/FontCard';

class FontCards extends Component {

  render() {

    return (
        <Aux>
          <FontCard />
          <FontCard />
          <FontCard />
          <FontCard />
        </Aux>
    );
  }
}

export default FontCards;
