import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const login = (formData, router) => async (dispatch) => {
   try {
      const { data } = await api.login(formData);
      dispatch({ type: AUTH, data });
      router.push("/");
   } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR", error });
   }
};

export const signup = (formData, router) => async (dispatch) => {
   try {
      const { data } = await api.signup(formData);
      dispatch({ type: AUTH, data });
      router.push("/");
   } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR", error });
   }
};
