import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import AddToListModal from "../components/Modals/AddToListModal";
import useMediaDetails from "../hooks/useMediaDetails";
import Loading from "../components/Loading";
import useUserWarning from "../hooks/useUserWarning";
import UserWarning from "../components/Modals/UserWarning";
import useSaveToList from "../hooks/useSaveToList";
import useBookmark from "../hooks/useBookmark";

import { useState } from "react";
import Poster from "../components/MediaDetails/Poster";
import Tabs from "../components/MediaDetails/Tabs/Tabs";
import Overview from "../components/MediaDetails/Tabs/Overview";
import Similar from "../components/MediaDetails/Tabs/Similar";
import CastAndCrew from "../components/MediaDetails/Tabs/CastAndCrew";
import Trailers from "../components/MediaDetails/Tabs/Trailers";

import { AnimatePresence } from "framer-motion";
import SaveButton from "../components/MediaDetails/SaveButton";
import Score from "../components/MediaDetails/Score";
import InfoBar from "../components/MediaDetails/InfoBar";

const details = [
   "Overview",
   // "Seasons",
   "Trailers & More",
   "Cast & Crew",
   "Similar",
];

export default function MediaDetails() {
   const { lists } = useSelector((state) => state.lists);
   const { mediaType } = useParams();
   const [media, isMovie, isLoading] = useMediaDetails();

   const { id, poster_path, title, name } = media;

   console.log(media);

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

   const { release_dates, content_ratings, tagline, overview, videos } = media;
   const rating = release_dates?.results || content_ratings?.results;

   const [selected, setSelected] = useState(0);

   return isLoading ? (
      <Loading />
   ) : (
      <>
         <div
            //Hcer una clase que solo aplique esta altura desde md
            style={{ height: "calc(100vh - 7.5rem)" }}
            className="md:flex w-full md:space-x-12"
         >
            <div className="relative h-full">
               <Poster src={media.poster_path} />
               <SaveButton onClick={checkUser} isSaved={isSaved} />
            </div>
            <div className="flex-1 flex flex-col pt-5 overflow-hidden">
               <h1 className="text-4xl 2xl:text-5xl font-medium">
                  {media.title || media.name}
               </h1>
               <div className="flex items-center justify-between mt-2 text-gray-500 dark:text-gray-400">
                  <InfoBar
                     date={media.release_date || media.first_air_date}
                     runtime={media.runtime}
                     rating={rating}
                     isMovie={isMovie}
                  />
                  <Score media={media} />
               </div>
               <div className="mt-5 flex-1 flex flex-col overflow-y-auto">
                  <Tabs
                     details={details}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <div className="flex-1 overflow-y-auto card-scrollbar">
                     <AnimatePresence>
                        {selected === 0 && (
                           <Overview
                              tagline={tagline}
                              overview={overview}
                              genres={media.genres}
                              isMovie={isMovie}
                              media={media}
                           />
                        )}
                        {selected === 1 && (
                           <Trailers trailers={videos} isMovie={isMovie} />
                        )}
                        {selected === 2 && (
                           <CastAndCrew
                              cast={media.credits?.cast}
                              crew={media.credits?.crew}
                              type="Cast Members"
                              isMovie={isMovie}
                           />
                        )}
                        {selected === 3 && (
                           <Similar
                              similar={media.similar?.results}
                              type={isMovie ? "movie" : "tv"}
                              isMovie={isMovie}
                           />
                        )}
                     </AnimatePresence>
                  </div>
               </div>
            </div>
         </div>
         <AddToListModal
            {...{ showSaveToListModal, closeSaveToListModal, currentData }}
         />
         {showWarning && <UserWarning close={closeWarning} logIn={goToLogin} />}
      </>
   );
}
