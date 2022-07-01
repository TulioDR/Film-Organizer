import { AnimatePresence, motion } from "framer-motion";

export default function LogAdvice({ sidebarExtended }) {
   return (
      <div
         className={`mt-2 ml-6 rounded-md duration-300 bg-blue-400 dark:bg-blue-600 px-3 grid place-content-center ${
            sidebarExtended ? "h-20" : "h-11"
         }`}
      >
         <AnimatePresence>
            {sidebarExtended ? (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="text-center"
               >
                  Log in to create or see your Lists
               </motion.div>
            ) : (
               <div className="material-icons text-2xl">priority_high</div>
            )}
         </AnimatePresence>
      </div>
   );
}
