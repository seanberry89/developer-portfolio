import React, { Fragment } from 'react';
import { Box, Link, Paper, Stack, styled, Typography, useMediaQuery } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import '../../assets/style/Swiper.css';

import forest from '../../assets/images/forest-transparent.png';
import RehabHome from '../../assets/images/project-images/rehab-typing-test/rehab-home.png';
import RehabSelect from '../../assets/images/project-images/rehab-typing-test/rehab-select.png';
import RehabTest from '../../assets/images/project-images/rehab-typing-test/rehab-test.png';
import RehabDialog from '../../assets/images/project-images/rehab-typing-test/rehab-dialog.png';
import RehabTyping from '../../assets/images/project-images/rehab-typing-test/rehab-typing.png';
import RehabResults from '../../assets/images/project-images/rehab-typing-test/rehab-results.png';
import RehabMobileHome from '../../assets/images/project-images/rehab-typing-test/rehab-mobile-home.png';
import RehabMobileSelect from '../../assets/images/project-images/rehab-typing-test/rehab-mobile-select.png';
import RehabMobileTest from '../../assets/images/project-images/rehab-typing-test/rehab-mobile-test.png';


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
  color: #2F7ABF;
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

const CodePaper = styled(Paper) `

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #2F7ABF;
  height: 40px;
  width: 100px;
  color: #FFF;
  font-size: 13px;
  font-weight: bold;
  border-radius: 10px;

`;

const CodeLink = styled(Link) `

  text-decoration: none;
  transition: transform 0.75s ease-in-out;

  &:hover {
    transform: scale(1.2);
  };

`;

const TypingSpan = styled(Box) `

  display: inline;
  background-color: rgba(47, 122, 191, 0.75);
  font-weight: 500;
  color: #fff;
  border-radius: 5px;
  padding: 2px 5px;

`;


