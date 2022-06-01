import { useState } from "react";

export default function DeleteItems({ dispatch, itemsToDelete, items }) {
   const [isOpen, setIsOpen] = useState(false);

   const openBox = () => {
      dispatch({ type: "OPEN_DELETE" });
      setIsOpen(true);
   };

   const cancelDelete = () => {
      dispatch({ type: "CLOSE_DELETE", payload: items });
      setIsOpen(false);
   };

   const deleteItems = () => {
      dispatch({ type: "OPEN_MODAL" });
   };

   return (
      <section className={`fixed bottom-6 right-6 h-11 w-11 z-30`}>
         <button
            className={`focus:outline-none outline-none w-11 h-full z-0 bg-red-900 rounded-l-md duration-200 absolute bottom-0 right-11 transform ${
               isOpen ? "" : "translate-x-full pointer-events-none opacity-0"
            }`}
            onClick={cancelDelete}
         >
            <span className="material-icons text-white text-3xl">close</span>
         </button>
         <button
            className={`focus:outline-none w-full h-full bg-red-900 rounded-r-md z-50 ${
               isOpen
                  ? itemsToDelete.length > 0
                     ? "text-white"
                     : "pointer-events-none text-gray-400"
                  : "rounded-l-md"
            } `}
            onClick={isOpen ? deleteItems : openBox}
         >
            <span className="material-icons text-3xl">delete</span>
         </button>
      </section>
   );
}
