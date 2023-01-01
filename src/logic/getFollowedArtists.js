import { tokenRenewer } from "./tokenRenewer";
import { userFollowedArtists } from "./dataContainers";

export const getFollowedArtists = async () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer " + localStorage.getItem("spotivisualizer_access_token"),
      "Content-Type": "application/json",
    },
  };

  const response = await fetch("https://api.spotify.com/v1/me/following?type=artist", options);
  const data = await response.json();

  return userFollowedArtists.push(data);
};
