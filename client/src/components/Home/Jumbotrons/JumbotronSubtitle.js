import { motion } from "framer-motion";

export default function JumbotronSubtitle({ children }) {
   return (
      <motion.h1
         initial={{ y: "-100" }}
         animate={{ y: 0 }}
         transition={{ duration: 0.6 }}
         className="text-2xl absolute top-4 left-10 font-medium z-30"
      >
         {children}
      </motion.h1>
   );
}
