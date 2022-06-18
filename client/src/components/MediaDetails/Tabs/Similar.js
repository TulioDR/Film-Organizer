import { getPoster } from "../../../utils/getPosters";

export default function Similar({ similar, type, isMovie }) {
   return (
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 pt-5 pr-3">
         {similar?.map(({ id, poster_path }) => (
            <article key={id} to={`/media-details/${type}/${id}`} className="">
               <img
                  src={getPoster(poster_path, "md", true)}
                  alt={id}
                  className="w-full rounded-md shadow-material"
               />
            </article>
         )) || `No similar ${isMovie ? "Movies" : "Shows"} available`}
      </div>
   );
}
