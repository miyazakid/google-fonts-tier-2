import React from 'react';

import classes from './MajorNav.module.css';

const MajorNav = (props) => (
  <div className={classes.MajorNav}>

    <input type="text" placeholder="Search..." />

    <input type="text" placeholder="Testing fonts here..." />

    <select>
     <option value="12px">12px</option>
     <option value="18px">18px</option>
     <option value="24px">24px</option>
     <option value="32px">32px</option>
    </select>

    <div>
      <input type="radio" name="colormode" value="dark" />
      <input type="radio" name="colormode" value="light" />
    </div>

    <button>Grid/List mode</button>

    <button>Reset</button>
  </div>
);

export default MajorNav;
