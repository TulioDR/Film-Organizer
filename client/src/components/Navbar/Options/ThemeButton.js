import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

export default function ThemeButton() {
   const { colorTheme, toggleTheme } = useContext(ThemeContext);
   return (
      <button
         onClick={toggleTheme}
         className="focus:outline-none h-10 w-10 flex items-center justify-center material-icons text-3xl"
      >
         {colorTheme === "dark" ? "dark_mode" : "light_mode"}
      </button>
   );
}
