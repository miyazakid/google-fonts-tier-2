import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import './App.css';
// import Aux from './hoc/Aux/Aux';
import Spinner from './components/UI/Spinner/Spinner';
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
    fontSize: "24px",
    links: [],
    loading: true
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
          fetchedFonts.push({
            family: data[i].family,
            id: i,
            apiURL: 'https://fonts.googleapis.com/css?family=' + data[i].family.replace(/ /g, '+')
          });
        }

        let loadedFonts = [];
        let num = 36;
        for (let i = 0; i < num; i++) {
          loadedFonts.push({
            family: data[i].family,
            id: i,
            apiURL: 'https://fonts.googleapis.com/css?family=' + data[i].family.replace(/ /g, '+')
          });
        }

        const fontURLs = [];
        const fontLinks = [];
        for (let i = 0; i < fetchedFonts.length; i++) {
          fontURLs.push(fetchedFonts[i].apiURL);
        }
        fontURLs.map((url, i) => {
          fontLinks.push(
            <link rel="stylesheet" href={url} key={i} />
          )
        })

        this.setState({
          fonts: fetchedFonts,
          loadedFonts: loadedFonts,
          loadIndex: num,
          links: fontLinks,
          loading: false});
      }).catch(function (error) {
        console.log(error);
      });
  }


  loadMoreFontsToDOM = () => {
    let fonts = [...this.state.fonts];
    let loadedFonts = [...this.state.loadedFonts];
    let num = this.state.loadIndex + 36;
    for (let i = this.state.loadIndex; i < num; i++) {
      loadedFonts.push(fonts[i]);
    }
    this.setState({loadedFonts: loadedFonts, loadIndex: num});
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
        <Helmet>
          {this.state.links}
        </Helmet>
        <MinorNavbar />
        <MajorNav
            changed={this.textChangedHandler}
            colorMode={this.colorModeHandler}
            activeColor={this.state.colorMode}
            listMode={this.listModeHandler}
            changeFontSize={this.fontSizeHandler}
            fontSize={this.state.fontSize} />
        {fontCards}
      </div>
    );
  }
}

export default App;
