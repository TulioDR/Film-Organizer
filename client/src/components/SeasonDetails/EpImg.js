import { getPoster } from "../../utils/getPosters";

export default function EpImg({ img }) {
   return (
      <img
         src={getPoster(img, "md", false)}
         alt="Poster"
         className="w-full block"
      />
   );
}
