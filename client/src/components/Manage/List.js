import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateList } from "../../actions/lists";

const styles = {
   manageIcons: "w-1/2 h-full grid place-items-center text-3xl",
   blue: `text-blue-600 hover:bg-blue-600 hover:text-white`,
   red: `text-red-600 hover:bg-red-600 hover:text-white`,
};

const { manageIcons, blue, red } = styles;

export default function List({ name, id, openDeleteModal }) {
   const [value, setValue] = useState(name);
   const [showBtn, setShowBtn] = useState(false);

   const dispatch = useDispatch();

   const manageChange = (e) => {
      const val = e.target.value;
      setValue(val);
   };

   const input = useRef(null);
   const sendBtn = useRef(null);
   const cancelBtn = useRef(null);

   const editListName = () => {
      setShowBtn(true);
      input.current.focus();
   };

   const updateListName = async () => {
      if (value === name) {
         setShowBtn(false);
         input.current.blur();
      } else {
         await dispatch(updateList(id, { name: value }));
         setShowBtn(false);
         input.current.blur();
      }
   };

   const handleInputBlur = (e) => {
      if (e.relatedTarget !== sendBtn.current) {
         setShowBtn(false);
         setValue(name);
      }
   };

   const handleKeyDown = (e) => {
      if (e.key === "Enter") {
         sendBtn.current.click();
      }
      if (e.key === "Escape") {
         cancelBtn.current.click();
         input.current.blur();
      }
   };

   return (
      <article className="h-16 pl-4 pr-3 flex justify-between items-center bg-white dark:bg-gray shadow-material rounded-md overflow-hidden md:transform duration-200 hover:-translate-x-2">
         <input
            type="text"
            value={value}
            spellCheck="false"
            onKeyDown={handleKeyDown}
            onChange={manageChange}
            ref={input}
            className="w-2/3 bg-transparent outline-none focus:border-black dark:focus:border-white border-b-2 border-transparent pointer-events-none text-xl"
            onBlur={handleInputBlur}
         />
         <div className="cursor-pointer relative w-24 h-full">
            <div className="w-full h-full flex">
               <span
                  onClick={editListName}
                  className={`material-icons ${manageIcons} ${blue}`}
               >
                  edit
               </span>
               <span
                  onClick={() => openDeleteModal(id, name)}
                  className={`material-icons ${manageIcons} ${red}`}
               >
                  delete
               </span>
            </div>
            <div
               className={`w-full h-full flex absolute top-0 transform duration-150 bg-white dark:bg-gray ${
                  showBtn ? "translate-y-0" : "-translate-y-full"
               }`}
            >
               <span
                  tabIndex={0}
                  ref={sendBtn}
                  onClick={updateListName}
                  className={`material-icons ${manageIcons} ${blue}`}
               >
                  done
               </span>
               <span
                  ref={cancelBtn}
                  onClick={() => setShowBtn(false)}
                  className={`material-icons ${manageIcons} ${red}`}
               >
                  close
               </span>
            </div>
         </div>
      </article>
   );
}
