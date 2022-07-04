import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

import { AnimatePresence, motion } from "framer-motion";

export default function SideForm({ openModal }) {
   const { sidebarExtended } = useSidebarExtendedContext();
   return (
      <div
         onClick={openModal}
         className="my-1 bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer grid place-content-center duration-200 h-11 ml-6 rounded-md"
      >
         <div className="flex items-center space-x-2">
            <AnimatePresence>
               {sidebarExtended && (
                  <motion.span
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.3 }}
                  >
                     Create a list
                  </motion.span>
               )}
            </AnimatePresence>
            <span className="material-icons text-2xl">add</span>
         </div>
      </div>
   );
}
