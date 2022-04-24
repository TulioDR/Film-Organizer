import {
   daysToRelease,
   isReleased,
   chageDateFormat,
} from "../../utils/getDate";

export default function SeasonReleaseDate({ releaseDate }) {
   return (
      <div className="mb-1 flex items-center">
         <span className="material-icons mr-1">calendar_today</span>
         <span className="font-bold">
            {releaseDate
               ? `${chageDateFormat(releaseDate)}`
               : "No release date available"}
         </span>
         {!isReleased(releaseDate) && (
            <span className="italic text-sm">
               in {daysToRelease(releaseDate)} days
            </span>
         )}
      </div>
   );
}
