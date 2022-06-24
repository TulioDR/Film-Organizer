import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Container from "../components/Auth/Container";
import Description from "../components/Auth/Description";
import GoggleBtn from "../components/Auth/GoggleBtn";
import Img from "../components/Auth/Img";
import LogIn from "../components/Auth/LogIn";
import SingUp from "../components/Auth/SingUp";
import ToggleType from "../components/Auth/ToggleType";

import { login, signup } from "../actions/auth";
import ErrorMessage from "../components/Auth/ErrorMessage";

const initialState = {
   firstName: "",
   lastName: "",
   email: "",
   password: "",
   confirmPassword: "",
};

export default function Auth() {
   const { error } = useSelector((state) => state.auth);

   const [formData, setFormData] = useState(initialState);
   const [isLogin, setIsLogin] = useState(true);
   const dispatch = useDispatch();
   const history = useHistory();

   const toggle = () => {
      setIsLogin(!isLogin);
      setFormData(initialState);
   };

   const [showError, setShowError] = useState(false);
   useEffect(() => {
      if (error) setShowError(true);
      else setShowError(false);
   }, [error]);

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (isLogin) {
         dispatch(login(formData, history));
      } else {
         dispatch(signup(formData, history));
      }
   };

   const closeError = () => {
      setShowError(false);
   };

   return (
      <div onClick={closeError} className="h-screen overflow-hidden relative">
         <ErrorMessage showError={showError} errorMessage={error} />
         <Img />
         <Container>
            {isLogin && <Description />}
            <div className="w-full sm:w-96 bg-white text-black p-12 relative">
               <div className="mb-6">
                  <div className="text-2xl text-center mb-4">
                     {isLogin ? "Log In" : "Sign Up"}
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                     {isLogin ? (
                        <LogIn {...{ handleChange }} />
                     ) : (
                        <SingUp {...{ handleChange }} />
                     )}
                     <button>{isLogin ? "LOG IN" : "SIGN UP"}</button>
                     <GoggleBtn />
                  </form>
               </div>
               <ToggleType {...{ toggle, isLogin }} />
            </div>
         </Container>
      </div>
   );
}
