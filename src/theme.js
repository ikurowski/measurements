import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[700],
    },
    secondary: {
      main: yellow[700],
    },
  },
});

export default theme;
