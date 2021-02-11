const SongPreview = ({ nowPlaying }) => {
  return (
    <div>
      <div>
        Now Playing: { nowPlaying.name } by: { nowPlaying.artist }
      </div>
      <div>
        <img src={nowPlaying.albumArt} style={{ height: 150 }} alt='Album Art'/>
      </div>
    </div>
  );
};

export default SongPreview;
