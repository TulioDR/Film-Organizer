export default function BarScore({ voteAverage, voteCount }) {
   return (
      <div className="flex">
         <div className="numbers">
            <div className="flex">
               <div className="material-icons text-yellow-600 text-3xl grid place-items-center">
                  star_rate
               </div>
               {voteAverage ? (
                  <div className="text-2xl flex justify-end">
                     {voteAverage}/10
                  </div>
               ) : (
                  <div className="text-2xl">N/A</div>
               )}
            </div>
            {voteAverage && (
               <div className="text-sm text-right">{voteCount} votes</div>
            )}
         </div>
      </div>
   );
}
