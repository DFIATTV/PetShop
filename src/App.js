//import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/Index";
import Juguetes from "./scenes/juguetes/Index";
import Comida from "./scenes/comida/Index";
import Limpieza from "./scenes/limpieza/Index";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/PetShop" element={<Dashboard />} />
              <Route path="/Petshop/juguetes" element={<Juguetes />} />
              <Route path="/PetShop/comida" element={<Comida />} />
              <Route path="PetShop/limpieza" element={<Limpieza />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;