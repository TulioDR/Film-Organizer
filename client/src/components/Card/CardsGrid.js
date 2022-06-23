import useSidebarExtendedContext from "../../context/SidebarExtendedContext";
import { motion } from "framer-motion";
export default function CardsGrid({ children }) {
   const { sidebarExtended } = useSidebarExtendedContext();
   return (
      <motion.div
         layout
         exit={{ y: 200, opacity: 0 }}
         className={`grid gap-5 sm:grid-cols-2 ${
            sidebarExtended
               ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
               : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
         } `}
      >
         {children}
      </motion.div>
   );
}
