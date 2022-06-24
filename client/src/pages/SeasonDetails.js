import { useEffect, useState } from "react";
import { baseURL } from "../constants/baseURL";
import { useParams } from "react-router-dom";

import EpCard from "../components/SeasonDetails/EpCard";

import SeasonOverview from "../components/SeasonDetails/SeasonOverview";
import SeasonPoster from "../components/SeasonDetails/SeasonPoster";
import SeasonReleaseDate from "../components/SeasonDetails/SeasonReleaseDate";
import SeasonInfoContainer from "../components/SeasonDetails/SeasonInfoContainer";
import SeasonEpisodes from "../components/SeasonDetails/SeasonEpisodes";

export default function SeasonDetails() {
   const { id, seasonNumber } = useParams();
   const [data, setData] = useState(null);

   useEffect(() => {
      const getSeasonInfo = async () => {
         const url = `${baseURL}/media/tv/${id}/season/${seasonNumber}`;
         const res = await fetch(url);
         const seasonData = await res.json();
         setData(seasonData);
         console.log(seasonData);
      };
      getSeasonInfo();
   }, [id, seasonNumber]);

   if (!data) return null;
   return (
      <>
         <SeasonInfoContainer>
            <SeasonPoster src={data.poster_path} />
            <div className="px-8 absolute top-0 pt-4 sm:pt-0 rounded-lg w-full h-full bg-gray-900 sm:bg-transparent bg-opacity-80 sm:static flex flex-col overflow-y-auto card-scrollbar text-white md:text-black md:dark:text-white">
               <div className="text-center mb-3 text-3xl">{data.name}</div>
               <div className="sm:flex">
                  <SeasonReleaseDate releaseDate={data.air_date} />
                  <div className="mx-2 hidden sm:block">-</div>
                  <SeasonEpisodes ep={data.episodes.length} />
               </div>
               <SeasonOverview overview={data.overview} />
            </div>
         </SeasonInfoContainer>

         <div className="text-3xl mb-8">Episodes</div>
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-7 gap-y-12">
            {data.episodes.map((ep) => (
               <EpCard key={ep.id} ep={ep} />
            ))}
         </div>
      </>
   );
}
