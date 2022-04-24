import { getPoster } from "../../../utils/getPosters";

export default function BackPoster({ img }) {
   return (
      <img
         className="w-full lg:float-left rounded-lg mb-4 lg:mb-0 shadow-material bg-gray-3"
         src={getPoster(img, "xl", false)}
         alt="back poster"
      />
   );
}
