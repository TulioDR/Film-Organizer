export default function InputText({
   value,
   isMovie,
   handleInputFocus,
   handleInputChange,
   onBlur,
   searchInput,
}) {
   return (
      <input
         ref={searchInput}
         type="text"
         spellCheck="false"
         value={value}
         onChange={(e) => handleInputChange(e)}
         placeholder={`Search ${isMovie ? "Movies" : "TV Series"}`}
         className="h-full w-full pr-11 outline-none bg-transparent"
         onFocus={handleInputFocus}
         onBlur={onBlur}
      />
   );
}
