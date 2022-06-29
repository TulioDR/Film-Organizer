import { useState } from "react";
import Icon from "./Icon";
import Input from "./Input";
import VisibilityBtn from "./VisibilityBtn";

export default function SingUp({ handleChange }) {
   const [showPassword, setShowPassword] = useState(false);
   const toggleVisibility = () => {
      setShowPassword(!showPassword);
   };

   const [showConfirmedPassword, setConfirmedShowPassword] = useState(false);
   const toggleConfirmedVisibility = () => {
      setConfirmedShowPassword(!showConfirmedPassword);
   };

   return (
      <>
         <div className="flex items-center">
            <Icon icon="person" />
            <div className="flex flex-1 space-x-4">
               <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  small
               />
               <Input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  onChange={handleChange}
                  small
               />
            </div>
         </div>
         <div className="flex items-center relative">
            <Icon icon="mail" />
            <Input
               type="text"
               name="email"
               placeholder="Email Address"
               onChange={handleChange}
            />
         </div>

         <div className="flex items-center">
            <Icon icon="lock" />
            <div className="flex items-center relative flex-1">
               <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
               />
               <VisibilityBtn
                  onClick={toggleVisibility}
                  showPassword={showPassword}
               />
            </div>
         </div>

         <div className="flex items-center">
            <Icon icon="lock" />
            <div className="flex items-center relative flex-1">
               <Input
                  type={showConfirmedPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
               />
               <VisibilityBtn
                  onClick={toggleConfirmedVisibility}
                  showPassword={showConfirmedPassword}
               />
            </div>
         </div>
      </>
   );
}