const TypingPage = () => {

  return (

      <Box sx={{ position: "relative", backgroundColor: theme => theme.palette.primary.main, overflow: "hidden", py: 10 }}>

        <ForestBackground></ForestBackground>
        <Stack sx={{ position: "relative", textAlign: "center", px: { xs: 2, md: 7 } }} direction="column" justifyContent="center" alignItems="center">

          <TypingSwiper />

          <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>

            <Typography variant="h3">Rehab Typing Test</Typography>

            <Paper sx={{ width: { xs: "220px", md: "240px" }, backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <Typography color="#F0DB4F" fontSize={{ xs: 12, md: 14 }}>JavaScript</Typography>
                <Typography color="#61DBFB" fontSize={{ xs: 12, md: 14 }}>React</Typography>
                <Typography color="#1E88E5" fontSize={{ xs: 12, md: 14 }}>MUI Core</Typography>
              </Stack>
            </Paper>

            <Paper sx={{ width: { xs: "220px", md: "240px" }, backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <Typography color="#FFF" fontSize={{ xs: 12, md: 14 }}>React Router API</Typography>
                <Typography color="#61DBFB" fontSize={{ xs: 12, md: 14 }}>Context API</Typography>
              </Stack>
            </Paper>

            <Stack sx={{ position: "relative", width: "100%", px: { xs: 0, md: 5 } }} direction={{ xs: "column", md: "row" }} justifyContent="center" alignItems="flex-start">
              <Stack sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }} direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography color="#fff" fontWeight={500} variant="h5">The Story</Typography>
                <Typography sx={{ px: { xs: 0, md: 5 }, lineHeight: 1.75 }} fontSize={15} fontWeight={300} variant="subtitle2">To return the patient to their preferred activities of daily living is the objective of occupational therapy.&nbsp; It’s this return that introduces the rehab typing test application.&nbsp; The decision to create the typing test wasn’t a choice I made, but its functionality was inspired by the loved ones around me.&nbsp; My father, now retired from backend development, was recovering from esophageal surgery and undergoing clinical therapy while I was building this portfolio.&nbsp; Then my girlfriend, an occupational therapist, would often share stories about how she lacked the resources she wished she had for her patients.&nbsp; So when I asked her what kind of tools could be useful for an OT, she then gave me the idea about a typing test that would inform the patient about their missed keys when typing; to which I replied, “I think I can build that.”&nbsp; Therefore the rehab typing test provides words-per-minute and typing accuracy, but also gives the user a breakdown of their most missed keys as well.
                </Typography>
              </Stack>
              <Stack sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }} direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography color="#fff" fontWeight={500} variant="h5">The Road</Typography>
                <Typography sx={{ px: { xs: 0, md: 5 }, lineHeight: 1.75 }} fontSize={15} fontWeight={300} variant="subtitle2">The application’s UI and functionality were based on its target audience: healthcare workers in clinical rehabilitation.&nbsp; I wanted the users to navigate throughout the application with ease while comfortably demonstrating its service to patients trying to recover their computer typing.&nbsp; To do this I divided the application into three routes — Home, Select, and Test — via <TypingSpan>React Router API.</TypingSpan>&nbsp; The Select Component would determine the time of the typing test while the Test Component would load the selected time and random excerpt for the user’s test.&nbsp; Instead of two typing fields, the user’s typing input and the user’s typing prompt, I combined both of these elements into a singular field that could ease the user further.&nbsp; Then with <TypingSpan>MUI’s</TypingSpan> IconButton and Drawer Components I included instructions for the user if applicable.&nbsp; I handled the state management with <TypingSpan>prop-drilling</TypingSpan> and <TypingSpan>Context API,</TypingSpan> while the <TypingSpan>useReducer</TypingSpan> hook handled the state transitions.
                </Typography>
              </Stack>
            </Stack>

            <Stack justifyContent="center" alignItems="center" direction="row" spacing={5}>
              <CodeLink href="https://github.com/seanberry89/nps-finder" rel="noopener" target="_blank"><CodePaper elevation={6}>Source Code</CodePaper></CodeLink>
              <ProjectLink href="https://rehabtypingtest.com" rel="noopener" target="_blank"><ProjectPaper elevation={6}>Live Project</ProjectPaper></ProjectLink>
            </Stack>

            <Paper sx={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 5 }} elevation={10}>
              <Stack sx={{ width: "100%", py: 4, px: { xs: 2, md: 5 } }} direction={{ xs: "column", md: "row" }} alignItems="flex-start" justifyContent="center" spacing={5}>
                <Stack sx={{ width: { xs: "100%", md: "50%"}, textAlign: "center" }} direction="column" spacing={2}>
                  <Typography color="#fff" fontWeight={500} variant="h5">The Challenge: <TypingSpan>Stale State</TypingSpan></Typography>
                  <Typography color="#fff" fontSize={15} fontWeight={300} sx={{ lineHeight: 1.75 }} variant="subtitle2">An unsuspecting issue I had to resolve when differentiating the test’s time was the <TypingSpan>stale state.</TypingSpan>&nbsp; I didn’t understand why the timer’s state would (sometimes) ignore the user’s selection and return to the previous value or even the default value.&nbsp; First I had thought the issue was because of the <TypingSpan>React Router API</TypingSpan> for the update occurred when navigating from the select page to the test page.&nbsp; But after reviewing further, I came to realize the state didn’t reflect the update because of the <TypingSpan>stale closure</TypingSpan> from the link's event handler.
                  </Typography>
                  <Typography color="#fff" fontSize={15} fontWeight={300} sx={{ lineHeight: 1.75 }} variant="subtitle2">To resolve this issue and persist the timer’s state and excerpt’s state during page refreshes, I decided to create the custom hook <TypingSpan>useLocalStorage.</TypingSpan>&nbsp; Imported within the custom hook I had <TypingSpan>useState</TypingSpan> and <TypingSpan>useEffect</TypingSpan> hooks.&nbsp; The <TypingSpan>useEffect</TypingSpan> hook would call the <TypingSpan>setItem</TypingSpan> method from the <TypingSpan>localStorage</TypingSpan> object to store the state as a key-value pair.&nbsp; Then the <TypingSpan>useState</TypingSpan> hook would retrieve the persisted state via the <TypingSpan>getItem</TypingSpan> method.&nbsp; This method would retrieve the stored value and update the new state via <TypingSpan>updater function.</TypingSpan>&nbsp; It was this management of <TypingSpan>updater function</TypingSpan> that resolved the event handler's <TypingSpan>stale closure.</TypingSpan>&nbsp; Thereafter I imported the custom hook <TypingSpan>useLocalStorage</TypingSpan> inside the test component and replaced its previous state, the timer and excerpt, with the parameters of a key-value pair for the custom hook instead.
                  </Typography>
                </Stack>
                <Stack sx={{ width: { xs: "100%", md: "50%"}, textAlign: "center" }} direction="column" spacing={2}>
                  <Typography color="#fff" fontWeight={500} variant="h5">The Challenge: <TypingSpan>Character Matching</TypingSpan></Typography>
                  <Typography color="#fff" fontSize={15} fontWeight={300} sx={{ lineHeight: 1.75 }} variant="subtitle2">For matching the typed characters with the excerpt’s characters in the typing test, I used the <TypingSpan>keydown</TypingSpan> event listener.&nbsp; After splitting the excerpt’s characters into substrings via <TypingSpan>split</TypingSpan> method, I had the <TypingSpan>push</TypingSpan> method include an object with two properties — id and key — for each of the characters in the array.&nbsp; This was invaluable for the character matching as I was able to share this data when showing the characters in the Input Component and processing the characters in the custom hook <TypingSpan>useKeyDown.</TypingSpan>
                  </Typography>
                  <Typography color="#fff" fontSize={15} fontWeight={300} sx={{ lineHeight: 1.75 }} variant="subtitle2">Imported within the custom hook were <TypingSpan>useEffect</TypingSpan> and <TypingSpan>useState.</TypingSpan>&nbsp; I setup the <TypingSpan>keydown</TypingSpan> event inside the <TypingSpan>useEffect</TypingSpan> hook via <TypingSpan>onkeydown</TypingSpan> from the document and removed the effect’s dependency list so the hook could re-run after each typed event from the user.&nbsp; Afterward the typed event would intersect with the three <TypingSpan>if-statements:</TypingSpan> if the timer hadn’t started then start the timer, if the user’s typed character was acceptable then update the character matching, and if the user’s typed character was “backspace” then delete the typed character.&nbsp; All of the typed events from the user would then update the progression of the excerpt’s characters via <TypingSpan>useState</TypingSpan> hook.&nbsp; I separated the excerpt’s characters into three states: incoming characters, current character, and outgoing characters.&nbsp; Thereafter each of the states would update the excerpt's progression when the user matched a character, missed a character, or deleted a character.
                  </Typography>
                </Stack>
              </Stack>
            </Paper>

          </Stack>
        </Stack>
      </Box>
  );
};

export default TypingPage;


export const TypingSwiper = () => {

  const mobile = useMediaQuery('(max-width:800px)');

  return (

    <Fragment>

    { !mobile ? (

      <Swiper style={{ width: "738px", height: "375px", border: "3px solid #2F7ABF" }} modules={[ Navigation, Pagination ]} centeredSlides="true" slidesPerView="auto" spaceBetween={10} navigation pagination={{ clickable: true }} loop={true}>

        <SwiperSlide>
          <img src={RehabHome} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabSelect} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabTest} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabDialog} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabTyping} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabResults} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabMobileHome} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabMobileSelect} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabMobileTest} alt="" />
        </SwiperSlide>

      </Swiper>

    ) : (

      <Swiper style={{ width: "425px", height: "385px", border: "3px solid #2F7ABF" }} modules={[ Navigation, Pagination ]} centeredSlides="true" slidesPerView="auto" spaceBetween={10} navigation pagination={{ clickable: true }} loop={true}>

        <SwiperSlide>
          <img src={RehabHome} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabSelect} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabTest} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabDialog} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabTyping} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabResults} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabMobileHome} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabMobileSelect} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={RehabMobileTest} alt="" />
        </SwiperSlide>

      </Swiper>

    ) }

    </Fragment>

  );

}

