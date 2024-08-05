import { createContext, useState } from "react";

export const Contexto = createContext();

export const ContextoProvaider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Contexto.Provider value={{ openMenu, handleOpenMenu }}>
      {children}
    </Contexto.Provider>
  );
};
