import React, { PureComponent } from 'react';

import FontURL from './FontURL/FontURL';

class FontURLs extends PureComponent {

    render () {
      let fontCollection = [];
      this.props.apiURL.map(link => {
        return fontCollection.push(
            <FontURL url={link.apiURL} key={link.id}/>)
      });

      return (
          <div>
          {fontCollection}
          </div>
      );
  }
}

export default FontURLs;
