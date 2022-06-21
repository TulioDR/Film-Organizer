import { SelectedMediaProvider } from "../context/SelectedMediaContext";
import { SidebarExtendedProvider } from "../context/SidebarExtendedContext";
import ThemeProvider from "../context/ThemeContext";
import { ValueProvider } from "../context/ValueContext";

export default function Providers({ children }) {
   return (
      <SidebarExtendedProvider>
         <ValueProvider>
            <ThemeProvider>
               <SelectedMediaProvider>{children}</SelectedMediaProvider>
            </ThemeProvider>
         </ValueProvider>
      </SidebarExtendedProvider>
   );
}
