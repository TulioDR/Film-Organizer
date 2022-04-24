import { getPoster } from "../../utils/getPosters";

export default function CardPoster({ posterPath, toggleInfo }) {
   return (
      <div className="h-full cursor-pointer bg-black" onClick={toggleInfo}>
         <img
            className="h-full w-full"
            src={getPoster(posterPath, "md", true)}
            alt="poster"
         />
      </div>
   );
}
