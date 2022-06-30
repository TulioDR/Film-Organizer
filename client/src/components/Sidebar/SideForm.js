import { useState } from "react";
import { useDispatch } from "react-redux";
import { createList } from "../../actions/lists";
import useSidebarExtendedContext from "../../context/SidebarExtendedContext";
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

   const { sidebarExtended } = useSidebarExtendedContext();
   return (
      <>
         <div
            onClick={openModal}
            className={`my-2 bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer grid place-content-center duration-200 ${
               sidebarExtended
                  ? "h-10 ml-6 rounded-md"
                  : "h-4 pointer-events-none"
            }`}
         >
            <div
               className={`flex items-center space-x-2 ${
                  sidebarExtended
                     ? "delay-200 duration-200"
                     : "opacity-0 duration-100"
               }`}
            >
               <span>Create a list</span>
               <span className="material-icons">add</span>
            </div>
         </div>

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
