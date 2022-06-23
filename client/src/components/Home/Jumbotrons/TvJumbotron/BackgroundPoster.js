import { getPoster } from "../../../../utils/getPosters";

export default function BackgroundPoster({ alt, src, isAnimating }) {
   return (
      <img
         src={getPoster(src, "lg", false)}
         alt={alt}
         className={`object-cover h-full w-full filter absolute top-0 left-0 duration-700 ${
            isAnimating ? "brightness-0" : "brightness-40"
         }`}
      />
   );
}
