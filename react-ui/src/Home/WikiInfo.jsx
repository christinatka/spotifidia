import { Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
const axios = require('axios');

const InfoSection = ({ title, info }) => (
  <div>
    <h3>{title}</h3>
    <p>{info}</p>
  </div>
);

const WikiInfo = ({ nowPlaying }) => {
  const [info, setInfo] = useState({})

  const { name, artist, albumName } = nowPlaying;

  useEffect(() => {
    axios.get(`/api/info?title=${name}&artist=${artist}&album=${albumName}`)
      .then((res) => {
        setInfo(res.data);
      });
  }, [name, artist, albumName]);

  return (
    <div>
      <Typography component="div">
        {!!info.songInfo && (
          <InfoSection title="Song Info" info={info.songInfo} />
        )}
        {!!info.artistInfo && (
          <InfoSection title="Artist Info" info={info.artistInfo} />
        )}
        {!!info.albumInfo && (
          <InfoSection title="Album Info" info={info.albumInfo} />
        )}
      </Typography>
    </div>
  );
};

export default WikiInfo;
