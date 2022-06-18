export default function Score({ media }) {
   return (
      <div className="flex items-center space-x-1">
         <span className="text-2xl ">{media.vote_average}</span>
         <span className="material-icons text-yellow-600 text-2xl">
            star_rate
         </span>
      </div>
   );
}
