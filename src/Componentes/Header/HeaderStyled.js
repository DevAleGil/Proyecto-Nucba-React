import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    border-radius: 50%;
    width: 100px;
    margin: 0.5rem 0;
  }
`;

export const HeaderParrafo = styled.div`
  width: 100%;
  background-color: var(--color-3);
  padding: 10px;

  p {
    color: var(--color-2);
    text-align: center;
    font-size: 1rem;

    @media (max-width: 720px) {
      font-size: 0.8rem;
    }
  }
`;

export const HeaderPrincipal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 550px;
  background-color: var(--color-1);
  padding: 0.5rem;

  div {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  @media (max-width: 720px) {
    gap: 150px;
  }
`;

export const IconMobile = styled.div`
  font-size: 32px;

  svg {
    color: var(--color-2);
    display: none;
    @media (max-width: 720px) {
      display: block;
    }
  }
`;

export const HeaderNavbar = styled.nav`
  width: 100%;
  max-width: 1100px;
  background-color: var(--color-2);
  border-bottom: 2px solid var(--color-4);
  border-top: 2px solid var(--color-4);
  margin-top: 1rem;
  padding: 10px;

  @media (max-width: 1100px) {
    max-width: 700px;
  }
  @media (max-width: 720px) {
    margin-top: 0;
    border: none;
    background-color: var(--color-3);
    display: ${({ openMenu }) => (openMenu ? "flex" : "none")};
    height: 70vh;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 100px;
    @media (max-width: 1100px) {
      gap: 50px;
    }

    @media (max-width: 720px) {
      flex-direction: column;
    }
    


  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: var(--color-3);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: var(--color-4);
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 720px) {
    color: var(--color-2);
  }
`;
