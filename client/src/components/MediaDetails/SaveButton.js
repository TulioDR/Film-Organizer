import { motion } from "framer-motion";

export default function SaveButton({ onClick, isSaved }) {
   return (
      <motion.button
         initial={{ x: -100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.3 }}
         onClick={onClick}
         className="text-white absolute -right-6 bottom-10 h-12 w-12 hover:w-24 duration-300 p-2 group bg-blue-600 flex items-center px-2 py-3 overflow-hidden focus:outline-none"
      >
         <span className="material-icons text-3xl h-8 w-8 grid place-content-center">
            {isSaved ? "bookmark" : "bookmark_border"}
         </span>
         <span className="duration-300 text-lg font-medium pr-1 transform translate-x-6 group-hover:translate-x-1 opacity-0 group-hover:opacity-100">
            {isSaved ? "Saved" : "Save"}
         </span>
      </motion.button>
   );
}
