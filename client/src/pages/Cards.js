import Card from "../components/Card/Card";
import Title from "../components/Title";
import CardsGrid from "../components/Card/CardsGrid";
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
import { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import TransitionPoster from "../components/PageTransitions/TransitionPoster";
import CardSkeleton from "../components/Card/CardSkeleton";
import AnimatedButton from "../components/AnimatedButton";

const skeletonArray = [
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

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

   const [selectedId, setSelectedId] = useState(null);
   const [selectedImg, setSelectedImg] = useState(null);

   return (
      <>
         <Title selectedId={selectedId}>{title}</Title>
         <AnimateSharedLayout>
            <CardsGrid isLoading={isLoading}>
               {isLoading
                  ? skeletonArray.map((number) => <CardSkeleton key={number} />)
                  : cards?.map((cardInfo, index) => (
                       <Card
                          key={index}
                          lists={lists}
                          cardInfo={cardInfo}
                          mediaType={mediaType}
                          openSaveToListModal={openSaveToListModal}
                          openWarning={openWarning}
                          selectedId={selectedId}
                          setSelectedId={setSelectedId}
                          setSelectedImg={setSelectedImg}
                       />
                    )) || <NoCardsFounded {...{ mediaType }} />}
            </CardsGrid>

            <TransitionPoster
               selectedId={selectedId}
               selectedImg={selectedImg}
            />
         </AnimateSharedLayout>
         {isLoadingMore ? (
            <Loading />
         ) : (
            page < 5 &&
            cards.length % 20 === 0 && (
               <AnimatedButton onClick={loadMoreCards}>
                  Load More
               </AnimatedButton>
            )
         )}

         <AddToListModal
            {...{ showSaveToListModal, closeSaveToListModal, currentData }}
         />
         <UserWarning
            isModalOpen={showWarning}
            close={closeWarning}
            logIn={goToLogin}
         />
      </>
   );
}
