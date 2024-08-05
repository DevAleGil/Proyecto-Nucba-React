import styled from "styled-components";
import { Footer } from "../../Componentes/Footer/Footer";
import { Header } from "../../Componentes/Header/Header";

const ContainerAbout = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 50px;
  height: auto;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2.5rem;
    flex-wrap: wrap;
  }

  p {
    max-width: 900px;
    text-align: justify;
    font-size: 1rem;
    line-height: 1.5rem;
    

    @media (max-width: 900px) {
      max-width: 700px;
    }
    @media (max-width: 700px) {
      max-width: 400px;
      margin: 1rem;
    }
  }

  h3{
    font-size: 1.2rem;
    text-align: center;
    font-style: italic;
    margin-top: 30px;
  }

  img {
    width: 250px;
    border-radius: 1rem;
    
  }
`;

export const SobreNosotros = () => {
  return (
    <>
      <Header />
      <ContainerAbout>
        <h2>¿Quienes somos?</h2>
        <p>
          Óptica Tokio Visión se encuentra en el centro de la ciudad de La
          Plata. Atendida y dirigida por sus dueños, Juliana y Eduardo, ambos
          con una basta experiencia en el rubro y con el fin de brindarle a la
          población un espacio donde satisfacer las necesidades visuales y
          estáticas de sus clientes. Nuestro establecimiento cuenta con
          un taller óptico, donde confeccionamos tus anteojos, un gabinete de
          contactología, destinado a la adaptación de diversos tipos de lentes
          de contacto y el salón principal donde serás recibido al visitarnos.
          Además, encontrarás una gran variedad de monturas para tus anteojos
          recetados, excelentes marcas y diseños en anteojos de sol y toda la
          varierdad de cristales y lentes de contacto, de todas las marcas y con
          los mejores precios del mercado.
        </p>
        <h3>Visitanos, y dale claridad y estilo a tus ojos!!!</h3>
        <div>
          <img src="/imgs/Frente.jpg" alt="" />
          <img src="/imgs/Gabinete Contactologia.jpg" alt="" />
          <img src="/imgs/Taller.jpg" alt="" />
        </div>
      </ContainerAbout>
      <Footer />
    </>
  );
};
