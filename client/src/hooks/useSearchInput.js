import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchFounded } from "../utils/getFoundedMedia";

export default function useSearchInput({ isMovie }) {
   const [inputValue, setInputValue] = useState("");
   const [openFounded, setOpenFounded] = useState(false);
   const [founded, setFounded] = useState([]);
   const [showDeleteTextBtn, setShowDeleteTextBtn] = useState(false);

   const searchInput = useRef(null);

   const handleInputChange = (e) => {
      setInputValue(e.target.value);
   };
   useEffect(() => {
      const getFoundedMedia = async () => {
         if (inputValue.length > 0) {
            const data = await fetchFounded(inputValue, isMovie);
            setFounded(data);
            searchInput.current.focus();
            setShowDeleteTextBtn(true);
            if (data.length > 0) setOpenFounded(true);
            else setOpenFounded(false);
         } else {
            setFounded([]);
            setShowDeleteTextBtn(false);
            setOpenFounded(false);
         }
      };
      getFoundedMedia();
   }, [inputValue, isMovie]);

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

   const history = useHistory();
   const getMedia = (id) => {
      const mediaType = isMovie ? "movie" : "tv";
      history.push(`/media-details/${mediaType}/${id}`);
      setOpenFounded(false);
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      const mediaType = isMovie ? "movie" : "tv";
      history.push(`/search/search/${mediaType}/${inputValue}`);
      setOpenFounded(false);
   };

   return {
      inputValue,
      openFounded,
      founded,
      showDeleteTextBtn,
      handleInputChange,
      handleInputFocus,
      handleInputBlur,
      clearInput,
      getMedia,
      handleSubmit,
      setOpenFounded,
      searchInput,
   };
}
