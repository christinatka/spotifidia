import { Redirect, useLocation } from 'react-router-dom';
import querystring from 'query-string';

const Callback = () => {
    const { hash } = useLocation();
    const { access_token } = querystring.parse(hash);
    localStorage.setItem('spotifyAuthToken', access_token);

    return <Redirect to='/discover' />;
};

export default Callback;