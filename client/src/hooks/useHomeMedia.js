import { useEffect, useState } from "react";
import { baseURL } from "../constants/baseURL";

export default function useHomeMedia() {
   const [nowPlaying, setNowPlaying] = useState([]);
   const [onAir, setOnAir] = useState([]);
   const [upcoming, setUpcoming] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const [currentId, setCurrentId] = useState(null);
   const [displayedMovie, setDisplayedMovie] = useState(null);
   const [backgroundImage, setBackgroundImage] = useState(null);

   useEffect(() => {
      const getHomeData = async () => {
         try {
            setIsLoading(true);
            const res = await fetch(`${baseURL}/media/home`);
            const data = await res.json();

            setNowPlaying(data[0].results);
            setDisplayedMovie(data[0].results[0]);
            setBackgroundImage(data[0].results[0].backdrop_path);
            setCurrentId(data[0].results[0].id);

            setOnAir(data[1].results);
            setUpcoming(data[2].results);
            setIsLoading(false);
         } catch (error) {
            console.log(error);
         }
      };
      getHomeData();
   }, []);

   return {
      nowPlaying,
      onAir,
      upcoming,
      isLoading,
      currentId,
      setCurrentId,
      displayedMovie,
      setDisplayedMovie,
      backgroundImage,
      setBackgroundImage,
   };
}
