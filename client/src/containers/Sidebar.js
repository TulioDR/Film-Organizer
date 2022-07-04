import SideContainer from "../components/Sidebar/SideContainer";
import SideLinks from "../components/Sidebar/SideLinks";
import SideForm from "../components/Sidebar/SideForm";
import SideLists from "../components/Sidebar/SideLists";

import useSidebarExtendedContext from "../context/SidebarExtendedContext";
import LogAdvice from "../components/Sidebar/LogAdvice";
import useValueContext from "../context/ValueContext";
import ChangeSearch from "../components/Sidebar/ChangeSearch";
import { useDispatch } from "react-redux";
import { useState } from "react";
import CreateListModal from "../components/Modals/CreateListModal";
import { createList } from "../actions/lists";

export default function Sidebar() {
   const { sidebarExtended, toggleSidebarRevealed } =
      useSidebarExtendedContext();
   const { isMovie } = useValueContext();

   const user = JSON.parse(localStorage.getItem("profile"));

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
         <SideContainer>
            <div className="flex lg:hidden my-4 items-center">
               <button
                  onClick={toggleSidebarRevealed}
                  className="ml-4 mr-2 bg-blue-400 dark:bg-blue-600 rounded-md h-10 w-10 grid place-content-center"
               >
                  <span className="material-icons">menu</span>
               </button>
               <span className="app-brand text-2xl uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-300 dark:from-blue-600 dark:to-blue-500">
                  Film's Organizer
               </span>
            </div>
            <ChangeSearch />
            <div className="flex-1 overflow-y-auto">
               <SideLinks isMovie={isMovie} />

               {user ? (
                  <>
                     <SideForm openModal={openModal} />
                     <SideLists />
                  </>
               ) : (
                  <LogAdvice sidebarExtended={sidebarExtended} />
               )}
            </div>
         </SideContainer>
         <CreateListModal
            showModal={showModal}
            closeModal={closeModal}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSubmit={handleSubmit}
         />
      </>
   );
}
