import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { baseURL } from "../../../constants/baseURL";
import EpisodeCard from "../../SeasonDetails/EpCard";
import SeasonPoster from "./SeasonPoster";
import SeasonReleaseDate from "./SeasonReleaseDate";
import SeasonTitle from "./SeasonTitle";

export default function SeasonDetails({
   closeSeasonDetails,
   id,
   seasonNumber,
}) {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   useEffect(() => {
      const getSeasonInfo = async () => {
         setIsLoading(false);
         const url = `${baseURL}/media/tv/${id}/season/${seasonNumber}`;
         const res = await fetch(url);
         const seasonData = await res.json();
         setData(seasonData);
         setIsLoading(true);
         console.log(seasonData);
      };
      getSeasonInfo();
   }, [id, seasonNumber]);

   return (
      isLoading && (
         <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="absolute flex flex-col top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-dark overflow-y-auto pr-2 card-scrollbar"
         >
            <div className="relative">
               <button
                  onClick={closeSeasonDetails}
                  className="material-icons absolute top-3 left-3 rounded-md bg-gray-200 dark:bg-gray-dark p-2"
               >
                  chevron_left
               </button>
               <SeasonPoster src={data.poster_path} />
               <div className="flex-1 pt-4">
                  <SeasonTitle>{data.name}</SeasonTitle>
                  <div className="flex text-gray-500 dark:text-gray-400">
                     <SeasonReleaseDate releaseDate={data.air_date} />
                     <span className="mx-2">|</span>
                     <span>{data.episodes.length} episodes</span>
                  </div>
                  <div className="text-sm">
                     {data.overview ||
                        "There is no description available for this season."}
                  </div>
               </div>
            </div>
            <div>
               <div className="text-3xl my-8">Episodes</div>
               <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-7 gap-y-12">
                  {data.episodes.map((ep) => (
                     <EpisodeCard key={ep.id} ep={ep} />
                  ))}
               </div>
            </div>
         </motion.div>
      )
   );
}
