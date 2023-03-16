import React, { Fragment, useState } from 'react';
import { Box, Button, Link, Paper, Stack, styled, Typography } from '@mui/material';

import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

import { imageDot } from '../../theme/CustomTheme';

import forest from '../../images/forest-transparent.png';
import TeslaHomepage from '../../images/project-images/tesla-clone/tesla-homepage.png';
import TeslaMenu from '../../images/project-images/tesla-clone/tesla-menu.png';
import TeslaFooter from '../../images/project-images/tesla-clone/tesla-accessories.png';
import TeslaMobile from '../../images/project-images/tesla-clone/tesla-mobile.png';


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
  border: 3px solid #E82127;
  border-radius: 5px;
  object-fit: cover;
  opacity: 0.75;
`;

const MobileImage = styled(Box) `
  display: block;
  height: 400px;
  border: 3px solid #E82127;
  border-radius: 5px;
  object-fit: contain;
  opacity: 0.75;
`;

const ProjectPaper = styled(Paper) `

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #FFF;
  height: 40px;
  width: 100px;
  color: #E82127;
  font-size: 13px;
  font-weight: bold;
  border-radius: 10px;

`;

const CodePaper = styled(Paper) `

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #E82127;
  height: 40px;
  width: 100px;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  border-radius: 10px;

`;

const ProjectLink = styled(Link) `

  text-decoration: none;
  transition: transform 0.75s ease-in-out;

  &:hover {
    transform: scale(1.2);
  };

`;

const CodeLink = styled(Link) `

  text-decoration: none;
  transition: transform 0.75s ease-in-out;

  &:hover {
    transform: scale(1.2);
  };

`;

const TeslaSpan = styled(Box) `

  display: inline;
  background-color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  color: #E82127;

  padding: 2px 5px;

`;

const TeslaPage = () => {

  return (

      <Box sx={{ position: "relative", backgroundColor: theme => theme.palette.primary.main, overflow: "hidden", py: 10 }}>

        <ForestBackground></ForestBackground>
        <Stack sx={{ position: "relative", textAlign: "center", px: { xs: 2, md: 7 } }} direction="column" justifyContent="center" alignItems="center">

          <TeslaImageSwipe />

          <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
            <Typography variant="h3">Tesla Clone</Typography>

            <Paper sx={{ width: "200px", backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <Typography color="#F0DB4F" variant="subtitle2">JavaScript</Typography>
                <Typography color="#264de4" variant="subtitle2">CSS</Typography>
                <Typography color="#e34c26" variant="subtitle2">HTML</Typography>
              </Stack>
            </Paper>

            <Stack sx={{ px: 5, width: "100%" }} direction={{ xs: "column", md: "row" }} justifyContent="center" alignItems="center">
              <Stack sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }} direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography color="#fff" fontWeight={500} variant="h5">The Story</Typography>
                <Typography sx={{ px: { xs: 0, md: 5 }, lineHeight: 1.75 }} fontSize={15} fontWeight={300} variant="subtitle2">For the first project I wanted to demonstrate the basic knowledge of a front-end developer: HTML, CSS, and JavaScript.&nbsp; To show this knowledge I wanted to clone the homepage of a recognizable brand — so I chose Tesla.&nbsp; Why Tesla?&nbsp; I found the UI to be simple (and not busy), but eye-catching when showcasing their product images.&nbsp; The product images are unavoidable, and I like that.&nbsp; This application mirrors the look and functionality of the Tesla homepage.
                </Typography>
              </Stack>
              <Stack sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }} direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography color="#fff" fontWeight={500} variant="h5">The Road</Typography>
                <Typography sx={{ px: { xs: 0, md: 5 }, lineHeight: 1.75 }} fontSize={15} fontWeight={300} variant="subtitle2">Since I had no frameworks for this application, I utilized <TeslaSpan>ID selectors</TeslaSpan> for initializing functions and events with Javascript and <TeslaSpan>class selectors</TeslaSpan> for styling the structural elements with CSS.&nbsp; I divided the seven product categories into sections and styled all of their interior elements — containers, buttons, and text — via structural classes.&nbsp; The side menu and faded background were toggled via event listeners, and the arrow icon in the first section repositioned the document via an <TeslaSpan>onClick</TeslaSpan> function.
                </Typography>
              </Stack>
            </Stack>

            <Stack justifyContent="center" alignItems="center" direction="row" spacing={5}>
              <CodeLink href="https://github.com/seanberry89/tesla-clone" rel="noopener" target="_blank"><CodePaper elevation={6}>Source Code</CodePaper></CodeLink>
              <ProjectLink to="/teslapage" rel="noopener" target="_blank"><ProjectPaper elevation={6}>Live Project</ProjectPaper></ProjectLink>
            </Stack>

            <Paper sx={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack sx={{ width: "100%", textAlign: "center", py: 4, px: 5 }} direction="column" alignItems="center" justifyContent="center">
                <Typography color="#fff" fontWeight={500} variant="h5">The Challenge: <TeslaSpan>window.scrollY</TeslaSpan></Typography>
                <Typography color="#fff" fontSize={15} fontWeight={300} variant="subtitle2" sx={{ lineHeight: 1.75 }}>A problem I had to overcome was the auto scroll and position lock between product sections in the Tesla homepage.&nbsp; From the portfolio itself I learned how to reposition the document based on the click of an event listener, but I was unfamiliar with the position lock of the document when the user released the scroll.&nbsp; To recreate this functionality, I had to learn the scroll offsets from the <TeslaSpan>window</TeslaSpan> object, or more specifically, the <TeslaSpan>scrollY</TeslaSpan> property.&nbsp; But the catch and the release of the user’s position within a given time was another question.&nbsp; After some time I learned to use the <TeslaSpan>setTimeout</TeslaSpan> and the <TeslaSpan>clearTimeout</TeslaSpan> functions as a means of scrolling the document to the nearest section after a pause.&nbsp; Each section was given its own conditional that checked the pixel count range, and lastly, everything was wrapped and ran inside a scroll event listener.</Typography>
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


