export default function UpMediaSkeleton() {
   return (
      <div className="w-72 h-44 bg-gray-300 animate-pulse relative rounded-md">
         <div className="absolute bottom-0 w-full p-2">
            <div className="bg-gray-400 w-36 h-5 rounded-sm mb-1"></div>
            <div className="bg-gray-400 w-44 h-5 rounded-sm"></div>
         </div>
      </div>
   );
}
