import React from 'react';
import { Box, Stack } from '@mui/material';
import { fixedTop } from '../../theme/CustomTheme';
import NavLinks from './NavLinks';
import SwordIcon from './SwordIcon';

const NavHome = () => {
  return (
    <Box sx={{ ...fixedTop, minHeight: 75, backgroundColor: "transparent", zIndex: 5 }}>
        <Stack sx={{ minHeight: 75, px: 3 }} alignItems="center" justifyContent={{ xs: "center", md: "space-between" }} direction="row">
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <SwordIcon />
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <NavLinks />
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <SwordIcon />
          </Box>
        </Stack>
    </Box>
  )
}

export default NavHome;
