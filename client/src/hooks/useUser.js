import { useCallback, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThemeContext } from "../context/ThemeContext";
import { getLists, resetLists } from "../actions/lists";
import decode from "jwt-decode";

export default function useUser(setOpenUserDropDown) {
   const [user, setUser] = useState(
      JSON.parse(localStorage.getItem("profile"))
   );

   const { colorTheme, setTheme } = useContext(ThemeContext);
   const history = useHistory();
   const dispatch = useDispatch();
   const dispatchLists = useDispatch();

   const toggleTheme = () => setTheme(colorTheme);
   const login = () => history.push("/auth");
   const logout = useCallback(() => {
      setOpenUserDropDown(false);
      setUser(null);
      dispatch({ type: "LOGOUT" });
      history.push("/home");
   }, [history, dispatch, setOpenUserDropDown]);

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

   return [user, toggleTheme, login, logout, colorTheme];
}
