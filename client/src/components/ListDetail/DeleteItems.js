export default function DeleteItems({
   dispatch,
   itemsToDelete,
   items,
   cancelBtn,
   openDelete,
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
      <section className={`fixed bottom-6 right-6 h-11 w-11 z-30`}>
         <button
            ref={cancelBtn}
            className={`focus:outline-none outline-none w-11 h-full z-0 bg-red-900 rounded-l-md duration-200 absolute bottom-0 right-11 transform ${
               openDelete
                  ? ""
                  : "translate-x-full pointer-events-none opacity-0"
            }`}
            onClick={cancelDelete}
         >
            <span className="material-icons text-white text-3xl">close</span>
         </button>
         <button
            className={`focus:outline-none w-full h-full text-white bg-red-900 rounded-r-md z-50 ${
               openDelete
                  ? itemsToDelete.length > 0
                     ? ""
                     : "pointer-events-none text-gray-400"
                  : "rounded-l-md"
            } `}
            onClick={openDelete ? deleteItems : openBox}
         >
            <span className="material-icons text-3xl">delete</span>
         </button>
      </section>
   );
}
