import { userRecentTracks } from "./dataContainers"

const getRecentTracks = async () => {

    const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("spotivisualizer_access_token"),
          "Content-Type": "application/json",
        },
      };
    
      const response = await fetch("https://api.spotify.com/v1/me/player/recently-played", options);
      const data = await response.json();
    
      return userRecentTracks.push(data.items), console.log("RecentTracks=> ", userRecentTracks);

}

export default getRecentTracks;