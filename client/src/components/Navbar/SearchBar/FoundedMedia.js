import { getPoster } from "../../../utils/getPosters";

export default function FoundedMedia({ media, isMovie, getMedia, mobile }) {
   return (
      <li
         className="hover:bg-gray-400 dark:hover:bg-gray-light h-20 cursor-pointer p-2 flex"
         onClick={() => getMedia(media.id, mobile)}
      >
         <img
            src={getPoster(media.poster_path, "sm", true)}
            alt="poster"
            className="h-full"
         />
         <div className="pl-2">
            <div className="text-black dark:text-white">
               {isMovie ? media.title : media.name}
            </div>
            <div className="text-gray-500 text-sm">
               {isMovie
                  ? media.release_date?.substr(0, 4) || "N/A"
                  : media.first_air_date?.substr(0, 4) || "N/A"}
            </div>
         </div>
      </li>
   );
}
