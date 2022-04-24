import {
   FETCH_ALL,
   RESET,
   GET_LIST,
   CREATE,
   UPDATE,
   DELETE,
   ADD_ITEM,
   DELETE_ITEMS,
} from "../constants/actionTypes";

export default function lists(state = { lists: [] }, action) {
   switch (action.type) {
      case FETCH_ALL:
      case RESET:
         return { ...state, lists: action.payload.data };
      case GET_LIST:
         return { ...state, list: action.payload.list };
      case DELETE_ITEMS:
         return {
            ...state,
            list: action.payload,
            lists: state.lists.map((list) =>
               list._id === action.payload._id ? action.payload : list
            ),
         };
      case CREATE:
         return { ...state, lists: [...state.lists, action.payload] };
      case UPDATE:
      case ADD_ITEM:
         return {
            ...state,
            lists: state.lists.map((list) =>
               list._id === action.payload._id ? action.payload : list
            ),
         };
      case DELETE:
         return {
            ...state,
            lists: state.lists.filter((list) => list._id !== action.payload),
         };
      default:
         return state;
   }
}
