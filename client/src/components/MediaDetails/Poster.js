import { getPoster } from "../../utils/getPosters";

export default function Poster({ src }) {
   return (
      <img
         src={getPoster(src, "lg", true)}
         alt="poster"
         className="rounded-lg h-full shadow-material"
      />
   );
}
