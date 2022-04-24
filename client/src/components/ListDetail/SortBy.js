import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import SortByOption from "./SortByOption";

export default function SortBy({
   ascending,
   descending,
   setByType,
   dispatch,
   setSubTitle,
}) {
   const [open, setOpen] = useState(false);

   const toggle = () => {
      setOpen(!open);
      console.log(open);
      console.log("click");
   };
   const handleBlur = () => {
      setOpen(false);
   };

   const showAscending = () => {
      setSubTitle("Newest to Oldest");
      dispatch({ type: "SET_ITEMS", payload: ascending });
      setByType(false);
   };
   const showDescending = () => {
      setSubTitle("Oldest to Newest");
      dispatch({ type: "SET_ITEMS", payload: descending });
      setByType(false);
   };
   const showByType = () => {
      setByType(true);
   };

   return (
      <div className="w-56 text-right z-10">
         <Menu as="div" className="relative inline-block text-left">
            <div>
               <Menu.Button
                  tabIndex={0}
                  onClick={toggle}
                  onBlur={handleBlur}
                  className={`h-11 w-full text-sm font-medium text-white bg-purple-dark dark:bg-gray-lightDark shadow-material rounded-md focus:outline-none`}
               >
                  <div className="flex items-center">
                     <span className="material-icons h-11 w-11 grid place-items-center">
                        unfold_more
                     </span>
                     <span className="w-28">Sort By</span>
                  </div>
               </Menu.Button>
            </div>
            <Transition
               as={Fragment}
               enter="transition ease-out duration-100"
               enterFrom="transform opacity-0 scale-95"
               enterTo="transform opacity-100 scale-100"
               leave="transition ease-in duration-75"
               leaveFrom="transform opacity-100 scale-100"
               leaveTo="transform opacity-0 scale-95"
            >
               <Menu.Items className="absolute p-1 right-0 w-56 mt-2 origin-top-right bg-white dark:bg-gray-lightDark rounded-md shadow-material ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <SortByOption
                     onClick={showAscending}
                     text="Date Added Ascending"
                  />
                  <SortByOption
                     onClick={showDescending}
                     text="Date Added Descending"
                  />
                  <SortByOption onClick={showByType} text="Media Type" />
               </Menu.Items>
            </Transition>
         </Menu>
      </div>
   );
}
