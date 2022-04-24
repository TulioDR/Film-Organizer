export default function Overview({ tagline, overview, isMovie }) {
   return (
      <div className="flex-1 overflow-y-auto overview-scrollbar">
         {isMovie && <div className="italic font-bold mb-1">{tagline}</div>}

         <div className="text-justify pr-1 leading-tight">
            {overview || "No overview available"}
         </div>
      </div>
   );
}
