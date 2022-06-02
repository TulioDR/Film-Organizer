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
         className="h-full flex-grow pr-11 outline-none bg-transparent"
         onFocus={handleInputFocus}
         onBlur={onBlur}
      />
   );
}
