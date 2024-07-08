import * as s from "./HeaderStyled";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
export const Header = () => {
  return (
    <s.HeaderContainer>
      <s.HeaderParrafo>
        <p>
          Luneas a Viernes de 9 a 17hs y Sábados de 9 a 13hs - Diagonal 73 Nº
          1627, La Plata.
        </p>
      </s.HeaderParrafo>

      <s.HeaderPrincipal>
        <img src={`/imgs/Logo.jpg`} alt="" />

        <div>
          <IoMenu size="32px" className="menu" />
          <a href="#">
            <FaCartShopping size="32px" />
          </a>
        </div>
      </s.HeaderPrincipal>

      <s.HeaderNavbar>
        <ul>
          <a href="">
            <li>Inicio</li>
          </a>
          <a href="">
            <li>Productos</li>
          </a>
          <a href="">
            <li>Productos Destacados</li>
          </a>
          <a href="">
            <li>Contacto</li>
          </a>
        </ul>
      </s.HeaderNavbar>
    </s.HeaderContainer>
  );
};
