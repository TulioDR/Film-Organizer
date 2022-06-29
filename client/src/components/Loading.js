import SyncLoader from "react-spinners/SyncLoader";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Loading() {
   const { colorTheme } = useContext(ThemeContext);
   return (
      <section className="w-full h-16 flex justify-center items-center ">
         <SyncLoader
            color={colorTheme === "dark" ? "#000" : "#FFF"}
            loading={true}
            size={30}
         />
      </section>
   );
}
