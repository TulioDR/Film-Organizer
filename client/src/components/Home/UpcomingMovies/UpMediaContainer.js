import useGetMediaDetails from "../../../hooks/useGetMediaDetails";

export default function UpMediaContainer({ movie, children }) {
   const [getMoreInfo] = useGetMediaDetails({
      type: "movie",
      selected: movie,
   });
   return (
      <article
         onClick={getMoreInfo}
         className="relative overflow-hidden rounded-md w-72 min-w-72 group cursor-pointer"
      >
         {children}
      </article>
   );
}
