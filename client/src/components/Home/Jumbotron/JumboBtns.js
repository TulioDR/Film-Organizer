export default function JumboBtns({ isTranslated, getInfo }) {
   return (
      <div
         className={`flex space-x-2 mt-5 transform transition-all duration-300 ${
            isTranslated ? "translate-y-full opacity-0" : "delay-500"
         }`}
      >
         <button className="rounded-full border border-white h-10 w-10 grid place-content-center">
            <span className="material-icons">bookmark</span>
         </button>
         <button onClick={getInfo} className="rounded-md bg-blue-500 h-10 px-3">
            More Info
         </button>
      </div>
   );
}
