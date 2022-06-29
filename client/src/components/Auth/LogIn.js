import { useState } from "react";
import Icon from "./Icon";
import Input from "./Input";
import VisibilityBtn from "./VisibilityBtn";

export default function LogIn({ handleChange }) {
   const [showPassword, setShowPassword] = useState(false);
   const toggleVisibility = () => setShowPassword(!showPassword);

   return (
      <>
         <div className="flex items-center">
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
      </>
   );
}
