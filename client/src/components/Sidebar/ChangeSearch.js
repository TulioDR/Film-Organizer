import useValueContext from "../../context/ValueContext";
import { motion } from "framer-motion";
import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function ChangeSearch() {
   const { isMovie, toggleIsMovie } = useValueContext();
   const { sidebarExtended } = useSidebarExtendedContext();

   return (
      <motion.div
         whileTap={{ scale: 0.95 }}
         onClick={toggleIsMovie}
         className="h-11 px-4 mb-1 flex items-center justify-between ml-4 overflow-hidden cursor-pointer rounded-md bg-blue-400 dark:bg-blue-600"
      >
         <div className="flex items-center">
            <span className="material-icons duration-100 truncate">
               {isMovie ? "movie" : "tv"}
            </span>
            <span
               className={`pl-5 transition-opacity duration-100 truncate ${
                  sidebarExtended ? "" : "opacity-0"
               }`}
            >
               {`Search ${isMovie ? "Movies" : "TV Series"}`}
            </span>
         </div>
         <span
            className={`material-icons text-3xl truncate transition-opacity duration-100 ${
               sidebarExtended ? "" : "opacity-0"
            }`}
         >
            {isMovie ? "toggle_on" : "toggle_off"}
         </span>
      </motion.div>
   );
}
