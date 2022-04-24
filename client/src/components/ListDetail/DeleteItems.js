export default function DeleteItems({
   dispatch,
   itemsToDelete,
   openDelete,
   items,
   cancelBtn,
}) {
   const openBox = () => {
      dispatch({ type: "OPEN_DELETE" });
   };

   const cancelDelete = () => {
      dispatch({ type: "CLOSE_DELETE", payload: items });
   };

   const deleteItems = () => {
      dispatch({ type: "OPEN_MODAL" });
   };

   return (
      <section
         className={`fixed bottom-0 right-0 text-white transform duration-300 hover:translate-x-0 ${
            openDelete
               ? "translate-x-0 translate-y-0"
               : "translate-x-32 translate-y-1/2"
         }`}
      >
         <div onClick={openBox} className="h-11 flex cursor-pointer">
            <span className="material-icons w-11 h-full bg-red-900 text-3xl flex items-center justify-center rounded-tl-md">
               delete
            </span>
            <span className="text w-32 bg-black flex-grow border-b-4 border-red-900 flex items-center justify-center text-lg">
               Delete Items
            </span>
         </div>
         <div className="h-11 bg-black border-4 border-t-0 border-red-900 flex items-center justify-between px-2 rounded-bl-md">
            <button
               ref={cancelBtn}
               onClick={cancelDelete}
               className="px-2 border-b-2 border-transparent hover:border-gray-500 focus:outline-none"
            >
               CANCEL
            </button>
            <button
               onClick={deleteItems}
               className={`px-2 rounded-md border-b-2 border-transparent focus:outline-none ${
                  itemsToDelete.length > 0
                     ? "hover:bg-red-900"
                     : "pointer-events-none text-gray-500"
               }`}
            >
               DELETE
            </button>
         </div>
      </section>
   );
}
