import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Aux from './hoc/Aux/Aux';
import MinorNavbar from './components/Navigation/MinorNav/MinorNav';
import MajorNav from './components/Navigation/MajorNav/MajorNav';
import FontCards from './components/FontCards/FontCards';

import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown, faListUl, faRedoAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretUp, faCaretDown, faListUl, faRedoAlt, faPlusCircle)


class App extends Component {

  state = {
    text: "This is near, that's far away!",
    fonts: []
  }

  componentDidMount() {
    axios.get('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyBG-FePB1VPnmYo3LzVMx-k7Ap0UkzTLJs')
      .then(res => {
        console.log(res);
        let data = res.data.items;
        const fetchedFonts = [];
        data.map((f, index) => fetchedFonts.push({family: f.family, id: index}) );
        console.log(fetchedFonts);
        this.setState({fonts: fetchedFonts});
      }).catch(function (error) {
        console.log(error);
      });
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
