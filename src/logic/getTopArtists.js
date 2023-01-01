import { tokenRenewer } from "./tokenRenewer";
import { userTopArtists } from "./dataContainers";

export const getTopArtists = async (setLoadingState) => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer " + localStorage.getItem("spotivisualizer_access_token"),
      "Content-Type": "application/json",
    },
  };

  const response = await fetch("https://api.spotify.com/v1/me/top/artists?limit=50", options);
  const data = await response.json();

  console.log(userTopArtists)
  return userTopArtists.push(data);

};
