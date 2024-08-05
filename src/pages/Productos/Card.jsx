import styled from "styled-components"


const CardContainer = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 10px;    
    width: 250px;
    height: auto;
    border-radius: 1rem;
    padding: .5rem;

    &:hover{
      box-shadow: .5rem .5rem 1rem var(--color-3);
    }
    

    img{
      width: 250px;
      border-radius: 1rem;
    }

    h3{
      text-align: center;
      font-size: 1rem;
    }

    span{
      font-weight: bold;
      font-size: 1rem;
    }
    

    button{
        width: 90%;
        padding: 0.8rem;
        border: none;
        background-color: var(--color-3);
        color: var(--color-2);
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
    }
`

export const Card = ({img,title,price}) => {
  return (
    <CardContainer>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <span>{price}</span>
        <button>Agregar al carrito</button>
      
    </CardContainer>
  )
}


