import { getPoster } from "../../../utils/getPosters";

export default function SeasonPoster({ src }) {
   return (
      <img
         src={getPoster(src, "md", true)}
         alt="poster"
         className="rounded-lg w-1/4 shadow-material float-left mr-6 mb-4"
      />
   );
}
