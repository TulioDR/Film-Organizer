import ScrollButtons from "./ScrollButtons(Not Used)";
export default function HomeSlider({ large, children }) {
   return (
      <section className="relative flex overflow-x-hidden group">
         <div
            className={
               !large
                  ? "slide-js overflow-x-auto pl-1 flex hide-scrollbar space-x-3"
                  : "slide-js overflow-x-auto pl-1 pb-2 grid grid-flow-col grid-rows-2 gap-3 hide-scrollbar"
            }
            style={{ scrollBehavior: "smooth" }}
         >
            {children}
         </div>
         <ScrollButtons />
      </section>
   );
}
