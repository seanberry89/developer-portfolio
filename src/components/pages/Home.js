import React, { Fragment } from 'react';

import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ProjectSection from '../sections/ProjectSection';
import ContactSection from '../sections/ContactSection';


const Home = () => {

  return (

    <Fragment>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </Fragment>

  );
};

export default Home;
