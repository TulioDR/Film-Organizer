import { motion } from "framer-motion";

export default function Tabs({ tabs, selected, setSelected }) {
   return (
      <div className="flex justify-between border-b border-gray-500 dark:border-gray-400 space-x-4 w-full overflow-x-auto overflow-y-hidden tabs-scrollbar">
         {tabs.map((tab, index) => (
            <motion.div
               key={index}
               className={`pb-3 uppercase text-sm sm:text-base relative cursor-pointer min-w-max ${
                  tab === selected
                     ? "text-black dark:text-white"
                     : "text-gray-500 dark:text-gray-400"
               }`}
               onClick={() => setSelected(tab)}
            >
               {tab}
               {tab === selected && (
                  <motion.div
                     layoutId="underline"
                     className="w-full bg-blue-500 absolute"
                     initial={{ bottom: -1, height: 5 }}
                  />
               )}
            </motion.div>
         ))}
      </div>
   );
}
