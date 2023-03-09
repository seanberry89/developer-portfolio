import React from 'react';
import { Box, Grid, Paper, Stack, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { flexCenter } from '../theme/CustomTheme';

import TeslaLogo from '../images/project-images/tesla-homepage/tesla-logo.png';
import ParkLogo from '../images/project-images/national-park-service-finder/national-park-logo.png';
import RehabLogo from '../images/project-images/rehab-typing-test/rehab-therapy-logo.png';
import PortfolioLogo from '../images/project-images/portfolio-site/portfolio-logo.png';

const projects = [

  { id: 1, title: "NPS Finder", description: "An application for hikers and outdoor enthusiasts.  This program uses the National Park Service API & Google Maps API to find national parks and historic sites around the user’s location.", image: ParkLogo, url: "/national-park-service-finder"},

  { id: 2, title: "Rehab Typing Test", description: "An application for occupational therapists to assist in the rehabilitation process (typing skills).  This program calculates words-per-minute, typing accuracy, and identifies the most missed keys for the user which informs the therapist on assistive technology choice and treatment efficacy.", image: RehabLogo, url: "/rehab-typing-test"},

  { id: 3, title: "Tesla Clone", description: "An application that demonstrates the remake of the Tesla homepage.  No frameworks.  No APIs.  Just JavaScript.", image: TeslaLogo, url: "/tesla-clone"},

  { id: 4, title: "My Portfolio", description: "A front-end developer portfolio that’s made of ReactJS, Material UI, and \"The Hero’s Journey,\" a storytelling structure by Joseph Campbell.", image: PortfolioLogo, url: "/portfolio-site"}

];


const ProjectImage = styled(Box) `
  height: 200px;
  width: 175px;
  object-fit: cover;
  overflow: hidden;
  transition: transform 1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProjectLink = styled(Link) `
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: red;
  background-color: transparent;
  border: 1.5px solid red;
  border-radius: 15px;
  padding: 10px 25px;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 0, 0, 0.15);
    border: 1.5px solid red;
    font-weight: 600;
  }

  &:active {
    transform: scale(1.1);
  }

`;


const StyledPaper = styled(Paper) `
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  border-radius: 10px;
  padding: 0px 25px;
`;

const StyledBox = styled(Box) `
  position: absolute;
  right: 0;
  border-bottom: 3px solid red;
  width: 175px;
  color: red;
  transform: translate(3px, -20px);
`;


const ProjectSection = () => {
  return (
    <Box sx={{ py: { xs: 5, md: 8 }, px: 5, backgroundColor: theme => theme.palette.primary.main }}>
      <Stack sx={{ position: "relative", textAlign: "center" }} direction="column" alignItems="center" justifyContent="center">
        <Typography sx={{ position: "relative", mb: 1 }} variant="h4">The Road of <StyledBox></StyledBox>Projects</Typography>
        <Typography sx={{ position: "absolute", top: 20, zIndex: 3, fontFamily: "Holland", transform: "rotate(-5deg)" }} color="red" variant="h4">of Trials</Typography>
        <Typography sx={{ pt: 5, px: { xs: 5, md: 15 } }} fontWeight={300} variant="body1">All developers need to prove themselves before stepping outward into the unknown.&nbsp; Below are some examples of the tests and triumphs I had to face as a traveler on the <Typography sx={{ display: "inline" }} variant="body1" fontWeight={700}>Road of Trials</Typography>:</Typography>
        <Box sx={{ ...flexCenter, pt: 1 }}>
          <Grid rowSpacing={3} columnSpacing={3} container>
            {projects.map(project => {
              return (
                <Grid key={project.id} xs={12} md={6} item>
                  <StyledPaper elevation={10}>
                    <Stack sx={{ height: "100%", py: 5 }} justifyContent="space-between" alignItems="center" direction={{ xs: "column", md: "row" }}>
                      <Box sx={{ width: { xs: "100%", md: "50%"}, alignItems: "center" }}>
                        <ProjectImage component="img" src={project.image}></ProjectImage>
                      </Box>
                      <Stack sx={{ width: { xs: "100%", md: "50%"}, textAlign: "center" }} direction="column" justifyContent="center" alignItems="center" spacing={2}>
                        <Typography color="#fff" fontWeight={500} variant="h5">{project.title}</Typography>
                        <Typography sx={{ lineHeight: 1.5 }} color="#fff" fontWeight={300} variant="body2">{project.description}</Typography>
                        <ProjectLink to={project.url}>View Project</ProjectLink>
                      </Stack>
                    </Stack>
                  </StyledPaper>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Stack>
    </Box>
  )
}

export default ProjectSection;
