/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts";
import { MenuLAteral } from "./shared/components";


export const App = () => {
  return (
  <AppThemeProvider>
    <BrowserRouter>
      <MenuLAteral>
       <AppRoutes />
      </MenuLAteral>
    </BrowserRouter>
      </AppThemeProvider>
  );
}