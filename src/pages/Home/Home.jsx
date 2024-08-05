import { Footer } from "../../Componentes/Footer/Footer"
import { Header } from "../../Componentes/Header/Header"
import { Hero } from "../../Componentes/Hero/Hero"
import InfoCompras from "../../Componentes/InfoCompras/InfoCompras"
import { Informacion } from "../../Componentes/Informacion/Informacion"
import { ProductosDestacados } from "../../Componentes/ProductosDestacados/ProductosDestacados"


export const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>    
    <Informacion/>
    <InfoCompras/>
    <ProductosDestacados/>   
    <Footer/>
    

      
    </>
  )
}


