export default function UpMediaSkeleton() {
   return (
      <div>
         <div className="w-72 h-44 bg-gray-300 animate-pulse relative rounded-md"></div>
         <div className="w-full mt-2">
            <div className="bg-gray-400 w-2/3 h-4 rounded-sm mb-1"></div>
            <div className="bg-gray-400 w-1/2 h-4 rounded-sm"></div>
         </div>
      </div>
   );
}
