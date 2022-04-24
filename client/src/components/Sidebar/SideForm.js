import { useState } from "react";
import { useDispatch } from "react-redux";
import { createList } from "../../actions/lists";
import CreateListModal from "../Modals/CreateListModal";

export default function SideForm() {
   const dispatch = useDispatch();

   const [showModal, setShowModal] = useState(false);
   const [inputValue, setInputValue] = useState("");
   const openModal = () => {
      setShowModal(true);
   };

   const closeModal = () => {
      setShowModal(false);
      setInputValue("");
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createList({ name: inputValue }));
      closeModal();
   };

   return (
      <>
         <button
            onClick={openModal}
            className="py-2 px-5 mx-auto my-2 rounded-full shadow-lg bg-purple-dark dark:bg-purple-900 hover:bg-opacity-80 flex items-center justify-center truncate focus:outline-none"
         >
            Create a list
            <span className="material-icons ml-2">add</span>
         </button>

         <CreateListModal
            {...{
               showModal,
               closeModal,
               inputValue,
               setInputValue,
               handleSubmit,
            }}
         />
      </>
   );
}
