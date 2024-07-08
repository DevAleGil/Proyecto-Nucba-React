import { Productos } from "./Componentes/ProductosDestacados/Productos";
import { Hero } from "./Componentes/Hero/Hero";
import { Informacion } from "./Componentes/Informacion/Informacion";
import { GlobalStyles } from "./StyledGlobal/StyledGlobal.js";
import { Header } from "./Componentes/Header/Header.jsx";
import { Footer } from "./Componentes/Footer/Footer.jsx";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Informacion />
      <Productos />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
