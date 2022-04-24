import { getPoster } from "../../utils/getPosters";

export default function SeasonPoster({ src }) {
   return (
      <img
         src={getPoster(src, "md", true)}
         alt="poster"
         className="rounded-lg w-full sm:w-1/4 shadow-lg"
      />
   );
}
