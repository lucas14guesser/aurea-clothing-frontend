import styled from "styled-components";

export const ListaPedidos = styled.div`
  display: flex;
  width: 90%;

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    background-color: #FFFFFF;
    color: #A87826;
    margin: 4rem 0;
  }

  thead {
    background: #A87826;
    color: #FFFFFF;
  }


  th, td {
    padding: 12px 15px;
    border: 1px solid #A87826;
  }

  th {
    text-transform: uppercase;
  }

  td {
    color: #000000;
  }

    @media (max-width: 360px) {
      width: 97%;

      table {
        margin: 2rem 0;
      }
      
      th, td {
        padding: 3px;
        font-size: .5rem;
      }
    }

    @media (min-width: 361px) and (max-width: 429px) {
      width: 97%;

      table {
        margin: 2rem 0;
      }
      
      th, td {
        padding: 3px;
        font-size: .5rem;
      }
    }

  @media (min-width: 430px) and (max-width: 520px) {
    width: 97%;

    table {
      margin: 2rem 0;
    }
    
    th, td {
      padding: 5px;
      font-size: .6rem;
    }
  }
`
export const ContainerPedidoParams = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
background: #FFF;
border: 1px solid #A87826;
gap: 2rem;
width: 50%;
`
export const ContainerPedidoGeralInfo = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
flex-wrap: wrap;
background: #FFF;
gap: 1rem;

    @media (min-width: 430px) and (max-width: 520px) {
        flex-direction: column;
        gap: 3rem;
    }
`
export const ContainerPedidoInfo = styled.div`
display: flex;
flex-direction: column;
background: #FFF;
gap: 1rem;
border: 1px solid #A87826;
padding: .5rem 2rem;
width: 25rem;
height: 20rem;

    @media (min-width: 430px) and (max-width: 520px) {
        width: 19rem;
        height: 15rem;
    }
`
export const TxtPedidoInfo = styled.p`
display: flex;
flex-direction: row;
align-items: center;
font-size: 1rem;
font-family: "Poppins", sans-serif;
gap: .5rem;

    @media (min-width: 430px) and (max-width: 520px) {
        font-size: .7rem;
    }
`
export const FlexColumnSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
`