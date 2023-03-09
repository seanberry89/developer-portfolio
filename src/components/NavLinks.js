import React from 'react';
import { Box, Button, styled  } from '@mui/material';
import { flexRow } from '../theme/CustomTheme';

const NavButton = styled(Button) `
  margin: 0px 10px;
  padding: 10px 20px;
  border-radius: 15px;
  font-weight: 500;

  &:hover {
    background: none;
  }

  &:active {
    transition: button 1s ease-in-out
  }
`;

const AboutButton = () => {
  window.scrollTo({
    top: 650,
    left: 0,
    behavior: "smooth"
  });
};

const PortfolioButton = () => {
  window.scrollTo({
    top: 1425,
    left: 0,
    behavior: "smooth"
  });
}

const ContactButton = () => {
  window.scrollTo({
    top: 2500,
    left: 0,
    behavior: "smooth"
  });
}

const NavLinks = () => {
  return (
    <Box sx={flexRow}>

      <NavButton size="large" onClick={AboutButton}>About</NavButton>

      <NavButton size="large" onClick={PortfolioButton}>Projects</NavButton>

      <NavButton size="large" onClick={ContactButton}>Contact</NavButton>

    </Box>
  )
}

export default NavLinks;
