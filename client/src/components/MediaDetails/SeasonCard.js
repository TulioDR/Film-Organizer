import { Link } from "react-router-dom";
import { getPoster } from "../../utils/getPosters";

export default function SeasonCard({ seasonInfo, showID }) {
   const { name, air_date, poster_path } = seasonInfo;
   const { episode_count, overview, season_number } = seasonInfo;
   return (
      <article className="min-w-72 w-72 article lg:h-72 lg:min-w-108 lg:w-108 lg:-ml-20 first:ml-0 rounded-lg relative overflow-hidden shadow-seasonCard lg:flex transform lg:hover:-translate-y-2 duration-200 border-0 border-black dark:border-gray-light">
         <img
            src={getPoster(poster_path, "md", true)}
            alt={name}
            className="h-full"
         />
         <div className="pl-4 pr-0 h-full bg-gray-200 dark:bg-gray-lightDark bg-opacity-70 dark:bg-opacity-70 lg:bg-opacity-100 w-full absolute top-0 lg:static">
            <div className="h-full overflow-y-auto card-scrollbar pb-14 pt-4 pr-4">
               <div className="text-center text-lg">{name}</div>
               <div className="flex items-center">
                  <div>
                     <div>Premiered:</div>
                     <div>{air_date}</div>
                  </div>
                  <div className="h-8 w-1 bg-black dark:bg-white mx-3"></div>
                  <div>{episode_count} Episodes</div>
               </div>
               <div className="mt-2 text-justify text-sm">{overview}</div>
            </div>
         </div>
         <Link
            to={`/media-details/tv/${showID}/season-details/${season_number}`}
            className="absolute bottom-2 right-2 p-2 bg-blue-600 text-white rounded-md cursor-pointer"
         >
            Learn more
         </Link>
      </article>
   );
}
