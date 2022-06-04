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
         <div className="flex-1 card-scrollbar">
            <SideLinks isMovie={isMovie} />

            {user ? (
               <>
                  <SideForm />
                  <SideLists />
               </>
            ) : (
               sidebarExtended && <LogAdvice />
            )}
         </div>
      </SideContainer>
   );
}
