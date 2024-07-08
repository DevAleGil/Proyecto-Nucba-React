import * as s from "./HeroStyled";

export const Hero = () => {
  return (
    <s.HeroSection>
      <s.HeroBox>
        <h1>Óptica Tokio Visión</h1>
        <h4>Óptica y Contactología</h4>
        <p>
          En Óptica Tokio Visión nos dedicamos a proporcionarte soluciones
          ópticas que van más allá de la corrección visual: cada visita es una
          oportunidad para descubrir la perfecta combinación de tecnología y
          estilo personalizado. Nuestro equipo de profesionales está comprometido en brindarte
          un servicio personalizado, asegurando que encuentres la
          combinación perfecta de funcionalidad y moda.
        </p>
      </s.HeroBox>

      <img src={`/imgs/Salon-optica.jpg`} alt="" />
    </s.HeroSection>
  );
};
