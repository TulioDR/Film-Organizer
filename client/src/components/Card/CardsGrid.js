import useSidebarExtendedContext from "../../context/SidebarExtendedContext";
import { motion } from "framer-motion";
export default function CardsGrid({ children, isLoading }) {
   const { sidebarExtended } = useSidebarExtendedContext();
   return (
      <motion.div
         layout={!isLoading}
         exit={{ y: 200, opacity: 0 }}
         className={`grid gap-5 sm:grid-cols-2 md:grid-cols-3 ${
            sidebarExtended
               ? "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
               : "lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
         } `}
      >
         {children}
      </motion.div>
   );
}
