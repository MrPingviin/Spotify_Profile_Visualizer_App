import { downloadHandler } from "./downloadHandler";

const client_id = "41d86423893746dcaf5c73b7085a6eb8";
const client_secret = "edc8a7ad5f294b608a651046224822e9";
/* import { userDataContainer } from "./dataContainers";
import { userTopTracks } from "./dataContainers";
import { userTopArtists } from "./dataContainers";
import { userFollowedArtists } from "./dataContainers"; */

export const tokenRenewer = async (setLoadingState, setActualPage) => {
  const options = {
    url: "https://accounts.spotify.com/api/token",
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: `${client_id}`,
      refresh_token: `${localStorage.getItem("spotivisualizer_refresh_token")}`,
    }),
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic NDFkODY0MjM4OTM3NDZkY2FmNWM3M2I3MDg1YTZlYjg6ZWRjOGE3YWQ1ZjI5NGI2MDhhNjUxMDQ2MjI0ODIyZTk=",
    },
    method: "POST",
  };

  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    options
  );
  const data = await response.json();

  if (response.ok) {
    if (response.status === 200) {
      localStorage.removeItem("spotivisualizer_access_token");
      localStorage.setItem("spotivisualizer_access_token", data.access_token);

      return downloadHandler(setLoadingState);
    }
  } else {
    alert("An error occurred. Please try to login again.");
    setActualPage("Login");
  }
};
