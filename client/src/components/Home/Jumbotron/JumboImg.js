import { getPoster } from "../../../utils/getPosters";

export default function JumboImg({ translate, isTranslated, movie }) {
   const distance = 144 * translate + 15 * translate;

   return (
      <img
         src={getPoster(movie?.backdrop_path, "xl", true)}
         alt={movie?.title}
         className={`rounded-md object-cover transform filter duration-1000 shadow-md ease-in-out ${
            isTranslated ? "duration-1000" : ""
         } ${
            movie?.big
               ? "absolute w-full h-full filter brightness-40"
               : `absolute w-36 h-48 mb-24 ml-125 2xl:ml-180`
         }`}
         style={movie?.big ? {} : { transform: `translateX(${distance}px)` }}
      />
   );
}
