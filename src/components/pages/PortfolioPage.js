import React, { Fragment, useState } from 'react';
import { Box, Button, Link, Paper, Stack, styled, Typography } from '@mui/material';

import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

import { imageDot } from '../../theme/CustomTheme';

import forest from '../../images/forest-transparent.png';
import PortfolioHeader from '../../images/project-images/portfolio-site/portfolio-header.png';
import PortfolioAbout from '../../images/project-images/portfolio-site/portfolio-about.png';
import PortfolioProjects from '../../images/project-images/portfolio-site/portfolio-projects.png';
import PortfolioContact from '../../images/project-images/portfolio-site/portfolio-contact.png';
import PortfolioMobile from '../../images/project-images/portfolio-site/portfolio-mobile.png';


document.onload = () => {
  window.scrollTo(0,0);
}


const images = [

  {
    id: 1,
    url: PortfolioHeader
  },
  {
    id: 2,
    url: PortfolioAbout
  },
  {
    id: 3,
    url: PortfolioProjects
  },
  {
    id: 4,
    url: PortfolioContact
  },
  {
    id: 5,
    url: PortfolioMobile
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
  border: 3px solid #fff;
  object-fit: cover;
  opacity: 0.8;
`;

const MobileImage = styled(Box) `
  display: block;
  height: 400px;
  border: 3px solid #fff;
  object-fit: contain;
  opacity: 0.8;
`;

const ProjectPaper = styled(Paper) `

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #FFF;
  height: 40px;
  width: 100px;
  color: #212121;
  font-size: 13px;
  font-weight: bold;
  border-radius: 10px;

`;

const CodePaper = styled(Paper) `

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #FFF;
  height: 40px;
  width: 100px;
  color: #212121;
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

const PortfolioPage = () => {

  return (

      <Box sx={{ position: "relative", backgroundColor: theme => theme.palette.primary.main, overflow: "hidden", py: 10 }}>

        <ForestBackground></ForestBackground>
        <Stack sx={{ position: "relative", textAlign: "center", px: 3 }} direction="column" justifyContent="center" alignItems="center">

          <PortfolioImageSwipe />

          <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
            <Typography variant="h3">The Developer's Portfolio</Typography>

            <Paper sx={{ width: "350px", backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <Typography color="#F0DB4F" variant="subtitle2">JavaScript</Typography>
                <Typography color="#61DBFB" variant="subtitle2">React</Typography>
                <Typography color="#1E88E5" variant="subtitle2">Material UI</Typography>
                <Typography color="#FFF" variant="subtitle2">React Router</Typography>
              </Stack>
            </Paper>

            <Stack sx={{ px: 5 }} direction={{ xs: "column", md: "row" }} justifyContent="center" alignItems="center">
              <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography color="#fff" fontWeight={500} variant="h5">The Story</Typography>
                <Typography fontWeight={300} variant="subtitle2">This is the first sentence about the project.  This is the second sentence about the project.  This is the third sentence about the project.</Typography>
              </Stack>
              <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography color="#fff" fontWeight={500} variant="h5">Project Features / Tech</Typography>
                <Typography fontWeight={300} variant="subtitle2">This is the first sentence about the project.  This is the second sentence about the project.  This is the third sentence about the project.</Typography>
              </Stack>
            </Stack>

            <Stack justifyContent="center" alignItems="center" direction="row" spacing={5}>
              <CodeLink href="https://github.com/seanberry89/the-developer-journey" rel="noopener" target="_blank"><CodePaper elevation={6}>Source Code</CodePaper></CodeLink>
              <ProjectLink to="/teslapage" rel="noopener" target="_blank"><ProjectPaper elevation={6}>Live Project</ProjectPaper></ProjectLink>
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

export default PortfolioPage;


// Note: SwipeableViews causes a dev-mode only warning; alternative is to remove Strict Mode
export const PortfolioImageSwipe = () => {

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

                { activeStep > 3 ? (

                  <MobileImage sx={{ width: { xs: "400px", md: "800px" } }} component="img" src={step.url} alt={step.id} />

                ) : (

                  <PageImage sx={{ width: { xs: "400px", md: "800px" } }} component="img" src={step.url} alt={step.id} />

                ) }

                <Box sx={{ position: "fixed", bottom: 45, width: { xs: "400px", md: "800px" }, px: { xs: 7, md: 5 }}}>
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


