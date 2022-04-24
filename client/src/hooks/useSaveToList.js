import { useState } from "react";

export default function useSaveToList() {
   const [showSaveToListModal, setShowSaveToListModal] = useState(false);

   const [currentData, setCurrentData] = useState({
      item_id: null,
      item_type: "",
      item_title: "",
      item_poster: "",
   });

   const openSaveToListModal = (id, mediaType, title, posterPath) => {
      setCurrentData({
         item_id: id,
         item_type: mediaType,
         item_title: title,
         item_poster: posterPath,
      });
      setShowSaveToListModal(true);
   };
   const closeSaveToListModal = () => {
      setShowSaveToListModal(false);
   };

   return [
      showSaveToListModal,
      currentData,
      openSaveToListModal,
      closeSaveToListModal,
   ];
}
