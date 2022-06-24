import ModalContainer from "./ModalParts/ModalContainer";
import ModalTitle from "./ModalParts/ModalTitle";
import ModalBody from "./ModalParts/ModalBody";
import ModalFooter from "./ModalParts/ModalFooter";

export default function CreateListModal({
   showModal,
   closeModal,
   inputValue,
   setInputValue,
   handleSubmit,
}) {
   return (
      <ModalContainer {...{ showModal, closeModal }}>
         <ModalTitle>Create List</ModalTitle>
         <form className="text-white" onSubmit={handleSubmit}>
            <ModalBody>
               <input
                  type="text"
                  name="name"
                  placeholder="List name"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="text-gray-800 dark:text-white bg-transparent h-12 w-full focus:outline-none border-b-2 border-purple-900"
               />
            </ModalBody>
            <ModalFooter>
               <button onClick={closeModal}>Close</button>

               <button type="submit" color="blue" ripple="light">
                  Create
               </button>
            </ModalFooter>
         </form>
      </ModalContainer>
   );
}
