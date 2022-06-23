import { SelectedPosterProvider } from "../context/SelectedPosterContext";
import { SidebarExtendedProvider } from "../context/SidebarExtendedContext";
import ThemeProvider from "../context/ThemeContext";
import { ValueProvider } from "../context/ValueContext";

export default function Providers({ children }) {
   return (
      <SidebarExtendedProvider>
         <ValueProvider>
            <ThemeProvider>
               <SelectedPosterProvider>{children}</SelectedPosterProvider>
            </ThemeProvider>
         </ValueProvider>
      </SidebarExtendedProvider>
   );
}
