export default function Trailers({ trailers, isMovie }) {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 pt-5 w-full pr-3">
         {trailers?.results?.map((trailer) => (
            <div key={trailer.id} className="w-full">
               <a
                  href={`https://www.youtube.com/watch?v=${trailer.key}`}
                  target="_blank"
                  rel="noreferrer"
               >
                  <div className="aspect-w-16 aspect-h-9">
                     <img
                        src={`http://i3.ytimg.com/vi/${trailer.key}/hqdefault.jpg`}
                        alt={trailer.name}
                        className="w-full object-cover shadow-material rounded-md"
                     />
                  </div>
               </a>
               <div className="text-sm py-1 w-full">{trailer.name}</div>
            </div>
         )) ||
            `There is no Trailers available for this ${
               isMovie ? "Movie" : "Show"
            }`}
      </div>
   );
}
