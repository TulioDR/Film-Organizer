export default function JumboBtnsContainer({ isAnimating, children }) {
   return (
      <div
         className={`flex space-x-2 mt-5 transform transition-all duration-300 ${
            isAnimating ? "translate-y-full opacity-0" : "delay-500"
         }`}
      >
         {children}
      </div>
   );
}
