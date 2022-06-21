export default function JumbotronTitle({ children, isAnimating }) {
   return (
      <h1
         className={`text-5xl 2xl:text-7xl transform transition-all font-medium duration-500 ease-in-out ${
            isAnimating ? "translate-y-full opacity-0" : ""
         }`}
      >
         {children}
      </h1>
   );
}
