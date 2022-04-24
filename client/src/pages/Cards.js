import Card from "../components/Card/Card";
import Title from "../components/Title";
import CardsGrid from "../components/Card/CardsGrid";
import LoadMoreBtn from "../components/Card/LoadMoreBtn";
import AddToListModal from "../components/Modals/AddToListModal";

import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import useCardsInformation from "../hooks/useCardsInformation";
import Loading from "../components/Loading";
import useSaveToList from "../hooks/useSaveToList";
import UserWarning from "../components/Modals/UserWarning";
import NoCardsFounded from "../components/Card/NoCardsFounded";
import useUserWarning from "../hooks/useUserWarning";

export default function Cards() {
   const { lists } = useSelector((state) => state.lists);
   const { mediaType } = useParams();

   const [cards, title, isLoading, page, loadMoreCards, isLoadingMore] =
      useCardsInformation();

   const [
      showSaveToListModal,
      currentData,
      openSaveToListModal,
      closeSaveToListModal,
   ] = useSaveToList();
   const [showWarning, openWarning, closeWarning, goToLogin] = useUserWarning();

   useEffect(() => {
      window.scrollTo({ top: 0 });
   }, []);

   return (
      <>
         <Title>{title}</Title>
         {isLoading ? (
            <Loading />
         ) : (
            <>
               <CardsGrid>
                  {cards?.map((cardInfo, index) => (
                     <Card
                        key={index}
                        lists={lists}
                        cardInfo={cardInfo}
                        mediaType={mediaType}
                        openSaveToListModal={openSaveToListModal}
                        openWarning={openWarning}
                     />
                  )) || <NoCardsFounded {...{ mediaType }} />}
               </CardsGrid>
               {isLoadingMore ? (
                  <div className="w-full h-28 flex justify-center items-center">
                     <Loading />
                  </div>
               ) : (
                  <LoadMoreBtn {...{ page, loadMoreCards, cards }} />
               )}
            </>
         )}

         <AddToListModal
            {...{ showSaveToListModal, closeSaveToListModal, currentData }}
         />
         {showWarning && <UserWarning close={closeWarning} logIn={goToLogin} />}
      </>
   );
}
