export default function BackBtn({ onClick }) {
   return (
      <button
         type="button"
         onClick={onClick}
         className="w-12 h-full flex items-center justify-center focus:outline-none"
      >
         <span className="material-icons text-3xl">arrow_back</span>
      </button>
   );
}
