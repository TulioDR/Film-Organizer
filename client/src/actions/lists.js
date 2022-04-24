import * as api from "../api";
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

export const getLists = () => async (dispatch) => {
   try {
      const { data } = await api.fetchLists();
      dispatch({ type: FETCH_ALL, payload: { data } });
   } catch (error) {
      console.log(error);
   }
};

export const resetLists = () => async (dispatch) => {
   try {
      dispatch({ type: RESET, payload: { data: [] } });
   } catch (error) {
      console.log(error);
   }
};

export const getList = (id) => async (dispatch) => {
   try {
      const { data } = await api.getList(id);
      dispatch({ type: GET_LIST, payload: { list: data } });
   } catch (error) {
      console.log(error);
   }
};

export const createList = (list) => async (dispatch) => {
   try {
      const { data } = await api.createList(list);
      dispatch({ type: CREATE, payload: data });
   } catch (error) {
      console.log(error);
   }
};

export const updateList = (id, list) => async (dispatch) => {
   try {
      const { data } = await api.updateList(id, list);
      dispatch({ type: UPDATE, payload: data });
   } catch (error) {
      console.log(error);
   }
};

export const deleteList = (id) => async (dispatch) => {
   try {
      await api.deleteList(id);
      dispatch({ type: DELETE, payload: id });
   } catch (error) {
      console.log(error);
   }
};

export const addItem = (id, mediaData) => async (dispatch) => {
   try {
      const { data } = await api.addItem(id, mediaData);
      dispatch({ type: ADD_ITEM, payload: data });
   } catch (error) {
      console.log(error);
   }
};

export const deleteItems = (id, itemsToDelete) => async (dispatch) => {
   try {
      const { data } = await api.deleteItems(id, itemsToDelete);
      dispatch({ type: DELETE_ITEMS, payload: data });
   } catch (error) {
      console.log(error);
   }
};
