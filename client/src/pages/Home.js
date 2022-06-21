import useHomeMedia from "../hooks/useHomeMedia";
import MovieJumbotron from "../components/Home/Jumbotrons/MovieJumbotron/MovieJumbotron";
import TvJumbotron from "../components/Home/Jumbotrons/TvJumbotron/TvJumbotron";
import UpcomingMovies from "../components/Home/UpcomingMovies/UpcomingMovies";

export default function Home() {
   const { nowPlaying, onAir, upcoming, isLoading } = useHomeMedia();
   return (
      <div className="w-full flex flex-col space-y-10">
         <MovieJumbotron {...{ nowPlaying }} />

         <TvJumbotron onAir={onAir} />

         <div>
            <h2 className="text-2xl font-medium">Upcoming Movies</h2>
            <UpcomingMovies movies={upcoming} isLoading={isLoading} />
         </div>
      </div>
   );
}
