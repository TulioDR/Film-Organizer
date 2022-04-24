import { chageDateFormat } from "../../../utils/getDate";

export default function DisplayedMovieInfo({ voteAverage, releaseDate }) {
   return voteAverage ? (
      <div className="font-medium flex items-center mb-5">
         <span className="material-icons text-yellow-600 text-xl flex items-center justify-center mr-1">
            star_rate
         </span>
         <span>{voteAverage}</span>
         <span className="mx-1">•</span>
         <span>{chageDateFormat(releaseDate)}</span>
      </div>
   ) : (
      <div className="h-6 bg-gray-500 w-56 rounded animate-pulse mb-5"></div>
   );
}
