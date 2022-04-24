export default function CardContainer({ children }) {
   const animationTypes = ["up-right", "up-left", "down-right", "down-left"];
   function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
   }
   const animation = animationTypes[randomIntFromInterval(0, 3)];
   return (
      <article
         data-aos={`fade-${animation}`}
         className="w-full aspect-w-2 aspect-h-3 relative overflow-hidden rounded-md shadow-material"
      >
         {children}
      </article>
   );
}
