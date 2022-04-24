import JumbotronBackdrop from "./JumbotronBackdrop";
import JumbotronTitle from "./JumbotronTitle";
import DisplayedMovieInfo from "./DisplayedMovieInfo";
import LearnMoreButton from "./LearnMoreButton";

import MovieSkeleton from "./MovieSkeleton";
import JumbotronMovie from "./JumbotronMovie";
import ScrollContainer from "react-indiana-drag-scroll";

const skeletonArray = [
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export default function Jumbotron({
   displayedMovie,
   nowPlaying,
   currentId,
   backgroundImage,
   isLoading,
   backdropFading,
   changeDisplayedMovie,
}) {
   if (displayedMovie) {
      var { title, vote_average, release_date, id } = displayedMovie;
   }

   return (
      <div className="relative mb-4 max-h-96 rounded-lg overflow-hidden shadow-material bg-black">
         <JumbotronBackdrop
            img={backgroundImage}
            title={title}
            backdropFading={backdropFading}
         />

         <div className="absolute top-0 w-full h-full text-white bg-black bg-opacity-50 p-4 overflow-hidden">
            <div className="relative h-44">
               <div className="text-2xl mb-20">
                  Movies now playing on Theaters
               </div>
               <JumbotronTitle title={title} />
            </div>
            <DisplayedMovieInfo
               voteAverage={vote_average}
               releaseDate={release_date}
            />
            <div className="flex items-center">
               <div className="w-2/5">
                  <LearnMoreButton id={id} />
               </div>
               <ScrollContainer
                  className="flex w-3/5 pb-1 space-x-2 scroller-scrollbar"
                  vertical={false}
                  hideScrollbars={false}
               >
                  {isLoading
                     ? skeletonArray.map((n) => <MovieSkeleton key={n} />)
                     : nowPlaying.map((movie) => (
                          <JumbotronMovie
                             key={movie.id}
                             movie={movie}
                             displayedMovieId={currentId}
                             changeDisplayedMovie={changeDisplayedMovie}
                          />
                       ))}
               </ScrollContainer>
            </div>
         </div>
      </div>
   );
}
