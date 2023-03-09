import React from 'react';
import { Box, Link, List, ListItemText, Paper, Stack, styled, Typography, useMediaQuery } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import { flexCenter } from '../../theme/CustomTheme';

import myResume from '../../pdf/Resume-AccountManagement.pdf';
import sierraClub from '../../images/sierra-club-logo.png';
import forest from '../../images/forest-transparent.png';

const ForestBackground = styled(Box) `

  background-image: url(${forest}), url(${forest});
  background-size: 750px, 750px;
  background-repeat: no-repeat;
  background-position: right -45px bottom -5px, left -45px bottom -5px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;

`;

const StyledPaper = styled(Paper) `

  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  border-radius: 10px;
  padding: 0px 20px;

`;

const ProjectImage = styled(Box) `

  height: 250px;
  width: 250px;
  object-fit: contain;
  overflow: hidden;
  transition: transform 1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

`;

const SierraLink = styled(Link) `

  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  color: #487021;
  background-color: transparent;
  border: 1.5px solid #487021;
  border-radius: 15px;
  padding: 8px 18px;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    border: 1.5px solid #487021;
    background-color: rgba(72, 112, 33, 0.15);
    font-weight: 600;
  }

  &:active {
    transform: scale(1.1);
  }

`;

const ResumeLink = styled(Link) `

  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: transparent;
  border: 1.5px solid #fff;
  border-radius: 15px;
  padding: 12px 30px;
  text-decoration: none;

  &:hover {
    border: 1.5px solid #fff;
    background-color: rgba(255, 255, 255, 0.25);
    font-weight: 600;
  }

  &:active {
    transform: scale(1.1);
  }

`;

const ResumePage = () => {

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const mobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ ...flexCenter, position: "relative", backgroundColor: theme => theme.palette.primary.main, py: 14, px: { xs: 5, md: 18 } }}>
        <ForestBackground></ForestBackground>
        <Stack sx={{ width: "100%", zIndex: 1 }} justifyContent="center" alignItems="center" direction="column" spacing={5}>
          <StyledPaper elevation={10}>
            <Stack sx={{ py: 3 }} justifyContent={{ xs: "center", md: "space-between" }} alignItems="center" direction={{ xs: "column", md: "row" }}>
              <Box sx={{ width: { xs: "100%", md: "50%"} }}>
                <ProjectImage component="img" src={sierraClub}></ProjectImage>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "50%"}, textAlign: "center" }}>
                <Typography sx={{ fontWeight: 600 }} color="#fff" variant="h5">NYC Sierra Club</Typography>
                <Typography color="#fff" variant="subtitle2">2020-2022</Typography>
                <List sx={{ px: 5, textAlign: { xs: "center", md: "left" } }}>
                    <ListItemText primaryTypographyProps={{ fontSize: 14, fontWeight: 500, letterSpacing: 0, mb: 1 }} primary="volunteered as the sole web designer for an environmental non-profit in NY state" />
                    <ListItemText primaryTypographyProps={{ fontSize: 14, fontWeight: 500, letterSpacing: 0, mb: 1 }} primary="created and maintained the front-end components of the client's website via WordPress" />
                    <ListItemText primaryTypographyProps={{ fontSize: 14, fontWeight: 500, letterSpacing: 0, mb: 1 }} primary="managed backend updates and system maintenance to ensure consistent front-end perfomance" />
                </List>
                <SierraLink href="https://nyc.sierraclub.org" target="_blank" rel="noopener">NYC Sierra Club</SierraLink>
              </Box>
            </Stack>
          </StyledPaper>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
            <Document file={myResume}>
                { mobile ? (<Page width={450} pageNumber={1}/>) : (<Page pageNumber={1}/>) }
            </Document>
            <ResumeLink href={myResume} target="_blank">Download Resume</ResumeLink>
          </Stack>
        </Stack>
    </Box>
  )
}

export default ResumePage;
