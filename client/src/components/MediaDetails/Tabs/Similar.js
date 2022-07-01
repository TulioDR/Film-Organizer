import DetailContainer from "../DetailContainer";
import SimilarPoster from "./SimilarPoster";

export default function Similar({ similar, type, isMovie, setSelectedImg }) {
   return (
      <DetailContainer>
         <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 pt-5 pr-3">
            {similar?.map((similar) => (
               <SimilarPoster
                  key={similar.id}
                  similar={similar}
                  alt={similar.id}
                  type={type}
                  posterPath={similar.poster_path}
                  setSelectedImg={setSelectedImg}
               />
            )) || `No similar ${isMovie ? "Movies" : "Shows"} available`}
         </div>
      </DetailContainer>
   );
}
