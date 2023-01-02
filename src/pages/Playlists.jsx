import TopCards from "../components/lists/TopCards";
import Image from "../components/image/Image";
import { userPlaylists } from "../logic/dataContainers";
import { userPlaylistTrackCounts } from "../logic/dataContainers";

const Playlists = () => {
    let count = -1;
  return (
    <>
      <TopCards
        title="Playlists"
        onClick1={() => alert("WIP!")}
        onClick2={() => alert("WIP!")}
        onClick3={() => alert("WIP!")}
      >
        {userPlaylists[0].items.map((item) => {
           count++;
          if (item.images[0] != undefined) {
            return (
              <Image
                src={item.images[0].url}
                playlistName={item.name}
                trackNumber={userPlaylistTrackCounts[count].total}
                height="200rem"
                width="200rem"
                className="Clickable"
                onClick={() =>
                  (window.location.href = item.external_urls.spotify)
                }
              />
            );
          } else {
            return (
              <Image
                src={""}
                playlistName={item.name}
                trackNumber={userPlaylistTrackCounts[count].total}
                height="200rem"
                width="200rem"
                className="Clickable"
                onClick={() =>
                  (window.location.href = item.external_urls.spotify)
                }
              />
            );
          }
        })}
      </TopCards>
    </>
  );
};

export default Playlists;
