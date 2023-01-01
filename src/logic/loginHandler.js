import { getCode } from "./getCodeFromSearchbar";
import { getToken } from "./getTokenFromSpotiAPI";
import { getUserData } from "./getUserData";
import { downloadHandler } from "./downloadHandler";
import { userTopArtists } from "./dataContainers";


export const loginHandler = (setLoadingState, setActualPage) => {
  downloadHandler(setLoadingState, setActualPage);
};


