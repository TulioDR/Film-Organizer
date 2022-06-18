import { chageDateFormat } from "../../utils/getDate";

export default function InfoBar({ date, runtime, rating, isMovie }) {
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
      <div>
         <span className="mr-1">
            {chageDateFormat(date) || "Not Available"}
         </span>
         <span className="mx-2">|</span>
         {isMovie && (
            <>
               <span>{getMovieDuration(runtime) || "Not Available"}</span>
               <span className="mx-2">|</span>
            </>
         )}
         <span>{getRating(rating, isMovie) || "Not Available"}</span>
      </div>
   );
}
