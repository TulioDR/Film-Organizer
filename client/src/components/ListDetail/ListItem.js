import { AnimatePresence, motion } from "framer-motion";
import useGetMediaDetails from "../../hooks/useGetMediaDetails";
import { getPoster } from "../../utils/getPosters";

export default function ListItem({
   media,
   setSelectedId,
   setSelectedImg,
   showDeleteButtons,
   filteredItems,
   setFilteredItems,
   setItemsToDelete,
}) {
   const [getMoreInfo] = useGetMediaDetails({
      type: media.item_type,
      selected: {
         poster_path: media.item_poster,
         id: media.item_id,
      },
   });

   const animatedGetMoreInfo = () => {
      setSelectedImg(media.item_poster);
      setSelectedId(media.item_id);
      setTimeout(getMoreInfo, 500);
   };

   const markItem = () => {
      media.selected = !media.selected;
      setFilteredItems([...filteredItems]);
      const markedItems = [...filteredItems].filter((e) => e.selected === true);
      setItemsToDelete(markedItems);
   };

   return (
      <motion.article
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.3 }}
         onClick={showDeleteButtons ? markItem : animatedGetMoreInfo}
         layoutId={media.item_id}
         className="relative rounded-md overflow-hidden shadow-material cursor-pointer"
      >
         <motion.img
            src={getPoster(media.item_poster, "md", true)}
            alt={media.item_title}
            className="h-full"
         />
         <AnimatePresence>
            {showDeleteButtons && (
               <motion.div
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.1 }}
                  className={`absolute top-0 right-0 w-8 h-8 flex justify-center items-center ${
                     media.selected
                        ? "bg-red-900 text-white"
                        : "bg-white text-red-900"
                  }`}
               >
                  <span className="material-icons">close</span>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.article>
   );
}
