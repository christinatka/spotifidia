import { useState, useEffect } from 'react';
//useCallback, useRef
import SpotifyWebApi from 'spotify-web-api-node';
import { Avatar, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const spotifyApi = new SpotifyWebApi({
    //redirectUri: 'https://spotifidia.herokuapp.com/callback',
    redirectUri: 'http://localhost:3000/callback',
    clientId: '7d7cfc8ba99847eb8a155cc0b831c7b0',
  });
  

const UserImage = styled(Avatar)`
    && {
        width: 5vw;
        height: 5vw;
        margin: 1px 10px;
        border: 1px solid #fff;
    }
`

const GradientButton = styled(Button)`
    && {
        background: linear-gradient(45deg, #4fbc73 30%, #4fbc73 90%);
        border: 0;
        color: #fff;
        padding: 10px 25px;
        box-shadow: 0 0px 5px 2px rgba(255, 105, 135, .30);
    }
`

const Discover = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    // const [nowPlaying, setNowPlaying] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    // const playingPoll = useRef();

    useEffect(() => {
        const token = localStorage.getItem('spotifyAuthToken');

        if (token) {
            setLoggedIn(true);
            spotifyApi.setAccessToken(token);
        }

    }, []);

    // const getNowPlaying = useCallback(() => {
    // if (loggedIn) {
    //     spotifyApi.getMyCurrentPlaybackState()
    //     .then((response) => {
    //         if (response.body && response.body.is_playing) {
    //         setNowPlaying({
    //             name: response.body.item.name,
    //             artist: response.body.item.artists[0].name,
    //             albumArt: response.body.item.album.images[0].url,
    //             albumName: response.body.item.album.name,
    //         });
    //         } else {
    //         setNowPlaying(null);
    //         console.log("Not playing anything");
    //         }
    //     })
    //     .catch(() => {
    //         setLoggedIn(false);
    //         localStorage.removeItem('spotifyAuthToken');
    //     });
    // }
    // }, [loggedIn]);

    useEffect(() => {
    if (loggedIn) {
        spotifyApi.getMe()
        .then(({ body }) => {
            setUserInfo({
                name: body.display_name,
                image: body.images[0].url,
                followers: body.followers.total,
            })
        });
    } else {
        setUserInfo(null);
    }
    }, [loggedIn]);

    // useEffect(() => {
    // clearInterval(playingPoll.current);
    // playingPoll.current = setInterval(getNowPlaying, 500);
    // }, [getNowPlaying]);

    return (
        <div>
            {
                userInfo && (
                  <div>
                    <GradientButton> 
                        <UserImage alt={userInfo.name} src={userInfo.image} />
                        <Typography>
                            {userInfo.name}
                            <div>
                                {`Followers: ${userInfo.followers}`}
                            </div>
                        </Typography>
                    </GradientButton>
                  </div>
                )
              }
        </div>
    );
};
  
  export default Discover;