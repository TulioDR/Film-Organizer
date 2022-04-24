import { Menu } from "@headlessui/react";

export default function SortByOption({ onClick, text }) {
   return (
      <Menu.Item>
         <button
            onClick={onClick}
            className="focus:outline-none text-gray-900 hover:bg-purple dark:hover:bg-gray-light hover:text-white dark:text-white group flex rounded-md items-center w-full px-2 py-2 text-sm"
         >
            {text}
         </button>
      </Menu.Item>
   );
}
