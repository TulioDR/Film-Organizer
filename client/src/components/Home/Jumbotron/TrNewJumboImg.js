import { getPoster } from "../../../utils/getPosters";
import { motion } from "framer-motion";

export default function TrNewJumboImg({ movie, index, isFoward }) {
   const distance = index * 144 + index * 15;
   const firstOne = index === 0;
   const lastOne = index === 19;
   return (
      <motion.img
         layout
         initial={
            firstOne
               ? {
                    width: "100%",
                    height: "100%",
                    left: 0,
                    bottom: 0,
                    x: 0,
                    filter: "brightness(0.4)",
                 }
               : {
                    width: 144,
                    height: 192,
                    bottom: 96,
                    left: 500 - 144 - 15,
                    x: distance + 1000,
                 }
         }
         animate={
            firstOne
               ? {
                    width: "100%",
                    height: "100%",
                    bottom: 0,
                    left: 0,
                    x: 0,
                    filter: "brightness(0.4)",
                 }
               : {
                    width: 144,
                    height: 192,
                    bottom: 96,
                    left: 500 - 144 - 15,
                    x: distance,
                 }
         }
         transition={
            isFoward
               ? {
                    duration: lastOne ? 0 : 1,
                    delay: lastOne ? 1 : index * 0.07,
                 }
               : { duration: firstOne ? 0 : 1 }
         }
         src={getPoster(movie?.backdrop_path, "xl", true)}
         alt={movie?.title}
         className={`cursor-pointer object-cover absolute rounded-md ${
            lastOne ? "" : "z-10"
         }`}
      />
   );
}
