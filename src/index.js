import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Service worker
import * as serviceWorker from './serviceWorker';

// Constants
import { BLOG_ROOT } from './constants';

// General Components
import Home from './homepage/Home';
import About from './about/About';
import Articles from './articles/Articles';
import Error404 from './Error404';

// Styles
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`${BLOG_ROOT}/:slug`} element={<Articles />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
