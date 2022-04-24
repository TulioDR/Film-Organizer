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
         className="relative outline-none border-b-2 border-purple dark:border-gray-light"
      >
         <div className="flex h-11 pl-2 items-center justify-between">
            <Text isMovie={isMovie} />
            {sidebarExtended && <ChevronIcon open={open} />}
         </div>
         {open && (
            <ul className="md:absolute left-full top-0 p-2 bg-purple-dark dark:bg-gray-lightDark md:w-36 md:rounded-md">
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
