import { useEffect, useState } from "react";
import { getPoster } from "../../../utils/getPosters";
import NewJumboImg from "./NewJumboImg";

export default function NewJumbotron({ nowPlaying, backgroundImage }) {
   const [array, setArray] = useState([]);
   const [isTranslated, setIsTranslated] = useState(false);
   const [isFoward, setIsFoward] = useState(false);

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
      }, 1000);
   };

   useEffect(() => {
      const newArray = [...nowPlaying];
      for (const movie of newArray) {
         movie.big = false;
      }
      const last = newArray.pop();
      newArray.unshift(last);
      if (newArray[0]) newArray[0].big = true;
      if (newArray[1]) newArray[1].big = true;
      setArray(newArray);
   }, [nowPlaying]);
   return (
      <>
         <div className="relative overflow-x-hidden rounded-md">
            <img
               src={getPoster(backgroundImage, "xl", false)}
               alt="poster"
               className="w-full filter brightness-0"
            />
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
               {array?.map((movie, index) => {
                  return (
                     <NewJumboImg
                        key={index}
                        img={movie?.backdrop_path}
                        translate={
                           isFoward
                              ? isTranslated
                                 ? index - 3
                                 : index - 2
                              : isTranslated
                              ? index - 1
                              : index - 2
                        }
                        backward={2}
                        isTranslated={isTranslated}
                        big={movie?.big}
                     />
                  );
               })}
               {/* <NewJumboImg img={nowPlaying[0]?.backdrop_path} translate={0} />
            <NewJumboImg img={nowPlaying[1]?.backdrop_path} translate={1} />
            <NewJumboImg img={nowPlaying[2]?.backdrop_path} translate={2} /> */}
            </div>
         </div>
         <button onClick={backward} className="bg-blue-500 text-white">
            Backward
         </button>
         <button onClick={foward} className="bg-blue-500 text-white">
            Foward
         </button>
      </>
   );
}
