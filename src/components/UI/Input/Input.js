import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
  let inputElement = null;

  switch (props.inputtype) {
    case ('text'):
      inputElement = <input type="text" className={[classes.InputElement, classes[props.bordertype]].join(' ')} {...props} />;
      break;
    case ('radio'):
      inputElement = (
        <div className={classes.Radio}>
          <input type="radio" className={classes.InputElement} {...props} />
          <label htmlFor={props.id}><span>{props.label}</span></label>
        </div>
      );
      break;
    default:
      inputElement = <input type="text" className={[classes.InputElement, classes[props.bordertype]].join(' ')} {...props} />;
  }

  return (
    <div className={classes.Input}>
      {inputElement}
    </div>
  );
}

export default input;
