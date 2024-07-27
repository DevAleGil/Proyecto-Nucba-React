import * as s from "./FooterStyled";

import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { TituloFooter } from "./TituloFooter";

export const Footer = () => {
  return (
    <s.SectionFooter>
      <s.FooterPricipal>
        <s.FooterContactos>
          <TituloFooter titulo="Contactos" />
          <li>
            <HiOutlinePhone size="20px" /> 221-4276565
          </li>
          <hr />
          <li>
            <a href="#">
              <HiOutlineMail size="20px" /> opticatokiovision@gmail.com
            </a>
          </li>
          <hr />
          <li>
            <a href="https://www.instagram.com/tokiovision?igsh=MWt5N2c4NnVqdGw4Mg==">
              <FaInstagram size="20px" /> @tokiovision
            </a>
          </li>
          <hr />
          <li>
            <a href="https://www.facebook.com/p/Tokio-Visi%C3%B3n-100063545530301/?locale=es_LA">
              <FaFacebookF size="20px" />
              Tokio-Visión
            </a>
          </li>
          <hr />
          <li>
            <a href="#">
              <FaWhatsapp size="20px" /> 221 601-7558
            </a>
          </li>
        </s.FooterContactos>
        <s.FooterInfo>
          <TituloFooter titulo="Horarios" />
          <p>Lunes a Viernes de 9 a 17hs</p>
          <p>Sábados de 9 a 13hs</p>
          <TituloFooter titulo="Dirección" />
          <p>Diagonal 73 N 1627</p>
          <p>Buenos Aires, La Plata</p>
        </s.FooterInfo>
        <s.FooterData>
          <TituloFooter titulo="Información" />
          <ul>
            <a href="#">
              <li>Preguntas Frecuentes</li>
            </a>
            <a href="#">
              <li>Obras Sociales</li>
            </a>
            <a href="">Formas de pago</a>
          </ul>
        </s.FooterData>
      </s.FooterPricipal>

      <s.FooterArticle>
        <p>Hecho por Alejandro Gil</p>
      </s.FooterArticle>
    </s.SectionFooter>
  );
};
