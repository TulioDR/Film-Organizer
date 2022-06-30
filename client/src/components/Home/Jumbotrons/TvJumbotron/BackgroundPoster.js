import { getPoster } from "../../../../utils/getPosters";
import { AnimatePresence, motion } from "framer-motion";

export default function BackgroundPoster({ alt, src, isAnimating, isLoading }) {
   return (
      <AnimatePresence>
         {!isLoading && (
            <motion.img
               initial={{ filter: "brightness(0)" }}
               animate={{
                  filter: isAnimating ? "brightness(0)" : "brightness(0.4)",
               }}
               transition={{ duration: 0.3 }}
               src={getPoster(src, "lg", false)}
               alt={alt}
               className={`object-cover h-full w-full absolute top-0 left-0 `}
            />
         )}
      </AnimatePresence>
   );
}
