import { getPoster } from "../../../utils/getPosters";

export default function UpMediaPoster({ src, alt }) {
   return (
      <img
         src={getPoster(src, "md", false)}
         alt={alt}
         className="w-full h-44 block object-cover mb-1 rounded-md shadow-material"
      />
   );
}
