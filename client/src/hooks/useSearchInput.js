import { useState } from "react";
import { fetchFounded } from "../utils/getFoundedMedia";

export default function useSearchInput({ closeMobileSearch }) {
   const [inputValue, setInputValue] = useState("");
   const [openFounded, setOpenFounded] = useState(false);
   const [founded, setFounded] = useState([]);
   const [showDeleteTextBtn, setShowDeleteTextBtn] = useState(false);

   const handleInputChange = async (e, isMovie, mobile) => {
      const val = e.target.value;
      setInputValue(val);
      if (val.length) {
         const data = await fetchFounded(val, isMovie, mobile);
         setFounded(data);
         setShowDeleteTextBtn(true);
         if (data.length > 0) setOpenFounded(true);
         else setOpenFounded(false);
      } else {
         setFounded([]);
         setShowDeleteTextBtn(false);
         setOpenFounded(false);
      }
   };
   const clearInput = () => {
      setInputValue("");
      setShowDeleteTextBtn(false);
      setFounded([]);
      setOpenFounded(false);
   };

   const handleInputFocus = () => {
      if (founded.length) setOpenFounded(true);
   };
   const handleInputBlur = (e) => {
      const target = e.relatedTarget;
      const foundedList = target && target.className.includes("nav-founded");
      if (!foundedList) setOpenFounded(false);
   };

   const changeFoundedType = async (isMovie) => {
      if (inputValue.length) {
         const data = await fetchFounded(inputValue, isMovie);
         setFounded(data);
      }
   };
   const closeSearch = (mobile) => {
      if (mobile) closeMobileSearch();
      setOpenFounded(false);
   };

   return [
      inputValue,
      openFounded,
      founded,
      showDeleteTextBtn,
      handleInputChange,
      clearInput,
      handleInputFocus,
      handleInputBlur,
      closeSearch,
      changeFoundedType,
   ];
}
