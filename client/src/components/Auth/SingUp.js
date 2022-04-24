import Input from "@material-tailwind/react/Input";
import InputIcon from "@material-tailwind/react/InputIcon";
import { useState } from "react";

export default function SingUp({ handleChange }) {
   const [showPassword, setShowPassword] = useState(false);
   const toggleVisibility = () => setShowPassword(!showPassword);

   return (
      <>
         <div className="flex space-x-6">
            <Input
               type="text"
               color="deepPurple"
               size="lg"
               outline={false}
               name="firstName"
               placeholder="First Name"
               onChange={handleChange}
            />
            <Input
               type="text"
               color="deepPurple"
               size="lg"
               outline={false}
               name="lastName"
               placeholder="Last name"
               onChange={handleChange}
            />
         </div>
         <Input
            type="text"
            color="deepPurple"
            size="lg"
            outline={false}
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
         />
         <div className="flex items-center relative">
            <InputIcon
               type={showPassword ? "text" : "password"}
               color="deepPurple"
               size="lg"
               outline={false}
               name="password"
               placeholder="Password"
               onChange={handleChange}
               iconFamily="material-icons"
               iconName={showPassword ? "visibility_off" : "visibility"}
            />
            <span
               onClick={toggleVisibility}
               className="absolute right-0 h-8 w-6 cursor-pointer"
            ></span>
         </div>
         <Input
            type="password"
            color="deepPurple"
            size="lg"
            outline={false}
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
         />
      </>
   );
}
