import { getPoster } from "../../../utils/getPosters";
import { motion } from "framer-motion";
export default function CardPoster({ posterPath, toggleInfo }) {
   return (
      <motion.div
         className="h-full cursor-pointer bg-black"
         onClick={toggleInfo}
      >
         <img
            className="h-full w-full"
            src={getPoster(posterPath, "md", true)}
            alt="poster"
         />
      </motion.div>
   );
}
