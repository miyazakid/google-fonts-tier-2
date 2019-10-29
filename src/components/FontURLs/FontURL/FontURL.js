import React from 'react';

const FontURL = (props) => {
  return (
    <link rel="stylesheet" href={props.url} id={props.key}/>
  );
}

export default FontURL;
