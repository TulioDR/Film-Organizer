import ModalContainer from "./ModalParts/ModalContainer";
import ModalFooter from "./ModalParts/ModalFooter";
import ModalTitle from "./ModalParts/ModalTitle";

export default function UserWarning({ isModalOpen, close, logIn }) {
   return (
      <ModalContainer isModalOpen={isModalOpen} closeModal={close}>
         <ModalTitle>
            <div className="flex items-center space-x-2">
               <span>Warning</span>
               <span className="material-icons text-3xl">warning</span>
            </div>
         </ModalTitle>
         <div className="mb-3">
            Log in first to save Movies and TV shows into your lists.
         </div>
         <ModalFooter>
            <button onClick={close} className="px-3 py-2 focus:outline-none">
               Cancel
            </button>
            <button
               onClick={logIn}
               className="px-4 py-2 rounded-md focus:outline-none bg-gray-dark text-white dark:bg-gray-200 dark:text-black"
            >
               Log In
            </button>
         </ModalFooter>
      </ModalContainer>
   );
}
