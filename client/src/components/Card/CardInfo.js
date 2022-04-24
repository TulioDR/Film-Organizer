export default function CardInfo({ voteAverage, overview }) {
   return (
      <div className="flex-1 dark:text-white overflow-y-hidden mb-2">
         <div className="px-4 pt-2 relative h-full overflow-y-auto card-scrollbar">
            <div className="absolute top-2 right-4 flex items-center">
               <span className="material-icons text-yellow-500">star_rate</span>
               <span className="text-xl font-light">{voteAverage}</span>
            </div>
            <div className="text-lg font-medium mb-1">Summary</div>
            <p className="text-justify text-sm leading-tight text-gray-600 dark:text-gray-400">
               {overview}
            </p>
         </div>
      </div>
   );
}
