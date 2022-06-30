import SideItem from "./SideItem";

export default function SideLinks({ isMovie }) {
   return (
      <ul className="space-y-1">
         <SideItem name="Home" icon="home" link="/home" />
         <SideItem
            name={`Popular ${isMovie ? "Movies" : "TV Series"}`}
            icon="whatshot"
            link={`/search/popular/${isMovie ? "movie" : "tv"}/null`}
         />
         <SideItem
            name={`${isMovie ? "Movies" : "TV"} Genres`}
            icon="theater_comedy"
            link={`/genres/${isMovie ? "movie" : "tv"}`}
         />
         <SideItem
            name="Advanced Search"
            icon="location_searching"
            link="/advanced"
         />
         <SideItem
            name="Manage Lists"
            icon="format_list_bulleted"
            link="/manage"
         />
      </ul>
   );
}
