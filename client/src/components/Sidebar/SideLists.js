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
            <div className="ml-6 mb-1 text-gray-800">Lists</div>
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
            <div className="rounded-md bg-blue-400 dark:bg-blue-600 p-3 text-center ml-6">
               The Lists that you create will appear here
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
