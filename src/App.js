import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
// import Aux from './hoc/Aux/Aux';
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
    loadedFonts: [],
    loadIndex: 0,
    colorMode: "white",
    listMode: "FontCardFlex",
    fontSize: "24px"
  }

  componentDidMount() {
    this.downloadFonts();
    
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

  downloadFonts = () => {
    axios.get('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyBG-FePB1VPnmYo3LzVMx-k7Ap0UkzTLJs')
      .then(res => {
        let data = res.data.items;

        const fetchedFonts = [...this.state.fonts];
        for (let i = 0; i < data.length; i++) {
          fetchedFonts.push({family: data[i].family, id: i, apiURL: 'https://fonts.googleapis.com/css?family=' + data[i].family.replace(/ /g, '+')})
        }

        let loadedFonts = [...this.state.loadedFonts];
        let num = this.state.loadIndex + 36;
        for (let i = this.state.loadIndex; i < num; i++) {
          loadedFonts.push({family: data[i].family, id: i, apiURL: 'https://fonts.googleapis.com/css?family=' + data[i].family.replace(/ /g, '+')})
        }
        this.setState({fonts: fetchedFonts, loadedFonts: loadedFonts});
      }).catch(function (error) {
        console.log(error);
      });
  }

  loadFontsToDOM = () => {



  }

  loadMoreFontsToDOM = () => {
    this.loadFontsToDOM();
  }

  scrollHandler = debounce(() => {
    let lastElement = document.querySelector("div.FontCard_FontCard__2H941:last-child");
    let lastElementOffset = lastElement.offsetTop + lastElement.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;

    if (pageOffset > lastElementOffset) {
      this.loadMoreFontsToDOM();
    }
  }, waitTime);

  textChangedHandler = (event) => {
      this.setState( {
        text: event.target.value
      })
  }

  colorModeHandler = () => {
    if (this.state.colorMode !== "black") {
      this.setState({ colorMode: "black" });
    } else {
      this.setState({ colorMode: "white" });
    }
  }

  listModeHandler = () => {
    if (this.state.listMode !== "FontCardFlex") {
      this.setState({ listMode: "FontCardFlex" });
    } else {
      this.setState({ listMode: "FontCardBlock" });
    }
  }

  fontSizeHandler = (event) => {
    this.setState({fontSize: event.target.value})
  }

  render () {

    return (
      <div className={this.state.colorMode === "black" ? "black" : "white"}>

        <FontURLs apiURL={this.state.fonts}/>

        <MinorNavbar />
        <MajorNav
            changed={this.textChangedHandler}
            colorMode={this.colorModeHandler}
            activeColor={this.state.colorMode}
            listMode={this.listModeHandler}
            changeFontSize={this.fontSizeHandler}
            fontSize={this.state.fontSize} />
        <FontCards
          text={this.state.text}
          fonts={this.state.fonts}
          fontSize={this.state.fontSize}
          displayState={this.state.listMode}/>
      </div>
    );
  }
}

export default App;
