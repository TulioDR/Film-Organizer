import useGenres from "../hooks/useGenres";
import Title from "../components/Title";
import GenreGrid from "../components/Genres/GenreGrid";
import GenreCard from "../components/Genres/GenreCard";
import { useEffect } from "react";

export default function Genres() {
   const [genresArray, mediaType] = useGenres();
   useEffect(() => {
      window.scrollTo({ top: 0 });
   }, []);
   return (
      <>
         <Title>{mediaType === "movie" ? "Movie" : "TV"} Genres</Title>
         <GenreGrid>
            {genresArray.map((item) => (
               <GenreCard key={item.id} {...{ mediaType, item }} />
            ))}
         </GenreGrid>
      </>
   );
}
