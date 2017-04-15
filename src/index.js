import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './homepage/Home';
import ArticleWrapper from './article/ArticleWrapper'
import About from './about/About';
import Error404 from './error/Error404';

import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/article/:articleName" component={ArticleWrapper} />
      <Route path="/about" component={About} />
      <Route component={Error404} />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);
