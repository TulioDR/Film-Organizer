import { AnimatePresence, motion } from "framer-motion";

export default function JumboBtnsContainer({
   isAnimating,
   isLoading,
   children,
}) {
   return (
      <AnimatePresence>
         {!isLoading && (
            <motion.div
               initial={{ y: "100%", opacity: 0 }}
               animate={{
                  y: isAnimating ? "100%" : 0,
                  opacity: isAnimating ? 0 : 1,
               }}
               transition={{
                  ease: "easeInOut",
                  duration: 0.3,
                  delay: isAnimating ? 0 : 0.5,
               }}
               className="flex items-center space-x-4 mt-5"
            >
               {children}
            </motion.div>
         )}
      </AnimatePresence>
   );
}
