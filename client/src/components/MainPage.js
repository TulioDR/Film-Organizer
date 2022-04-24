export default function MainPage() {
   return (
      <SidebarExtendedProvider>
         <Body>
            <IsMovieProvider>
               <ValueProvider>
                  <Navbar />
                  <Sidebar />
                  <Main>
                     <Switch>
                        <Route exact path="/">
                           <Redirect to="/home" />
                        </Route>

                        <Route exact path="/home">
                           <Home />
                        </Route>

                        <Route exact path="/genres/:mediaType">
                           <Genres />
                        </Route>

                        <Route exact path="/media-details/:mediaType/:id">
                           <MediaDetails />
                        </Route>

                        <Route exact path="/advanced">
                           <Advanced />
                        </Route>

                        <Route exact path="/manage">
                           <Manage />
                        </Route>

                        <Route exact path="/lists/:id">
                           <ListDetails />
                        </Route>

                        <Route
                           exact
                           path="/:searchType/:mediaType/:searchQuery"
                        >
                           <Cards />
                        </Route>
                     </Switch>
                  </Main>
               </ValueProvider>
            </IsMovieProvider>
         </Body>
      </SidebarExtendedProvider>
   );
}
