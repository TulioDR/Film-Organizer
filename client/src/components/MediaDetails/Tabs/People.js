export default function People({ person }) {
   const { name, id, profile_path, character, job } = person;

   const getPersonUrl = (name) => {
      const nameUrl = name.split(" ").join("_");
      return `https://en.wikipedia.org/wiki/${nameUrl}`;
   };
   const getPersonImg = (path) => {
      if (path) return `https://image.tmdb.org/t/p/w185${path}`;
      else return "/images/person-not-found.jpg";
   };
   return (
      <a
         href={getPersonUrl(name)}
         target="_blank"
         rel="noreferrer"
         className="relative min-w-24 w-24 md:min-w-36 md:w-36 text-white shadow-material rounded-md overflow-hidden"
      >
         <img src={getPersonImg(profile_path)} alt={id} className="w-full" />
         <div className="absolute bottom-0 p-2 pt-10 w-full text-sm bg-gradient-to-t from-black to-transparent">
            <div className="truncate">{name}</div>
            <div className="truncate italic">{character || job}</div>
         </div>
      </a>
   );
}
