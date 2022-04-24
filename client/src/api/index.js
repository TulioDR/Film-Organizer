import axios from "axios";
import { baseURL } from "../constants/baseURL";

const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
   if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
         JSON.parse(localStorage.getItem("profile")).token
      }`;
   }

   return req;
});

export const fetchLists = () => API.get("/lists");
export const getList = (id) => API.get(`/lists/${id}`);
export const createList = (newList) => API.post("/lists", newList);
export const updateList = (id, updatedList) =>
   API.patch(`/lists/${id}`, updatedList);
export const deleteList = (id) => API.delete(`/lists/${id}`);
export const addItem = (id, mediaData) =>
   API.patch(`/lists/${id}/addItem`, mediaData);
export const deleteItems = (id, itemsToDelete) =>
   API.patch(`/lists/${id}/deleteItems`, itemsToDelete);

export const login = (formData) => API.post("/user/login", formData);
export const signup = (formData) => API.post("/user/signup", formData);
