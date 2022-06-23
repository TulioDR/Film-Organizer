import { motion } from "framer-motion";
export default function CardContainer({ selectedId, layoutId, children }) {
   const animate = selectedId && layoutId !== selectedId;
   return (
      <motion.article
         layoutId={layoutId}
         className={`w-full aspect-w-2 aspect-h-3 relative overflow-hidden rounded-xl shadow-material transform ${
            animate ? "opacity-0 translate-y-full duration-500" : ""
         }`}
      >
         {children}
      </motion.article>
   );
}
