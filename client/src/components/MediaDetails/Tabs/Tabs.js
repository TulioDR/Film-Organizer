import { motion, AnimateSharedLayout } from "framer-motion";

export default function Tabs({ tabs, selected, setSelected }) {
   return (
      <AnimateSharedLayout transition={{ duration: 0.5 }}>
         <div className="flex justify-between border-b border-gray-500">
            {tabs.map((tab, index) => (
               <motion.div
                  key={index}
                  className={`${
                     index === selected
                        ? "text-black dark:text-white"
                        : "text-gray-500 dark:text-gray-400"
                  } pb-3 uppercase relative cursor-pointer`}
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
      </AnimateSharedLayout>
   );
}
