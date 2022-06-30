import { AnimatePresence, motion } from "framer-motion";

export default function JumbotronTitle({ children, isAnimating, isLoading }) {
   return (
      <AnimatePresence>
         {!isLoading && (
            <motion.h1
               initial={{ y: "100%", opacity: 0 }}
               animate={{
                  y: isAnimating ? "100%" : 0,
                  opacity: isAnimating ? 0 : 1,
               }}
               transition={{
                  ease: "easeInOut",
                  duration: 0.3,
                  delay: 0,
               }}
               className="text-5xl 2xl:text-6xl font-medium "
            >
               {children}
            </motion.h1>
         )}
      </AnimatePresence>
   );
}
