export default function Title({ selectedId, children }) {
   return (
      <h1
         className={`text-center text-4xl mb-5 text-dark ${
            selectedId
               ? "transform translate-y-full opacity-0 duration-300"
               : ""
         }`}
      >
         {children}
      </h1>
   );
}
