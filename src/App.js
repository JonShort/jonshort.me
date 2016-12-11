import React, { Component } from 'react';

import Header from './header/header';
import Body from './body';
import Footer from './footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
