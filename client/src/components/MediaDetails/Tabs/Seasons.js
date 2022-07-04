import DetailContainer from "../DetailContainer";
import SeasonCard from "../SeasonCard";

export default function Seasons({ seasons, showID, openSeasonDetails }) {
   return (
      <DetailContainer>
         <div className="grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 gap-4 pr-4">
            {seasons?.map(({ id, ...season }) => (
               <SeasonCard
                  key={id}
                  seasonInfo={season}
                  showID={showID}
                  openSeasonDetails={openSeasonDetails}
               />
            ))}
         </div>
      </DetailContainer>
   );
}
