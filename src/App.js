import React from 'react';

import './App.css';
import Aux from './hoc/Aux/Aux';
import MinorNavbar from './components/Navigation/MinorNav/MinorNav';
import MajorNav from './components/Navigation/MajorNav/MajorNav';
import FontCards from './components/FontCards/FontCards';

function App() {
  return (
    <Aux>
      <MinorNavbar />
      <MajorNav />
      <FontCards />
    </Aux>
  );
}

export default App;
