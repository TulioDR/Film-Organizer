import SideContainer from "../components/Sidebar/SideContainer";
import SideLinks from "../components/Sidebar/SideLinks";
import SideForm from "../components/Sidebar/SideForm";
import SideLists from "../components/Sidebar/SideLists";

import useSidebarExtendedContext from "../context/SidebarExtendedContext";
import Select from "../components/Sidebar/SelectSearchType/Select";
import LogAdvice from "../components/Sidebar/LogAdvice";
import useValueContext from "../context/ValueContext";

export default function Sidebar() {
   const { sidebarExtended } = useSidebarExtendedContext();
   const { isMovie } = useValueContext();

   const user = JSON.parse(localStorage.getItem("profile"));
   return (
      <SideContainer>
         <Select />
         <div
            className={`card-scrollbar overflow-x-hidden flex-1 ${
               sidebarExtended
                  ? "overflow-y-auto"
                  : "overflow-y-hidden hover:overflow-y-auto"
            }`}
         >
            <SideLinks isMovie={isMovie} />

            {user ? (
               <>
                  {sidebarExtended ? (
                     <SideForm />
                  ) : (
                     <div className="h-3 w-full bg-white"></div>
                  )}
                  <SideLists />
               </>
            ) : (
               sidebarExtended && <LogAdvice />
            )}
         </div>
      </SideContainer>
   );
}
