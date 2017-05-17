// React
import React from 'react';
// React-Router
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  MuiThemeProvider,
  RaisedButton
} from 'material-ui';
// Custom
import { muiTheme } from '../assets';
import {
  Header,
  SubHeader,
  Footer,
} from '.';
import {
  Home,
  About,
  MQTT,
} from '../routes';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => {
  return (
    <Router>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header />
          <SubHeader />

          <RaisedButton label="Default" />

          <hr/>

          {/* Route컴포넌트의 component속성 components와 헷갈리지 말자. */}
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          
          <Footer />
        </div>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;