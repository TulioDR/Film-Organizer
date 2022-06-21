export default function CardOverview({ overview }) {
   return (
      <div className="flex-1 dark:text-gray-400 overflow-y-hidden px-4">
         <div className="text-sm font-medium mb-1">Overview</div>
         <p className="text-sm leading-tight text-gray-600 dark:text-gray-200 line-clamp-3">
            {overview}
         </p>
      </div>
   );
}
