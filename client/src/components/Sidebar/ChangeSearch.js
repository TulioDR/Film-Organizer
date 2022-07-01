import useValueContext from "../../context/ValueContext";
import { motion } from "framer-motion";

export default function ChangeSearch() {
   const { isMovie, setIsMovie, changeFoundedType } = useValueContext();

   const changeType = () => {
      setIsMovie(!isMovie);
      changeFoundedType(!isMovie);
   };
   return (
      <motion.button
         whileTap={{ scale: 0.95 }}
         onClick={changeType}
         className={`h-11 px-4 mb-1 ml-4 lg:ml-6 overflow-hidden cursor-pointer flex items-center justify-between rounded-md bg-blue-400 dark:bg-blue-600`}
      >
         <div className="flex items-center">
            <span className="material-icons duration-100">
               {isMovie ? "movie" : "tv"}
            </span>
            <span className="pl-5 truncate duration-100">
               {`Search ${isMovie ? "Movies" : "TV Series"}`}
            </span>
         </div>
         <span className="material-icons">ads_click</span>
      </motion.button>
   );
}
