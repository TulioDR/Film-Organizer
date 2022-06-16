import { getPoster } from "../../../utils/getPosters";
import { motion } from "framer-motion";

export default function TrNewJumboImg({ movie, index, isFoward }) {
   const distance = index * 144 + index * 15 - 144 - 15;
   const firstOne = index === 0;
   const lastOne = index === 19;

   const backgroundImage = {
      width: "100%",
      height: "100%",
      bottom: 0,
      left: 0,
      x: 0,
      filter: "brightness(0.4)",
   };
   return (
      <motion.img
         layout
         initial={firstOne ? {} : { x: distance + 1000 }}
         animate={
            firstOne
               ? backgroundImage
               : {
                    x: distance,
                 }
         }
         transition={
            isFoward
               ? {
                    duration: lastOne ? 0 : 0.9,
                    delay: lastOne ? 1 : index * 0.07,
                 }
               : { duration: firstOne ? 0 : 0.9 }
         }
         src={getPoster(movie?.backdrop_path, "xl", true)}
         alt={movie?.title}
         className={`object-cover absolute rounded-md w-36 h-48 bottom-24 left-125 2xl:left-180 ${
            lastOne ? "" : "z-10"
         }`}
      />
   );
}
