import { useState } from "react";

import Option from "./Option";

import useValueContext from "../../../context/ValueContext";

export default function Select() {
   const { isMovie, setIsMovie, changeFoundedType } = useValueContext();

   const [open, setOpen] = useState();
   const toggle = () => {
      setOpen(!open);
   };
   const changeType = (bolean) => {
      setIsMovie(bolean);
      changeFoundedType(bolean);
   };
   return (
      <div
         tabIndex={0}
         onClick={toggle}
         onBlur={() => setOpen(false)}
         className={`relative outline-none mb-2 ml-6 rounded-md bg-blue-400 dark:bg-blue-600 duration-300 overflow-hidden ${
            open ? "h-32" : "h-11"
         }`}
      >
         <div className="flex h-11 pl-4 cursor-pointer items-center justify-between">
            <div className="flex items-center text-black dark:text-white">
               <span className="material-icons duration-100">
                  {isMovie ? "movie" : "tv"}
               </span>
               <span className="pl-6 truncate duration-100">
                  {`Search ${isMovie ? "Movies" : "TV Series"}`}
               </span>
            </div>
            <span
               className={`material-icons transform transition-transform duration-200 grid place-items-center w-8 h-full ${
                  open ? "rotate-180" : ""
               }`}
            >
               expand_more
            </span>
         </div>
         <ul className="px-2">
            <Option
               icon="movie"
               text="Movies"
               changeType={changeType}
               movie={true}
            />
            <Option
               icon="tv"
               text="TV Shows"
               changeType={changeType}
               movie={false}
            />
         </ul>
      </div>
   );
}
