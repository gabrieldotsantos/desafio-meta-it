import styled from "styled-components";
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import CardActions from '@mui/material/CardActions';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ED4D77',
    },
    secondary: {
      main: '#ED4D77',
    },
    error: {
      main: purple.A400,
    },
  },
});

export default theme;

export const CardActionsTheme = styled(CardActions)`
    display: block;
`;