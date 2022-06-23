export default function CardInfo({ year, title, voteAverage }) {
   return (
      <div className="bg-gray-200 dark:bg-gray-dark rounded-xl px-4 pt-4 transform -translate-y-4">
         <h4 className="leading-5">{title}</h4>
         <div className="flex justify-between items-center text-gray-500 dark:text-gray-400 text-sm">
            <span className="">{year ? year.substr(0, 4) : "N/A"}</span>
            <div className="flex items-center space-x-1">
               <span className="material-icons text-yellow-500 text-sm">
                  star_rate
               </span>
               <span>{voteAverage || "N/A"}</span>
            </div>
         </div>
      </div>
   );
}
