import { SidebarExtendedProvider } from "../context/SidebarExtendedContext";
import ThemeProvider from "../context/ThemeContext";
import { ValueProvider } from "../context/ValueContext";

export default function Providers({ children }) {
   return (
      <SidebarExtendedProvider>
         <ValueProvider>
            <ThemeProvider>{children}</ThemeProvider>
         </ValueProvider>
      </SidebarExtendedProvider>
   );
}
