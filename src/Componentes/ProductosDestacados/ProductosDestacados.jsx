import * as s from "./ProductosDestacadosStyled.js";
import { ProductosData } from "../../data/DataProductos.js";
import { CardProducto } from "./CardProducto.jsx";

export const ProductosDestacados = () => {
  return (
    <>
      <s.SectionProductos>
        <h2>Productos Destacados</h2>
        <s.ProductosContainer>
          {ProductosData.map((producto) => (
            <CardProducto key={producto.id} {...producto} />
          ))}
        </s.ProductosContainer>
      </s.SectionProductos>
    </>
  );
};
