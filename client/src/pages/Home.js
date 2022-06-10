import SubTitle from "../components/SubTitle";
import useHomeMedia from "../hooks/useHomeMedia";
import Media from "../components/Media/Media";
import UpcomingMovies from "../components/Home/UpcomingMovies/UpcomingMovies";
import Jumbotron from "../components/Home/Jumbotron/Jumbotron";

export default function Home() {
   const { nowPlaying, onAir, upcoming, isLoading } = useHomeMedia();

   return (
      <>
         <Jumbotron {...{ nowPlaying }} />

         <div className="lg:hidden">
            <SubTitle>Movies now playing on Theaters</SubTitle>
            <Media media={nowPlaying} type="movie" isLoading={isLoading} />
         </div>

         <SubTitle>TV Series on Air</SubTitle>
         <Media media={onAir} type="tv" isLoading={isLoading} />

         <SubTitle>Upcoming Movies</SubTitle>
         <UpcomingMovies movies={upcoming} isLoading={isLoading} />
      </>
   );
}
