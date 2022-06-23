import CardContainer from "./CardParts/CardContainer";
import CardPoster from "./CardParts/CardPoster";
import CardBack from "./CardParts/CardBack";
import CardBackPoster from "./CardParts/CardBackPoster";
import CardInfo from "./CardParts/CardInfo";
import CardOverview from "./CardParts/CardOverview";
import CardBtnsContainer from "./CardParts/CardBtnsContainer";
import CardMoreInfoBtn from "./CardParts/CardMoreInfoBtn";
import CardBookmark from "./CardParts/CardBookmark";

import { useState } from "react";
import useBookmark from "../../hooks/useBookmark";
import useGetMediaDetails from "../../hooks/useGetMediaDetails";

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

   const [getMoreInfo] = useGetMediaDetails({
      type: mediaType,
      selected: cardInfo,
   });

   const animatedGetMoreInfo = () => {
      toggleInfo();
      setSelectedImg(poster_path);
      setTimeout(() => setSelectedId(id), 300);
      setTimeout(getMoreInfo, 900);
   };

   const user = JSON.parse(localStorage.getItem("profile"));
   const checkUser = () => {
      if (user) openSaveToListModal(id, mediaType, poster_path, title || name);
      else openWarning();
   };

   return (
      <CardContainer selectedId={selectedId} layoutId={id}>
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
               <CardMoreInfoBtn animatedGetMoreInfo={animatedGetMoreInfo} />
               <CardBookmark isSaved={isSaved} checkUser={checkUser} />
            </CardBtnsContainer>
         </CardBack>
      </CardContainer>
   );
}
