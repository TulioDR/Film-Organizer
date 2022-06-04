export default function DeleteButton({ id, name, openDeleteModal }) {
   return (
      <button
         onClick={() => openDeleteModal(id, name)}
         className="hidden md:flex items-center justify-center z-10 absolute top-0 h-full w-10 ml-8 focus:outline-none bg-red-800 hover:bg-red-900 transform -translate-x-20 duration-200 group-hover:translate-x-0"
      >
         <span className="material-icons">delete</span>
      </button>
   );
}
