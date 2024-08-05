import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;  
  display: flex; 
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
  

  @media (max-width: 720px) {
    margin: 10px;
    
  }

  img {
    width: 400px;
    border-radius: 50%;
    @media (max-width: 1000px) {
      width: 300px;
    }
    @media (max-width: 790px) {
      display: none;
    }
  }
`;

export const HeroBox = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;

  @media (max-width: 1000px) {
    width: 450px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    @media (max-width: 1000px) {
      font-size: 1.5rem;
    }
  }

  h4 {
    font-size: 1rem;

  }

  p {
    width: 500px;
    text-align: justify;
    font-size: 1.2rem;
    margin-top: 30px;
    
    

    @media (max-width: 1000px) {
      width: 400px;
      font-size: 1rem;
    }
    @media (max-width: 790px) {
      width: 500px;
    }
    @media (max-width: 530px) {
      width: 350px;
      font-size: 0.8rem;
    }
  }
`;
