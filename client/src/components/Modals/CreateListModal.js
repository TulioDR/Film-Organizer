import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import ModalContainer from "./ModalContainer";
import ModalTitle from "./ModalTitle";

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
               <Button
                  type="button"
                  color="red"
                  buttonType="link"
                  onClick={closeModal}
                  ripple="dark"
               >
                  Close
               </Button>

               <Button type="submit" color="blue" ripple="light">
                  Create
               </Button>
            </ModalFooter>
         </form>
      </ModalContainer>
   );
}
