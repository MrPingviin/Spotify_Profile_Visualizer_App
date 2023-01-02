import { getUserData } from "./getUserData";
import { getTopArtists } from "./getTopArtists";
import { getTopTracks } from "./getTopTracks";
import { getFollowedArtists } from "./getFollowedArtists";
import { tokenRenewer } from "./tokenRenewer";
import { tokenChecker } from "./tokenChecker";
import { getToken } from "./getTokenFromSpotiAPI";
import { getCode } from "./getCodeFromSearchbar";
import getPlaylists from "./getPlaylists";
import getRecentTracks from "./getRecentTracks";


export const downloadHandler = async (setLoadingState, setActualPage) => {
  if (localStorage.getItem("spotivisualizer_refresh_token") !== null) {
    if (await tokenChecker(setLoadingState, setActualPage)) {
      await getUserData();
      await getTopArtists();
      await getTopTracks();
      await getFollowedArtists();
      await getRecentTracks();
      await getPlaylists();
      return setLoadingState(false);
    } else {
      await tokenRenewer(setLoadingState, setActualPage);
      await getUserData();
      await getTopArtists();
      await getTopTracks();
      await getFollowedArtists();
      await getRecentTracks();
      await getPlaylists();
      return setLoadingState(false);
    }
  } else {
    if (await getToken(getCode())) {
      await getUserData();
      await getTopArtists();
      await getTopTracks();
      await getFollowedArtists();
      await getRecentTracks();
      await getPlaylists();
      return setLoadingState(false);
    } else {
        setActualPage("Login");
        console.log("Error => There's no way to get a refresh token, please try to login again.")
    }
  }

};
