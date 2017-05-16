import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  pink500,
  blue500,
  cyan500,
  red500,
  purple500,
  deepPurple500,
  green500,
  yellow500
} from 'material-ui/styles/colors';

export const muiTheme = getMuiTheme({
  palette: {
    textColor: pink500,
  },
  appBar: {
    color: blue500,
    // height: 50,
  },
});