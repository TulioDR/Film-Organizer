export default function SwapMovieBtn({ onClick, icon }) {
   return (
      <button
         onClick={onClick}
         className="border-2 border-white text-white rounded-full w-14 h-14 focus:outline-none grid place-content-center"
      >
         <span className="material-icons">{icon}</span>
      </button>
   );
}
