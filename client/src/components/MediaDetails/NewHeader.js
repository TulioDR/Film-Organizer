import { chageDateFormat } from "../../utils/getDate";
import { getPoster } from "../../utils/getPosters";
import DetailPicker from "./Header/DetailPicker";

export default function NewHeader({ media, isMovie }) {
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

   const { release_dates, content_ratings } = media;
   const rating = release_dates?.results || content_ratings?.results;
   return (
      <div style={{ height: "calc(100vh - 5rem)" }} className="flex pb-10">
         <div className="relative h-full">
            <img
               src={getPoster(media.poster_path, "lg", true)}
               alt="poster"
               className="rounded-lg h-full shadow-material"
            />
            <button className="absolute -right-6 bottom-10 h-12 w-12 hover:w-24 p-2 group duration-300 bg-blue-600 flex items-center px-2 py-3 overflow-hidden focus:outline-none">
               <span className="material-icons text-3xl h-8 w-8 grid place-content-center">
                  bookmark
               </span>
               <span className="duration-300 text-lg font-medium pr-1 transform translate-x-6 group-hover:translate-x-1 opacity-0 group-hover:opacity-100">
                  Save
               </span>
            </button>
         </div>
         <div className="flex-1 pl-12 pt-5">
            <h1 className="text-4xl 2xl:text-5xl font-medium">{media.title}</h1>
            <div className="flex items-center justify-between mt-2 text-gray-400">
               <div>
                  <span className="mr-1">
                     {chageDateFormat(
                        media.release_date || media.first_air_date
                     ) || "Not Available"}
                  </span>
                  <span className="mx-2">|</span>
                  {isMovie && (
                     <>
                        <span>
                           {getMovieDuration(media.runtime) || "Not Available"}
                        </span>
                        <span className="mx-2">|</span>
                     </>
                  )}
                  <span>{getRating(rating, isMovie) || "Not Available"}</span>
               </div>
               <div className="flex items-center space-x-1">
                  <span className="text-2xl ">{media.vote_average}</span>
                  <span className="material-icons text-yellow-600 text-2xl">
                     star_rate
                  </span>
               </div>
            </div>
            <div className="mt-5">
               <div className="flex justify-between border-b border-gray-500">
                  <DetailPicker>Overview</DetailPicker>
                  <DetailPicker>Seasons</DetailPicker>
                  <DetailPicker>Trailers & More</DetailPicker>
                  <DetailPicker>Cast & Crew</DetailPicker>
                  <DetailPicker>Similar</DetailPicker>
                  <DetailPicker>Details</DetailPicker>
               </div>
               <div></div>
            </div>
         </div>
      </div>
   );
}
