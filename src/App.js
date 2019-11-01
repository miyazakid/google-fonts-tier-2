import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Spinner from './components/UI/Spinner/Spinner';
import MinorNavbar from './components/Navigation/MinorNav/MinorNav';
import MajorNav from './components/Navigation/MajorNav/MajorNav';
import FontCards from './components/FontCards/FontCards';
import debounce from 'lodash.debounce';

// Importing Font Awesome and creating a library of icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretUp, faCaretDown, faListUl, faRedoAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretUp, faCaretDown, faListUl, faRedoAlt, faPlusCircle)

// initializing wait time for loadash debounce (this will be used for an onScroll event)
const waitTime = 200;


class App extends Component {

  state = {
    text: "This is small, they're far away!", // Initializes visible text on cards
    fonts: [], // Stores all fonts retrieved from Google Fonts API call
    loadedFonts: [], // Stores all fonts to be loaded to the DOM
    links: [], // Stores all the <link /> tags to be loaded to the <head /> tag
    loadIndex: 0, // Initializes where to start mapping fonts into loadedFonts
    colorMode: "white", // Initialize color mode
    listMode: "FontCardFlex", // Initialize list display mode
    fontSize: "24px", // Initialize font size
    resetFonts: [], // Stores font reset data
    resetText: "",  // Stores text reset data
    loading: true, // Set to true for spinner
    searching: false // Set to false so on scroll event will load more fonts
  }

  // When component mounts, Axios get request is sent to Google Fonts API
  componentDidMount() {
    this.downloadFonts();
  }


  componentDidUpdate(prevProps, prevState) {
    // Checks if the font text input is empty and resets it if it is
    if (this.state.text === "") {
      this.setState( {
        text: "This is small, they're far away!"
      });
    }
    // triggers onScroll event
      this.scrollListener = window.addEventListener("scroll", e => {
        this.scrollHandler(e);
      });
  }

  // This function is triggered in componentDidMount - loads fonts using axios
  downloadFonts = () => {
    axios.get('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyBG-FePB1VPnmYo3LzVMx-k7Ap0UkzTLJs')
      .then(res => {
        let data = res.data.items;
        const fetchedFonts = [];
        for (let i = 0; i < data.length; i++) {
          fetchedFonts.push({
            family: data[i].family,
            id: i,
            apiURL: 'https://fonts.googleapis.com/css?family=' + data[i].family.replace(/ /g, '+'),
            link: <link rel="stylesheet" href={'https://fonts.googleapis.com/css?family=' + data[i].family.replace(/ /g, '+')} key={[i]} />
          });
        }

        let loadedFonts = [];
        let num = 36;
        for (let i = 0; i < num; i++) {
          loadedFonts.push({
            family: data[i].family,
            id: i,
            apiURL: 'https://fonts.googleapis.com/css?family=' + data[i].family.replace(/ /g, '+'),
            link: <link rel="stylesheet" href={'https://fonts.googleapis.com/css?family=' + data[i].family.replace(/ /g, '+')} key={[i]} />
          });
        }

        const fontLinks = [];
        for (let i = 0; i < 36; i++) {
          fontLinks.push(fetchedFonts[i].link);
        }

        this.setState({
          fonts: fetchedFonts,
          loadedFonts: loadedFonts,
          resetFonts: loadedFonts,
          resetLinks: fontLinks,
          loadIndex: num,
          links: fontLinks,
          loading: false});
      }).catch(function (error) {
        console.log(error);
      });
  }

  // Used with the onScroll event to load more fonts to the DOM
  loadMoreFontsToDOM = () => {
    let fonts = [...this.state.fonts];
    let loadedFonts = [...this.state.loadedFonts];
    let links = [...this.state.links];
    let num = this.state.loadIndex + 36;
    for (let i = this.state.loadIndex; i < num; i++) {
      loadedFonts.push(fonts[i]);
      links.push(fonts[i].link);
    }
    this.setState({loadedFonts: loadedFonts, links: links, loadIndex: num});
  }

  scrollHandler = debounce(() => {
    let lastElement = document.querySelector("div.FontCard_FontCard__2H941:last-child");
    let lastElementOffset = lastElement.offsetTop + lastElement.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;

    if (pageOffset > lastElementOffset && !this.state.searching) {
      this.loadMoreFontsToDOM();
    }
  }, waitTime);

  textChangedHandler = (event) => {
      this.setState( {
        text: event.target.value,
        resetText: event.target.value
      })
  }

  searchHandler = (event) => {
    let currentFonts = [];
    let searchResults = [];
    let searching = null;
    let count = 0;

    if (event.target.value !== "") {
      searching = true;

      currentFonts = this.state.fonts;
      searchResults = currentFonts.filter(font => {
        const lc = font.family.toLowerCase();
        const filter = event.target.value.toLowerCase();
        return lc.includes(filter) && count++ < 36;
      });
    } else {
      searchResults = this.state.resetFonts;
      searching = false;
    }
    this.setState({
      loadedFonts: searchResults,
      searching: searching
    });
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

  resetHandler = () => {
    this.setState({
      text: "This is small, they're far away!",
      resetText: "",
      loadedFonts: this.state.resetFonts,
      links: this.state.resetLinks,
      colorMode: "white",
      loadIndex: 36,
      listMode: "FontCardFlex",
      searching: false
    });
  }

  render () {
    let fontCards = <FontCards
        text={this.state.text}
        fonts={this.state.loadedFonts}
        fontSize={this.state.fontSize}
        displayState={this.state.listMode}/>;

    if (this.state.loading) {
      fontCards = <Spinner />;
    }

    return (
      <div className={this.state.colorMode === "black" ? "black" : "white"}>
        <MinorNavbar />
        <MajorNav
            text={this.state.resetText}
            changed={this.textChangedHandler}
            search={this.searchHandler}
            colorMode={this.colorModeHandler}
            activeColor={this.state.colorMode}
            listMode={this.listModeHandler}
            changeFontSize={this.fontSizeHandler}
            fontSize={this.state.fontSize}
            reset={this.resetHandler}/>
        {fontCards}
      </div>
    );
  }
}

export default App;
