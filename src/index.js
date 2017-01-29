import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import Home from './homepage/Home';
import ArticleWrapper from './article/ArticleWrapper'
import './index.css';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path=":articleName" component={ArticleWrapper} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
