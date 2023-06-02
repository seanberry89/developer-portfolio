import React from 'react';
import { Box } from '@mui/material';
import { flexColumn, flexCenter } from '../theme/CustomTheme';

import image from '../images/wood-transparent.png'
import '../style/FlameStyle.css';

const FlameOn = () => {
  return (
    <Box sx={{ ...flexColumn, ...flexCenter, position: "relative" }}>
        <Box className="flame-container">
          <Box className="flame red"></Box>
          <Box className="flame orange"></Box>
          <Box className="flame gold"></Box>
          <Box className="flame white"></Box>
        </Box>
        <Box className="wood" component="img" src={image} alt="fire"></Box>
    </Box>
  )
}

export default FlameOn;