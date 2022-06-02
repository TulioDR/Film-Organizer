import { useState } from "react";
import ChevronIcon from "./ChevronIcon";
import Option from "./Option";
import Text from "./Text";

import useSidebarExtendedContext from "../../../context/SidebarExtendedContext";
import useValueContext from "../../../context/ValueContext";

export default function Select() {
   const { sidebarExtended } = useSidebarExtendedContext();
   const { isMovie, setIsMovie, changeFoundedType } = useValueContext();

   const [open, setOpen] = useState();
   const toggle = () => setOpen(!open);

   const changeType = (bolean) => {
      setIsMovie(bolean);
      changeFoundedType(bolean);
   };
   return (
      <div
         tabIndex={0}
         onClick={toggle}
         onBlur={() => setOpen(false)}
         className="relative outline-none"
      >
         <div className="h-11 pl-6 mb-2">
            <div className="rounded-md bg-blue-400 flex h-11 pl-2 items-center justify-between">
               <Text isMovie={isMovie} />
               {sidebarExtended && <ChevronIcon open={open} />}
            </div>
         </div>
         {open && (
            <ul className="md:absolute z-10 top-14 w-full left-0 p-2 bg-blue-400 rounded-md">
               <Option
                  isMovie={isMovie}
                  icon="movie"
                  text="Movies"
                  changeType={changeType}
                  movie={true}
               />
               <Option
                  isMovie={isMovie}
                  icon="tv"
                  text="TV Shows"
                  changeType={changeType}
                  movie={false}
               />
            </ul>
         )}
      </div>
   );
}
