import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import JumboBtns from "./JumboBtns";
import TrNewJumboImg from "./TrNewJumboImg";
import MovieInfo from "./MovieInfo";
import SwapMovieBtn from "./SwapMovieBtn";
import { motion } from "framer-motion";

export default function TrJumbotron({ nowPlaying }) {
   const [array, setArray] = useState([]);
   const [isFoward, setIsFoward] = useState(false);
   const [selectedMovie, setSelectedMovie] = useState(null);
   const [isAnimating, setIsAnimating] = useState(false);

   const history = useHistory();
   const getInfo = () => history.push(`/media-details/movie/${array[1].id}`);

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
      }, 900);
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
      }, 900);
   };

   useEffect(() => {
      const newArray = nowPlaying;
      setArray(newArray);
      setSelectedMovie(newArray[0]);
   }, [nowPlaying]);

   return (
      <div className="relative bg-black flex items-end rounded-md overflow-x-hidden h-125 max-h-125 2xl:h-180 2xl:max-h-180 text-white">
         <h1 className="text-2xl absolute top-4 left-10 font-medium z-20">
            Now playing on Theaters
         </h1>
         <div className="px-10 w-125 2xl:w-180 mb-24 z-20">
            <MovieInfo
               selectedMovie={selectedMovie}
               isAnimating={isAnimating}
            />
            <JumboBtns getInfo={getInfo} isAnimating={isAnimating} />
         </div>
         <div className="flex space-x-2 z-20 my-5">
            <SwapMovieBtn onClick={backward} icon="chevron_left" />
            <SwapMovieBtn onClick={foward} icon="chevron_right" />
         </div>
         <motion.div className="absolute top-0 left-0 w-full h-full">
            {array.length > 1 &&
               array.map((movie, index) => (
                  <TrNewJumboImg
                     key={movie?.id}
                     movie={movie}
                     index={index}
                     isFoward={isFoward}
                  />
               ))}
         </motion.div>
      </div>
   );
}
