import ModalContainer from "./ModalParts/ModalContainer";
import ModalTitle from "./ModalParts/ModalTitle";
import ModalBody from "./ModalParts/ModalBody";
import ModalFooter from "./ModalParts/ModalFooter";
import CloseModalBtn from "./ModalParts/CloseModalBtn";

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
                     autoComplete="off"
                     value={inputValue}
                     onChange={(e) => setInputValue(e.target.value)}
                     className="text-gray-800 dark:text-white bg-transparent h-12 w-full focus:outline-none border-b-2 border-black dark:border-white"
                  />
               </div>
            </ModalBody>
            <ModalFooter>
               <CloseModalBtn onClick={closeModal}>Close</CloseModalBtn>
               <button
                  type="submit"
                  className={`py-2 px-3 rounded-md ${
                     inputValue.length === 0
                        ? "pointer-events-none bg-gray-400 dark:bg-gray-600"
                        : "bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 hover:dark:bg-blue-700"
                  }`}
               >
                  Create
               </button>
            </ModalFooter>
         </form>
      </ModalContainer>
   );
}
