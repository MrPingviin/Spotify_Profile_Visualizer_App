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
  
   /*  
    if (response.ok) {
      if (response.status === 200) {
        userDataContainer.push(data);
      
      } 
    } else {
      console.log("Fetch sikertelen! Válasz státusz kód => ", response.status);
      if (response.status === 401) {
        tokenRenewer(setLoadingState, setActualPage);
      }
    }
  } catch(error) {
    console.error(error);
    console.log("============== CATCH HIBA ===============")
  } */

 

  /* fetch("https://api.spotify.com/v1/me", options)
    .then((res) => res.json())
    .then((data) => {
      userDataContainer.push(data);
      console.log("GetUserData ====> ", data);
    })
    .catch((err) => {
      console.log("Hiba --->", err);
      tokenRenewer(setLoadingState);
    }); */

