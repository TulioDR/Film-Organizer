import UpScroller from "./UpScroller";
import UpMediaSkeleton from "./UpMediaSkeleton";
import UpMediaContainer from "./UpMediaContainer";
import UpMediaPoster from "./UpMediaPoster";
import UpBottomInfo from "./UpBottomInfo";

const skeletonArray = [
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
export default function UpcomingMovies({ movies, isLoading }) {
   return (
      <UpScroller>
         {isLoading
            ? skeletonArray.map((n) => <UpMediaSkeleton key={n} />)
            : movies?.map((movie) => (
                 <UpMediaContainer key={movie.id} movie={movie}>
                    <UpMediaPoster
                       src={movie.backdrop_path || movie.poster_path}
                       alt={movie.id}
                    />
                    <UpBottomInfo
                       title={movie.title}
                       releaseDate={movie.release_date}
                    />
                 </UpMediaContainer>
              ))}
      </UpScroller>
   );
}
