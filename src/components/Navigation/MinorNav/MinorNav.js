import React from 'react';

import classes from './MinorNav.module.css';

const minorNavbar = (props) => (
  <header className={classes.MinorNavbar}>
    <div><strong>Google</strong> Fonts</div>
    <nav>
      <ul>
        <li><a href="/">Catalog</a></li>
        <li><a href="/">Featured</a></li>
        <li><a href="/">Articles</a></li>
        <li><a href="/">About link list</a></li>
      </ul>
    </nav>
  </header>
);

export default minorNavbar;
