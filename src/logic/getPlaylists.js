import { userPlaylists } from "./dataContainers";
import { userPlaylistTrackCounts } from "./dataContainers";

const getPlaylists = async () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer " + localStorage.getItem("spotivisualizer_access_token"),
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    "https://api.spotify.com/v1/me/playlists",
    options
  );
  const data = await response.json();

  return (
    userPlaylists.push(data),
    console.log("PLAYLISTS ==> ", userPlaylists),
    getPlaylistTrackCounts()
  );
};

const downloadTrackCounts = async (link) => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer " + localStorage.getItem("spotivisualizer_access_token"),
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(link, options);
  const data = await response.json();

  return userPlaylistTrackCounts.push(data);
};

const getPlaylistTrackCounts = async () => {
  for (let i = 0; i < userPlaylists[0].items.length; i++) {
    await downloadTrackCounts(userPlaylists[0].items[i].tracks.href);
  }

  return console.log(
    "userPlaylistTrackCounts ======> ",
    userPlaylistTrackCounts
  );
};

export default getPlaylists;
