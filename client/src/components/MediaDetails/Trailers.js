import Scroller from "../Scroller";

export default function Trailers({ trailers, isMovie }) {
   return (
      <Scroller>
         {trailers?.results?.map((trailer) => (
            <a
               key={trailer.id}
               href={`https://www.youtube.com/watch?v=${trailer.key}`}
               target="_blank"
               rel="noreferrer"
               className="relative w-72 min-w-72 rounded-md overflow-hidden text-white shadow-seasonCard"
            >
               <img
                  src={`http://i3.ytimg.com/vi/${trailer.key}/hqdefault.jpg`}
                  alt={trailer.name}
                  className="w-full"
               />
               <i className="fab fa-youtube w-full text-red-900 top-1/4 text-center text-8xl absolute"></i>
               <div className="bg-black absolute bottom-0 text-center text-sm py-1 px-2 w-full">
                  {trailer.name}
               </div>
            </a>
         )) ||
            `There is no Trailers available for this ${
               isMovie ? "Movie" : "Show"
            }`}
      </Scroller>
   );
}
