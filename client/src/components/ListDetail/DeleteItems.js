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
      // <section
      //    className={`fixed bottom-0 right-0 text-white transform duration-300 hover:translate-x-0 ${
      //       openDelete
      //          ? "translate-x-0 translate-y-0"
      //          : "translate-x-32 translate-y-1/2"
      //    }`}
      // >
      //    <div onClick={openBox} className="h-11 flex cursor-pointer">
      //       <span className="material-icons w-11 h-full bg-red-900 text-3xl flex items-center justify-center rounded-tl-md">
      //          delete
      //       </span>
      //       <span className="text w-32 bg-black flex-grow border-b-4 border-red-900 flex items-center justify-center text-lg">
      //          Delete Items
      //       </span>
      //    </div>
      //    <div className="h-11 bg-black border-4 border-t-0 border-red-900 flex items-center justify-between px-2 rounded-bl-md">
      //       <button
      //          ref={cancelBtn}
      //          onClick={cancelDelete}
      //          className="px-2 border-b-2 border-transparent hover:border-gray-500 focus:outline-none"
      //       >
      //          CANCEL
      //       </button>
      //       <button
      //          onClick={deleteItems}
      //          className={`px-2 rounded-md border-b-2 border-transparent focus:outline-none ${
      //             itemsToDelete.length > 0
      //                ? "hover:bg-red-900"
      //                : "pointer-events-none text-gray-500"
      //          }`}
      //       >
      //          DELETE
      //       </button>
      //    </div>
      // </section>
   );
}
