import React from 'react';

import classes from './MinorNav.module.css';

const minorNavbar = (props) => (
  <header className={classes.MinorNavbar}>
    <nav>
      <a className={classes.Logo} href="/"><strong>Google</strong> Fonts</a>
      <ul>
        <li><a href="/">Catalog</a></li>
        <li><a href="/">Featured</a></li>
        <li><a href="/">Articles</a></li>
        <li><a href="/">About</a></li>
      </ul>
    </nav>
  </header>
);

export default minorNavbar;
