// React
import { useSelector } from "react-redux";
import { useState } from "react";

import SideItem from "./SideItem";

import DeleteButton from "./DeleteButton";
import DeleteListModal from "../Modals/DeleteListModal";
import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function SideLists() {
   const { lists } = useSelector((state) => state.lists);

   const { sidebarExtended } = useSidebarExtendedContext();

   const [showModal, setShowModal] = useState(false);
   const [currentTitle, setCurrentTitle] = useState("");
   const [currentId, setCurrentId] = useState(null);

   const openDeleteModal = (id, title) => {
      setShowModal(true);
      setCurrentId(id);
      setCurrentTitle(title);
   };

   const closeModal = () => {
      setShowModal(false);
   };

   return (
      <div>
         {sidebarExtended && (
            <div className="pl-4 pb-1 text-gray-800">Lists</div>
         )}
         {lists?.length > 0 ? (
            <ul>
               {lists.map((list, index) => (
                  <SideItem
                     key={index}
                     name={list.name}
                     icon={"featured_play_list"}
                     link={`/lists/${list._id}`}
                  >
                     {sidebarExtended && (
                        <DeleteButton
                           id={list._id}
                           name={list.name}
                           {...{ openDeleteModal }}
                        />
                     )}
                  </SideItem>
               ))}
            </ul>
         ) : (
            <div className="p-4 pt-0">
               <div className="rounded-md bg-purple-dark dark:bg-purple-900 p-3 text-center shadow-lg">
                  The Lists that you create will appear here
               </div>
            </div>
         )}

         <DeleteListModal
            {...{
               showModal,
               closeModal,
               currentTitle,
               currentId,
            }}
         />
      </div>
   );
}
