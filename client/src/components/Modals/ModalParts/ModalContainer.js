import { motion, AnimatePresence } from "framer-motion";

import { useRef } from "react";
const backdrop = {
   visible: { opacity: 1 },
   hidden: { opacity: 0 },
};

const modal = {
   hidden: { y: "50%", opacity: 0 },
   visible: {
      y: "0",
      opacity: 1,
   },
};

export default function ModalContainer({ isModalOpen, closeModal, children }) {
   const modalBackdrop = useRef(null);
   const closeOnClick = (e) => {
      if (e.target === modalBackdrop.current) closeModal();
   };
   return (
      <AnimatePresence exitBeforeEnter>
         {isModalOpen && (
            <motion.div
               className="fixed z-50 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
               variants={backdrop}
               initial="hidden"
               animate="visible"
               exit="hidden"
               onClick={closeOnClick}
               ref={modalBackdrop}
            >
               <motion.div
                  className="bg-gray-200 dark:bg-gray-dark max-w-full rounded-xl p-6 flex flex-col"
                  variants={modal}
               >
                  {children}
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
