
export const tokenChecker = async (setLoadingState, setActualPage) => {
    const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("spotivisualizer_access_token"),
          "Content-Type": "application/json",
        },
      };
    
        const response = await fetch("https://api.spotify.com/v1/me", options);
        
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    
        
    }