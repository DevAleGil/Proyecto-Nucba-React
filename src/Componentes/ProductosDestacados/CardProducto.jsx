import * as s from "./ProductosStyled";

export const CardProducto = ({ titulo, img }) => {
  return (
    <s.CardProducto>
      <img src={`/imgs/${img}`} alt="" />
      <button>{titulo}</button>
    </s.CardProducto>
  );
};
