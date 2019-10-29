import React from 'react';

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
      <div className={classes.Header}>
        <div className={classes.Title}>{props.font}</div>
        <div> + </div>
      </div>
      <p className={classes.Text} style={{fontFamily: props.font}}>{props.text}</p>
    </div>
  );
}

export default fontcard;
