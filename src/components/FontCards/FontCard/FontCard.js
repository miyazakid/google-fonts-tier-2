import React from 'react';

import classes from './FontCard.module.css';

const fontcard = (props) => {

  return (
    <div id={props.id} className={classes.FontCard}>
      <div className={classes.Header}>
        <div className={classes.Title}>{props.font}</div>
        <div> + </div>
      </div>
      <p className={classes.Text} style={{fontFamily: props.font}}>{props.text}</p>
    </div>
  );
}

export default fontcard;
