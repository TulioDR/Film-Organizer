import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import JumboBtns from "./JumboBtns";
import JumboImg from "./JumboImg";
import MovieInfo from "./MovieInfo";
import SwapMovieBtn from "./SwapMovieBtn";

export default function Jumbotron({ nowPlaying }) {
   const [array, setArray] = useState([]);
   const [isTranslated, setIsTranslated] = useState(false);
   const [isFoward, setIsFoward] = useState(false);

   const [jumboTitle, setJumboTitle] = useState("");
   const [jumboDate, setJumboDate] = useState("");

   const foward = () => {
      setIsFoward(true);
      setIsTranslated(true);
      const holaArray = [...array];
      // First we make the second image big
      holaArray[2].big = true;
      setArray(holaArray);

      // After the animation Ends
      setTimeout(function () {
         setIsTranslated(false);
         const newArray = [...array];
         const first = newArray.shift();
         first.big = false;
         newArray.push(first);
         newArray[1].big = true;
         setArray(newArray);
         setJumboTitle(newArray[1].title);
         setJumboDate(newArray[1].release_date);
      }, 1000);
   };
   const backward = () => {
      setIsFoward(false);
      setIsTranslated(true);
      const holaArray = [...array];
      // make the second image small
      holaArray[1].big = false;
      setArray(holaArray);

      // After the animation Ends
      setTimeout(function () {
         setIsTranslated(false);
         const newArray = [...array];
         const last = newArray.pop();
         last.big = true;
         newArray.unshift(last);
         setArray(newArray);
         setJumboTitle(newArray[1].title);
         setJumboDate(newArray[1].release_date);
      }, 1000);
   };

   useEffect(() => {
      const newArray = [...nowPlaying];
      for (const movie of newArray) {
         movie.big = false;
      }
      const last = newArray.pop();
      newArray.unshift(last);
      if (newArray.length > 1) {
         newArray[0].big = true;
         newArray[1].big = true;
         setJumboTitle(newArray[1].title);
         setJumboDate(newArray[1].release_date);
      }
      setArray(newArray);
   }, [nowPlaying]);

   const history = useHistory();
   const getInfo = () => history.push(`/media-details/movie/${array[1].id}`);

   return (
      <div className="relative rounded-md overflow-hidden h-125 max-h-125 2xl:h-180 2xl:max-h-180">
         <div className="absolute flex items-end top-0 left-0 h-full w-full text-white">
            <h1 className="text-2xl absolute top-4 left-10 z-10 font-medium">
               Now playing on Theaters
            </h1>
            <div className="flex flex-col z-10">
               <div className="px-10 w-125 2xl:w-180">
                  <MovieInfo
                     title={jumboTitle}
                     date={jumboDate}
                     isTranslated={isTranslated}
                  />
                  <JumboBtns getInfo={getInfo} isTranslated={isTranslated} />
               </div>
               <div className="flex space-x-2 z-50 my-5 ml-125 2xl:ml-180">
                  <SwapMovieBtn onClick={backward} icon="chevron_left" />
                  <SwapMovieBtn onClick={foward} icon="chevron_right" />
               </div>
            </div>

            {array.map((movie, index) => (
               <JumboImg
                  key={index}
                  movie={movie}
                  translate={
                     isFoward
                        ? isTranslated
                           ? index - 3
                           : index - 2
                        : isTranslated
                        ? index - 1
                        : index - 2
                  }
                  isTranslated={isTranslated}
               />
            ))}
         </div>
      </div>
   );
}
