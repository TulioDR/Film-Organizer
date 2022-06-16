import BudgetAndRevenue from "../components/MediaDetails/BudgetAndRevenue";
import Seasons from "../components/MediaDetails/Seasons";
import Trailers from "../components/MediaDetails/Trailers";
import People from "../components/MediaDetails/People";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import AddToListModal from "../components/Modals/AddToListModal";
import useMediaDetails from "../hooks/useMediaDetails";
import Loading from "../components/Loading";
import useUserWarning from "../hooks/useUserWarning";
import UserWarning from "../components/Modals/UserWarning";
import useSaveToList from "../hooks/useSaveToList";
import useBookmark from "../hooks/useBookmark";

import InfoList from "../components/MediaDetails/InfoList";
import Media from "../components/Media/Media";
import Subtitle from "../components/MediaDetails/Subtitle";
import Header from "../components/MediaDetails/Header/Header";
import NewHeader from "../components/MediaDetails/NewHeader";

export default function MediaDetails() {
   const { lists } = useSelector((state) => state.lists);
   const { mediaType } = useParams();
   const [media, isMovie, isLoading] = useMediaDetails();

   const { id, poster_path, title, name } = media;

   const [isSaved] = useBookmark(id, mediaType, lists);

   const [
      showSaveToListModal,
      currentData,
      openSaveToListModal,
      closeSaveToListModal,
   ] = useSaveToList();
   const [showWarning, openWarning, closeWarning, goToLogin] = useUserWarning();

   const user = JSON.parse(localStorage.getItem("profile"));
   const checkUser = () => {
      if (user) openSaveToListModal(id, mediaType, poster_path, title || name);
      else openWarning();
   };

   const { production_companies, spoken_languages, budget, revenue } = media;
   const { networks, created_by, videos, seasons, similar, credits } = media;
   return isLoading ? (
      <Loading />
   ) : (
      <>
         <section className="w-full flex flex-col">
            <NewHeader {...{ media, isMovie }} />
            {/* <Header {...{ media, isMovie, isSaved, checkUser }} />
            <div className="flex flex-col">
               <div className="overflow-x-auto mt-5 lg:flex lg:space-x-3 space-y-3 lg:space-y-0 moreinfo-scrollbar py-3">
                  <InfoList
                     list={production_companies}
                     subtitle="Production Companies"
                  />
                  <InfoList
                     list={spoken_languages}
                     subtitle="Spoken Lenguages"
                  />
                  {isMovie ? (
                     <BudgetAndRevenue budget={budget} revenue={revenue} />
                  ) : (
                     <InfoList list={networks} subtitle="Networks" />
                  )}
               </div>

               {!isMovie && (
                  <>
                     <Subtitle>TV Show creators</Subtitle>
                     <People people={created_by} type="Show Creators" />
                     <Subtitle>Seasons</Subtitle>
                     <Seasons seasons={seasons} showID={id} />
                  </>
               )}

               <Subtitle>Trailers</Subtitle>
               <Trailers trailers={videos} />

               <Subtitle>Cast Members</Subtitle>
               <People people={credits?.cast} type="Cast Members" />

               <Subtitle>Crew Members</Subtitle>
               <People people={credits?.crew} type="Crew Members" />

               <Subtitle>Similar {isMovie ? "Movies" : "TV Shows"}</Subtitle>
               <Media
                  media={similar?.results}
                  type={isMovie ? "movie" : "tv"}
                  isMovie={isMovie}
               />
            </div> */}
         </section>
         <AddToListModal
            {...{ showSaveToListModal, closeSaveToListModal, currentData }}
         />
         {showWarning && <UserWarning close={closeWarning} logIn={goToLogin} />}
      </>
   );
}
