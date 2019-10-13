import React from 'react';

import classes from './MajorNav.module.css';
import Input from '../../UI/Input/Input';

const MajorNav = (props) => (
  <div className={classes.MajorNav}>

    <Input inputtype="text" placeholder="Search..." />

    <Input inputtype="text" placeholder="Testing fonts here..." />

    <select>
     <option value="12px">12px</option>
     <option value="18px">18px</option>
     <option value="24px">24px</option>
     <option value="32px">32px</option>
    </select>

    <div className={classes.RadioGroup}>
      <Input inputtype="radio" id="dark" label="" name="colormode" value="dark" />
      <Input inputtype="radio" id="light" label="" name="colormode" value="light" />
    </div>

    <button>Grid/List mode</button>

    <button>Reset</button>
  </div>
);

export default MajorNav;
