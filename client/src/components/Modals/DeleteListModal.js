import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import ModalTitle from "./ModalTitle";

import ModalContainer from "./ModalContainer";

import { useDispatch } from "react-redux";
import { deleteList } from "../../actions/lists";
import { useHistory } from "react-router";

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
            <Button
               color="blueGray"
               buttonType="link"
               onClick={closeModal}
               ripple="dark"
            >
               Cancel
            </Button>

            <Button
               color="red"
               onClick={() => deleteThisList(currentId)}
               ripple="light"
            >
               Delete
            </Button>
         </ModalFooter>
      </ModalContainer>
   );
}
