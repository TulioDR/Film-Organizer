import { getPoster } from "../../../utils/getPosters";

export default function Poster({ img }) {
   return (
      <img
         src={getPoster(img, "lg", true)}
         alt="poster"
         className="rounded-l-lg hidden lg:block w-35.8p bg-black"
      />
   );
}
