export default function NextBtn({ onClick, icon, isAnimating }) {
   return (
      <button
         onClick={onClick}
         className={`z-40 border-2 border-white text-white rounded-full w-14 h-14 focus:outline-none grid place-content-center duration-500 ${
            isAnimating ? "pointer-events-none opacity-50" : "opacity-100"
         }`}
      >
         <span className="material-icons">{icon}</span>
      </button>
   );
}
