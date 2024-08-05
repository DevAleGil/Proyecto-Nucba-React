import * as s from "./HeaderStyled";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { Navbar } from "./Navbar";
import { useContext } from "react";
import { Contexto } from "../../MiContexto/Contexto";

export const Header = () => {
  const { openMenu, handleOpenMenu } = useContext(Contexto);

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
          <s.IconMobile>
            <IoMenu onClick={handleOpenMenu} />
          </s.IconMobile>

          <a href="#">
            <FaCartShopping size="32px" />
          </a>
        </div>
      </s.HeaderPrincipal>

      <s.HeaderNavbar openMenu={openMenu}>
        <Navbar />
      </s.HeaderNavbar>
    </s.HeaderContainer>
  );
};
