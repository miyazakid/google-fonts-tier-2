import React from 'react';
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './FontCard.module.css';

const fontcard = (props) => {

  let widthToggle = props.listCard;
  let cardWidth = null;
  if (widthToggle !== "FontCardFlex") {
    cardWidth = "CardWidthFull";
  } else {
    cardWidth = "CardWidth250";
  }

  return (
    <div id={props.id} className={[classes.FontCard, classes[cardWidth]].join(' ')}>
      <Helmet>
        {props.link}
      </Helmet>
      <div className={classes.Header}>
        <div className={classes.Title}>{props.font}</div>
        <div className={classes.Plus}><FontAwesomeIcon icon="plus-circle" size="lg" color="#40B0FF"/></div>
      </div>
      <p className={classes.Text} style={{fontFamily: props.font, fontSize: props.fontSize}}>{props.text}</p>
    </div>
  );
}

export default fontcard;
