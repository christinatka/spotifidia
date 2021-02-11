const router = require('express').Router();
const { getWikiSummary } = require('./utils');

router.get('/info', async (req, res) => {
  const { title, artist, album } = req.query;

  const info = {};

  if (title) {
    if (artist) {
      info.songInfo = await getWikiSummary(`${title} (${artist} song)`);
    }
    if (!info.songInfo) {
      info.songInfo = await getWikiSummary(`${title} (song)`);
    }
    // if (!info.songInfo) {
    //   info.songInfo = await getWikiSummary(title);
    // }
  }

  if (artist) {
    info.artistInfo = await getWikiSummary(`${artist} (band)`);
    if (!info.artistInfo) {
      info.artistInfo = await getWikiSummary(`${artist} (musician)`);
    }
    if (!info.artistInfo) {
      info.artistInfo = await getWikiSummary(artist);
    }
  }

  if (album) {
    if (artist) {
      info.albumInfo = await getWikiSummary(`${album} (${artist} album)`);
    }
    if (!info.albumInfo) {
      info.albumInfo = await getWikiSummary(`${album} (album)`);
    }
    if (!info.albumInfo) {
      info.albumInfo = await getWikiSummary(album);
    }
  }

  res.status(200).send(info);
});

module.exports = router;
