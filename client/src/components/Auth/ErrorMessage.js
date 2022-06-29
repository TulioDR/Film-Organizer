import { motion } from "framer-motion";

export default function ErrorMessage({ errorMessage }) {
   return (
      <motion.div
         initial={{ y: "100%" }}
         animate={{ y: 0 }}
         exit={{ y: "100%" }}
         transition={{ duration: 0.3 }}
         className="absolute bottom-4 left-4 bg-red-900 text-white p-3 z-20 rounded-md"
      >
         {errorMessage}
      </motion.div>
   );
}
