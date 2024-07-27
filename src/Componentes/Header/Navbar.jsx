export const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Inicio",
      href: "#",
    },
    {
      id: 2,
      title: "Sobre Nosotros",
      href: "#",
    },
    {
      id: 3,
      title: "Productos",
      href: "#",
    },
    {
      id: 4,
      title: "Productos Destacados",
      href: "#",
    },
    {
      id: 5,
      title: "Contacto",
      href: "#",
    },
  ];

  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.href}></a>
          {link.title}
        </li>
      ))}
    </ul>
  );
};
