import DeleteButton from "../components/ListDetail/DeleteButton";
import CreatedAt from "../components/ListDetail/CreatedAt";
import DeleteItemsModal from "../components/Modals/DeleteItemsModal";

import Title from "../components/Title";

import { getList } from "../actions/lists";

import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import TransitionPoster from "../components/PageTransitions/TransitionPoster";
import ListItem from "../components/ListDetail/ListItem";
import FilterPill from "../components/ListDetail/FilterPill";
import useSidebarExtendedContext from "../context/SidebarExtendedContext";

export default function ListDetails() {
   const { sidebarExtended } = useSidebarExtendedContext();
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

   const nonFilter = () => {
      setCurrentFilter("all");
      const filtered = [...list?.items];
      setFilteredItems(filtered);
   };
   const filterForMovies = () => {
      setCurrentFilter("movie");
      const filtered = [...list?.items].filter((e) => e.item_type === "movie");
      setFilteredItems(filtered);
   };
   const filterForSeries = () => {
      setCurrentFilter("tv");
      const filtered = [...list?.items].filter((e) => e.item_type === "tv");
      setFilteredItems(filtered);
   };

   const [currentFilter, setCurrentFilter] = useState("all");
   return (
      <>
         <Title>{list?.name}</Title>
         <div className="flex justify-between items-center mb-5">
            <CreatedAt date={list?.createdAt} />
            <div className="flex space-x-3 ">
               <FilterPill
                  onClick={nonFilter}
                  currentFilter={currentFilter}
                  filter="all"
               >
                  All
               </FilterPill>
               <FilterPill
                  onClick={filterForSeries}
                  currentFilter={currentFilter}
                  filter="tv"
               >
                  TV Shows
               </FilterPill>
               <FilterPill
                  onClick={filterForMovies}
                  currentFilter={currentFilter}
                  filter="movie"
               >
                  Movies
               </FilterPill>
            </div>
         </div>

         <AnimateSharedLayout>
            <div
               className={`grid gap-5 grid-cols-3 sm:grid-cols-4 ${
                  sidebarExtended
                     ? "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
                     : "md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
               }`}
            >
               <AnimatePresence>
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
               </AnimatePresence>
            </div>
            <TransitionPoster
               selectedId={selectedId}
               selectedImg={selectedImg}
            />
         </AnimateSharedLayout>
         <DeleteButton
            {...{
               itemsToDelete,
               openModal,
               cancelBtn,
               showDeleteButtons,
               openDeleteButtons,
               closeDeleteButtons,
            }}
         />

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
      </>
   );
}
