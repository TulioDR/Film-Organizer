import {
   daysToRelease,
   isReleased,
   chageDateFormat,
} from "../../../utils/getDate";

export default function BarInfo({ date, runtime, rating, isMovie }) {
   const getMovieDuration = (duration) => {
      var runtime = duration;
      var hours = Math.floor(runtime / 60);
      var minutes = runtime % 60;
      var fullRuntime = `${hours > 0 && `${hours}h`} ${minutes}min`;
      return fullRuntime;
   };

   const getRating = (certifications, isMovie) => {
      const country = certifications?.find((c) => c.iso_3166_1 === "US");
      if (isMovie)
         return (
            country?.release_dates[0]?.certification ||
            country?.release_dates[1]?.certification
         );
      else return country?.rating;
   };
   return (
      <div className="flex-1">
         <div className="flex items-center mb-1">
            <span className="material-icons mr-1">calendar_today</span>
            <span className="mr-1">
               {chageDateFormat(date) || "Not Available"}
            </span>
            <span className="italic text-sm">
               {!isReleased(date) && "(in " + daysToRelease(date) + " days)"}
            </span>
         </div>

         {isMovie && (
            <div className="flex items-center mb-1">
               <span className="material-icons mr-1">schedule</span>
               <span>{getMovieDuration(runtime) || "Not Available"}</span>
            </div>
         )}

         <div className="flex items-center">
            <span className="material-icons mr-1">approval</span>
            <span>{getRating(rating, isMovie) || "Not Available"}</span>
         </div>
      </div>
   );
}
