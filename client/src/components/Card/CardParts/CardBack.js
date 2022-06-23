import { motion, AnimatePresence } from "framer-motion";

export default function CardBack({ showInfo, children }) {
   return (
      <AnimatePresence>
         {showInfo && (
            <motion.div
               initial={{ y: "100%" }}
               animate={{ y: 0 }}
               exit={{ y: "100%" }}
               transition={{ duration: 0.3 }}
               className="absolute bg-gray-200 dark:bg-gray-dark top-0 h-full flex flex-col"
            >
               {children}
            </motion.div>
         )}
      </AnimatePresence>
   );
}
