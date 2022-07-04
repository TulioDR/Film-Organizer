import "./App.scss";

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";

// Containers
import Providers from "./containers/Providers";
import Navbar from "./containers/Navbar";
import Sidebar from "./containers/Sidebar";
import Main from "./containers/Main";
import Routes from "./containers/Routes";
// Pages
import Auth from "./pages/Auth";

export default function App() {
   return (
      <Router>
         <Switch>
            <Route
               exact
               path="/auth"
               component={() => <Redirect to="/home/login" />}
            />
            <Route exact path="/auth/:type" component={Auth} />
            <Providers>
               <Navbar />
               <Sidebar />
               <Main>
                  <Switch>
                     <Routes />
                  </Switch>
               </Main>
            </Providers>
         </Switch>
      </Router>
   );
}
