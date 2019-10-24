import React, { PureComponent } from 'react';

import FontURL from './FontURL/FontURL';

class FontURLs extends PureComponent {

    render () {
      let fontCollection = [];
      this.props.apiURL.map(link => {
        return fontCollection.push(
            <FontURL url={link}/>)
      });

      return (
          <head>
          {fontCollection}
          </head>
      );
  }
}

export default FontURLs;
