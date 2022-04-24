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
         className="hidden md:flex flex-col pr-4 md:pr-0 md:w-1/2 h-8 relative bottom-2 md:bottom-0"
      >
         <div className="w-full flex h-full">
            <div className="relative w-full">
               <InputText
                  value={inputValue}
                  isMovie={isMovie}
                  handleInputFocus={handleInputFocus}
                  handleInputChange={handleInputChange}
                  onBlur={closeOnBlur}
               />
               {showDeleteTextBtn && <ClearTextBtn onClick={clearInput} />}
            </div>
            <SearchBtn />
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
