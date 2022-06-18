import { chageDateFormat } from "../../../utils/getDate";

export default function MovieInfo({ selectedMovie, isAnimating }) {
   // const { title, releaseDate } = selectedMovie;
   return (
      <div className="overflow-hidden">
         <h1
            className={`text-5xl 2xl:text-7xl transform transition-all font-medium duration-500 ease-in-out ${
               isAnimating ? "translate-y-full opacity-0" : ""
            }`}
         >
            {selectedMovie?.title}
         </h1>
         <p
            className={`text-sm mt-2 transform transition-all duration-200 ease-in-out ${
               isAnimating ? "translate-y-full opacity-0" : "delay-300"
            }`}
         >
            {chageDateFormat(selectedMovie?.release_date)}
         </p>
      </div>
   );
}
