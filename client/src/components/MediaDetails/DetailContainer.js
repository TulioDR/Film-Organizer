import { motion } from "framer-motion";

export default function DetailContainer({ children }) {
   return (
      <motion.div
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 100 }}
         transition={{ duration: 0.3 }}
         className="pt-5"
      >
         {children}
      </motion.div>
   );
}
