import { baseURL } from "../constants/baseURL";

export const fetchFounded = async (value, isMovie, mobile) => {
   const url = `${baseURL}/media/search/${isMovie ? "movie" : "tv"}/${value}`;
   const res = await fetch(url);
   const data = await res.json();
   if (mobile) return data.results;
   else return data.results.slice(0, 5);
};
