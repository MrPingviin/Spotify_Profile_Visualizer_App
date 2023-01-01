import "./TopListItems.css";
import { userTopArtists } from "../../logic/dataContainers";
import { userTopTracks } from "../../logic/dataContainers";
import { userRecentTracks } from "../../logic/dataContainers";

const TopListItem = ({
  type,
  children,
  img,
  artistName,
  trackTitle,
  trackText,
  short,
  recent,
}) => {
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA =========> ", userTopArtists);
  let songCounter = 1;
  let artistCounter = 1;
  if (type == "Artist") {
    if (short) {
      return (
        <ul className="Artist">
          {userTopArtists[0].items.map((item) => {
            while (artistCounter < 6) {
              artistCounter++;
              return (
                <li>
                  <img
                    src={item.images[0].url}
                    alt="Artist"
                    onClick={() =>
                      (window.location.href = item.external_urls.spotify)
                    }
                    className="Clickable"
                  />
                  <span
                    onClick={() =>
                      (window.location.href = item.external_urls.spotify)
                    }
                    className="Clickable"
                  >
                    {item.name}
                  </span>
                </li>
              );
            }
          })}
        </ul>
      );
    } else {
      return (
        <ul className="Artist">
          {userTopArtists[0].items.map((item) => {
            return (
              <li>
                <img
                  src={item.images[0].url}
                  alt="Artist"
                  onClick={() =>
                    (window.location.href = item.external_urls.spotify)
                  }
                  className="Clickable"
                />
                <span
                  onClick={() =>
                    (window.location.href = item.external_urls.spotify)
                  }
                  className="Clickable"
                >
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
      );
    }
  } else if (type == "Song") {
    if (short) {
      return (
        <ul className="Song">
          {userTopTracks[0].items.map((item) => {
            while (songCounter < 6) {
              songCounter++;
              return (
                <li>
                  <div className="TrackInfos">
                    <img
                      src={item.album.images[0].url}
                      alt="Song"
                      onClick={() =>
                        (window.location.href = item.external_urls.spotify)
                      }
                      className="Clickable"
                    />
                    <div
                      className="SongDetails Clickable"
                      onClick={() =>
                        (window.location.href = item.external_urls.spotify)
                      }
                    >
                      <span>{item.name}</span>
                      <span>
                        {item.artists[0].name} | {item.album.name}
                      </span>
                    </div>
                  </div>
                  <span className="Length">
                    {Math.round(item.duration_ms / 1000 / 60)} min
                  </span>
                </li>
              );
            }
          })}
        </ul>
      );
    } else {
      if (recent) {
        return (
          <ul className="Song">
            {userRecentTracks[0].map((item) => {
              return (
                <li>
                  <div className="TrackInfos">
                    <img
                      src={item.track.album.images[0].url}
                      alt="Song"
                      onClick={() =>
                        (window.location.href =
                          item.track.external_urls.spotify)
                      }
                      className="Clickable"
                    />
                    <div
                      className="SongDetails Clickable"
                      onClick={() =>
                        (window.location.href =
                          item.track.external_urls.spotify)
                      }
                    >
                      <span>{item.track.name}</span>
                      <span>
                        {item.track.album.artists[0].name} |{" "}
                        {item.track.album.name}
                      </span>
                    </div>
                  </div>
                  <span className="Length">
                    {Math.round(item.track.duration_ms / 1000 / 60)} min
                  </span>
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <ul className="Song">
            {userTopTracks[0].items.map((item) => {
              return (
                <li>
                  <div className="TrackInfos">
                    <img
                      src={item.album.images[0].url}
                      alt="Song"
                      onClick={() =>
                        (window.location.href = item.external_urls.spotify)
                      }
                      className="Clickable"
                    />
                    <div
                      className="SongDetails Clickable"
                      onClick={() =>
                        (window.location.href = item.external_urls.spotify)
                      }
                    >
                      <span>{item.name}</span>
                      <span>
                        {item.artists[0].name} | {item.album.name}
                      </span>
                    </div>
                  </div>
                  <span className="Length">
                    {Math.round(item.duration_ms / 1000 / 60)} min
                  </span>
                </li>
              );
            })}
          </ul>
        );
      }
    }
  }
};

export default TopListItem;
