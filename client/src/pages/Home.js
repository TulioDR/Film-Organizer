// import Jumbotron from "../components/Home/Jumbotron/Jumbotron";
import SubTitle from "../components/SubTitle";
import useHomeMedia from "../hooks/useHomeMedia";
import Media from "../components/Media/Media";
import UpcomingMovies from "../components/Home/UpcomingMovies/UpcomingMovies";
import { useState } from "react";
import NewJumbotron from "../components/Home/Jumbotron/NewJumbotron";

export default function Home() {
   const {
      nowPlaying,
      onAir,
      upcoming,
      isLoading,
      currentId,
      setCurrentId,
      displayedMovie,
      setDisplayedMovie,
      backgroundImage,
      setBackgroundImage,
   } = useHomeMedia();

   const [backdropFading, setBackdropFading] = useState(false);
   const changeDisplayedMovie = (movie) => {
      setCurrentId(movie.id);
      setBackdropFading(true);
      setDisplayedMovie(movie);
      setTimeout(function () {
         setBackdropFading(false);
         setBackgroundImage(movie.backdrop_path);
      }, 500);
   };

   return (
      <>
         {/* <div className="hidden lg:block">
            <Jumbotron
               displayedMovie={displayedMovie}
               nowPlaying={nowPlaying}
               currentId={currentId}
               backgroundImage={backgroundImage}
               isLoading={isLoading}
               backdropFading={backdropFading}
               changeDisplayedMovie={changeDisplayedMovie}
            />
         </div> */}
         <NewJumbotron {...{ nowPlaying }} />

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
