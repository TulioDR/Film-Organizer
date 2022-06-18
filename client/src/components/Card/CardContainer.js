import { motion } from "framer-motion";

export default function CardContainer({ id, children }) {
   const animationTypes = ["up-right", "up-left", "down-right", "down-left"];
   function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
   }
   const animation = animationTypes[randomIntFromInterval(0, 3)];
   return (
      <motion.article
         layoutId={id}
         data-aos={`fade-${animation}`}
         className="w-full aspect-w-2 aspect-h-3 relative overflow-hidden rounded-lg shadow-material"
      >
         {children}
      </motion.article>
   );
}
