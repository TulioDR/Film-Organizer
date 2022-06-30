import ModalContainer from "./ModalParts/ModalContainer";
import ModalTitle from "./ModalParts/ModalTitle";
import ModalBody from "./ModalParts/ModalBody";
import ModalFooter from "./ModalParts/ModalFooter";
import CloseModalBtn from "./ModalParts/CloseModalBtn";
import SubmitModalBtn from "./ModalParts/SubmitModalBtn";

export default function CreateListModal({
   showModal,
   closeModal,
   inputValue,
   setInputValue,
   handleSubmit,
}) {
   return (
      <ModalContainer isModalOpen={showModal} closeModal={closeModal}>
         <ModalTitle>Create List</ModalTitle>
         <form onSubmit={handleSubmit}>
            <ModalBody>
               <div className="flex items-center">
                  <span className="material-icons mr-4">
                     featured_play_list
                  </span>
                  <input
                     type="text"
                     name="name"
                     placeholder="List name"
                     value={inputValue}
                     onChange={(e) => setInputValue(e.target.value)}
                     className="text-gray-800 dark:text-white bg-transparent h-12 w-full focus:outline-none border-b-2 border-black dark:border-white"
                  />
               </div>
            </ModalBody>
            <ModalFooter>
               <CloseModalBtn onClick={closeModal}>Close</CloseModalBtn>
               <SubmitModalBtn>Create</SubmitModalBtn>
            </ModalFooter>
         </form>
      </ModalContainer>
   );
}
