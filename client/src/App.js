import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import Body from "./containers/Body";
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
            <Route exact path="/auth" component={Auth} />
            <Body>
               <Providers>
                  <Navbar />
                  <Sidebar />
                  <Main>
                     <Switch>
                        <Routes />
                     </Switch>
                  </Main>
               </Providers>
            </Body>
         </Switch>
      </Router>
   );
}
