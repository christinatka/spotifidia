import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Callback from './Callback';
import Home from './Home';

const App = () => (
  <Router>
    <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/callback" component={Callback} />
    </Switch>
    </div>
  </Router>
);

export default App;