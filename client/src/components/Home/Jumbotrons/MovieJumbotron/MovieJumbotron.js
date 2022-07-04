import { useEffect, useState } from "react";
import MovieJumboPoster from "./MovieJumboPoster";
import NextBtn from "../NextBtn";
import JumbotronSubtitle from "../JumbotronSubtitle";
import JumbotronTitle from "../JumbotronTitle";
import JumbDate from "../JumbDate";
import JumbotronContainer from "../JumbotronContainer";
import JumboBtnsContainer from "../JumboBtnsContainer";
import SaveBtn from "../SaveBtn";
import MoreInfoBtn from "../MoreInfoBtn";
import useGetMediaDetails from "../../../../hooks/useGetMediaDetails";
import useBookmark from "../../../../hooks/useBookmark";
import { useSelector } from "react-redux";
import JumboArrowsContainer from "../JumboArrowsContainer";

export default function MovieJumbotron({
   nowPlaying,
   openSaveToListModal,
   openWarning,
   isLoading,
}) {
   const [array, setArray] = useState([]);
   const [isFoward, setIsFoward] = useState(false);
   const [selectedMovie, setSelectedMovie] = useState(null);
   const [isAnimating, setIsAnimating] = useState(false);

   const [getMoreInfo] = useGetMediaDetails({
      type: "movie",
      selected: selectedMovie,
   });

   useEffect(() => {
      const newArray = nowPlaying;
      setArray(newArray);
      setSelectedMovie(newArray[0]);
   }, [nowPlaying]);

   const foward = () => {
      setIsFoward(true);
      const newArray = [...array];
      const first = newArray.shift();
      newArray.push(first);
      setArray(newArray);
      setIsAnimating(true);
      setTimeout(() => {
         setSelectedMovie(newArray[0]);
         setIsAnimating(false);
      }, 1000);
   };
   const backward = () => {
      setIsFoward(false);
      const newArray = [...array];
      const last = newArray.pop();
      newArray.unshift(last);
      setArray(newArray);
      setIsAnimating(true);
      setTimeout(() => {
         setSelectedMovie(newArray[0]);
         setIsAnimating(false);
      }, 1000);
   };

   const user = JSON.parse(localStorage.getItem("profile"));
   const checkUser = () => {
      if (user)
         openSaveToListModal(
            selectedMovie.id,
            "movie",
            selectedMovie.poster_path,
            selectedMovie.title || selectedMovie.name
         );
      else openWarning();
   };

   const { lists } = useSelector((state) => state.lists);
   const [isSaved] = useBookmark(selectedMovie?.id, "movie", lists);
   return (
      <JumbotronContainer movie>
         <JumbotronSubtitle>Now playing on Theaters</JumbotronSubtitle>
         <div className="px-10 w-125 2xl:w-180 mb-24 z-30">
            <div className="overflow-hidden">
               <JumbotronTitle isAnimating={isAnimating} isLoading={isLoading}>
                  {selectedMovie?.title}
               </JumbotronTitle>
               <JumbDate
                  isAnimating={isAnimating}
                  isLoading={isLoading}
                  date={selectedMovie?.release_date}
               />
            </div>
            <JumboBtnsContainer isAnimating={isAnimating} isLoading={isLoading}>
               <SaveBtn isSaved={isSaved} checkUser={checkUser} />
               <MoreInfoBtn onClick={getMoreInfo} />
            </JumboBtnsContainer>
         </div>
         <JumboArrowsContainer isLoading={isLoading} movie>
            <NextBtn
               onClick={backward}
               icon="chevron_left"
               isAnimating={isAnimating}
            />
            <NextBtn
               onClick={foward}
               icon="chevron_right"
               isAnimating={isAnimating}
            />
         </JumboArrowsContainer>

         <div
            className={`absolute top-0 left-0 w-full h-full z-20 bg-black duration-500 ${
               isLoading ? "bg-opacity-100" : "bg-opacity-0"
            }`}
         ></div>
         {array.length > 1 &&
            array.map((movie, index) => (
               <MovieJumboPoster
                  key={movie?.id}
                  movie={movie}
                  index={index}
                  isFoward={isFoward}
               />
            ))}
      </JumbotronContainer>
   );
}
