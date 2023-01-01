import Button from "../inputs/Button";
import TopListItems from "./TopListItems";
import "./Toplist.css";

const Toplist = ({
  title,
  onClick,
  type,
  children,
  topTracks,
  onClick1,
  onClick2,
  onClick3,
  short,
  recent,
}) => {
  if (short) {
    return (
      <div className="Toplist">
        <div className="Toplist_Top">
          <span className="Toplist_Title">{title}</span>
          {topTracks ? (
            <div className="Options">
              <span onClick={onClick1} className="Clickable">
                All Time
              </span>
              <span onClick={onClick2} className="Clickable">
                6 month
              </span>
              <span onClick={onClick3} className="Clickable">
                3 month
              </span>
            </div>
          ) : (
            <Button className="Outlined" onClick={onClick}>
              See more
            </Button>
          )}
        </div>

        <div className="Toplist_Body">
          <TopListItems type={type} short={short}></TopListItems>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ToplistWide">
        <div className="Toplist_Top">
          <h1>{title}</h1>
          {topTracks ? (
            <div className="Options">
              <span onClick={onClick1} className="Clickable">
                All Time
              </span>
              <span onClick={onClick2} className="Clickable">
                6 month
              </span>
              <span onClick={onClick3} className="Clickable">
                3 month
              </span>
            </div>
          ) : recent ? null : (
            <Button className="Outlined" onClick={onClick}>
              See more
            </Button>
          )}
        </div>

        <div className="Toplist_Body">
          <TopListItems
            type={type}
            short={short}
            recent={recent}
          ></TopListItems>
        </div>
      </div>
    );
  }
};

export default Toplist;
