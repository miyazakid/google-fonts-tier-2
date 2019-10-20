import React, {PureComponent} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './MajorNav.module.css';
import Input from '../../UI/Input/Input';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';
class MajorNav extends PureComponent {

  render () {

    return (
      <Aux>
        <div className={classes.MajorNav}>

          <Input inputtype="text" placeholder="Search..." bordertype="NoBorder" />

          <Input inputtype="text" placeholder="Testing fonts here..." bordertype="RightBorder" onChange={this.props.changed} maxLength="120"/>

          <div className={classes.SelectStyle}>
            <select>
             <option value="12px">12px</option>
             <option value="18px">18px</option>
             <option value="24px">24px</option>
             <option value="32px">32px</option>
            </select>
          </div>

          <div className={classes.ButtonGroup}>
            <Button btnType="Dark"/>
            <Button btnType="Light"/>
          </div>

          <Button><FontAwesomeIcon icon="list-ul" size="lg"/></Button>

          <Button><FontAwesomeIcon icon="redo-alt" size="lg"/></Button>
        </div>

        <div className={classes.MajorNavSmall}>

          <Input inputtype="text" placeholder="Search..."  />

          <Button><FontAwesomeIcon icon="redo-alt" size="lg"/></Button>
        </div>
      </Aux>
    );
  }
}

export default MajorNav;
