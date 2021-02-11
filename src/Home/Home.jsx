import React, { useState, useEffect, useCallback, useRef } from 'react';
import querystring from 'query-string';
import SpotifyWebApi from 'spotify-web-api-node';

import SongPreview from './SongPreview';
import WikiInfo from './WikiInfo';

const spotifyApi = new SpotifyWebApi({
  redirectUri: 'http://localhost:3000/callback',
  clientId: '7d7cfc8ba99847eb8a155cc0b831c7b0',
});

const scope = 'user-read-private user-read-email user-read-playback-state user-top-read streaming';

const authorizationURL = querystring.stringifyUrl({
  url: 'https://accounts.spotify.com/authorize',
  query: {
    response_type: 'token',
    client_id: '7d7cfc8ba99847eb8a155cc0b831c7b0',
    scope: scope,
    redirect_uri: 'http://localhost:3000/callback',
  },
});

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [nowPlaying, setNowPlaying] = useState(null);
  const playingPoll = useRef();

  useEffect(() => {
    const token = localStorage.getItem('spotifyAuthToken');

    if (token) {
      setLoggedIn(true);
      spotifyApi.setAccessToken(token);
    }

  }, []);

  const getNowPlaying = useCallback(() => {
    if (loggedIn) {
      spotifyApi.getMyCurrentPlaybackState()
        .then((response) => {
          console.log(response);
          if (response.body && response.body.is_playing) {
            setNowPlaying({
              name: response.body.item.name,
              artist: response.body.item.artists[0].name,
              albumArt: response.body.item.album.images[0].url,
              albumName: response.body.item.album.name,
            });
          } else {
            setNowPlaying(null);
            console.log("Not playing anything");
          }
        })
        .catch(() => {
          setLoggedIn(false);
          localStorage.removeItem('spotifyAuthToken');
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    clearInterval(playingPoll.current);
    playingPoll.current = setInterval(getNowPlaying, 500);
  }, [getNowPlaying]);

  return (
    <div className='App'>
      Welcome to Spotifidia!
      <div>
      {
        loggedIn ? (
          <>Start playing music to learn about what you're listening to!</>
        ) : (
          <>
            Log in to Spotify and play music to learn about what you're listening to!
            <a href={authorizationURL}>
              Log In
            </a>
          </>
        )
      }
      </div>
      {
        nowPlaying && (
          <>
            <SongPreview nowPlaying={nowPlaying} />
            <WikiInfo nowPlaying={nowPlaying} />
          </>
        )
      }
    </div>
  );
}

export default Home;