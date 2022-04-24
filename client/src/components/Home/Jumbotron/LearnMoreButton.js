import { useHistory } from "react-router-dom";

export default function LearnMoreButton({ id }) {
   const history = useHistory();
   const getInfo = () => history.push(`/media-details/movie/${id}`);

   return (
      <button
         onClick={getInfo}
         className="py-2 px-3 bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none"
      >
         Learn More
      </button>
   );
}
