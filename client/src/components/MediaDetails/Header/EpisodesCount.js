export default function EpisodesCount({ numberOfSeasons, numberOfEpisodes }) {
   return (
      <div className="mb-3">
         <div>Number of Seasons: {numberOfSeasons}</div>
         <div>Number of Episodes: {numberOfEpisodes}</div>
      </div>
   );
}
