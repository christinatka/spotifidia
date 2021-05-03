import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Pages/Home'

const App = () => (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </div>
    </Router>
);

export default App;