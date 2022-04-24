import { getPoster } from "../../utils/getPosters";
import { useHistory } from "react-router-dom";

export default function Item({ items, media, dispatch, openDelete }) {
   const history = useHistory();
   const getDetails = () => {
      history.push(`/media-details/${media.item_type}/${media.item_id}`);
   };
   const pushItem = () => {
      media.selected = !media.selected;
      dispatch({ type: "SET_ITEMS", payload: items });
   };

   return (
      <article
         onClick={openDelete ? pushItem : getDetails}
         className="relative rounded-md overflow-hidden cursor-pointer group"
      >
         <img
            src={getPoster(media.item_poster, "md", true)}
            alt={media.item_title}
            className="h-full"
         />
         <div className="w-full absolute bottom-0 text-white text-center p-1 pt-7 text-sm bg-gradient-to-t from-black to-transparent transform duration-200 translate-y-full group-hover:translate-y-0">
            {media.item_title}
         </div>
         <div
            className={`absolute top-0 right-0 w-8 h-8 flex justify-center items-center transform duration-200 ${
               openDelete ? "translate-y-0" : "-translate-y-full"
            } ${
               media.selected
                  ? "bg-red-900 text-white"
                  : "bg-white text-red-900"
            }`}
         >
            <span className="material-icons">close</span>
         </div>
      </article>
   );
}
