import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Service worker
import registerServiceWorker from './registerServiceWorker';

// Constants
import { BLOG_ROOT } from './constants';

// General Components
import Home from './homepage/Home';
import About from './about/About';
import Error404 from './error/Error404';

// Styles
import './index.css';



// Testing
import PostOne from './posts/post-one/PostOne';



ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path={`${BLOG_ROOT}/test-post-one`} component={PostOne} />
      <Route path="/about" component={About} />
      <Route component={Error404} />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);
registerServiceWorker();
