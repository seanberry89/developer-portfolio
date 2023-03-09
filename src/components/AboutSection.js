import React from 'react';
import { Box, Grid, Stack, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript } from 'react-icons/di';
import { FaReact, FaGitAlt, FaWordpress } from 'react-icons/fa';
import { SiMaterialui, SiNpm, SiGatsby, SiTypescript } from 'react-icons/si';

import personalPic from '../images/sean-berry.jpg';

const techs = [
  {id: 1, text: "HTML5", color: "#e34c26", icon: <AiFillHtml5 color="#e34c26" size={30} /> },
  {id: 2, text: "CSS3", color: "#264de4", icon: <DiCss3 color="#264de4" size={30} /> },
  {id: 3, text: "JavaScript", color: "#F0DB4F", icon: <DiJavascript color="#F0DB4F" size={30} /> },
  {id: 4, text: "React", color: "#61DBFB", icon: <FaReact color="#61DBFB" size={30} /> },
  {id: 5, text: "Material UI", color: "#1E88E5", icon: <SiMaterialui color="#1E88E5" size={30} /> },
  {id: 6, text: "Git", color: "#F1502F", icon: <FaGitAlt color="#F1502F" size={30} /> },
  {id: 7, text: "NPM", color: "#CC3534", icon: <SiNpm color="#CC3534" size={30} /> },
  {id: 8, text: "WordPress", color: "#21759b", icon: <FaWordpress color="#21759b" size={30} /> },
];

const StyledBox = styled(Box) `
  position: absolute;
  right: 0;
  border-bottom: 3px solid red;
  width: 190px;
  color: red;
  transform: translate(-135px, -20px);
`;

const ResumeLink = styled(Link) `
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  color: red;
  background-color: transparent;
  border: 1.5px solid red;
  border-radius: 15px;
  padding: 10px 25px;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    border: 1.5px solid red;
    background-color: rgba(255, 0, 0, 0.15);
    font-weight: 600;
  }

  &:active {
    transform: scale(1.1);
  }
`;

const AboutSection = () => {
  return (
    <Box sx={{ position: "relative", backgroundColor: theme => theme.palette.secondary.main, py: 5 }}>
      <Stack sx={{ px: 3, height: "100%", textAlign: "center" }} direction={{ xs: "column", md: "row" }} justifyContent="space-around" alignItems="center">
        <Stack sx={{ py: 3, width: { xs: "100%", md: "50%"}, textAlign: "center"}} justifyContent="center" alignItems="center" direction="column" spacing={3}>
          <Box sx={{ position: "relative" }}>
            <Typography sx={{ position: "absolute", top: -45, left: 55, zIndex: 3, fontFamily: "Holland", transform: "rotate(-10deg)" }} color="red" variant="h4">Hero's</Typography>
            <Typography variant="h4">The <StyledBox></StyledBox>Developer's Journey</Typography>
          </Box>
          <Typography sx={{ lineHeight: 1.5, px: 5 }} fontWeight={300} variant="body1">The developer’s journey — of answering the call to the next project and adventure, overcoming challenges, learning from mistakes, and progressing all the while — can be the same as the storytelling structure of <span style={{ fontStyle: "italic" }}>The Hero’s Journey</span>.&nbsp; Or, this is what I tell myself.&nbsp; For I am a self-taught front-end developer who’s learned much about solving problems while sailing through the waters of the uncomfortable and the unknown.</Typography>
          <Typography sx={{ lineHeight: 1.5, px: 5 }} fontWeight={300} variant="body1">Where does the journey lead?&nbsp; What am I after?&nbsp; I want to integrate my creativity and code to create exciting front-end applications.&nbsp; After hours, when I am not crunching code, the journey continues: I can be found exploring the trails of a new hike or writing some fiction at a nearby coffeehouse.</Typography>
          <ResumeLink to="/resume-page">Resume</ResumeLink>
          <Box component="img" src={personalPic} alt="this is me" sx={{ width: "125px", height: "150px", borderRadius: 10, opacity: 0.85 }}></Box>
        </Stack>
        <Stack sx={{ py: 3, width: { xs: "100%", md: "50%" } }} justifyContent="center" alignItems="center" direction="column">
          <Typography variant="h5">Present Skills</Typography>
          <Grid rowSpacing={2} container>
            { techs.map( tech => {
              return (
                <Grid key={tech.id} xs={3} item>
                  {tech.icon}
                  <Typography color={tech.color} variant="body2">{tech.text}</Typography>
                </Grid>
              )
            })}
          </Grid>
          <Typography sx={{ pt: 5 }} variant="h5">Future Skills</Typography>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={6}>
            <Box>
              <SiGatsby color="#663399" size={30} />
              <Typography color="#663399" variant="body2">Gatsby</Typography>
            </Box>
            <Box>
              <SiTypescript color="#007acc" size={30} />
              <Typography color="#007acc" variant="body2">TypeScript</Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default AboutSection;
