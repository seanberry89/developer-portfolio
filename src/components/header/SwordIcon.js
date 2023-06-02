import React, { useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import { flexCenter } from '../../theme/CustomTheme';

import { GiStoneBlock, GiBroadsword } from 'react-icons/gi';


const SwordBlock = styled(GiBroadsword) `
  color: #fff;
  font-size: 25px;
  position: absolute;
  left: 1;
  transform: rotate(100deg) translate(-4px, 10px);
  z-index: 0;
`;

const StoneStyle = styled(GiStoneBlock) `
  color: #fff;
  font-size: 25px;
  margin-top: 12px;
  z-index: 2;
`;

const SwordFloat = styled(GiBroadsword) `
  display: none;
  color: #fff;
  font-size: 25px;
  position: absolute;
  top: 0;
  left: 1;
  transform: rotate(100deg) translate(-2px, 16px);
  z-index: 0;
`;

const HomeButton = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

const SwordIcon = () => {

  const [sword, swordFunction] = useState(false);

  return (
    <Box sx={{ ...flexCenter, flexDirection: "column" }}>
      <Button sx={{ position: "relative" }} onMouseEnter={() => swordFunction(true)} onMouseLeave={() => swordFunction(false)} onClick={HomeButton}>
        { sword ? ( <SwordFloat sx={{ display: "block" }} /> ) : ( <SwordBlock /> )}
        <StoneStyle />
      </Button>
    </Box>
  )
}

export default SwordIcon;
