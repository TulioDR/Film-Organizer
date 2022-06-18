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
import { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { getPoster } from "../utils/getPosters";

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

   const setEverything = () => {
      setSelectedId(null);
      setSelectedImg(null);
   };
   return (
      <>
         <Title>{title}</Title>
         {isLoading ? (
            <Loading />
         ) : (
            <>
               <AnimateSharedLayout>
                  <CardsGrid>
                     {cards?.map((cardInfo, index) => (
                        <Card
                           key={index}
                           lists={lists}
                           cardInfo={cardInfo}
                           mediaType={mediaType}
                           openSaveToListModal={openSaveToListModal}
                           openWarning={openWarning}
                           setSelectedId={setSelectedId}
                           setSelectedImg={setSelectedImg}
                        />
                     )) || <NoCardsFounded {...{ mediaType }} />}
                  </CardsGrid>
                  <AnimatePresence>
                     {selectedId && (
                        <motion.div
                           layoutId={selectedId}
                           onClick={setEverything}
                           className="fixed z-50 top-20 left-66"
                           style={{ height: "calc(100vh - 7.5rem)" }}
                           transition={{ duration: 0.8 }}
                        >
                           <motion.img
                              src={getPoster(selectedImg, "md", true)}
                              className="rounded-lg h-full"
                           />
                        </motion.div>
                     )}
                  </AnimatePresence>
               </AnimateSharedLayout>
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
