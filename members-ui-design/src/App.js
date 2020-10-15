import React from 'react';

import Main from './components/Main';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Main />
    </div>
  );
}

export default App;
