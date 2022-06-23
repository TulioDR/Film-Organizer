import DeleteItems from "../components/ListDetail/DeleteItems";
import CreatedAt from "../components/ListDetail/CreatedAt";
import DeleteItemsModal from "../components/Modals/DeleteItemsModal";

import Title from "../components/Title";

import { getList } from "../actions/lists";

import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { AnimateSharedLayout } from "framer-motion";
import TransitionPoster from "../components/PageTransitions/TransitionPoster";
import ListItem from "../components/ListDetail/ListItem";
import FilterPill from "../components/ListDetail/FilterPill";

const itemsReducer = (state, action) => {
   switch (action.type) {
      case "SET_ITEMS":
         return {
            ...state,
            items: action.payload,
            itemsToDelete: [...action.payload].filter(
               (e) => e.selected === true
            ),
         };
      default:
         return state;
   }
};

export default function ListDetails() {
   const { list } = useSelector((state) => state.lists);

   const dispatchList = useDispatch();
   const { id } = useParams();

   const [filteredItems, setFilteredItems] = useState([]);
   const [itemsToDelete, setItemsToDelete] = useState([]);

   useEffect(() => {
      if (list?.items) {
         for (const item of list.items) {
            item.selected = false;
         }
      }
      setFilteredItems(list?.items);
   }, [list?.items]);

   useEffect(() => {
      dispatchList(getList(id));
   }, [dispatchList, id]);

   // setMovies([...list.items].filter((e) => e.item_type === "movie"));
   // setTvSeries([...list.items].filter((e) => e.item_type === "tv"));

   const cancelBtn = useRef(null);

   const [selectedId, setSelectedId] = useState(null);
   const [selectedImg, setSelectedImg] = useState(null);

   const [showDeleteButtons, setShowDeleteButtons] = useState(false);
   const openDeleteButtons = () => setShowDeleteButtons(true);
   const closeDeleteButtons = () => {
      setShowDeleteButtons(false);
      for (const item of filteredItems) {
         item.selected = false;
      }
      setFilteredItems([...filteredItems]);
      setItemsToDelete([]);
   };

   const [showModal, setShowModal] = useState(false);
   const openModal = () => setShowModal(true);
   const closeModal = () => setShowModal(false);

   return (
      <>
         <Title>{list?.name}</Title>
         <div className="flex justify-between items-center">
            <CreatedAt date={list?.createdAt} />
         </div>
         <div className="flex space-x-3 mb-5">
            <FilterPill>All</FilterPill>
            <FilterPill>TV Shows</FilterPill>
            <FilterPill>Movie</FilterPill>
         </div>

         <AnimateSharedLayout>
            <div className="grid gap-5 grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
               {filteredItems?.map((media) => (
                  <ListItem
                     key={media._id}
                     media={media}
                     setSelectedId={setSelectedId}
                     setSelectedImg={setSelectedImg}
                     showDeleteButtons={showDeleteButtons}
                     filteredItems={filteredItems}
                     setFilteredItems={setFilteredItems}
                     setItemsToDelete={setItemsToDelete}
                  />
               ))}
            </div>
            <TransitionPoster
               selectedId={selectedId}
               selectedImg={selectedImg}
            />
         </AnimateSharedLayout>

         <DeleteItemsModal
            {...{
               itemsToDelete,
               showModal,
               openModal,
               closeModal,
               id,
               cancelBtn,
            }}
         />
         <DeleteItems
            {...{
               itemsToDelete,
               openModal,
               cancelBtn,
               showDeleteButtons,
               openDeleteButtons,
               closeDeleteButtons,
            }}
         />
      </>
   );
}
