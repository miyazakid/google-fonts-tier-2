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
    text: "This is small, they're far away!",
    fonts: [],
    loadIndex: 0
  }

  componentDidMount() {
    this.loadFonts();

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.text === "") {
      this.setState( {
        text: "This is small, they're far away!"
      });
    }
    this.scrollListener = window.addEventListener("scroll", e => {
      this.scrollHandler(e);
    });
  }

  loadFonts = () => {
    axios.get('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyBG-FePB1VPnmYo3LzVMx-k7Ap0UkzTLJs')
      .then(res => {
        let data = res.data.items;
        let num = this.state.loadIndex + 36;
        const fetchedFonts = [...this.state.fonts];
        for (let i = this.state.loadIndex; i < num; i++) {
          fetchedFonts.push({family: data[i].family, id: i})
        }
        this.setState({fonts: fetchedFonts, loadIndex: this.state.loadIndex + 36});
      }).catch(function (error) {
        console.log(error);
      });
  }

  loadMoreFonts = () => {
    this.loadFonts();
  }

  scrollHandler = () => {
    let lastElement = document.querySelector("div.FontCard_FontCard__2H941:last-child");
    let lastElementOffset = lastElement.offsetTop + lastElement.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;

    if (pageOffset > lastElementOffset) {
      this.loadMoreFonts();
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
