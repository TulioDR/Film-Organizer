import { getPoster } from "../../../utils/getPosters";

export default function UpMediaPoster({ src, alt }) {
   return (
      <img
         src={getPoster(src, "md", true)}
         alt={alt}
         className="w-full block"
      />
   );
}
