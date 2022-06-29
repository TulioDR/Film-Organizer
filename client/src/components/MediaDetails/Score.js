export default function Score({ media }) {
   const oneDecimal = (number) => {
      if (number) {
         return Math.round(number * 10) / 10;
      } else return "N/A";
   };
   return (
      <div className="flex items-center space-x-1">
         <span className="text-2xl">{oneDecimal(media?.vote_average)}</span>
         <span className="material-icons text-yellow-600 text-2xl">
            star_rate
         </span>
      </div>
   );
}
