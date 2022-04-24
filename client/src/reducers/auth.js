import { AUTH, LOGOUT } from "../constants/actionTypes";

export default function auth(state = { authData: null, error: null }, action) {
   switch (action.type) {
      case AUTH:
         localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
         return { ...state, authData: action?.data };
      case LOGOUT:
         localStorage.clear();
         return { ...state, authData: null };
      case "ERROR":
         console.log(action.error.response.data.message);
         return { ...state, error: action.error.response.data.message };
      default:
         return state;
   }
}
