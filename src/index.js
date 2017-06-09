import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// General Components
import Home from './homepage/Home';
import About from './about/About';
import Error404 from './error/Error404';

// Articles
import {
  UsingReactTachyons
} from './articles/composed';

// Styles
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/article/using-react-tachyons" component={UsingReactTachyons} />
      <Route path="/about" component={About} />
      <Route component={Error404} />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);
