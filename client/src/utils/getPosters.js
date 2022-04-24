// Sizes are expresed in pixels.
const widths = {
   sm: "92",
   md: "342",
   lg: "780",
   xl: "1280",
};
export function getPoster(path, size, frontPoster) {
   const width = widths[size];
   if (path) return `https://image.tmdb.org/t/p/w${width}${path}`;
   else {
      if (frontPoster) return "/images/poster-not-found.png";
      else return "/images/back-poster-not-found.jpg";
   }
}
