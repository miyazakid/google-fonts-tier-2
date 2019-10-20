import React, { Component } from 'react';

import './App.css';
import Aux from './hoc/Aux/Aux';
import MinorNavbar from './components/Navigation/MinorNav/MinorNav';
import MajorNav from './components/Navigation/MajorNav/MajorNav';
import FontCards from './components/FontCards/FontCards';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faListUl, faRedoAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretUp, faCaretDown, faListUl, faRedoAlt, faPlusCircle)


class App extends Component {

  state = {
    text: "This is near, that's far away!",
    fonts: [
      {family: "Roboto", id: '1'},
      {family: "Lato", id: '2'},
      {family: "Open Sans", id: '3'},
      {family: "Montserrat", id: '4'},
      {family: "Roboto Condensed", id: '5'},
      {family: "Roboto", id: '6'},
      {family: "Lato", id: '7'},
      {family: "Open Sans", id: '8'},
      {family: "Montserrat", id: '9'},
      {family: "Roboto Condensed", id: '10'}
    ]
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.text === "") {
      this.setState( {
        text: "This is near, that's far away!"
      })
    }
  }

  textChangedHandler = (event) => {
      this.setState( {
        text: event.target.value
      })
  }

  render () {

    return (
      <Aux>
        <MinorNavbar />
        <MajorNav changed={this.textChangedHandler}/>
        <FontCards
          text={this.state.text}
          fonts={this.state.fonts}/>
      </Aux>
    );
  }
}

export default App;
