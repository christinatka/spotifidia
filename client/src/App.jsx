import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // useLocation,
} from 'react-router-dom';
import Home from './Pages/Home';
import Callback from './Pages/Callback';
import Discover from './Pages/Discover';

// const PrintLocation = () => {
//   console.log(useLocation());
//   return null;
// }

const App = () => { return (
    <Router>
      {/* <PrintLocation /> */}
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/callback">
            <Callback />
          </Route>
          <Route exact path="/discover">
            <Discover />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
); }

export default App;