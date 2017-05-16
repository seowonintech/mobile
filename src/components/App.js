// React
import React from 'react';
// React-Router
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// Custom
import Header from './Header';
import Home from '../routes/Home';
import About from '../routes/About';

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <hr/>
        {/* Route컴포넌트의 component속성 components와 헷갈리지 말자. */}
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
  );
};

export default App;