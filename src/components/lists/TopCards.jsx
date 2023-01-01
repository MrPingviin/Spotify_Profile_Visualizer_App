import { RiH1 } from "react-icons/ri";
import "./TopCards.css";

const TopCards = ({ children, title, onClick1, onClick2, onClick3 }) => {
  return (
    <div className="TopCards">
    <div className="Headbar">
      <div className="Title">
        <h1>{title}</h1>
      </div>
      <div className="Options">
        <span onClick={onClick1} className="Clickable">All Time</span>
        <span onClick={onClick2} className="Clickable">6 month</span>
        <span onClick={onClick3} className="Clickable">3 month</span>
      </div>
    </div>
    <div className="Content">
    {children}
    </div>
  </div>
  );
};

export default TopCards;
