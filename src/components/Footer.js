import React from 'react';
import { Box, Container, Link, Stack } from '@mui/material';
import { FaLinkedin, FaGithub, FaSpotify } from 'react-icons/fa';

import { flexColumn } from '../theme/CustomTheme';

const Footer = () => {
  return (
    <Box sx={{ ...flexColumn, width: "100%", backgroundColor: theme => theme.palette.secondary.main, zIndex: 5 }}>
      <Container maxWidth="xl">
        <Stack sx={{ pt: 2, height: "75px" }} justifyContent="center" alignItems="center" direction="row" spacing={2}>
          <Link href="https://github.com/seanberry89" target="_blank" rel="noopener"><FaGithub size={25}/></Link>
          <Link href="https://www.linkedin.com/in/sean-berry-62b237a1/" target="_blank" rel="noopener"><FaLinkedin size={25}/></Link>
          <Link href="https://open.spotify.com/user/jwgcbhtw5l9lca8xw50ogzrzc" target="_blank" rel="noopener"><FaSpotify size={25}/></Link>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer;
