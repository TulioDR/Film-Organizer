import { useEffect, useState } from "react";
import { baseURL } from "../constants/baseURL";

export default function useHomeMedia() {
   const [nowPlaying, setNowPlaying] = useState([]);
   const [onAir, setOnAir] = useState([]);
   const [upcoming, setUpcoming] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      const getHomeData = async () => {
         try {
            setIsLoading(true);
            const res = await fetch(`${baseURL}/media/home`);
            const data = await res.json();

            setNowPlaying(data[0].results);

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
   };
}
