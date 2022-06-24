import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../actions/lists";

import ModalContainer from "./ModalParts/ModalContainer";
import ModalTitle from "./ModalParts/ModalTitle";
import ModalBody from "./ModalParts/ModalBody";
import ModalFooter from "./ModalParts/ModalFooter";

export default function AddToListModal({
   showSaveToListModal,
   closeSaveToListModal,
   currentData,
}) {
   const { lists } = useSelector((state) => state.lists);
   const dispatch = useDispatch();

   const saveMedia = (listID, mediaData) => {
      dispatch(addItem(listID, mediaData));
   };

   const isSaved = (list, currentData) => {
      return list.items.some(
         (item) =>
            item.item_id === currentData.item_id &&
            item.item_type === currentData.item_type
      );
   };

   return (
      <ModalContainer
         isModalOpen={showSaveToListModal}
         closeModal={closeSaveToListModal}
      >
         <ModalTitle>Save to...</ModalTitle>
         <ModalBody>
            <ul className="w-48 border-b-2 border-t-2 border-black dark:border-white">
               {lists.length ? (
                  lists.map((list) => (
                     <li
                        key={list._id}
                        className={`flex items-center hover:bg-purple-500 dark:hover:bg-purple-900 h-12 ${
                           isSaved(list, currentData)
                              ? "pointer-events-none"
                              : "cursor-pointer"
                        }`}
                        onClick={() => saveMedia(list._id, currentData)}
                     >
                        <span className="material-icons mx-2">
                           {isSaved(list, currentData)
                              ? "check_box"
                              : "check_box_outline_blank"}
                        </span>

                        <span>{list.name}</span>
                     </li>
                  ))
               ) : (
                  <div className="text-center p-5">
                     Create a List first so you can save Movies and Shows!
                  </div>
               )}
            </ul>
         </ModalBody>
         <ModalFooter>
            <button onClick={closeSaveToListModal}>Close</button>
         </ModalFooter>
      </ModalContainer>
   );
}
