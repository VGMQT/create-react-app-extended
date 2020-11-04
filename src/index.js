// It will automatically use the browserslist you've defined to only include polyfills needed by your target browsers
import 'react-app-polyfill/stable';
//--

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'ScrollToTop';
import App from 'App';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);
