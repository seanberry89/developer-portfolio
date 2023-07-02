import React, { Fragment } from 'react';
import { Box, Link, Paper, Stack, styled, Typography, useMediaQuery } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import '../../assets/style/Swiper.css';

import forest from '../../assets/images/forest-transparent.png';
import TeslaHomepage from '../../assets/images/project-images/tesla-clone/tesla-homepage.png';
import TeslaMenu from '../../assets/images/project-images/tesla-clone/tesla-menu.png';
import TeslaFooter from '../../assets/images/project-images/tesla-clone/tesla-accessories.png';
import TeslaMobile from '../../assets/images/project-images/tesla-clone/tesla-mobile.png';


document.onload = () => {
  window.scrollTo(0,0);
}


const ForestBackground = styled(Box) `
  background-image: url(${forest}), url(${forest});
  background-size: 750px, 750px;
  background-repeat: no-repeat;
  background-position: right -45px bottom 40px, left -45px bottom 40px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const ProjectPaper = styled(Paper) `

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #FFF;
  height: 40px;
  width: 100px;
  color: #E82127;
  font-size: 13px;
  font-weight: bold;
  border-radius: 10px;

`;

const CodePaper = styled(Paper) `

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #E82127;
  height: 40px;
  width: 100px;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  border-radius: 10px;

`;

const ProjectLink = styled(Link) `

  text-decoration: none;
  transition: transform 0.75s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  };

`;

const CodeLink = styled(Link) `

  text-decoration: none;
  transition: transform 0.75s ease-in-out;

  &:hover {
    transform: scale(1.2);
  };

`;

const TeslaSpan = styled(Box) `

  display: inline;
  background-color: rgba(232, 33, 39, 0.75);
  font-weight: 500;
  color: #fff;
  border-radius: 5px;
  padding: 2px 5px;

`;

const TeslaPage = () => {

  return (

      <Box sx={{ position: "relative", backgroundColor: theme => theme.palette.primary.main, overflow: "hidden", py: 10 }}>

        <ForestBackground></ForestBackground>
        <Stack sx={{ position: "relative", textAlign: "center", px: { xs: 2, md: 7 } }} direction="column" justifyContent="center" alignItems="center">

          <TeslaSwiper />

          <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>

            <Typography variant="h3">Tesla Clone</Typography>

            <Paper sx={{ width: { xs: "175px", md: "200px" }, backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <Typography color="#F0DB4F" fontSize={{ xs: 12, md: 14 }}>JavaScript</Typography>
                <Typography color="#264de4" fontSize={{ xs: 12, md: 14 }}>CSS</Typography>
                <Typography color="#e34c26" fontSize={{ xs: 12, md: 14 }}>HTML</Typography>
              </Stack>
            </Paper>

            <Stack sx={{ width: "100%", px: { xs: 0, md: 5 } }} direction={{ xs: "column", md: "row" }} justifyContent="center" alignItems="flex-start">
              <Stack sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }} direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography color="#fff" fontWeight={500} variant="h5">The Story</Typography>
                <Typography sx={{ px: { xs: 0, md: 5 }, lineHeight: 1.75 }} fontSize={15} fontWeight={300} variant="subtitle2">For the first project I wanted to demonstrate the basic knowledge of a front-end developer: HTML, CSS, and JavaScript.&nbsp; To show this knowledge I decided to clone the homepage of a recognizable brand — so I chose Tesla.&nbsp; Why Tesla?&nbsp; I saw the UI to be straightforward and open (not busy), but also eye-catching when showcasing their product selection.&nbsp; The product images are unavoidable, and I like that.&nbsp; This application mirrors the face and functionality of the Tesla homepage.
                </Typography>
              </Stack>
              <Stack sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }} direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography color="#fff" fontWeight={500} variant="h5">The Road</Typography>
                <Typography sx={{ px: { xs: 0, md: 5 }, lineHeight: 1.75 }} fontSize={15} fontWeight={300} variant="subtitle2">Since I didn't load frameworks for the first application, I utilized <TeslaSpan>ID selectors</TeslaSpan> for initializing functions and events with Javascript and <TeslaSpan>class selectors</TeslaSpan> for styling the structural elements with CSS.&nbsp; I divided the seven product categories into sections and styled all of their interior elements — containers, buttons, and text — via structural classes.&nbsp; The side menu and faded background were toggled via event listeners, and the arrow icon in the first section repositioned the document via an <TeslaSpan>onClick</TeslaSpan> function.
                </Typography>
              </Stack>
            </Stack>

            <Stack justifyContent="center" alignItems="center" direction="row" spacing={5}>
              <CodeLink href="https://github.com/seanberry89/tesla-clone" rel="noopener" target="_blank"><CodePaper elevation={6}>Source Code</CodePaper></CodeLink>
              <ProjectLink href="https://teslaclone.com" rel="noopener" target="_blank"><ProjectPaper elevation={6}>Live Project</ProjectPaper></ProjectLink>
            </Stack>

            <Paper sx={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack sx={{ width: "100%", textAlign: "center", py: 4, px: { xs: 2, md: 5 } }} direction="column" alignItems="center" justifyContent="center">
                <Typography color="#fff" fontWeight={500} variant="h5">The Challenge: <TeslaSpan>window.scrollY</TeslaSpan></Typography>
                <Typography color="#fff" fontSize={15} fontWeight={300} variant="subtitle2" sx={{ lineHeight: 1.75 }}>A problem I had to overcome was the auto scroll and position lock between product sections in the Tesla homepage.&nbsp; From the developer portfolio I learned how to reposition the document based on the click of an event listener, but I was unfamiliar with the position lock of the document when the user released the scroll.&nbsp; To recreate this functionality, I had to learn the scroll offsets from the <TeslaSpan>window</TeslaSpan> object, or more specifically, the <TeslaSpan>scrollY</TeslaSpan> property.&nbsp; But the catch and the release of the user’s position within a given time was another question.&nbsp; After some time I learned to use the <TeslaSpan>setTimeout</TeslaSpan> and the <TeslaSpan>clearTimeout</TeslaSpan> functions as a means of scrolling the document to the nearest section after a pause.&nbsp; Each section was given its own conditional that checked the pixel count range, and lastly, everything was wrapped and ran inside a scroll event listener.</Typography>
              </Stack>
            </Paper>

          </Stack>
        </Stack>
      </Box>
  );
};

export default TeslaPage;


export const TeslaSwiper = () => {

  const mobile = useMediaQuery('(max-width:800px)');

  return (

    <Fragment>

      { !mobile ? (

        <Swiper style={{ width: "735px", height: "380px", border: "3px solid #E82127" }} modules={[ Navigation, Pagination ]} centeredSlides="true" slidesPerView="auto" spaceBetween={10} navigation pagination={{ clickable: true }} loop={true}>

          <SwiperSlide>
            <img src={TeslaHomepage} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={TeslaFooter} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={TeslaMenu} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={TeslaMobile} alt="" />
          </SwiperSlide>

        </Swiper>

      ) : (

        <Swiper style={{ width: "425px", height: "385px", border: "3px solid #E82127" }} modules={[ Navigation, Pagination ]} centeredSlides="true" slidesPerView="auto" spaceBetween={10} navigation pagination={{ clickable: true }} loop={true}>

          <SwiperSlide>
            <img src={TeslaHomepage} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={TeslaFooter} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={TeslaMenu} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={TeslaMobile} alt="" />
          </SwiperSlide>

        </Swiper>

      ) }

    </Fragment>

  );

}

