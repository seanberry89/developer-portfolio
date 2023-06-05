import React, { Fragment, useState } from 'react';
import { Box, Button, Link, Paper, Stack, styled, Typography } from '@mui/material';

import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

import { imageDot } from '../../theme/CustomTheme';

import forest from '../../assets/images/forest-transparent.png';
import PortfolioHeader from '../../assets/images/project-images/portfolio-site/portfolio-header.png';
import PortfolioAbout from '../../assets/images/project-images/portfolio-site/portfolio-about.png';
import PortfolioProjects from '../../assets/images/project-images/portfolio-site/portfolio-projects.png';
import PortfolioContact from '../../assets/images/project-images/portfolio-site/portfolio-contact.png';
import PortfolioMobile from '../../assets/images/project-images/portfolio-site/portfolio-mobile.png';
import PortfolioMobileTwo from '../../assets/images/project-images/portfolio-site/portfolio-mobile-two.png';


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
  },
  {
    id: 6,
    url: PortfolioMobileTwo
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
  border-radius: 5px;
  object-fit: cover;
  opacity: 0.8;
`;

const MobileImage = styled(Box) `
  display: block;
  height: 400px;
  border: 3px solid #fff;
  border-radius: 5px;
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
  cursor: pointer;

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

const BookLink = styled(Link)`

  text-decoration-line: none;
  color: white;
  transition: all 1.5s ease-in-out;

  &:hover {

    text-decoration-line: underline;
    color: red;

  }

`;

const PortfolioSpan = styled(Box) `

  display: inline;
  background-color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  color: #212121;
  border-radius: 5px;
  padding: 2px 5px;

`;


const PortfolioPage = () => {

  return (

      <Box sx={{ position: "relative", backgroundColor: theme => theme.palette.primary.main, overflow: "hidden", py: 10 }}>

        <ForestBackground></ForestBackground>
        <Stack sx={{ position: "relative", textAlign: "center", px: { xs: 2, md: 7 } }} direction="column" justifyContent="center" alignItems="center">

          <PortfolioImageSwipe />

          <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>

            <Typography variant="h3">The Developer's Journey</Typography>

            <Paper sx={{ width: { xs: "325px", md: "375px" }, backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <Typography color="#F0DB4F" fontSize={{ xs: 12, md: 14 }}>JavaScript</Typography>
                <Typography color="#61DBFB" fontSize={{ xs: 12, md: 14 }}>React</Typography>
                <Typography color="#1E88E5" fontSize={{ xs: 12, md: 14 }}>MUI Core</Typography>
                <Typography color="#FFF" fontSize={{ xs: 12, md: 14 }}>React Router API</Typography>
              </Stack>
            </Paper>

            <Stack sx={{ width: "100%", px: { xs: 0, md: 5 } }} direction={{ xs: "column", md: "row" }} justifyContent="center" alignItems="flex-start">
              <Stack sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }} direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography color="#fff" fontWeight={500} variant="h5">The Story</Typography>
                <Typography sx={{ px: { xs: 0, md: 5 }, lineHeight: 1.75 }} fontSize={15} fontWeight={300} variant="subtitle2">"To self-brand," which was the advice I was given when creating a developer portfolio, I knew I had to somehow bring interests, hobbies, and code together in a professional way.&nbsp; But how was I to do this?&nbsp; I knew I loved the outdoor lifestyle.&nbsp; I loved storytelling.&nbsp; I loved programming.&nbsp; But how was I to use the three to present myself in a developer’s portfolio?</Typography>
                <Typography sx={{ px: { xs: 0, md: 5 }, lineHeight: 1.75 }} fontSize={15} fontWeight={300} variant="subtitle2">It was at this time, when I was sitting on the question, that I was also reading Joseph Campbell’s “<BookLink href="https://www.amazon.com/Thousand-Faces-Collected-Joseph-Campbell/dp/1577315936/ref=sr_1_1?keywords=hero+with+a+thousand+faces+book&qid=1679002445&sprefix=hero+with+a+%2Caps%2C108&sr=8-1" target="_blank" rel="noopener">The Hero with a Thousand Faces</BookLink>.”&nbsp; Then struck inspiration.&nbsp; I saw the similarities between the footsteps of the archetypal hero’s journey and the footsteps of my own journey as a front-end developer.&nbsp; Thereafter I tailored the design, the text, and even the brand logo, the sword and the stone, into a singular, storytelling theme.
                </Typography>
              </Stack>
              <Stack sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }} direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography color="#fff" fontWeight={500} variant="h5">The Road</Typography>
                <Typography sx={{ px: { xs: 0, md: 5 }, lineHeight: 1.75 }} fontSize={15} fontWeight={300} variant="subtitle2">The developer portfolio was constructed with the ReactJS library.&nbsp; For the styling I loaded the MUI Core framework.&nbsp; I structured the layout of the portfolio to be a single document of four components: Header, About, Projects, and Contact.&nbsp; Each project was given its own personal page (and URL) to provide further information so I handled the route matches via <PortfolioSpan>React Router API.</PortfolioSpan></Typography>
                <Typography sx={{ px: { xs: 0, md: 5 }, lineHeight: 1.75 }} fontSize={15} fontWeight={300} variant="subtitle2">For the portfolio’s navigation I created two components — one for the portfolio’s home and the other for the projects’ pages — which were then toggled via <PortfolioSpan>ternary operator.</PortfolioSpan>&nbsp; MUI’s built-in block components and <PortfolioSpan>styled-components</PortfolioSpan> assisted me in the structuring and the styling, alongside the <PortfolioSpan>sx</PortfolioSpan> styling prop, while the built-in <PortfolioSpan>breakpoints</PortfolioSpan> made the portfolio responsive.&nbsp; Netlify contributed with the <PortfolioSpan>stateless form handling</PortfolioSpan> as well.</Typography>
              </Stack>
            </Stack>

            <Stack justifyContent="center" alignItems="center" direction="row" spacing={5}>
              <CodeLink href="https://github.com/seanberry89/the-developer-journey" rel="noopener" target="_blank"><CodePaper elevation={6}>Source Code</CodePaper></CodeLink>
              <ProjectLink href="https://thedevelopersjourney.com" rel="noopener" target="_blank"><ProjectPaper elevation={6}>Live Project</ProjectPaper></ProjectLink>
            </Stack>

            <Paper sx={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack sx={{ width: "100%", py: 4, px: { xs: 2, md: 5 } }} direction={{ xs: "column", md: "row" }} alignItems="flex-start" justifyContent="center" spacing={5}>
                <Stack sx={{ width: { xs: "100%", md: "50%"}, textAlign: "center" }} direction="column" spacing={2}>
                  <Typography color="#fff" fontWeight={500} variant="h5">The Challenege: <PortfolioSpan>MUI Core</PortfolioSpan></Typography>
                  <Typography color="#fff" fontSize={15} fontWeight={300} variant="subtitle2" sx={{ lineHeight: 1.75 }}>Before knowing MUI Core I would use external stylesheets or CDNs (from Boostrap) for various test projects.&nbsp; So when I decided to load <PortfolioSpan>MUI Core</PortfolioSpan> to the developer portfolio because of its uniform styling — outside of knowing the basics of the library already — I found myself confronted with some roadblocks.&nbsp; I wasn’t familiar with the API of a few block components, such as <PortfolioSpan>TextField,</PortfolioSpan> <PortfolioSpan>Stepper,</PortfolioSpan> <PortfolioSpan>Fade,</PortfolioSpan> and others; and I knew these were components I wanted to customize and structure inside the portfolio.&nbsp; Eventually, after scouring the MUI docs and StackOverflow, after trial and error, I was able to learn more about the components and, more importantly, <PortfolioSpan>MUI Core.</PortfolioSpan>
                  </Typography>
                </Stack>
                <Stack sx={{ width: { xs: "100%", md: "50%"}, textAlign: "center" }} direction="column" spacing={2}>
                  <Typography color="#fff" fontWeight={500} variant="h5">The Challenege: <PortfolioSpan>useLocation</PortfolioSpan></Typography>
                  <Typography color="#fff" fontSize={15} fontWeight={300} variant="subtitle2" sx={{ lineHeight: 1.75 }}>After I completed the Home Component of the portfolio, I began to construct the four project pages afterward.&nbsp; But this was when I stumbled across another issue.&nbsp; After installing React Router, after declaring <PortfolioSpan>BrowserRouter</PortfolioSpan> and configuring the <PortfolioSpan>Routes,</PortfolioSpan> I found the new pages to load not at the document’s top, but somewhere at the document’s center.&nbsp; As I didn’t want the portfolio’s readers to be navigated to the center of the page, I knew I had to fix this.&nbsp; What I had to learn was the <PortfolioSpan>location</PortfolioSpan> object and <PortfolioSpan>useLocation</PortfolioSpan> hook.&nbsp; I created a utility component, RouterScroll, and declared the <PortfolioSpan>location</PortfolioSpan> object to acquire the user’s navigation history.&nbsp; Then from inside the <PortfolioSpan>useEffect</PortfolioSpan> hook, I ran method <PortfolioSpan>scrollTo</PortfolioSpan> from the <PortfolioSpan>window</PortfolioSpan> object and set the document’s coordinates to the page top, and set the <PortfolioSpan>location</PortfolioSpan> object as the dependency of the <PortfolioSpan>useEffect</PortfolioSpan> hook.&nbsp; Lastly, as I wanted this to affect the navigation of the whole portfolio, I imported the component to <PortfolioSpan>index.js</PortfolioSpan> so all of the children components could be set thereafter.</Typography>
                </Stack>
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

                  <MobileImage sx={{ width: { xs: "425px", md: "800px" } }} component="img" src={step.url} alt={step.id} />

                ) : (

                  <PageImage sx={{ width: { xs: "425px", md: "800px" } }} component="img" src={step.url} alt={step.id} />

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


