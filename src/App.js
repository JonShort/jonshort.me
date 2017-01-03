import React from 'react';

import Footer from './footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
