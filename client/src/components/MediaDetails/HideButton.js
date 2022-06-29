export default function HideButton({ onClick, hidePoster }) {
   return (
      <button
         onClick={onClick}
         className="absolute -right-6 top-10 h-12 w-12 bg-blue-500 flex items-center justify-center"
      >
         <span
            className={`material-icons transform text-white text-3xl font-medium duration-500 ${
               hidePoster ? "rotate-180" : ""
            }`}
         >
            arrow_back
         </span>
      </button>
   );
}
