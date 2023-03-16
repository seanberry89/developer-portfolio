import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import ProjectSection from '../ProjectSection';
import ContactSection from '../ContactSection';

import { flexColumn } from '../../theme/CustomTheme';

const Homepage = () => {
  return (
    <Box sx={flexColumn}>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </Box>
  );
};

export default Homepage;
