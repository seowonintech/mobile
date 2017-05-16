// React
import React from 'react';
// React-Router
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { RaisedButton } from 'material-ui';
// Custom
import Header from './Header';
import Home from '../routes/Home';
import About from '../routes/About';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => {
  return (
    <Router>
      <MuiThemeProvider>
        <div>
          <Header />

          <RaisedButton label="Default" />

          <hr/>
          {/* Route컴포넌트의 component속성 components와 헷갈리지 말자. */}
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;