export default function EpisodeRating({ voteCount, voteAverage }) {
   return (
      <div className="flex items-center space-x-1">
         <div className="material-icons text-yellow-600 text-lg grid place-items-center">
            star_rate
         </div>
         <div>{voteCount ? voteAverage.toFixed(1) : "N/A"}</div>
      </div>
   );
}
