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
import MobileToggle from "../components/Sidebar/MobileToggle";

export default function Sidebar() {
   const { sidebarExtended } = useSidebarExtendedContext();
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
            <MobileToggle />
            <ChangeSearch />
            <SideLinks isMovie={isMovie} />
            {user ? (
               <>
                  <SideForm openModal={openModal} />
                  <SideLists />
               </>
            ) : (
               <LogAdvice sidebarExtended={sidebarExtended} />
            )}
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
