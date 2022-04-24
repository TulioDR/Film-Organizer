export default function EpisodeOverview({ name, overview }) {
   return (
      <div className="p-4 h-full overflow-y-auto card-scrollbar flex-1">
         <div className="text-xl leading-tight text-black dark:text-white">
            {name}
         </div>
         <p className="text-gray-900 dark:text-gray-400 text-base font-light leading-snug">
            {overview || "No description available for this episode"}
         </p>
      </div>
   );
}
