import React from 'react';
import { Box, Divider, Link, Stack, styled, Typography } from '@mui/material';
import { FaLinkedin, FaGithub, FaSpotify } from 'react-icons/fa';
import { keyframes } from '@emotion/react';
import { flexCenter } from '../../theme/CustomTheme';

import forest from '../../assets/images/forest-transparent.png';
import stars from '../../assets/images/stars-background.png';

const nightSky = keyframes({
  from: { transform: "translate(0)" },
  to: { transform: "translate(-2000px)"}
});

const StarsBackground = styled(Box) `
  background-image: url(${stars});
  background-size: contain;
  background-repeat: repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 6000px;
  height: 100%;
  z-index: 0;
  animation: ${nightSky} 180s linear infinite;
`;

const ForestBackground = styled(Box) `
  background-image: url(${forest}), url(${forest});
  background-size: 750px, 750px;
  background-repeat: no-repeat;
  background-position: right -45px bottom -5px, left -45px bottom -5px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const HeroSection = () => {
  return (
    <Box sx={{ ...flexCenter, position: "relative", height: "100vh", backgroundColor: theme => theme.palette.primary.main }}>
      <StarsBackground></StarsBackground>
      <ForestBackground></ForestBackground>
      <Box sx={{ position: "absolute", margin: "auto", height: "60%", zIndex: 2 }}>
        <Stack justifyContent="center" alignItems="center" spacing={2}>
          <Typography sx={{ fontFamily: "Montserrat", fontWeight: 500 }} variant="h2">Sean Berry</Typography>
          <Stack direction="row" divider={<Divider color="#fff" orientation="vertical" flexItem />} >
            <Typography variant="subtitle2">developer</Typography>
            <Typography variant="subtitle2">explorer</Typography>
            <Typography variant="subtitle2">storyteller</Typography>
          </Stack>
          <Stack justifyContent="center" alignItems="center" direction="row" spacing={2}>
            <Link href="https://github.com/seanberry89" target="_blank" rel="noopener"><FaGithub size={25}/></Link>
            <Link href="https://www.linkedin.com/in/sean-berry-62b237a1/" target="_blank" rel="noopener"><FaLinkedin size={25}/></Link>
            <Link href="https://open.spotify.com/user/jwgcbhtw5l9lca8xw50ogzrzc" target="_blank" rel="noopener"><FaSpotify size={25}/></Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default HeroSection;
