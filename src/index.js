import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import Home from './homepage/Home';
import ArticleWrapper from './article/ArticleWrapper'
import About from './about/About';
import Error404 from "./error/Error404";
import './index.css';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="article/:articleName" component={ArticleWrapper}>
        <Route path="**" component={Error404} />
      </Route>
      <Route path="about" component={About} />
      <Route path="*" component={Error404} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
