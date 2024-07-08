import * as s from "./ProductosStyled.js";
import { ProductosData } from "../../data/DataProductos.js";
import { CardProducto } from "./CardProducto.jsx";

export const Productos = () => {
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
