import BackPoster from "./BackPoster";
import Poster from "./Poster";
import BarInfo from "./BarInfo";
import BarScore from "./BarScore";
import SaveButton from "./SaveButton";
import Genres from "./Genres";
import EpisodesCount from "./EpisodesCount";
import Overview from "./Overview";
import HeaderTitle from "./HeaderTitle";

export default function Header({ media, isMovie, isSaved, checkUser }) {
   const { title, name, backdrop_path, poster_path, runtime } = media;
   const { vote_average, vote_count, release_date, first_air_date } = media;
   const { release_dates, content_ratings, genres } = media;
   const { number_of_seasons, number_of_episodes, tagline, overview } = media;
   const rating = release_dates?.results || content_ratings?.results;

   return (
      <div className="lg:aspect-w-16 lg:aspect-h-9 relative w-full mb-5 lg:mb-0 text-black dark:text-white">
         <BackPoster img={backdrop_path} />
         <div className="lg:absolute h-full w-full lg:p-6 xl:p-8">
            <div className="w-full h-full flex rounded-lg lg:border-4 border-white lg:shadow-lg">
               <Poster img={poster_path} />
               <div className="flex-1 flex flex-col lg:p-4 2xl:p-8 lg:bg-black rounded-r-lg lg:bg-opacity-70 lg:text-white">
                  <HeaderTitle title={title || name} />
                  <div className="flex items-center mb-4">
                     <BarInfo
                        date={release_date || first_air_date}
                        runtime={runtime}
                        rating={rating}
                        isMovie={isMovie}
                     />
                     <BarScore
                        voteAverage={vote_average}
                        voteCount={vote_count}
                     />
                  </div>
                  <div className="flex images-center mb-3">
                     <SaveButton {...{ isSaved, checkUser }} />
                     <Genres genres={genres} isMovie={isMovie} />
                  </div>
                  {!isMovie && (
                     <EpisodesCount
                        numberOfSeasons={number_of_seasons}
                        numberOfEpisodes={number_of_episodes}
                     />
                  )}
                  <Overview
                     tagline={tagline}
                     overview={overview}
                     isMovie={isMovie}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
