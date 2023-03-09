import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { flexColumn, flexCenter } from '../theme/CustomTheme';

import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript } from 'react-icons/di';
import { FaReact, FaGitAlt, FaWordpress } from 'react-icons/fa';
import { SiMaterialui, SiNpm } from 'react-icons/si';

const techs = [
  {id: 1, text: "HTML5", icon: <AiFillHtml5 size={60} /> },
  {id: 2, text: "CSS3", icon: <DiCss3 size={60} /> },
  {id: 3, text: "JavaScript", icon: <DiJavascript size={60} /> },
  {id: 4, text: "React", icon: <FaReact size={60} /> },
  {id: 5, text: "Material UI", icon: <SiMaterialui size={60} /> },
  {id: 6, text: "Git", icon: <FaGitAlt size={60} /> },
  {id: 7, text: "NPM", icon: <SiNpm size={60} /> },
  {id: 8, text: "WordPress", icon: <FaWordpress size={60} /> },
]

const TechSection = () => {

  return (
    <Box sx={{ ...flexColumn, ...flexCenter, height: "100vh", backgroundColor: "#282c34", border: "3px solid green" }}>
      <Container maxWidth="xl">
        <Typography variant="h4">Technical Skills</Typography>
        <Paper sx={{ mt: 5, mx: 3, p: 3, borderRadius: 10 }} elevation={3}>
          <Grid sx={flexCenter} spacing={2} container>
            {techs.map(tech => {
              return (
                  <Grid key={tech.id} xs={3} item>
                    {tech.icon}
                    <Typography color="#fff" variant="h6">{tech.text}</Typography>
                  </Grid>
              )
            })}
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}

export default TechSection;