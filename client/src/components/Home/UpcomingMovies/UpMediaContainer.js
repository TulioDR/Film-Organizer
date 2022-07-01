import useGetMediaDetails from "../../../hooks/useGetMediaDetails";

export default function UpMediaContainer({ movie, children }) {
   const [getMoreInfo] = useGetMediaDetails({
      type: "movie",
      selected: movie,
   });
   return (
      <article
         onClick={getMoreInfo}
         className="w-72 min-w-72 cursor-pointer flex flex-col"
      >
         {children}
      </article>
   );
}
