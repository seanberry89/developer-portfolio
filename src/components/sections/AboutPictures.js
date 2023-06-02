import React, { Fragment } from 'react';
import { Box, Stack, styled } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import personalPic from '../../assets/images/sean-berry.jpg';
import halfDome from '../../assets/images/half-dome.jpg';
import bryantPark from '../../assets/images/bryant-park.jpg';


const LeftImage = styled(LazyLoadImage) `

  width: 125px;
  height: 150px;
  object-fit: cover;
  transform: rotate(-8deg) translateY(10px);
  border-radius: 30px;
  z-index: 0;
  transition: transform 1.5s ease-in-out;

  &:hover {
    z-index: 2;
    transform: rotate(-8deg) translateY(10px) translateX(-30px);
  };

`;


const MiddleImage = styled(LazyLoadImage) `

  width: 125px;
  height: 150px;
  object-fit: cover;
  border-radius: 30px;
  z-index: 1;
  transform: translateY(0px);
  transition: transform 1.5s ease-in-out;

  &:hover {
    transform: translateY(30px);
  };

`;


const RightImage = styled(LazyLoadImage) `

  width: 125px;
  height: 150px;
  object-fit: cover;
  transform: rotate(8deg) translateY(10px);
  border-radius: 30px;
  z-index: 0;
  transition: transform 1.5s ease-in-out;

  &:hover {
    z-index: 2;
    transform: rotate(8deg) translateY(10px) translateX(30px);
  };

`;


const Placeholder = styled(Box) `

  width: 125px;
  height: 150px;
  background-color: #000;

`;


const AboutPictures = () => {
  return (
    <Fragment>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={-7}>
        <LeftImage src={halfDome} placeholder={<Placeholder />} />
        <MiddleImage src={personalPic} placeholder={<Placeholder />} />
        <RightImage src={bryantPark} placeholder={<Placeholder />} />
      </Stack>
    </Fragment>
  );
};

export default AboutPictures;
