import InputText from "./SearchBar/InputText";
import FoundedMedia from "./SearchBar/FoundedMedia";
import ClearTextBtn from "./SearchBar/ClearTextBtn";
// import SearchBtn from "./SearchBar/SearchBtn";
import useValueContext from "../../context/ValueContext";

export default function NavSearch() {
   const {
      openFounded,
      inputValue,
      founded,
      handleInputChange,
      handleInputFocus,
      closeOnBlur,
      clearInput,
      showDeleteTextBtn,
      getMedia,
      handleSubmit,
      isMovie,
   } = useValueContext();

   return (
      <form
         onSubmit={handleSubmit}
         className="hidden md:flex flex-col pr-4 md:pr-0 h-10 relative bottom-2 md:bottom-0"
      >
         <div className="w-full flex h-10">
            <div className="relative flex items-center bg-white dark:bg-gray-200 rounded-full h-full w-80 shadow-md">
               <span className="material-icons h-full w-14 flex items-center justify-center text-black">
                  search
               </span>
               <InputText
                  value={inputValue}
                  isMovie={isMovie}
                  handleInputFocus={handleInputFocus}
                  handleInputChange={handleInputChange}
                  onBlur={closeOnBlur}
               />
               {showDeleteTextBtn && <ClearTextBtn onClick={clearInput} />}
            </div>
            <button
               className="ml-2 h-10 w-10 rounded-md bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 text-white grid place-content-center shadow-md focus:outline-none"
               type="button"
            >
               <span className="material-icons">filter_list</span>
            </button>
         </div>

         {openFounded && (
            <ul
               tabIndex={0}
               className="nav-founded absolute top-full transform translate-y-1 shadow-material bg-gray-200 dark:bg-gray w-full py-3 mt-3 rounded-md"
            >
               {founded.map((media, index) => (
                  <FoundedMedia
                     key={index}
                     media={media}
                     isMovie={isMovie}
                     getMedia={getMedia}
                  />
               ))}
            </ul>
         )}
      </form>
   );
}
