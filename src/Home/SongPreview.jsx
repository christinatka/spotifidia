import { Box, Typography } from '@material-ui/core';

const SongPreview = ({ nowPlaying }) => {

  return (
    <div>
      <Typography component="div">
        <Box fontWeight="fontWeightBold" m={1} display='inline'>
          Now Playing:
        </Box>
        { nowPlaying.name }
      </Typography>
      <div>
          <img src={nowPlaying.albumArt} style={{ height: 150 }} alt='Album Art'/>
      </div>
      <Typography component="div">
        <Box fontWeight="fontWeightBold" m={1} display='inline'>
            Artist/Band:
          </Box>
          { nowPlaying.artist }
      </Typography>
    </div>
  );
};

export default SongPreview;
