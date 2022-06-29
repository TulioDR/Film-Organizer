import ScrollContainer from "react-indiana-drag-scroll";

export default function Scroller({ children }) {
   return (
      <ScrollContainer
         className="flex pb-2 pt-1 pl-1 space-x-4 scroller-scrollbar"
         horizontal={true}
         vertical={false}
         hideScrollbars={true}
      >
         {children}
      </ScrollContainer>
   );
}
