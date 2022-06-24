import { useDispatch } from "react-redux";
import { deleteList } from "../../actions/lists";
import { useHistory } from "react-router";

import ModalContainer from "./ModalParts/ModalContainer";
import ModalTitle from "./ModalParts/ModalTitle";
import ModalBody from "./ModalParts/ModalBody";
import ModalFooter from "./ModalParts/ModalFooter";
export default function DeleteListModal({
   showModal,
   closeModal,
   currentTitle,
   currentId,
}) {
   const dispatch = useDispatch();
   const history = useHistory();

   const deleteThisList = (id) => {
      const currentLocation = history.location.pathname;
      const listLocation = `/lists/${id}`;
      if (currentLocation === listLocation) history.push("/home");
      dispatch(deleteList(id));
      closeModal();
   };
   return (
      <ModalContainer {...{ showModal, closeModal }}>
         <ModalTitle>Delete List</ModalTitle>
         <ModalBody>
            <div className="text-base leading-relaxed text-gray-600 dark:text-gray-400 font-normal">
               <p>
                  Are you sure you want to delete the list "
                  <em>
                     <strong>{currentTitle}</strong>
                  </em>
                  "?
               </p>
               <p>
                  Note: Deliting a list is a permanent action and it cannot be
                  undone.
               </p>
            </div>
         </ModalBody>
         <ModalFooter>
            <button onClick={closeModal}>Cancel</button>

            <button onClick={() => deleteThisList(currentId)}>Delete</button>
         </ModalFooter>
      </ModalContainer>
   );
}
