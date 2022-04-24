import { Link } from "react-router-dom";

export default function Genres({ genres, isMovie }) {
   return (
      <div className="flex-1 flex justify-end w-full">
         <div>
            {genres?.map((genre) => (
               <Link
                  to={`/search/genres/${isMovie ? "movie" : "tv"}/${genre.id}`}
                  key={genre.id}
                  className="bg-purple-dark dark:bg-purple hover:bg-purple-900 text-white text-sm rounded-md px-2 py-1 ml-2 my-1 float-left cursor-pointer shadow-md"
               >
                  {genre.name}
               </Link>
            ))}
         </div>
      </div>
   );
}
