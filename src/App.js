import React, { Component } from 'react';

import './App.css';
import Aux from './hoc/Aux/Aux';
import MinorNavbar from './components/Navigation/MinorNav/MinorNav';
import MajorNav from './components/Navigation/MajorNav/MajorNav';
import FontCards from './components/FontCards/FontCards';

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

  render () {

    return (
      <Aux>
        <MinorNavbar />
        <MajorNav />
        <FontCards
          text={this.state.text}
          fonts={this.state.fonts}/>
      </Aux>
    );
  }
}

export default App;
