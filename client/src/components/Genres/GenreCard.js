import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function GenreCard({ mediaType, item }) {
   const [isLoading, setIsLoading] = useState(true);
   const handleLoad = () => setIsLoading(false);

   const history = useHistory();
   const search = () => history.push(`/search/genres/${mediaType}/${item.id}`);

   return (
      <article
         onClick={search}
         className="genre-card h-40 bg-center bg-cover relative rounded-md overflow-hidden cursor-pointer shadow-custom transform duration-200 hover:-translate-y-1"
      >
         {isLoading && (
            <div className="animate-pulse h-full w-full bg-gray-400">
               <div className="absolute w-5/6 h-5 bg-gray-600 top-2 left-2 rounded-sm"></div>
            </div>
         )}

         <img
            style={isLoading ? { display: "none" } : {}}
            src={item.image}
            alt={item.name}
            className={`object-cover h-full w-full bg-gray-200`}
            onLoad={handleLoad}
         />
         <div
            style={isLoading ? { display: "none" } : {}}
            className="absolute w-full top-0 text-white bg-gradient-to-b from-black to-transparent pt-2 pl-3 pb-4"
         >
            {item.name}
         </div>
      </article>
   );
}
