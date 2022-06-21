import { motion } from "framer-motion";
export default function CardContainer({ selectedId, id, children }) {
   // const animationTypes = ["up-right", "up-left", "down-right", "down-left"];
   // function randomIntFromInterval(min, max) {
   //    return Math.floor(Math.random() * (max - min + 1) + min);
   // }
   // const animation = animationTypes[randomIntFromInterval(0, 3)];
   const animate = selectedId && id !== selectedId;
   return (
      <motion.article
         layoutId={id}
         // data-aos={`fade-${animation}`}
         className={`w-full aspect-w-2 aspect-h-3 relative overflow-hidden rounded-xl shadow-material transform ${
            animate ? "opacity-0 translate-y-full duration-500" : ""
         }`}
      >
         {children}
      </motion.article>
   );
}
