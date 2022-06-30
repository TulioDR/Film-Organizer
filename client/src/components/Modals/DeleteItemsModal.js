import { useState, useEffect } from "react";
import { deleteItems } from "../../actions/lists";
import { useDispatch } from "react-redux";

import ModalContainer from "./ModalParts/ModalContainer";
import ModalTitle from "./ModalParts/ModalTitle";
import ModalBody from "./ModalParts/ModalBody";
import ModalFooter from "./ModalParts/ModalFooter";
import SubmitModalBtn from "./ModalParts/SubmitModalBtn";
import CloseModalBtn from "./ModalParts/CloseModalBtn";

export default function DeleteItemsModal({
   itemsToDelete,
   showModal,
   closeModal,
   id,
   cancelBtn,
}) {
   const [movieItems, setMovieItems] = useState([]);
   const [tvItems, setTvItems] = useState([]);
   const dispatchItems = useDispatch();

   useEffect(() => {
      const movies = itemsToDelete.filter((e) => e.item_type === "movie");
      const tv = itemsToDelete.filter((e) => e.item_type === "tv");
      setMovieItems(movies);
      setTvItems(tv);
   }, [itemsToDelete]);

   const deleteItemsFromDB = () => {
      cancelBtn.current.click();
      closeModal();
      dispatchItems(deleteItems(id, itemsToDelete));
   };

   return (
      <ModalContainer isModalOpen={showModal} closeModal={closeModal}>
         <ModalTitle>Delete from "List Name"</ModalTitle>
         <ModalBody>
            <div>The next items are going to be deleted:</div>
            <div>
               Note: Deleting an item from the list is a permanent action and
               can't be undone.
            </div>
            <div>
               <div className="mt-2 text-lg font-medium">Movies</div>
               <ul>
                  {movieItems.length > 0 ? (
                     movieItems.map((item) => (
                        <li key={item._id} className="h-6 pl-2">
                           - {item.item_title}
                        </li>
                     ))
                  ) : (
                     <span className="h-6 pl-2">
                        No Movies are going to be deleted
                     </span>
                  )}
               </ul>

               <div className="mt-2 text-lg font-medium">TV Series</div>
               <ul>
                  {tvItems.length > 0 ? (
                     tvItems.map((item) => (
                        <li key={item._id} className="h-6 pl-2">
                           - {item.item_title}
                        </li>
                     ))
                  ) : (
                     <span className="h-6 pl-2">
                        No TV Series are going to be deleted
                     </span>
                  )}
               </ul>
            </div>
         </ModalBody>
         <ModalFooter>
            <CloseModalBtn onClick={closeModal}>Cancel</CloseModalBtn>
            <SubmitModalBtn onClick={deleteItemsFromDB} red>
               Delete
            </SubmitModalBtn>
         </ModalFooter>
      </ModalContainer>
   );
}
