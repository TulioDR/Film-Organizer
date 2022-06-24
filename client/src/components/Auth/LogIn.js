import { useState } from "react";

export default function LogIn({ handleChange }) {
   const [showPassword, setShowPassword] = useState(false);
   const toggleVisibility = () => setShowPassword(!showPassword);

   return (
      <>
         <input
            type="text"
            color="deepPurple"
            size="lg"
            outline={false}
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
         />
         <div className="flex items-center relative">
            <input
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
      </>
   );
}
