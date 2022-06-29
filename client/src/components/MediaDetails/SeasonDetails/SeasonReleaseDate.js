import {
   daysToRelease,
   isReleased,
   chageDateFormat,
} from "../../../utils/getDate";

export default function SeasonReleaseDate({ releaseDate }) {
   return (
      <div className="mb-1 flex items-center">
         {releaseDate ? (
            <>
               <span className="">
                  {releaseDate
                     ? `${chageDateFormat(releaseDate)}`
                     : "No release date available"}
               </span>
               {!isReleased(releaseDate) && (
                  <span className="italic text-sm">
                     in {daysToRelease(releaseDate)} days
                  </span>
               )}
            </>
         ) : (
            <span>N/A</span>
         )}
      </div>
   );
}
