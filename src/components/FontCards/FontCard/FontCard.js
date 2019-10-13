import React from 'react';

import classes from './FontCard.module.css';

const fontcard = (props) => {

  return (
    <div className={classes.FontCard}>
      <div className={classes.Header}>
        <div className={classes.Title}>Font Name</div>
        <div> + </div>
      </div>
      <p className={classes.Text}>This is where the test text goes.</p>
    </div>
  );
}

export default fontcard;
