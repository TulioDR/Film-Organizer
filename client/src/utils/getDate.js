export const daysToRelease = (dateString) => {
   const now = new Date().getTime();
   const releaseDate = new Date(dateString).getTime();
   const delta = (releaseDate - now) / 1000;
   const daysToRelease = Math.floor(delta / 86400);
   return daysToRelease;
};

export const chageDateFormat = (dateString) => {
   return new Date(dateString).toLocaleDateString("en-gb", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "utc",
   });
};

export const isReleased = (dateString) => {
   if (daysToRelease(dateString) <= 0) return true;
   else return false;
};
