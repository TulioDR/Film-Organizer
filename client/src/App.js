import "@material-tailwind/react/tailwind.css";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
   useEffect(() => {
      AOS.init({
         offset: 0,
         duration: 1000,
         once: true,
         delay: 0,
         disable: "mobile",
      });
   }, []);
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
