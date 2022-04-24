import { motion, AnimatePresence } from "framer-motion";

import { useRef } from "react";
const backdrop = {
   visible: { opacity: 1 },
   hidden: { opacity: 0 },
};

const modal = {
   hidden: { y: "-100vh", opacity: 0 },
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
               className="fixed top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-50 flex justify-center items-center"
               variants={backdrop}
               initial="hidden"
               animate="visible"
               exit="hidden"
               onClick={closeOnClick}
               ref={modalBackdrop}
            >
               <motion.div
                  className="bg-white dark:bg-gray max-w-full max-h-4/5 sm:max-w-4/5 rounded-xl p-6 flex flex-col"
                  variants={modal}
               >
                  {children}
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
