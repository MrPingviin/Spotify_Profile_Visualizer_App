import "./Image.css";

const Image = ({
  src,
  width,
  height,
  onClick,
  className,
  bandName,
  playlistName,
  trackNumber,
}) => {
  return (
    <div className="TopArtist">
      <img
        src={src}
        width={width}
        height={height}
        onClick={onClick}
        className={className}
      ></img>
      {bandName ? (
        <span className="Clickable" onClick={onClick}>
          {bandName}
        </span>
      ) : null}
      {playlistName
        ? ( <div className="playlistInfo">
            <span className="Clickable" onClick={onClick}>{playlistName}</span>
            <span className="Clickable" onClick={onClick}>{trackNumber} TRACKS</span>
        </div>
          )
        : null}
    </div>
  );
};

export default Image;
