import { motion, AnimatePresence } from "framer-motion";
import { getPoster } from "../../utils/getPosters";
export default function MediaDetailsTrPoster({ selectedImg }) {
   return (
      <AnimatePresence>
         {selectedImg && (
            <motion.div
               className="fixed z-30 top-20 left-66 overflow-hidden"
               style={{ height: "calc(100vh - 7.5rem)" }}
            >
               <motion.img
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  src={getPoster(selectedImg, "md", true)}
                  className="rounded-lg h-full"
               />
            </motion.div>
         )}
      </AnimatePresence>
   );
}
