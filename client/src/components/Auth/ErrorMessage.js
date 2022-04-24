export default function ErrorMessage({ showError, errorMessage }) {
   return (
      <div
         className={`absolute bottom-4 left-4 bg-red-900 text-white p-3 z-20 rounded-md transform duration-200 ${
            showError ? "translate-y-0" : "translate-y-32"
         }`}
      >
         {errorMessage}
      </div>
   );
}
