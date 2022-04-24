import { useState } from "react";

export default function ScrollButtons() {
   const [showLeftBtn, setShowLeftBtn] = useState(false);
   const [showRightBtn, setShowRightBtn] = useState(true);
   const scroll = (e, direction) => {
      const sliderContainer = e.target.closest("section");
      const slider = sliderContainer.querySelector("div.slide-js");
      if (direction === "right") {
         slider.scrollBy({ left: 670 });
         setShowLeftBtn(true);
         const { clientWidth, scrollLeft, scrollWidth } = slider;
         if (clientWidth + scrollLeft >= scrollWidth - 670)
            setShowRightBtn(false);
      }
      if (direction === "left") {
         slider.scrollBy({ left: -670 });
         setShowRightBtn(true);
         if (slider.scrollLeft <= 670) setShowLeftBtn(false);
      }
   };
   return (
      <>
         {showLeftBtn && (
            <div
               onClick={(e) => scroll(e, "left")}
               className="absolute left-0 h-full w-12 bg-gradient-to-r from-black to-transparent cursor-pointer duration-100 transform -translate-x-full group-hover:translate-x-0"
            >
               <span className="material-icons text-white h-full w-full flex justify-center items-center duration-75 hover:text-3xl">
                  arrow_back_ios_new
               </span>
            </div>
         )}
         {showRightBtn && (
            <div
               onClick={(e) => scroll(e, "right")}
               className="absolute right-0 h-full w-12 bg-gradient-to-l from-black to-transparent cursor-pointer duration-100 transform translate-x-full group-hover:translate-x-0"
            >
               <span className="material-icons text-white h-full w-full flex justify-center items-center duration-75 hover:text-3xl">
                  arrow_forward_ios
               </span>
            </div>
         )}
      </>
   );
}
