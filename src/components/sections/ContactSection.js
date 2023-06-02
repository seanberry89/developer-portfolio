import React from 'react';
import { Box, Button, Divider, Paper, Stack, styled, TextField, Typography } from '@mui/material';
import { flexColumn, flexContact } from '../../theme/CustomTheme';

import forest from '../../assets/images/forest-transparent.png';

const ForestBackground = styled(Box) `

  background-image: url(${forest}), url(${forest});
  background-size: 750px, 750px;
  background-repeat: no-repeat;
  background-position: right -45px bottom 5px, left -45px bottom 5px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;

`;

const ContactButton = styled(Button) `

  font-size: 14px;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 15px;
  padding: 10px 25px;
  margin-top: 10px;

  &:hover {
    background-color: transparent;
  };

  &:active {
    transform: scale(1.1);
  };

`;

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#fff"
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff"
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid #fff",
      borderRadius: 25
    },

    "&:hover fieldset": {
      borderColor: "#fff"
    },

    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    }
  },
  "& .MuiFormHelperText-root": {
    color: "#fff"
  },
  "& .MuiFormHelperText-root.Mui-focused": {
    color: "#fff"
  }
})

const StyledBox = styled(Box) `
  position: absolute;
  top: 0;
  left: 1;
  border-bottom: 3px solid red;
  width: 130px;
  transform: translate(-5px, 20px);
`;

const ContactSection = () => {

  return (
    <Box sx={{ position: "relative", backgroundColor: theme => theme.palette.primary.main, pb: { xs: 12, md: 8 }, pt: { xs: 5 } }}>
      <ForestBackground></ForestBackground>
      <Stack sx={{ ...flexContact, height: "100%", px: { xs: 3, md: 0 } }} direction={{ xs: "column", md: "row" }} spacing={{ xs: 4, md: 0 }}>
        <Stack sx={{ width: { xs: "100%", md: "50%" }, zIndex: 1 }} justifyContent="center" alignItems="center" direction="column">
          <Box sx={{ position: "relative" }}>
            <Typography sx={{ position: "absolute", top: -40, left: -50, zIndex: 3, fontFamily: "Holland", transform: "rotate(-15deg)" }} color="red" variant="h4">The Call</Typography>
            <StyledBox></StyledBox><Typography variant="h4">Contact to Adventure</Typography>
          </Box>
          <Typography sx={{ px: 5 }} fontWeight={300} variant="body1">Thus comes the time when the developer — equipped with frameworks, functions, and a few lines of CSS — must answer the<span style={{ color: "red", fontFamily: "Holland", fontSize: "22px" }}> Call to Adventure.</span>&nbsp; Bugs and errors must be overcome.&nbsp; Deadlines fought and won.&nbsp; Please contact me via email or mobile if you’re looking for a developer that’s awaiting the call to his next adventure.</Typography>
          <Stack sx={{ pt: 2 }} direction="row" divider={<Divider color="#fff" orientation="vertical" flexItem />}>
            <Typography variant="body2">sean.michael.berry@gmail.com</Typography>
            <Typography variant="body2">630-433-0161</Typography>
          </Stack>
        </Stack>
        <Stack sx={{ width: { xs: "100%", md: "50%" }, zIndex: 1 }} justifyContent="center" alignItems="center" direction="column">
          <Paper sx={{ height: 450, width: { xs: 450, md: 500 }, py: 2, borderRadius: 10, backgroundColor: "rgba(0, 0, 0, 0.6)" }} elevation={10}>
            <Box sx={{ ...flexColumn, p: 1 }} component="form" name="contact" method="post" autoComplete="off">

              <input type="hidden" name="form-name" value="contact" />

              <Stack justifyContent="flex-start" alignItems="center" direction="row" spacing={2}>
                <StyledTextField fullWidth variant="outlined" id="name" name="name" label="Name" helperText="Enter Name" color="success" size="small" required />

                <StyledTextField fullWidth variant="outlined" id="email" name="email" label="Email" helperText="Example: name@gmail.com" color="success" size="small" required />
              </Stack>

              <Stack direction="column">
                <StyledTextField variant="outlined" id="subject" name="subject" label="Subject" helperText="How Can I Help You?" color="success" size="small" required />

                <StyledTextField variant="outlined" id="message" name="message" label="Message" multiline rows="5" helperText="Enter Message" color="success" size="small" required />
              </Stack>

              <Box>
                <ContactButton type="submit" variant="contained">Send Message</ContactButton>
              </Box>

            </Box>
          </Paper>
        </Stack>
      </Stack>
    </Box>
  )

};

export default ContactSection;
