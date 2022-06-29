import { getPoster } from "../../utils/getPosters";

export default function SeasonCard({ seasonInfo, showID, openSeasonDetails }) {
   const { name, air_date, poster_path } = seasonInfo;
   const { episode_count, overview, season_number } = seasonInfo;
   return (
      <article className="w-full flex rounded-lg shadow-material relative overflow-y-hidden bg-gray-200 dark:bg-gray-800 h-80">
         <img
            src={getPoster(poster_path, "md", true)}
            alt={name}
            className="h-full"
         />
         <div className="p-4 pb-14 h-full overflow-y-auto text-sm">
            <div className="text-base font-medium">{name}</div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 my-1">
               <div>{air_date || "N/A"}</div>
               <div className="h-6 mx-2">|</div>
               <div>{episode_count} Episodes</div>
            </div>
            <div>{overview || "No overview available"}</div>
         </div>
         <button
            onClick={() => openSeasonDetails(season_number)}
            className="absolute bottom-4 right-4 py-1 px-2 bg-blue-600 text-white rounded-md cursor-pointer"
         >
            Learn more
         </button>
      </article>
   );
}
