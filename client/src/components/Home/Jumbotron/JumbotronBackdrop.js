import { getPoster } from "../../../utils/getPosters";

export default function JumbotronBackdrop({ img, title, backdropFading }) {
   return img ? (
      <img
         src={getPoster(img, "xl", false)}
         alt={title}
         className={`w-full transition duration-500 bg-black ${
            backdropFading ? "opacity-0" : ""
         }`}
      />
   ) : (
      <div className="h-96 w-full bg-black"></div>
   );
}
