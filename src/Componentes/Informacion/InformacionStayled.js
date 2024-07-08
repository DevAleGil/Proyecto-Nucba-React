import styled from "styled-components";

export const InformacionContainer = styled.section`
  background-image: url("imgs/img-info.avif");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 100px;
    margin-bottom: 30px;
    color: var(--color-2);
    position: relative;

    @media (max-width: 720px) {
      font-size: 1rem;
    }
    @media (max-width: 540px) {
      font-size: .8rem;
    }
    @media (max-width: 400px) {
      font-size: 0.7rem;
    }
  }

  p {
    font-size: 1rem;
    color: var(--color-2);
    position: relative;
    font-weight: bold;
    @media (max-width: 720px) {
      font-size: 0.9rem;
    }
    @media (max-width: 540px) {
      font-size: 0.7rem;
    }
    @media (max-width: 400px) {
      font-size: 0.5rem;
    }
  }

  button {
    margin-top: 50px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color:var(--color-4);
    color: var(--color-2);
    font-weight: bold;
    position: relative;
  }
`;
