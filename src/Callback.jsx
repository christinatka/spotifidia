import { Redirect, useLocation } from 'react-router-dom';
import querystring from 'query-string';

const Callback = () => {
  const { hash } = useLocation();
  const searchJson = querystring.parse(hash);

  localStorage.setItem('spotifyAuthToken', searchJson.access_token);

  return <Redirect to='/' />;
};

export default Callback;
