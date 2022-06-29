import { motion } from "framer-motion";

export default function AnimatedButton({ children, onClick }) {
   const delayedAction = () => {
      setTimeout(onClick, 150);
   };
   return (
      <motion.button
         whileTap={{ scale: 0.9 }}
         onClick={delayedAction}
         className="px-8 py-3 mt-4 mx-auto bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 shadow-lg rounded-lg flex items-center"
      >
         {children}
      </motion.button>
   );
}
