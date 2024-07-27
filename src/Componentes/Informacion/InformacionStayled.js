import styled from "styled-components";
import { Button } from "../UI/Button/Button";

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
      font-size: 0.8rem;
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
    text-align: center;
    @media (max-width: 720px) {
      font-size: 0.8rem;
    }
  }
`;

export const ButtonInformacion = styled(Button)`
  margin-top: 50px;
  position: relative;
`;
