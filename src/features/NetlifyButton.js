import React, { Fragment } from 'react';
import { Box, IconButton, Stack, styled, Typography } from '@mui/material';
import { SiNetlify } from 'react-icons/si';


const StyledIcon = styled(IconButton) `

  background-color: #FFF;
  position: absolute;
  top: 0;
  left: 5;
  width: 70px;
  height: 70px;
  cursor: default;

  &:hover {
    background-color: #FFF;
  }

`;


const NetlifyButton = () => {
  return (
    <Fragment>
      <StyledIcon>
        <Stack direction="column" justifyContent="center" alignItems="center">
          {/* <Typography sx={{ transform: "rotate(-20deg)" }} fontSize={12} fontWeight={700} color="black">Hosted on</Typography> */}
          <SiNetlify color="black" size={35} />
          {/* <Typography color="#32E6E2">Netlify</Typography> */}
        </Stack>
      </StyledIcon>
    </Fragment>
  )
}

export default NetlifyButton;
