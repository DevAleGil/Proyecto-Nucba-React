import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { SobreNosotros } from "../pages/Sobre Nosotros/SobreNosotros";

import { Contacto } from "../pages/Contacto/Contacto";
import { Productos } from "../pages/Productos/Productos";

export const RutasApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<SobreNosotros />} />
        <Route path="productos" element={<Productos />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={"Error 404"}></Route>
      </Routes>
    </BrowserRouter>
  );
};
