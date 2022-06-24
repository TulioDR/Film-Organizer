import EpImg from "./EpImg";
import EpNumber from "./EpNumber";
import EpRating from "./EpRating";
import EpisodeOverview from "./EpisodeOverview";
import EpCardContainer from "./EpCardContainer";

export default function EpisodeCard({ ep }) {
   const { still_path, vote_count, vote_average } = ep;
   const { episode_number, name, overview } = ep;
   return (
      <EpCardContainer>
         <div className="w-full rounded-lg -mt-9 shadow-lg relative overflow-hidden">
            <EpImg img={still_path} />
            <div className="px-2 pb-1 pt-4 absolute bottom-0 w-full flex justify-between items-center text-white bg-gradient-to-t from-black to-transparent">
               <EpNumber episodeNumber={episode_number} />
               <EpRating voteCount={vote_count} voteAverage={vote_average} />
            </div>
         </div>
         <EpisodeOverview name={name} overview={overview} />
      </EpCardContainer>
   );
}
