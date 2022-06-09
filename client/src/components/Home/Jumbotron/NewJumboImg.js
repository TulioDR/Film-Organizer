import { getPoster } from "../../../utils/getPosters";

export default function NewJumboImg({ img, translate, isTranslated, big }) {
   const distance = 144 * translate + 15 * translate;
   return (
      <img
         src={getPoster(img, "xl", true)}
         alt="poster2"
         className={`rounded-md object-cover transform filter shadow-md ${
            isTranslated ? "duration-1000" : ""
         } ${
            big
               ? "absolute ease-in-out w-full h-full filter brightness-50"
               : `absolute w-36 h-48 mb-28 ml-125`
         }`}
         style={big ? {} : { transform: `translateX(${distance}px)` }}
      />
   );
}
