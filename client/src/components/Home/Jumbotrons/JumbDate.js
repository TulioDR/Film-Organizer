import { chageDateFormat } from "../../../utils/getDate";
import { AnimatePresence, motion } from "framer-motion";

export default function JumbDate({ isAnimating, date, isLoading }) {
   return (
      <AnimatePresence>
         {!isLoading && (
            <motion.p
               initial={{ y: "100%", opacity: 0 }}
               animate={{
                  y: isAnimating ? "100%" : 0,
                  opacity: isAnimating ? 0 : 1,
               }}
               transition={{
                  ease: "easeInOut",
                  duration: 0.2,
                  delay: isAnimating ? 0 : 0.3,
               }}
               className="text-sm mt-2"
            >
               {chageDateFormat(date)}
            </motion.p>
         )}
      </AnimatePresence>
   );
}
