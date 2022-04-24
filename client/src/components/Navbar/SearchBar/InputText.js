export default function InputText({
   value,
   isMovie,
   handleInputFocus,
   handleInputChange,
   onBlur,
   mobile,
}) {
   return (
      <input
         type="text"
         spellCheck="false"
         value={value}
         onChange={(e) => handleInputChange(e, isMovie, mobile)}
         placeholder={`Search ${isMovie ? "Movies" : "TV Series"}`}
         className="bg-gray-200 dark:bg-black text-black dark:text-white w-full h-full pl-2 outline-none"
         onFocus={handleInputFocus}
         onBlur={onBlur}
      />
   );
}
