import Navbar from "../components/panels/Navbar";
import SpotilogoNoText from "../components/image/SpotilogoNoText";
import PageContent from "../components/align/PageContent";
import Separator from "../components/panels/Separator";
import Button from "../components/inputs/Button";
import Navitem from "../components/panels/Navitem";
import { AiFillHome, AiOutlineReload, AiFillGithub } from "react-icons/ai";
import { GiMicrophone } from "react-icons/gi";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { RiH1, RiPlayListFill } from "react-icons/ri";
import Clickable from "../components/interactive/Clickable";
import MainPart from "../components/align/MainPart";
import TotalCenter from "../components/align/TotalCenter";
import _Profile from "./_Profile";
import LoadingScreen from "../components/interactive/LoadingScreen";
import { useEffect, useState } from "react";
import { loginHandler } from "../logic/loginHandler";
import CategoryRouter from "./CategoryRouter";

const UserMainPage = ({ setActualPage }) => {
  const [isLoading, setLoadingState] = useState(true);
  const [actualCategory, setActualCategory] = useState("Home");

  useEffect(() => {
    loginHandler(setLoadingState, setActualPage);
  }, []);



  console.log(
    "Access Token ==> ",
    localStorage.getItem("spotivisualizer_access_token"),
    " ",
    "Refresh Token ==> ",
    localStorage.getItem("spotivisualizer_refresh_token")
  );

  return (
    <PageContent>
      <Navbar>
        <Clickable>
          <TotalCenter>
            <SpotilogoNoText width="60vw" onClick={() => setActualCategory("Home")} />
          </TotalCenter>
        </Clickable>

        <Separator />
        <Navitem
          text="Home"
          icon={<AiFillHome className="Navicon" />}
          onClick={() => setActualCategory("Home")}
        />
        <Navitem
          text="Top Artists"
          icon={<GiMicrophone className="Navicon" />}
          onClick={() => setActualCategory("Top_Artists")}
        />
        <Navitem
          text="Top Tracks"
          icon={<BsMusicNoteBeamed className="Navicon" />}
          onClick={() => setActualCategory("Top_Tracks")}
        />
        <Navitem
          text="Recent"
          icon={<AiOutlineReload className="Navicon" />}
          onClick={() => setActualCategory("Recent")}
        />
        <Navitem
          text="Playlists"
          icon={<RiPlayListFill className="Navicon" />}
          onClick={() => alert("WIP!")}
        />
        <Navitem icon={<AiFillGithub className="GitHub" />} />
      </Navbar>
      <MainPart>
        {isLoading ? (<LoadingScreen/>) : <CategoryRouter actualCategory={actualCategory} setActualPage={setActualPage} setActualCategory={setActualCategory}/>}
      </MainPart>
    </PageContent>
  );
};

export default UserMainPage;
