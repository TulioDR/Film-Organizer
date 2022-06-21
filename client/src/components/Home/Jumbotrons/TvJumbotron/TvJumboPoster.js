import { motion } from "framer-motion";
import { getPoster } from "../../../../utils/getPosters";

export default function TvJumboPoster({ show, index, isFoward }) {
   const distance = index * 128 + index * 20 - 128 - 20 + 40;
   const firstOne = index === 0;
   const lastOne = index === 19;
   return (
      <motion.img
         layout
         src={getPoster(show.poster_path, "md", true)}
         alt={show.name}
         animate={
            firstOne
               ? {
                    width: 320,
                    height: "100%",
                    top: 0,
                    left: 0,
                    x: 0,
                    borderRadius: "0px",
                 }
               : { x: distance, borderRadius: "6px" }
         }
         transition={
            isFoward
               ? {
                    duration: lastOne ? 0 : 0.9,
                    delay: lastOne ? 1 : index * 0.07,
                 }
               : { duration: firstOne ? 0 : 0.9 }
         }
         className={`absolute h-48 w-32 rounded-lg object-cover bottom-5 left-80 ${
            lastOne ? "" : "z-10"
         } `}
      />
   );
}
