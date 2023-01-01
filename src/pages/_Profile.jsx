import MainContent from "../components/align/MainContent";
import ProfileCard from "../components/panels/ProfileCard";
import ProfileAvatar from "../components/image/Image";
import ProfileName from "../components/texts/ProfileName";
import ProfileStats from "../components/texts/ProfileStats";
import Button from "../components/inputs/Button";
import Splitter from "../components/align/Splitter";
import Toplist from "../components/lists/Toplist";
import ProfileType from "../components/texts/ProfileType";
import { logout } from "../logic/logout";
import { userDataContainer} from "../logic/dataContainers";
import { userTopTracks } from "../logic/dataContainers";


const _Profile = ({setActualPage}) => {
console.log("SOROS", userDataContainer)
return (
    <MainContent>
    <ProfileCard>
        <ProfileAvatar src={userDataContainer[0].images[0].url} onClick={() => window.location.href = userDataContainer[0].href} width="50%" className="Rounded Clickable"/>
        <ProfileName onClick={() => window.location.href = userDataContainer[0].href}>{userDataContainer[0].display_name}</ProfileName>
        <ProfileType type={userDataContainer[0].product}/>
        <ProfileStats/>
        <Button onClick={() => (setActualPage("Login")) (logout())} className="Outlined">Logout</Button>
    </ProfileCard>
    <Splitter>
      <Toplist title="Top Artists of All Time" onClick={() => setActualCategory("Top_Artists")} type="Artist" short="true"></Toplist>
      <Toplist title="Top Tracks of All Time" onClick={() => setActualCategory("Top_Tracks")} type="Song" short="true"></Toplist>
    </Splitter>
</MainContent>
)
}

export default _Profile;