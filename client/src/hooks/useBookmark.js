import { useEffect, useState } from "react";

export default function useBookmark(media_id, media_type, lists) {
   const [isSaved, setIsSaved] = useState(false);

   useEffect(() => {
      const checkSavedStatus = () => {
         const status = (e) => {
            return e.item_id === media_id && e.item_type === media_type;
         };
         for (const list of lists) {
            if (list.items.some((e) => status(e))) {
               setIsSaved(true);
               break;
            } else {
               setIsSaved(false);
            }
         }
      };
      checkSavedStatus(media_id, media_type, lists);
   }, [media_id, media_type, lists]);

   return [isSaved];
}
