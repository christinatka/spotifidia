import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Callback from './Callback';
import Home from './Home';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/callback" component={Callback} />
    </Switch>
  </Router>
);

export default App;


// constructor(){
//   super();
//   const params = this.getHashParams();
//   const token = params.access_token;
//   if (token) {
//     spotifyApi.setAccessToken(token);
//   }
//   this.state = {
//     loggedIn: token ? true : false,
//     nowPlaying: { name: 'Not Checked', albumArt: '' }
//   }
// }
// getHashParams() {
//   var hashParams = {};
//   var e, r = /([^&;=]+)=?([^&;]*)/g,
//       q = window.location.hash.substring(1);
//   e = r.exec(q)
//   while (e) {
//      hashParams[e[1]] = decodeURIComponent(e[2]);
//      e = r.exec(q);
//   }
//   return hashParams;
// }