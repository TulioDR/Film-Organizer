export default function DeleteButton({ id, name, openDeleteModal }) {
   return (
      <button
         onClick={() => openDeleteModal(id, name)}
         className="hidden h-full w-10 left-2 focus:outline-none bg-red-800 hover:bg-red-900 md:flex items-center justify-center absolute transform -translate-x-12 duration-200 group-hover:translate-x-0"
      >
         <span className="material-icons">delete</span>
      </button>
   );
}
