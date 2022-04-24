import ScrollContainer from "react-indiana-drag-scroll";

export default function UpScroller({ children }) {
   return (
      <ScrollContainer
         className="grid grid-flow-col grid-rows-2 gap-3 pb-2 scroller-scrollbar"
         horizontal={true}
         vertical={false}
         hideScrollbars={false}
      >
         {children}
      </ScrollContainer>
   );
}
