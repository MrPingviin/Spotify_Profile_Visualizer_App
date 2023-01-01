import { userTopArtists } from "../logic/dataContainers";
import Image from "../components/image/Image";
import TopCards from "../components/lists/TopCards";
import HorizontalCenter from "../components/align/HorizontalCenter";
import TotalCenter from "../components/align/TotalCenter";

const Top_Artists = () => {
  return (
    <TopCards title="Top Artists" onClick1={() => alert("WIP!")} onClick2={() => alert("WIP!")} onClick3={() => alert("WIP!")}>
      {userTopArtists[0].items.map((item) => {
        return (
          <Image
            src={item.images[1].url}
            bandName={item.name}
            height="200rem"
            width="200rem"
            className="Rounded Clickable"
            onClick={() => window.location.href = item.external_urls.spotify}
          />
        );
      })}
    </TopCards>
  );
};

export default Top_Artists;
