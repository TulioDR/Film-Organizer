export default function MobileSearchBtn({ onClick }) {
   return (
      <button
         onClick={onClick}
         className="flex justify-center items-center mr-2 cursor-pointer md:hidden focus:outline-none"
      >
         <span className="material-icons text-3xl">search</span>
      </button>
   );
}
