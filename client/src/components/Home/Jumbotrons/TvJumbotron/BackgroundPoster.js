import { AnimatePresence, motion } from "framer-motion";
import { getPoster } from "../../../../utils/getPosters";

export default function BackgroundPoster({ alt, src, isAnimating }) {
   return (
      <AnimatePresence>
         <motion.img
            initial={{
               x: "-100%",
            }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            src={getPoster(src, "lg", false)}
            alt={alt}
            className={`object-cover h-full w-full filter absolute top-0 left-0 duration-700 ${
               isAnimating ? "brightness-0" : "brightness-40"
            }`}
         />
      </AnimatePresence>
   );
}
