export const getToken = async (code) => {
  const client_id = "41d86423893746dcaf5c73b7085a6eb8";
  const client_secret = "edc8a7ad5f294b608a651046224822e9";

  const options = {
    url: "https://accounts.spotify.com/api/token",
    body: new URLSearchParams({
      code: `${code}`,
      //redirect_uri: "https://spotify-profile-visualizer-app.vercel.app/",
      redirect_uri: "http://localhost:5173/",
      grant_type: "authorization_code",
      client_id: `${client_id}`,
      client_secret: `${client_secret}`,
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
    if (response.status === 200 ) {
      console.log("Token kérés => ", data);
    localStorage.removeItem("spotivisualizer_access_token");
    localStorage.removeItem("spotivisualizer_refresh_token");

    localStorage.setItem("spotivisualizer_access_token", data.access_token);
    localStorage.setItem("spotivisualizer_refresh_token", data.refresh_token);
    return true;
    } 
  } 
};
