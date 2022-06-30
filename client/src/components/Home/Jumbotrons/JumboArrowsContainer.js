import { AnimatePresence, motion } from "framer-motion";

export default function JumboArrowsContainer({ children, isLoading, movie }) {
   return (
      <AnimatePresence>
         {!isLoading && (
            <motion.div
               initial={{ y: movie ? "100%" : "-100%", opacity: "0" }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.4 }}
               className={`flex space-x-2 z-30 items-end ${
                  movie ? "my-5" : ""
               }`}
            >
               {children}
            </motion.div>
         )}
      </AnimatePresence>
   );
}
