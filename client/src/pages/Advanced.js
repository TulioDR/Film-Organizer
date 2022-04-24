import Title from "../components/Title";
import Form from "../components/AdvancedSearch/Form";
import { useEffect } from "react";

export default function Advanced() {
   useEffect(() => {
      window.scrollTo({ top: 0 });
   }, []);
   return (
      <>
         <Title>Advanced Search</Title>
         <Form />
      </>
   );
}
