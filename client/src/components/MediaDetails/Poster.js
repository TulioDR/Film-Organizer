import { getPoster } from "../../utils/getPosters";

export default function Poster({ src, posterSize }) {
   return (
      <img
         src={getPoster(src, posterSize, true)}
         alt="poster"
         className="rounded-lg object-cover h-full shadow-material"
      />
   );
}
