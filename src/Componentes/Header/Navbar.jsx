import { NavLinkStyled } from "./HeaderStyled";

export const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Inicio",
      path: "/",
    },
    {
      id: 2,
      title: "Sobre Nosotros",
      path: "/about",
    },
    {
      id: 3,
      title: "Productos",
      path: "/productos",
    },
    {
      id: 4,
      title: "Contacto",
      path: "/contacto",
    },
  ];

  return (
    <ul>
      {links.map((link) => (
        <NavLinkStyled key={link.id} to={link.path}>
          {link.title}
        </NavLinkStyled>
      ))}
    </ul>
  );
};
