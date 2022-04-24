export default function UserWarning({ close, logIn }) {
   return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 text-white z-50 grid place-content-center p-6">
         <div className="p-5 rounded-lg bg-gray max-w-full shadow-material">
            <div className="text-lg mb-3">
               Log in first to save movies and TV shows into your lists.
            </div>
            <div className="flex justify-end space-x-3">
               <button
                  onClick={close}
                  className="pl-2 pr-3 py-2 rounded-md bg-red-900 focus:outline-none flex items-center"
               >
                  <span className="material-icons mr-2">arrow_back</span>
                  <span>Cancel</span>
               </button>
               <button
                  onClick={logIn}
                  className="pl-2 pr-3 py-2 rounded-md bg-purple focus:outline-none flex items-center"
               >
                  <span className="material-icons mr-2">login</span>
                  <span>Log In</span>
               </button>
            </div>
         </div>
      </div>
   );
}
