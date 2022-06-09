import { useEffect, useState } from "react";
import { chageDateFormat } from "../../../utils/getDate";
import NewJumboImg from "./NewJumboImg";

export default function NewJumbotron({ nowPlaying }) {
   const [array, setArray] = useState([]);
   const [isTranslated, setIsTranslated] = useState(false);
   const [isFoward, setIsFoward] = useState(false);

   const [jumboTitle, setJumboTitle] = useState();
   const [jumboDate, setJumboDate] = useState();

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
      if (newArray.length) {
         newArray[0].big = true;
         newArray[1].big = true;
         setJumboTitle(newArray[1].title);
         setJumboDate(newArray[1].release_date);
      }
      setArray(newArray);
   }, [nowPlaying]);

   return (
      <div className="relative rounded-md overflow-hidden h-125 max-h-125">
         <div className="absolute flex items-end top-0 left-0 h-full w-full">
            <div className="flex flex-col">
               <div className="z-10 text-white px-10 w-125">
                  <div className="overflow-hidden">
                     <h1
                        className={`text-5xl transform transition-all duration-500 ease-in-out ${
                           isTranslated ? "translate-y-full opacity-0" : ""
                        }`}
                     >
                        {jumboTitle}
                     </h1>
                     <p
                        className={`text-sm mt-2 transform transition-all duration-200 ease-in-out ${
                           isTranslated
                              ? "translate-y-full opacity-0"
                              : "delay-300"
                        }`}
                     >
                        {chageDateFormat(jumboDate)}
                     </p>
                  </div>

                  <div
                     className={`flex space-x-2 mt-5 transform transition-all duration-300 ${
                        isTranslated
                           ? "translate-y-full opacity-0"
                           : "delay-500"
                     }`}
                  >
                     <button className="rounded-full border border-white h-10 w-10 grid place-content-center">
                        <span class="material-icons">bookmark</span>
                     </button>
                     <button className="rounded-md bg-blue-500 h-10 px-3">
                        More Info
                     </button>
                  </div>
               </div>
               <div className="flex space-x-2 z-50 my-7 ml-125">
                  <button
                     onClick={backward}
                     className="border-2 border-white text-white rounded-full w-14 h-14 focus:outline-none grid place-content-center"
                  >
                     <span class="material-icons">chevron_left</span>
                  </button>
                  <button
                     onClick={foward}
                     className="border-2 border-white text-white rounded-full w-14 h-14 focus:outline-none grid place-content-center"
                  >
                     <span class="material-icons">chevron_right</span>
                  </button>
               </div>
            </div>

            {array.map((movie, index) => (
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
            ))}
         </div>
      </div>
   );
}
