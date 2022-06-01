import DeleteItems from "../components/ListDetail/DeleteItems";
import CreatedAt from "../components/ListDetail/CreatedAt";
import DeleteItemsModal from "../components/Modals/DeleteItemsModal";

import Title from "../components/Title";
import SortBy from "../components/ListDetail/SortBy";
import Type from "../components/ListDetail/Type";

import { getList } from "../actions/lists";

import { useState, useEffect, useReducer, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const initialState = {
   items: [],
   itemsToDelete: [],
   showModal: false,
   openDelete: false,
};

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
      case "OPEN_DELETE":
         return {
            ...state,
            openDelete: true,
         };
      case "CLOSE_DELETE":
         for (const item of action.payload) {
            item.selected = false;
         }
         return {
            ...state,
            openDelete: false,
            itemsToDelete: [],
            items: action.payload,
         };
      case "OPEN_MODAL":
         console.log("Open Modal dispath");
         return {
            ...state,
            showModal: true,
         };
      case "CLOSE_MODAL":
         return {
            ...state,
            showModal: false,
         };
      default:
         return state;
   }
};

export default function ListDetails() {
   const { list } = useSelector((state) => state.lists);

   const [state, dispatch] = useReducer(itemsReducer, initialState);

   const { items, itemsToDelete, showModal, openDelete } = state;

   const [movies, setMovies] = useState([]);
   const [tvSeries, setTvSeries] = useState([]);
   const [ascending, setAscending] = useState([]);
   const [descending, setDescending] = useState([]);
   const [byType, setByType] = useState(false);
   const [subTitle, setSubTitle] = useState("Newest to Oldest");

   const dispatchList = useDispatch();
   const { id } = useParams();

   const closeModal = () => {
      dispatch({ type: "CLOSE_MODAL" });
   };

   useEffect(() => {
      if (list?.items) {
         for (const item of list.items) {
            item.selected = false;
         }
         dispatch({ type: "SET_ITEMS", payload: list.items });
         setAscending([...list.items]);
         setDescending([...list.items].reverse());
         setMovies([...list.items].filter((e) => e.item_type === "movie"));
         setTvSeries([...list.items].filter((e) => e.item_type === "tv"));
      }
   }, [list?.items]);

   useEffect(() => {
      dispatchList(getList(id));
   }, [dispatchList, id]);

   const cancelBtn = useRef(null);

   return (
      <>
         <Title>{list?.name}</Title>
         <div className="flex justify-between items-center">
            <CreatedAt date={list?.createdAt} />
            <SortBy
               {...{ ascending, descending, setByType, dispatch, setSubTitle }}
            />
         </div>

         {!byType ? (
            <Type
               itemsArray={items}
               message="There is no Movies or Shows on this list"
               {...{ items, subTitle, dispatch, openDelete }}
            />
         ) : (
            <>
               <Type
                  itemsArray={movies}
                  message="There is no Movies in this list"
                  subTitle="Movies"
                  {...{ items, dispatch, openDelete }}
               />
               <div className="mb-5"></div>
               <Type
                  itemsArray={tvSeries}
                  message="There is no TV Series in this list"
                  subTitle="TV Series"
                  {...{ items, dispatch, openDelete }}
               />
            </>
         )}
         <DeleteItemsModal
            {...{ itemsToDelete, closeModal, id, cancelBtn, showModal }}
         />
         <DeleteItems {...{ dispatch, itemsToDelete, items }} />
      </>
   );
}
