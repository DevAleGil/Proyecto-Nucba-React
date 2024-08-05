import styled from "styled-components"
import { Header } from "../../Componentes/Header/Header"
import { Card } from "./Card.jsx"
import { ListaProductos } from "./ListaProductos.js"
import {Footer} from '../../Componentes/Footer/Footer.jsx'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  
  h2{
    font-size: 1.5rem;
  }
`

const ContainerProductos = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    width: 100%;
    max-width: 1100px;
    margin-top: 50px;
    flex-wrap: wrap;

`

export const Productos = () => {
  return (
    <>
      <Header/>
      <Container>
      <h2>Nuestros productos</h2>
      <ContainerProductos>
        {ListaProductos.map((p) => (
          <Card key={p.id} {...p}/>
        ))}
      </ContainerProductos>
      </Container>
      <Footer/>
    </>
  )
}

