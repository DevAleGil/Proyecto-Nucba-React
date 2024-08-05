import styled from "styled-components";
import { Header } from "../../Componentes/Header/Header";
import { Footer } from "../../Componentes/Footer/Footer";

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  height: auto;

  h2 {
    font-size: 1.5rem;
  }
`;

const Formulario = styled.form`
  flex-direction: column;
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: var(--color-3);
  border-radius: 1rem;
  max-width: 350px;
  width: 100%;

  input,
  textarea {
    border: 1px solid var(--color-1);
    padding: 0.5rem;
  }

  @media (max-width: 400px) {
    max-width: 300px;
  }
`;

const BtnForm = styled.button`
  width: 350px;
  padding: 0.5rem;
  border: none;
  background-color: var(--color-1);
  color: var(--color-2);
  font-size: 1rem;
  cursor: pointer;
  @media (max-width: 400px) {
    max-width: 300px;
  }
`;

export const Contacto = () => {
  return (
    <>
      <Header />
      <ContainerForm>
        <h2>Contáctanos</h2>
        <Formulario action="#">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="email" placeholder="Email" />
          <input type="texto" placeholder="Asunto" />
          <textarea
            placeholder="Cuéntanos en que podemos ayudarte..."
            rows="10"
            cols="10"
          ></textarea>
          <BtnForm>Enviar</BtnForm>
        </Formulario>
      </ContainerForm>
      <Footer />
    </>
  );
};
