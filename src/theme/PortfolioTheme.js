// Material UI Theme Configuration

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Raleway",
      textTransform: "none",
    }
  },
  palette: {
    primary: {
      main: "#212121"
    },
    secondary: {
      main: "#000"
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variant: "subtitle2",
        color: "#fff",
        component: "div"
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0
      }
    },
    MuiStack: {
      defaultProps: {
        sx: {
          px: 2,
          py: 1
        },
        spacing: 2
      }
    },
    MuiLink: {
      defaultProps: {
        sx: {
          color: "#fff"
        },
        underline: "none",
      }
    },
    MuiButton: {
      defaultProps: {
        sx: {
          color: "#fff"
        },
        disableRipple: true,
      },
      variant: "text"
   },
   MuiInputBase: {
    defaultProps: {
      sx: {
        color: "#fff"
      }
    }
   },
    MuiInputLabel: {
      defaultProps: {
        sx: {
          color: "#fff",
          fontSize: 10
        }
      }
    },
    MuiListItem: {
      defaultProps: {
        sx: {
          color: "#fff"
        }
      }
    }
  }
});

const PortfolioTheme = (prop) => {
  return (
    <ThemeProvider theme={theme}>{prop.children}</ThemeProvider>
  )
}

export default PortfolioTheme;
