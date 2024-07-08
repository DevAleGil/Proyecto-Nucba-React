import styled from "styled-components";

export const SectionFooter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-1);
  margin-top: 50px;
`;

export const FooterPricipal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterContactos = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  hr {
    border: 1px solid var(--color-2);
    width: 100%;
  }

  h3 {
    font-size: 1.2rem;
    color: var(--color-3);
    margin: 10px 0;
  }

  li,
  a {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--color-2);
    padding: 4px;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  @media (max-width: 820px) {
    display: none;
  }

  h3 {
    font-size: 1.2rem;
    color: var(--color-3);
    margin: 10px 0;
  }

  p {
    color: var(--color-2);
  }
`;

export const FooterData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0;
  }
  li {
    font-size: 1rem;
    color: var(--color-2);
  }

  h3 {
    font-size: 1.2rem;
    color: var(--color-3);
    margin: 10px 0;
  }
`;
export const FooterArticle = styled.article`
  background-color: var(--color-3);
  text-align: center;
  width: 100%;
  margin-top: 20px;
  padding: 10px;

  p {
    color: var(--color-2);
    font-size: 1rem;
  }
`;
