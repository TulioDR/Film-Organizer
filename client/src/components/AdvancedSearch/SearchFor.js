import React, { useState } from "react";

const options = [
   { type: "Movies", isMovie: true },
   { type: "TV Series", isMovie: false },
];

export default function SearchFor({ isMovie, changeType }) {
   const [open, setOpen] = useState(false);
   const toggle = () => setOpen(!open);

   const handleChange = (bolean) => {
      changeType(bolean);
      setOpen(false);
   };
   return (
      <div
         tabIndex={1}
         onBlur={() => setOpen(false)}
         className="inline-flex mb-5 h-12 shadow-lg relative dark:text-white"
      >
         <div
            onClick={toggle}
            className="pl-2 w-52 flex items-center justify-between cursor-default bg-gray-100 dark:bg-gray rounded"
         >
            <span className="pl-1">
               {`Search For ${isMovie ? "Movies" : "TV Series"}`}
            </span>
            <div className="flex items-center">
               <span className="w-0.25 h-8 bg-black dark:bg-white"></span>
               <span className="material-icons hover:text-gray-400 w-9 text-center">
                  expand_more
               </span>
            </div>
         </div>

         {open && (
            <ul className="absolute bg-gray-100 dark:bg-gray py-1 top-14 rounded-md right-0 z-20 w-32 shadow-lg">
               {options.map((option, index) => (
                  <li
                     key={index}
                     onClick={() => handleChange(option.isMovie)}
                     className={`h-10 flex items-center pl-3 hover:bg-gray-400 dark:hover:bg-gray-light ${
                        isMovie === option.isMovie
                           ? "bg-blue-500 pointer-events-none"
                           : "cursor-default"
                     }`}
                  >
                     {option.type}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}
