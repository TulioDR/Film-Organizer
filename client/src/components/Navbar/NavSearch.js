import InputText from "./SearchBar/InputText";
import FoundedMedia from "./SearchBar/FoundedMedia";
import ClearTextBtn from "./SearchBar/ClearTextBtn";
import SearchBtn from "./SearchBar/SearchBtn";
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
         className="hidden md:flex flex-col pr-4 md:pr-0 h-8 relative bottom-2 md:bottom-0"
      >
         <div className="w-full flex h-full">
            <div className="relative">
               <InputText
                  value={inputValue}
                  isMovie={isMovie}
                  handleInputFocus={handleInputFocus}
                  handleInputChange={handleInputChange}
                  onBlur={closeOnBlur}
               />
               {showDeleteTextBtn && <ClearTextBtn onClick={clearInput} />}
            </div>
            {/* <SearchBtn /> */}
            <button className="ml-2 h-10 w-10 rounded-md bg-blue-400 text-white grid place-content-center shadow-md">
               <span className="material-icons">filter_list</span>
            </button>
         </div>

         {openFounded && (
            <ul
               tabIndex={0}
               className="nav-founded absolute top-full transform -translate-y-1 shadow-material bg-gray-200 dark:bg-gray w-full py-3 mt-3 rounded-md"
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
