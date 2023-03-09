import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';


import PortfolioTheme from './theme/PortfolioTheme';
import RouterScroll from './utils/RouterScroll';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(

  <Router>
    <PortfolioTheme>
      <RouterScroll>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </RouterScroll>
    </PortfolioTheme>
  </Router>

);
