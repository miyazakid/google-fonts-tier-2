import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Aux from './hoc/Aux/Aux';
import MinorNavbar from './components/Navigation/MinorNav/MinorNav';
import MajorNav from './components/Navigation/MajorNav/MajorNav';
import FontCards from './components/FontCards/FontCards';
import FontURLs from './components/FontURLs/FontURLs';
import debounce from 'lodash.debounce';

import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown, faListUl, faRedoAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretUp, faCaretDown, faListUl, faRedoAlt, faPlusCircle)

const waitTime = 100;

class App extends Component {

  state = {
    text: "This is small, they're far away!",
    fonts: [],
    loadIndex: 0,
    colorMode: "Light"
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
          fetchedFonts.push({family: data[i].family, id: i, apiURL: 'https://fonts.googleapis.com/css?family=' + data[i].family.replace(/ /g, '+')})
        }
        this.setState({fonts: fetchedFonts, loadIndex: this.state.loadIndex + 36});
      }).catch(function (error) {
        console.log(error);
      });
  }

  loadMoreFonts = () => {
    this.loadFonts();
  }

  scrollHandler = debounce(() => {
    let lastElement = document.querySelector("div.FontCard_FontCard__2H941:last-child");
    let lastElementOffset = lastElement.offsetTop + lastElement.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;

    if (pageOffset > lastElementOffset) {
      this.loadMoreFonts();
    }
  }, waitTime);

  textChangedHandler = (event) => {
      this.setState( {
        text: event.target.value
      })
  }

  colorModeHandler = () => {
    if (this.state.colorMode != "Dark") {
      this.setState({ colorMode: "Dark" });
    } else {
      this.setState({ colorMode: "Light" });
    }
  }

  render () {

    return (
      <div className={this.state.colorMode === "Dark" ? "Darkness" : "Lightness"}>
      <FontURLs apiURL={this.state.fonts}/>
        <MinorNavbar />
        <MajorNav changed={this.textChangedHandler} colorMode={this.colorModeHandler} activeColor={this.state.colorMode}/>
        <FontCards
          text={this.state.text}
          fonts={this.state.fonts}/>
      </div>
    );
  }
}

export default App;
