import { createTheme } from '@mui/material';
import { cyan, yellow, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    text: {
      primary: grey[700],
    },
    primary: {
      main: cyan[700],
    },
    secondary: {
      main: yellow[700],
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          input: {
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
              display: 'none',
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          height: 0,
        },
      },
    },

  },
});

export default theme;
