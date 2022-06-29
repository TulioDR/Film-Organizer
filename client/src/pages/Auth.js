import Container from "../components/Auth/Container";
import Description from "../components/Auth/Description";
import GoggleBtn from "../components/Auth/GoggleBtn";
import Img from "../components/Auth/Img";
import LogIn from "../components/Auth/LogIn";
import SingUp from "../components/Auth/SingUp";
import ToggleType from "../components/Auth/ToggleType";
import ErrorMessage from "../components/Auth/ErrorMessage";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { login, signup } from "../actions/auth";

import { AnimatePresence, motion } from "framer-motion";

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
   const { type } = useParams();

   const [showError, setShowError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");

   useEffect(() => {
      if (type === "login") setIsLogin(true);
      else if (type === "signup") setIsLogin(false);
      setFormData(initialState);
   }, [type]);

   useEffect(() => {
      if (error) {
         setErrorMessage(error);
         setShowError(true);
      } else {
         setShowError(false);
      }
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

   // const closeError = () => {
   //    setShowError(false);
   //    console.log("close");
   // };

   return (
      <div className="h-screen overflow-hidden relative">
         <AnimatePresence>
            {showError && <ErrorMessage errorMessage={errorMessage} />}
         </AnimatePresence>
         <Img />
         <Container>
            {isLogin && <Description />}
            <div
               className={`w-full bg-white text-black p-12 relative ${
                  isLogin ? "sm:w-96" : "sm:w-108"
               }`}
            >
               <div className="mb-6">
                  <div className="text-2xl text-center mb-4">
                     {isLogin ? "Log In" : "Sign Up"}
                  </div>
                  <form
                     onSubmit={handleSubmit}
                     className="space-y-4 flex flex-col"
                  >
                     {isLogin ? (
                        <LogIn {...{ handleChange }} />
                     ) : (
                        <SingUp {...{ handleChange }} />
                     )}
                     <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="py-2 w-full bg-blue-600 text-white uppercase rounded-full shadow-material"
                     >
                        {isLogin ? "log in" : "sign up"}
                     </motion.button>
                     <ToggleType {...{ isLogin }} />
                     <GoggleBtn />
                  </form>
               </div>
            </div>
         </Container>
      </div>
   );
}
