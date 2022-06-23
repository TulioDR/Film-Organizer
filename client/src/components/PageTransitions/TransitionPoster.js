import { AnimatePresence, motion } from "framer-motion";
import { getPoster } from "../../utils/getPosters";

export default function TransitionPoster({ selectedId, selectedImg }) {
   return (
      <AnimatePresence>
         {selectedId && (
            <motion.div
               layoutId={selectedId}
               className="fixed z-30 top-20 left-66"
               style={{ height: "calc(100vh - 7.5rem)" }}
               transition={{ duration: 0.4 }}
            >
               <motion.img
                  src={getPoster(selectedImg, "md", true)}
                  className="rounded-lg h-full"
               />
            </motion.div>
         )}
      </AnimatePresence>
   );
}
