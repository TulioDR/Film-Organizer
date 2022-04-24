import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export default function GoggleBtn() {
   const history = useHistory();
   const dispatch = useDispatch();

   const googleSuccess = async (res) => {
      const result = res?.profileObj;
      const token = res?.tokenId;
      try {
         dispatch({ type: "AUTH", data: { result, token } });
         history.push("/home");
      } catch (error) {
         console.log(error);
      }
   };

   const googleFailure = () => {
      console.log("Google Sign in Failed");
   };
   return (
      <GoogleLogin
         clientId="477654355656-l2v31v5616elp9jnaltohi7ntdou0ueo.apps.googleusercontent.com"
         cookiePolicy="single_host_origin"
         buttonText="CONTINUE WITH GOOGLE"
         className="w-full"
         onSuccess={googleSuccess}
         onFailure={googleFailure}
      />
   );
}
