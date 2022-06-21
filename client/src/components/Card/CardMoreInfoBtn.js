import useSelectedMediaContext from "../../context/SelectedMediaContext";

export default function CardMoreInfoBtn({
   setSelectedId,
   id,
   toggleInfo,
   setSelectedImg,
   poster_path,
   getMoreInfo,
}) {
   const { setSelectedMedia } = useSelectedMediaContext();

   const doEverything = () => {
      setSelectedId(id);
   };

   const newToggle = () => {
      toggleInfo();
      setSelectedImg(poster_path);
      setSelectedMedia(poster_path);
      setTimeout(doEverything, 300);
      setTimeout(getMoreInfo, 1000);
   };
   return (
      <button
         onClick={newToggle}
         className="rounded-md h-8 text-white bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer grid place-content-center px-3"
      >
         Learn More
      </button>
   );
}
