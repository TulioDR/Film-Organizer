import useHomeMedia from "../hooks/useHomeMedia";
import MovieJumbotron from "../components/Home/Jumbotrons/MovieJumbotron/MovieJumbotron";
import TvJumbotron from "../components/Home/Jumbotrons/TvJumbotron/TvJumbotron";
import UpcomingMovies from "../components/Home/UpcomingMovies/UpcomingMovies";
import MobileMovieJumbotron from "../mobile/MovieJumbotron/MobileMovieJumbotron";
import HomeSubtitle from "../components/Home/HomeSubtitle";
import MobileTvJumbotron from "../mobile/TvJumbotron/MobileTvJumbotron";

export default function Home() {
   const { nowPlaying, onAir, upcoming, isLoading } = useHomeMedia();
   return (
      <div className="w-full flex flex-col space-y-5 lg:space-y-10">
         <div className="hidden lg:block">
            <MovieJumbotron nowPlaying={nowPlaying} />
         </div>

         <div className="hidden lg:block">
            <TvJumbotron onAir={onAir} />
         </div>

         <div className="lg:hidden">
            <HomeSubtitle>Now playing on Theaters</HomeSubtitle>
            <MobileMovieJumbotron nowPlaying={nowPlaying} />
         </div>

         <div className="lg:hidden">
            <HomeSubtitle>TV Series on Air</HomeSubtitle>
            <MobileTvJumbotron onAir={onAir} />
         </div>

         <div>
            <HomeSubtitle>Upcoming Movies</HomeSubtitle>
            <UpcomingMovies movies={upcoming} isLoading={isLoading} />
         </div>
      </div>
   );
}
