import useGetMediaDetails from "../../hooks/useGetMediaDetails";
import { getPoster } from "../../utils/getPosters";
import { chageDateFormat } from "../../utils/getDate";

export default function MobileMoviePoster({ movie }) {
   const [getMoreInfo] = useGetMediaDetails({
      type: "movie",
      selected: movie,
   });
   return (
      <article
         onClick={getMoreInfo}
         className="shadow-material cursor-pointer relative rounded-lg overflow-hidden"
      >
         <img
            src={getPoster(movie.backdrop_path, "lg", false)}
            alt={movie.title}
            className="object-cover w-full"
         />
         <div className="absolute w-full pb-3 px-3 md:pb-5 md:px-5 pt-20 bottom-0 left-0 text-white bg-gradient-to-t from-black to-transparent">
            <h4 className="font-medium text-sm md:text-xl leading-snug">
               {movie.title}
            </h4>
            <span className="text-xs lg:text-sm text-gray-200">
               {chageDateFormat(movie.release_date)}
            </span>
         </div>
      </article>
   );
}
