import CardContainer from "./CardContainer";
import CardPoster from "./CardPoster";
import CardBack from "./CardBack";
import CardBackPoster from "./CardBackPoster";
import CardInfo from "./CardInfo";
import CardOverview from "./CardOverview";
import CardBtnsContainer from "./CardBtnsContainer";
import CardMoreInfoBtn from "./CardMoreInfoBtn";
import CardBookmark from "./CardBookmark";

import { useState } from "react";
import { useHistory } from "react-router-dom";
import useBookmark from "../../hooks/useBookmark";

export default function Card({
   lists,
   cardInfo,
   mediaType,
   openSaveToListModal,
   openWarning,
   selectedId,
   setSelectedId,
   setSelectedImg,
}) {
   const { id, title, name, poster_path, backdrop_path } = cardInfo;
   const { release_date, first_air_date, vote_average, overview } = cardInfo;

   const [showInfo, setShowInfo] = useState(false);
   const toggleInfo = () => setShowInfo(!showInfo);

   const [isSaved] = useBookmark(id, mediaType, lists);

   const history = useHistory();
   const getMoreInfo = () => {
      history.push(`/media-details/${mediaType}/${id}`);
   };

   const user = JSON.parse(localStorage.getItem("profile"));
   const checkUser = () => {
      if (user) openSaveToListModal(id, mediaType, poster_path, title || name);
      else openWarning();
   };

   return (
      <CardContainer selectedId={selectedId} id={id}>
         <CardPoster posterPath={poster_path} toggleInfo={toggleInfo} />
         <CardBack {...{ showInfo }}>
            <CardBackPoster
               backPoster={backdrop_path}
               toggleInfo={toggleInfo}
            />
            <CardInfo
               title={title || name}
               year={release_date || first_air_date}
               voteAverage={vote_average}
            />
            <CardOverview overview={overview || "N/A"} />
            <CardBtnsContainer>
               <CardMoreInfoBtn
                  setSelectedId={setSelectedId}
                  setSelectedImg={setSelectedImg}
                  id={id}
                  poster_path={poster_path}
                  getMoreInfo={getMoreInfo}
                  toggleInfo={toggleInfo}
               />
               <CardBookmark isSaved={isSaved} checkUser={checkUser} />
            </CardBtnsContainer>
         </CardBack>
      </CardContainer>
   );
}
