import { userTopTracks } from "./dataContainers"
import { tokenRenewer } from "./tokenRenewer";



export const getTopTracks = async () => {
    const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("spotivisualizer_access_token"),
          "Content-Type": "application/json",
        },
      };
    
      const response = await fetch("https://api.spotify.com/v1/me/top/tracks", options);
      const data = await response.json();

      return userTopTracks.push(data);

}