import ScrollContainer from "react-indiana-drag-scroll";

export default function UpScroller({ children }) {
   return (
      <ScrollContainer
         className="grid grid-flow-col grid-rows-2 gap-4 py-1 scroller-scrollbar w-full"
         horizontal={true}
         vertical={false}
         hideScrollbars={false}
      >
         {children}
      </ScrollContainer>
   );
}
