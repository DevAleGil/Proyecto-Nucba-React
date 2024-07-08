import styled from "styled-components";

export const SectionProductos = styled.section`
  background-color: var(--color-2);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
`;

export const ProductosContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CardProducto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    width: 300px;
    height: 300px;
    border-radius: 1rem;
  }

  button {
    width: 200px;
    border-radius: 10px;
    padding: 10px;
    border: none;
    margin: 20px 0;
    background-color: var(--color-4);
    color: var(--color-2);
    position: absolute;
    top: 230px;
    font-weight: bold;
  }
`;

