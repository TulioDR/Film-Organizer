import InputText from "../SearchBar/InputText";
import FoundedMedia from "../SearchBar/FoundedMedia";
import ClearTextBtn from "../SearchBar/ClearTextBtn";
import BackBtn from "../SearchBar/BackBtn";
import useValueContext from "../../../context/ValueContext";

import MobileSearchBtn from "./MobileSearchBtn";

export default function MobileSearch() {
   const {
      inputValue,
      founded,
      handleInputChange,
      handleInputFocus,
      clearInput,
      showDeleteTextBtn,
      getMedia,
      handleSubmit,
      isMovie,
      showMobileSearch,
      openMobileSearch,
      closeMobileSearch,
   } = useValueContext();

   const mobile = true;
   return (
      <div>
         <MobileSearchBtn onClick={openMobileSearch} />
         {showMobileSearch && (
            <form
               onSubmit={(e) => handleSubmit(e, closeMobileSearch, mobile)}
               className="w-full h-screen bg-white dark:bg-gray-dark absolute top-0 left-0 z-50"
            >
               <div className="flex items-center h-10 p-1 fixed w-full bg-gray-dark">
                  <BackBtn onClick={closeMobileSearch} />
                  <div className="relative w-full h-full">
                     <InputText
                        value={inputValue}
                        isMovie={isMovie}
                        handleInputFocus={handleInputFocus}
                        handleInputChange={handleInputChange}
                        mobile={true}
                     />
                     {showDeleteTextBtn && (
                        <ClearTextBtn onClick={clearInput} />
                     )}
                  </div>
               </div>
               <ul className="overflow-y-auto pt-10 w-full h-full">
                  {founded.map((media, index) => (
                     <FoundedMedia
                        key={index}
                        media={media}
                        isMovie={isMovie}
                        getMedia={getMedia}
                        mobile={true}
                     />
                  ))}
               </ul>
            </form>
         )}
      </div>
   );
}
