import { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLists, resetLists } from "../actions/lists";
import decode from "jwt-decode";

export default function useUser() {
   const [user, setUser] = useState(
      JSON.parse(localStorage.getItem("profile"))
   );

   const history = useHistory();
   const dispatch = useDispatch();
   const dispatchLists = useDispatch();

   const login = () => history.push("/auth");
   const logout = useCallback(() => {
      setUser(null);
      dispatch({ type: "LOGOUT" });
      history.push("/home");
   }, [history, dispatch]);

   useEffect(() => {
      if (user) dispatchLists(getLists());
      else dispatchLists(resetLists());
   }, [dispatchLists, user]);

   useEffect(() => {
      const token = user?.token;
      if (token) {
         const decodedToken = decode(token);
         if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
      setUser(JSON.parse(localStorage.getItem("profile")));
   }, [user?.token, logout]);

   return [user, login, logout];
}
