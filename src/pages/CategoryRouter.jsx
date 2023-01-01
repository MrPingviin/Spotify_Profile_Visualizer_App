import _Profile from "./_Profile";
import Top_Artists from "./Top_Artists";
import Top_Tracks from "./Top_Tracks";
import Recent from "./Recent";

const CategoryRouter = ({ actualCategory, setActualPage, setActualCategory }) => {
  switch (actualCategory) {
    case "Home":
      return <_Profile setActualPage={setActualPage} setActualCategory={setActualCategory} />;
    case "Top_Artists":
      return <Top_Artists />;
    case "Top_Tracks":
      return <Top_Tracks />;
    case "Recent":
      return <Recent/>;
  }
};

export default CategoryRouter;
