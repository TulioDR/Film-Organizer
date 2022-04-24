import { getPoster } from "../../../utils/getPosters";

export default function JumbotronMovie({
   movie,
   displayedMovieId,
   changeDisplayedMovie,
}) {
   return (
      <div
         onClick={() => changeDisplayedMovie(movie)}
         className={`min-w-18 w-18 filter brightness-75 hover:brightness-105 cursor-pointer ${
            displayedMovieId === movie.id ? "brightness-105" : "brightness-50"
         }`}
      >
         <img
            src={getPoster(movie.poster_path, "sm", true)}
            alt={movie.id}
            className="rounded-md"
         />
      </div>
   );
}
