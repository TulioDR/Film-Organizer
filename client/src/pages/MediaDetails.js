import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import AddToListModal from "../components/Modals/AddToListModal";
import useMediaDetails from "../hooks/useMediaDetails";
// import Loading from "../components/Loading";
import useUserWarning from "../hooks/useUserWarning";
import UserWarning from "../components/Modals/UserWarning";
import useSaveToList from "../hooks/useSaveToList";
import useBookmark from "../hooks/useBookmark";

import { useEffect, useState } from "react";
import Poster from "../components/MediaDetails/Poster";
import Tabs from "../components/MediaDetails/Tabs/Tabs";
import Overview from "../components/MediaDetails/Tabs/Overview";
import Similar from "../components/MediaDetails/Tabs/Similar";
import CastAndCrew from "../components/MediaDetails/Tabs/CastAndCrew";
import Trailers from "../components/MediaDetails/Tabs/Trailers";

import { AnimatePresence, motion } from "framer-motion";
import SaveButton from "../components/MediaDetails/SaveButton";
import Score from "../components/MediaDetails/Score";
import InfoBar from "../components/MediaDetails/InfoBar";
import useSelectedPosterContext from "../context/SelectedPosterContext";
import MediaDetailsTrPoster from "../components/PageTransitions/MediaDetailsTrPoster";
import Seasons from "../components/MediaDetails/Tabs/Seasons";
import SeasonDetails from "../components/MediaDetails/SeasonDetails/SeasonDetails";

const movieTabs = ["Overview", "Trailers & More", "Cast & Crew", "Similar"];
const tvTabs = [
   "Overview",
   "Seasons",
   "Trailers & More",
   "Cast & Crew",
   "Similar",
];

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

   const {
      release_dates,
      content_ratings,
      tagline,
      overview,
      videos,
      seasons,
   } = media;
   const rating = release_dates?.results || content_ratings?.results;

   const { selectedPoster, setSelectedPoster } = useSelectedPosterContext();
   const [posterSize, setPosterSize] = useState("md");

   useEffect(() => {
      setPosterSize("lg");
      if (poster_path) {
         setSelectedPoster(poster_path);
      }
   }, [poster_path, setSelectedPoster]);

   const [selectedImg, setSelectedImg] = useState(null);

   const [tabs, setTabs] = useState([]);
   const [selected, setSelected] = useState("Overview");
   useEffect(() => {
      if (mediaType === "movie") setTabs(movieTabs);
      else setTabs(tvTabs);
   }, [mediaType]);
   useEffect(() => {
      setSelectedImg(null);
      setSelected("Overview");
   }, [id]);

   const [showSeasonDetails, setShowSeasonDetails] = useState(false);
   const [currentSeasonNumber, setCurrentSeasonNumber] = useState(false);
   const openSeasonDetails = (seasonNumber) => {
      setShowSeasonDetails(true);
      setCurrentSeasonNumber(seasonNumber);
   };
   const closeSeasonDetails = () => {
      setShowSeasonDetails(false);
   };

   return (
      <>
         <div className="lg:flex md:space-x-12 w-full media-details-height">
            <div className="relative h-full w-full sm:w-1/2 md:w-1/3 lg:w-auto mx-auto">
               <Poster src={selectedPoster} posterSize={posterSize} />
               <SaveButton onClick={checkUser} isSaved={isSaved} />
            </div>

            <AnimatePresence>
               {!isLoading && (
                  <motion.div
                     initial={{ x: 200, opacity: 0 }}
                     animate={{
                        x: 0,
                        opacity: 1,
                     }}
                     exit={{ x: 200, opacity: 0 }}
                     transition={{ duration: 0.5 }}
                     className="flex-1 flex flex-col pt-5 overflow-hidden relative"
                  >
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
                           tabs={tabs}
                           selected={selected}
                           setSelected={setSelected}
                        />
                        <div className="flex-1 overflow-y-auto scroller-scrollbar">
                           <AnimatePresence>
                              {selected === "Overview" && (
                                 <Overview
                                    tagline={tagline}
                                    overview={overview}
                                    genres={media.genres}
                                    isMovie={isMovie}
                                    media={media}
                                 />
                              )}
                              {selected === "Seasons" && (
                                 <Seasons
                                    seasons={seasons}
                                    showID={id}
                                    openSeasonDetails={openSeasonDetails}
                                 />
                              )}
                              {selected === "Trailers & More" && (
                                 <Trailers
                                    trailers={videos}
                                    isMovie={isMovie}
                                 />
                              )}
                              {selected === "Cast & Crew" && (
                                 <CastAndCrew
                                    cast={media.credits?.cast}
                                    crew={media.credits?.crew}
                                    type="Cast Members"
                                    isMovie={isMovie}
                                 />
                              )}
                              {selected === "Similar" && (
                                 <Similar
                                    similar={media.similar?.results}
                                    type={isMovie ? "movie" : "tv"}
                                    isMovie={isMovie}
                                    setSelectedImg={setSelectedImg}
                                 />
                              )}
                           </AnimatePresence>
                        </div>
                     </div>
                     <AnimatePresence>
                        {showSeasonDetails && (
                           <SeasonDetails
                              closeSeasonDetails={closeSeasonDetails}
                              id={id}
                              seasonNumber={currentSeasonNumber}
                           />
                        )}
                     </AnimatePresence>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
         <MediaDetailsTrPoster selectedImg={selectedImg} />
         <AddToListModal
            {...{ showSaveToListModal, closeSaveToListModal, currentData }}
         />
         <UserWarning
            isModalOpen={showWarning}
            close={closeWarning}
            logIn={goToLogin}
         />
      </>
   );
}
