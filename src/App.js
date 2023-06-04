import React, { Fragment } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { flexColumn } from './theme/CustomTheme';
import { Routes, Route, useLocation } from 'react-router-dom';
import "./index.css";
import "./assets/fonts/Holland.ttf";

import NavHome from './components/header/NavHome';
import NavPage from './components/header/NavPage';
import Footer from './components/footer/Footer';

import Home from './components/pages/Home';
import ResumePage from './components/pages/ResumePage';
import ParkPage from './components/pages/ParkPage';
import TypingPage from './components/pages/TypingPage';
import PortfolioPage from './components/pages/PortfolioPage';
import TeslaPage from './components/pages/TeslaPage';

// DOM refresh returns user to the hero section
window.onbeforeunload = () => {

  window.scrollTo(0,0);

};

function App() {

  const location = useLocation();

  return (
    <Fragment>
      <CssBaseline />
        <Box sx={flexColumn}>
          { location.pathname === "/" ? ( <NavHome /> ) : ( <NavPage />) }
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/national-park-service-finder" element={<ParkPage />} />
              <Route exact path="/rehab-typing-test" element={<TypingPage />} />
              <Route exact path="/my-portfolio" element={<PortfolioPage />} />
              <Route exact path="/tesla-clone" element={<TeslaPage />} />
              <Route exact path="/resume" element={<ResumePage />} />
            </Routes>
          <Footer />
        </Box>
    </Fragment>
  );
};

export default App;
