import "./ProfileStats.css";
import { userDataContainer } from "../../logic/dataContainers";
import { getFollowedArtists } from "../../logic/getFollowedArtists";
import { userFollowedArtists } from "../../logic/dataContainers";

const ProfileStats = () => {
  return (
    <div className="ProfileStats">
      <div className="ProfileStats_Subcategory">
        <span className="ProfileStats_Stat">{userDataContainer[0].followers.total}</span>
        <span className="ProfileStats_StatTitle">FOLLOWERS</span>
      </div>

      <div className="ProfileStats_Subcategory">
        <span className="ProfileStats_Stat">{userFollowedArtists[0].artists.items.length}</span>
        <span className="ProfileStats_StatTitle">FOLLOWING</span>
      </div>

      <div className="ProfileStats_Subcategory">
        <span className="ProfileStats_Stat">BEFEJEZNI</span>
        <span className="ProfileStats_StatTitle">PLAYLISTS</span>
      </div>
    </div>
  );
};

export default ProfileStats;
