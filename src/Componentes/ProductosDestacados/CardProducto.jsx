import * as s from "./ProductosDestacadosStyled"

export const CardProducto = ({ titulo, img}) => {
  return (
    <s.CardProducto>
      <img src={`/imgs/${img}`} alt="" />
      <s.ButtonCard>{titulo}</s.ButtonCard>
    </s.CardProducto>
  );
};
