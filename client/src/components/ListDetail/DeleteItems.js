import { AnimatePresence, motion } from "framer-motion";

export default function DeleteItems({
   itemsToDelete,
   openModal,
   cancelBtn,
   showDeleteButtons,
   openDeleteButtons,
   closeDeleteButtons,
}) {
   return (
      <section
         className={`fixed flex bottom-6 right-6 z-30 rounded-md overflow-hidden`}
      >
         <AnimatePresence>
            {showDeleteButtons && (
               <motion.button
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.2 }}
                  ref={cancelBtn}
                  className={`focus:outline-none outline-none h-11 w-11 z-0 bg-red-900`}
                  onClick={closeDeleteButtons}
               >
                  <span className="material-icons text-white text-3xl">
                     close
                  </span>
               </motion.button>
            )}
         </AnimatePresence>
         <button
            className={`focus:outline-none h-11 w-11 text-white bg-red-900 z-50 ${
               showDeleteButtons
                  ? itemsToDelete.length > 0
                     ? ""
                     : "pointer-events-none text-gray-400"
                  : ""
            } `}
            onClick={showDeleteButtons ? openModal : openDeleteButtons}
            // onClick={openDelete ? deleteItems : openBox}
         >
            <span className="material-icons text-3xl">delete</span>
         </button>
      </section>
   );
}
