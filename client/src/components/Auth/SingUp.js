import { useState } from "react";

export default function SingUp({ handleChange }) {
   const [showPassword, setShowPassword] = useState(false);
   const toggleVisibility = () => setShowPassword(!showPassword);

   return (
      <>
         <div className="flex space-x-6">
            <input
               type="text"
               color="deepPurple"
               size="lg"
               outline={false}
               name="firstName"
               placeholder="First Name"
               onChange={handleChange}
            />
            <input
               type="text"
               color="deepPurple"
               size="lg"
               outline={false}
               name="lastName"
               placeholder="Last name"
               onChange={handleChange}
            />
         </div>
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
         <input
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
