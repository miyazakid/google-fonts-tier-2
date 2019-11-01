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

          <Input inputtype="text" placeholder="Search..." onChange={this.props.search} bordertype="NoBorder" maxLength="50" />

          <Input inputtype="text" placeholder="Testing fonts here..." onChange={this.props.changed} value={this.props.text} bordertype="RightBorder" maxLength="120"/>

          <div className={classes.SelectStyle}>
            <select value={this.props.fontSize} className={this.props.activeColor} onChange={this.props.changeFontSize}>
             <option className={this.props.activeColor} value="12px">12px</option>
             <option className={this.props.activeColor} value="18px">18px</option>
             <option className={this.props.activeColor} value="24px">24px</option>
             <option className={this.props.activeColor} value="32px">32px</option>
            </select>
          </div>

          <div className={classes.ButtonGroup}>
            <Button btnType={this.props.activeColor} clicked={this.props.colorMode} />
          </div>

          <Button clicked={this.props.listMode}><FontAwesomeIcon icon="list-ul" size="lg" color={this.props.activeColor === "white" ? "black" : "white"}/></Button>

          <Button clicked={this.props.reset}><FontAwesomeIcon icon="redo-alt" size="lg" color={this.props.activeColor === "white" ? "black" : "white"}/></Button>
        </div>

        <div className={classes.MajorNavSmall}>

          <Input inputtype="text" placeholder="Search..." onChange={this.props.search} bordertype="NoBorder" maxLength="50" />

          <Button clicked={this.props.reset}><FontAwesomeIcon icon="redo-alt" size="lg" color={this.props.activeColor === "white" ? "black" : "white"}/></Button>
        </div>
      </Aux>
    );
  }
}

export default MajorNav;
