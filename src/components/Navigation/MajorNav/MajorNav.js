import React, {PureComponent} from 'react';

import classes from './MajorNav.module.css';
import Input from '../../UI/Input/Input';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';
class MajorNav extends PureComponent {

  render () {

    return (
      <Aux>
        <div className={classes.MajorNav}>

          <Input inputtype="text" placeholder="Search..." />

          <Input inputtype="text" placeholder="Testing fonts here..." onChange={this.props.changed} maxLength="120"/>

          <select>
           <option value="12px">12px</option>
           <option value="18px">18px</option>
           <option value="24px">24px</option>
           <option value="32px">32px</option>
          </select>

          <div className={classes.RadioGroup}>
            <Button btnType="Danger">Hey</Button>
            <Button />
          </div>

          <button>Grid/List mode</button>

          <button>Reset</button>
        </div>

        <div className={classes.MajorNavSmall}>

          <Input inputtype="text" placeholder="Search..."  />

          <button>Reset</button>
        </div>
      </Aux>
    );
  }
}

export default MajorNav;
