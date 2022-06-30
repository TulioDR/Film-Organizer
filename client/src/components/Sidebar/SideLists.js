import { useSelector } from "react-redux";
import SideItem from "./SideItem";
import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function SideLists() {
   const { lists } = useSelector((state) => state.lists);

   const { sidebarExtended } = useSidebarExtendedContext();

   return (
      <div>
         {sidebarExtended && (
            <div className="ml-6 mb-1 text-gray-800 dark:text-gray-400">
               Lists
            </div>
         )}
         {lists?.length > 0 ? (
            <ul className="space-y-1">
               {lists.map((list, index) => (
                  <SideItem
                     key={index}
                     name={list.name}
                     icon={"featured_play_list"}
                     link={`/lists/${list._id}`}
                  />
               ))}
            </ul>
         ) : (
            <div className="rounded-md bg-blue-400 dark:bg-blue-600 p-3 text-center ml-6">
               The Lists that you create will appear here
            </div>
         )}
      </div>
   );
}
