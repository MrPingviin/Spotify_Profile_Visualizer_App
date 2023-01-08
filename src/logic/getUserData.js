import { tokenRenewer } from "./tokenRenewer";
import { userDataContainer } from "./dataContainers";

export const getUserData = async (setLoadingState, setActualPage) => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer " + localStorage.getItem("spotivisualizer_access_token"),
      "Content-Type": "application/json",
    },
  };

    const response = await fetch("https://api.spotify.com/v1/me", options);
    const data = await response.json();

    return userDataContainer.push(data);
}
  
  

