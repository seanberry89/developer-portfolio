import React, { Fragment, useState } from 'react';
import { Box, Button, Link, Paper, Stack, styled, Typography } from '@mui/material';

import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

import { imageDot } from '../../theme/CustomTheme';

import forest from '../../assets/images/forest-transparent.png';
import ParkHome from '../../assets/images/project-images/nps-finder/nps-finder-home.png';
import ParkMarkers from '../../assets/images/project-images/nps-finder/nps-finder-markers.png';
import ParkNewAddress from '../../assets/images/project-images/nps-finder/nps-finder-new-address.png';
import Park from '../../assets/images/project-images/nps-finder/nps-finder-park.png';
import ParkSearch from '../../assets/images/project-images/nps-finder/nps-finder-search.png';
import ParkMobile from '../../assets/images/project-images/nps-finder/nps-finder-mobile.png';
import ParkMobileTwo from '../../assets/images/project-images/nps-finder/nps-finder-mobile-two.png';


document.onload = () => {
  window.scrollTo(0,0);
}


const images = [

  {
    id: 1,
    url: ParkHome
  },
  {
    id: 2,
    url: ParkMarkers
  },
  {
    id: 3,
    url: ParkNewAddress
  },
  {
    id: 4,
    url: Park
  },
  {
    id: 5,
    url: ParkSearch
  },
  {
    id: 6,
    url: ParkMobile
  },
  {
    id: 7,
    url: ParkMobileTwo
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
  border: 3px solid #56903A;
  border-radius: 5px;
  object-fit: cover;
  opacity: 0.75;
`;

const MobileImage = styled(Box) `
  display: block;
  height: 400px;
  border: 3px solid #56903A;
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
  color: #56903A;
  font-size: 13px;
  font-weight: bold;
  border-radius: 10px;

`;

const CodePaper = styled(Paper) `

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #56903A;
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

const ParkSpan = styled(Box) `

  display: inline;
  background-color: rgba(86, 144, 58, 0.75);
  font-weight: 500;
  color: #fff;
  border-radius: 5px;
  padding: 2px 5px;

`;

const ParkPage = () => {

  return (

      <Box sx={{ position: "relative", backgroundColor: theme => theme.palette.primary.main, overflow: "hidden", py: 10 }}>

        <ForestBackground></ForestBackground>
        <Stack sx={{ position: "relative", textAlign: "center", px: { xs: 2, md: 7 } }} direction="column" justifyContent="center" alignItems="center">

          <ParkImageSwipe />

          <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>

            <Typography variant="h3">National Park Service (NPS) Finder</Typography>

            <Paper sx={{ width: { xs: "375px", md: "425px" }, backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <Typography color="#F0DB4F" fontSize={{ xs: 12, md: 14 }}>JavaScript</Typography>
                <Typography color="#61DBFB" fontSize={{ xs: 12, md: 14 }}>React</Typography>
                <Typography color="#1E88E5" fontSize={{ xs: 12, md: 14 }}>MUI Core</Typography>
                <Typography color="#C56C39" fontSize={{ xs: 12, md: 14 }}>National Park Service API</Typography>
              </Stack>
            </Paper>

            <Paper sx={{ width: { xs: "325px", md: "375px" }, backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <Typography color="#EA4335" fontSize={{ xs: 12, md: 14 }}>Google Maps API</Typography>
                <Typography color="#FFF" fontSize={{ xs: 12, md: 14 }}>Geolocation API</Typography>
                <Typography color="#61DBFB" fontSize={{ xs: 12, md: 14 }}>Context API</Typography>
              </Stack>
            </Paper>

            <Stack sx={{ width: "100%", px: 5 }} direction={{ xs: "column", md: "row" }} justifyContent="center" alignItems="flex-start">
              <Stack sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }} direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography color="#fff" fontWeight={500} variant="h5">The Story</Typography>
                <Typography sx={{ px: { xs: 0, md: 5 }, lineHeight: 1.75 }} fontSize={15} fontWeight={300} variant="subtitle2">When I decided to create the park finder application, I made the decision based on a singular, self-reflecting question: what kind of application would I want to use?&nbsp; Or, what kind of application could I use in the near future?&nbsp; This led me to think about some of the trips I’d been on over the past five years.&nbsp; Alongside friends or family, or both, I would often schedule some time to visit the national parks throughout the US.&nbsp; I’d visited YellowStone, Yosemite, Zion, Acadia, Rocky, and Glacier already; and I knew I was far from finished with hanging up the ol' hiking boots.&nbsp; My annual retreat into the great outdoors had become somewhat of a tradition.&nbsp; So I thought why not build an application that’ll find me the next trip?&nbsp; Therefore the park finder provides historic sites and national parks around a user’s location and around a user’s park search.
                </Typography>
              </Stack>
              <Stack sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }} direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography color="#fff" fontWeight={500} variant="h5">The Road</Typography>
                <Typography sx={{ px: { xs: 0, md: 5 }, lineHeight: 1.75 }} fontSize={15} fontWeight={300} variant="subtitle2">As Google Maps and Apple Maps were the inspiration for the application’s UI, I knew I wanted my map to be structured somewhat similarly.&nbsp; The header content would be the side features.&nbsp; The main content would be the map itself, and the footer content would be the search input and finder button.&nbsp; I used node package <ParkSpan>@react-google-maps/api</ParkSpan> to load the <ParkSpan>Google Maps API.</ParkSpan>&nbsp; The <ParkSpan>Geolocation API</ParkSpan> gave me the coordinates to start the map at the user’s current location.&nbsp; Then the <ParkSpan>National Park Service API</ParkSpan> gave me the park data for the search and finder functionality. </Typography>
                <Typography sx={{ px: { xs: 0, md: 5 }, lineHeight: 1.75 }} fontSize={15} fontWeight={300} variant="subtitle2">Instead of <ParkSpan>prop-drilling</ParkSpan> with local state throughout the entire application, I had the <ParkSpan>Context API</ParkSpan> manage the state globally.&nbsp; The <ParkSpan>useReducer</ParkSpan> hook handled the state transitions via the dispatch of the reducer actions, while <ParkSpan>custom hooks</ParkSpan> allowed me to reuse state logic across multiple components and eliminate code clutter as well.</Typography>
              </Stack>
            </Stack>

            <Stack justifyContent="center" alignItems="center" direction="row" spacing={5}>
              <CodeLink href="https://github.com/seanberry89/nps-finder" rel="noopener" target="_blank"><CodePaper elevation={6}>Source Code</CodePaper></CodeLink>
              <ProjectLink href="https://nps-finder.com" rel="noopener" target="_blank"><ProjectPaper elevation={6}>Live Project</ProjectPaper></ProjectLink>
            </Stack>

            <Paper sx={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack sx={{ width: "100%", py: 4, px: { xs: 2, md: 5 } }} direction={{ xs: "column", md: "row" }} alignItems="flex-start" justifyContent="center" spacing={5}>
                <Stack sx={{ width: { xs: "100%", md: "50%"}, textAlign: "center" }} direction="column" spacing={2}>
                  <Typography color="#fff" fontWeight={500} variant="h5">The Challenge: <ParkSpan>useMapMarkers</ParkSpan></Typography>
                  <Typography color="#fff" fontSize={15} fontWeight={300} sx={{ lineHeight: 1.75 }} variant="subtitle2">For displaying the nearest parks around the user, I knew I had to somehow create a radius around the user’s coordinates and around the user’s search request.&nbsp; To do this I needed four items: the coordinates of the user’s location, the coordinates of the user’s searched park, the conditional to create the radius, and the state to store the searched parks within the radius.&nbsp; I decided to store this logic within the custom hook <ParkSpan>useMapMarkers.</ParkSpan>
                  </Typography>
                  <Typography color="#fff" fontSize={15} fontWeight={300} sx={{ lineHeight: 1.75 }} variant="subtitle2">
                  The user’s coordinates were retrieved from the <ParkSpan>Geolocation API</ParkSpan> of another custom hook, while the searched park’s coordinates were retrieved from the <ParkSpan>searchCoords</ParkSpan> state of the <ParkSpan>Context API.</ParkSpan>&nbsp; Afterward I set two conditionals to be within a three-coordinate radius when searching for the nearest parks: one <ParkSpan>if-statement</ParkSpan> for a search around the user’s coordinates, another <ParkSpan>if-statement</ParkSpan> for a search around the searched park’s coordinates.&nbsp; Both conditionals were wrapped within a <ParkSpan>useEffect</ParkSpan> hook that took a dependency, the returned park data from the NPS API, which controls when the hook runs or not.&nbsp; Lastly, after the conditionals, the three-coordinate radius of park data updated the <ParkSpan>marker</ParkSpan> state via the <ParkSpan>setMarker</ParkSpan> reducer function.
                  </Typography>
                </Stack>
                <Stack sx={{ width: { xs: "100%", md: "50%"}, textAlign: "center" }} direction="column" spacing={2}>
                  <Typography color="#fff" fontWeight={500} variant="h5">The Challenge: <ParkSpan>useSearchDebounce</ParkSpan></Typography>
                  <Typography color="#fff" fontSize={15} fontWeight={300} sx={{ lineHeight: 1.75 }} variant="subtitle2">I didn’t know about <ParkSpan>debounce</ParkSpan> after I created the search component to retrieve the park data based on the user’s typing.&nbsp; Nor did I understand why the API requests were fighting me for every typed character.&nbsp; But after reading about performance issues and how expensive multiple API requests can be, I knew I had to find a solution for this rather “annoying,” interface problem.&nbsp; Then came the <ParkSpan>debounce</ParkSpan> function: to simplify, it's the delay of an API request until a user stops typing after a given time.
                  </Typography>
                  <Typography color="#fff" fontSize={15} fontWeight={300} sx={{ lineHeight: 1.75 }} variant="subtitle2">
                  To begin I decided to store the function inside of a custom hook, <ParkSpan>useSearchDebounce,</ParkSpan> then imported <ParkSpan>useState</ParkSpan> and <ParkSpan>useEffect</ParkSpan> hooks from there.&nbsp; The function would consist of the <ParkSpan>setTimeout</ParkSpan> and <ParkSpan>clearTimeout</ParkSpan> methods to control the countdown until the request to the API.&nbsp; The <ParkSpan>useEffect</ParkSpan> hook would run the <ParkSpan>debounce</ParkSpan> when the component mounts and clear the function afterward.&nbsp; The <ParkSpan>useState</ParkSpan> hook would store and return the searched text after the delayed time from <ParkSpan>setTimeout.</ParkSpan>&nbsp; After importing the <ParkSpan>useSearchDebounce</ParkSpan> hook inside of the search component, and after inserting the user’s text and delayed time as arguments for the custom hook, I then loaded the <ParkSpan>debounce</ParkSpan> value to make the request to the API.
                  </Typography>
                </Stack>
              </Stack>
            </Paper>

          </Stack>
        </Stack>
      </Box>
  );
};

export default ParkPage;


// Note: SwipeableViews causes a dev-mode only warning; alternative is to remove Strict Mode
export const ParkImageSwipe = () => {

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

                { activeStep > 4 ? (

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


