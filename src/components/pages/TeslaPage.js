import React, { Fragment, useState } from 'react';
import { Box, Button, Paper, Stack, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

import { imageDot } from '../../theme/CustomTheme';

import forest from '../../images/forest-transparent.png';
import TeslaHomepage from '../../images/project-images/tesla-homepage/tesla-homepage.png';
import TeslaMenu from '../../images/project-images/tesla-homepage/tesla-menu.png';
import TeslaFooter from '../../images/project-images/tesla-homepage/tesla-accessories.png';
import TeslaMobile from '../../images/project-images/tesla-homepage/tesla-mobile.png';


document.onload = () => {
  window.scrollTo(0,0);
}


const images = [

  {
    id: 1,
    url: TeslaHomepage
  },
  {
    id: 2,
    url: TeslaMenu
  },
  {
    id: 3,
    url: TeslaFooter
  },
  {
    id: 4,
    url: TeslaMobile
  }

];

const ForestBackground = styled(Box) `
  background-image: url(${forest}), url(${forest});
  background-size: 750px, 750px;
  background-repeat: no-repeat;
  background-position: right -45px bottom 40px, left -45px bottom 40px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const PageImage = styled(Box) `
  display: block;
  height: 400px;
  object-fit: cover;
  opacity: 0.75;
`;

const MobileImage = styled(Box) `
  display: block;
  height: 400px;
  object-fit: contain;
  opacity: 0.75;
`;

const PageLinks = styled(Link) `
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  background: red;
  border-radius: 5px;
  padding: 6px 12px;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const ChallengeImage = styled(Box) `
  height: 200px;
  width: 150px;
  object-fit: cover;
  overflow: hidden;
  transition: transform 1s ease-in-out;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
  }
`;

const TeslaPage = () => {

  return (

      <Box sx={{ position: "relative", backgroundColor: theme => theme.palette.primary.main, overflow: "hidden", py: 10 }}>

        <ForestBackground></ForestBackground>
        <Stack sx={{ position: "relative", textAlign: "center", px: 3 }} direction="column" justifyContent="center" alignItems="center">

          <TeslaImageSwipe />

          <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
            <Typography variant="h4">Tesla Clone</Typography>

            <Paper sx={{ width: "200px", backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <Typography color="#F0DB4F" variant="body2">JavaScript</Typography>
                <Typography color="#264de4" variant="body2">CSS</Typography>
                <Typography color="#e34c26" variant="body2">HTML</Typography>
              </Stack>
            </Paper>

            <Stack sx={{ px: 5 }} direction={{ xs: "column", md: "row" }} justifyContent="center" alignItems="center">
              <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography color="#fff" fontWeight={500} variant="h5">My Objective</Typography>
                <Typography fontWeight={300} variant="subtitle2">This is the first sentence about the project.  This is the second sentence about the project.  This is the third sentence about the project.</Typography>
              </Stack>
              <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography color="#fff" fontWeight={500} variant="h5">Project Features / Tech</Typography>
                <Typography fontWeight={300} variant="subtitle2">This is the first sentence about the project.  This is the second sentence about the project.  This is the third sentence about the project.</Typography>
              </Stack>
            </Stack>

            <Stack justifyContent="center" alignItems="center" direction="row" spacing={5}>
              <PageLinks to="/teslapage" rel="noopener">Source Code</PageLinks>
              <PageLinks to="/teslapage" rel="noopener">Live Project</PageLinks>
            </Stack>

            <Paper sx={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack sx={{ width: "100%", py: 4, px: 5 }} direction={{ xs: "column", md: "row" }} alignItems="center" justifyContent="center" spacing={5}>
                <Stack sx={{ width: { xs: "100%", md: "60%"}, textAlign: "center" }} direction="column" spacing={2}>
                  <Typography color="#fff" fontWeight="bold" variant="h6" sx={{ mb: 1 }}>Project Challenges</Typography>
                  <Typography color="#fff" fontWeight={300} variant="subtitle2" sx={{ mb: 1 }}>This is the first sentence about the project.  This is the second sentence about the project.</Typography>
                </Stack>
                <Box sx={{ width: { xs: "100%", md: "40%"} }}>
                  <ChallengeImage component="img" src="https://source.unsplash.com/random/2" />
                </Box>
              </Stack>
            </Paper>

          </Stack>
        </Stack>
      </Box>
  );
};

export default TeslaPage;


// Note: SwipeableViews causes a dev-mode only warning; alternative is to remove Strict Mode
export const TeslaImageSwipe = () => {

  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep( (prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep( (prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (

    <Fragment>

      <Stack justifyContent="center" alignItems="center">

      { images.length && (

        <SwipeableViews axis={"x"} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>

          { images.map((step) => (

              <Stack direction="column" justifyContent="center" alignItems="center" key={step.id}>

                { activeStep > 2 ? (

                  <MobileImage sx={{ width: { xs: "400px", md: "800px" } }} component="img" src={step.url} alt={step.id} />

                ) : (

                  <PageImage sx={{ width: { xs: "400px", md: "800px" } }} component="img" src={step.url} alt={step.id} />

                ) }

                <Box sx={{ position: "fixed", bottom: 25, width: { xs: "400px", md: "800px" }, px: { xs: 7, md: 5 }} }>
                  <MobileStepper sx={{ backgroundColor: "transparent" }} variant="dots" position="static" steps={maxSteps} activeStep={activeStep} nextButton={<Button size="small" sx={imageDot} onClick={handleNext} disabled={activeStep === maxSteps - 1}><KeyboardArrowRightIcon /></Button>} backButton={<Button size="small" sx={imageDot} onClick={handleBack} disabled={activeStep === 0}><KeyboardArrowLeftIcon /></Button>} />
                </Box>
              </Stack>

          ))}

        </SwipeableViews>

      )}

      </Stack>

    </Fragment>

  );

};


