// Components
import Title from "../components/Title";
import Grid from "../components/Manage/Grid";
import List from "../components/Manage/List";

// React
import { useSelector } from "react-redux";
import { useState } from "react";
import DeleteListModal from "../components/Modals/DeleteListModal";
import Message from "../components/Manage/Message";

export default function Manage() {
   const { lists } = useSelector((state) => state.lists);
   const user = JSON.parse(localStorage.getItem("profile"));

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
      <>
         {user ? (
            <>
               <Title>Manage Lists</Title>
               {lists.length ? (
                  <Grid>
                     {lists.map((list) => (
                        <List
                           key={list._id}
                           name={list.name}
                           id={list._id}
                           openDeleteModal={openDeleteModal}
                        />
                     ))}
                  </Grid>
               ) : (
                  <div className="text-center bg-purple-dark text-white rounded-md p-3 text-lg w-max mx-auto shadow-material">
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
            </>
         ) : (
            <Message />
         )}
      </>
   );
}
