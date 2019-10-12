import React from 'react';

import './App.css';
import Aux from './hoc/Aux/Aux';
import MinorNavbar from './components/Navigation/MinorNav/MinorNav';
import MajorNav from './components/Navigation/MajorNav/MajorNav';

function App() {
  return (
    <Aux>
      <MinorNavbar />
      <MajorNav />
    </Aux>
  );
}

export default App;
