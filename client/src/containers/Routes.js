import { Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Cards from "../pages/Cards";
import Manage from "../pages/Manage";
import Genres from "../pages/Genres";
import Advanced from "../pages/Advanced";
import ListDetails from "../pages/ListDetails";
import MediaDetails from "../pages/MediaDetails";

export default function Routes() {
   return (
      <>
         <Route exact path="/" component={() => <Redirect to="/home" />} />
         <Route exact path="/home" component={Home} />
         <Route exact path="/genres/:mediaType" component={Genres} />
         <Route exact path="/advanced" component={Advanced} />
         <Route exact path="/manage" component={Manage} />
         <Route
            path="/search/:searchType/:mediaType/:searchQuery"
            component={Cards}
         />
         <Route
            exact
            path="/media-details/:mediaType/:id"
            component={MediaDetails}
         />
         <Route exact path="/lists/:id" component={ListDetails} />
      </>
   );
}
