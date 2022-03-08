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
});

export default theme;
