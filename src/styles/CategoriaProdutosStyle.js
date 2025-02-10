import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCategoriaProduto = styled.div `
display: flex;
flex-direction: row;
align-items: flex-start;
margin: 4rem 4rem 4rem 10rem;

    @media (max-width: 360px) {
      margin: 1rem 1rem .5rem 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      margin: 1rem 1rem .5rem 1rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    margin: 2rem 2rem 1rem 2rem;
  }
`
export const ContainerCategoria= styled.div `
display: flex;
flex-direction: column;
gap: .7rem;
max-width: 17%;

    @media (max-width: 360px) {
      gap: .5rem;
      align-items: center;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      gap: .5rem;
      align-items: center;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    gap: .5rem;
    align-items: center;
  }
`
export const ContainerFiltros = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
margin-top: 1rem;

    @media (max-width: 360px) {
      gap: .5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      gap: .5rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    gap: .5rem;
  }
`
export const Filtros = styled.div`
display: flex;
flex-direction: column;
padding: .7rem 0;
gap: .5rem;
`
export const TxtFiltroMaxMin = styled.p`
font-size: 1rem;
font-family: "Poppins", sans-serif;
margin: 2.2rem 0 0 0;
color: #A87826;

    @media (max-width: 360px) {
    font-size: .7rem;
    margin: 1rem 0 0 1.3rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    font-size: .7rem;
    margin: 1rem 0 0 1.3rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: .7rem;
    margin: 1rem 0 0 1.3rem;
  }
`
export const ContainerProduto = styled.div `
display: flex;
flex-direction: column;
flex-wrap: wrap;
gap: 1rem;
width: 90%;
align-self: center;
border-left: 1px solid #A87826;
padding: 0 0 0 1rem;
margin: 0 0 0 1rem;

    @media (max-width: 360px) {
    padding: 0 0 0 .3rem;
    margin: 0 0 0 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    padding: 0 0 0 .3rem;
    margin: 0 0 0 1rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    padding: 0 0 0 .5rem;
    margin: 0 0 0 1rem;
  }
`
export const ContainerProdutoProduto = styled.div `
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 2rem;
padding: .7rem;
`
export const ListaItemProduto = styled.li`
display: flex;
flex-direction: column;
list-style: none;
text-align: center;
background: #FFFFFF;
border-radius: 8px;
padding: .7rem;
cursor: pointer;

    @media (max-width: 360px) {
    width: 13rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    width: 13rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    width: 13rem;
  }
`
export const ContainerEspecificacoesProduto = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;
margin-top: .5rem;
align-items: center;
`
export const NomeProduto = styled.p`
font-size: 1.1rem;
width: 15.95rem;
white-space: wrap;

    @media (max-width: 360px) {
    font-size: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    font-size: .7rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: .7rem;
  }

`
export const ButtonProduto = styled.button`
width: 15rem;
padding: .5rem;
border: 1px solid #A87826;
border-radius: 12px;
background: #A87826;
color: #FFFFFF;
cursor: pointer;
font-size: 1.1rem;
    &:hover {
        transition: 0.3s;
        background: #FFFFFF;
        color: #A87826;
    }

    @media (max-width: 360px) {
        width: 10rem;
        font-size: .7rem;
        padding: .5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: 10rem;
        font-size: .7rem;
        padding: .5rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
        width: 10rem;
        font-size: .7rem;
        padding: .5rem;
  }
`
export const ContainerButtonsFunctions = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
`
export const ButtonAdicionarCarrinho = styled.button`
background: #FFFFFF;
border: none;
color: #A87826;
font-size: 1.5rem;
cursor: pointer;
    &:hover {
    transition: 0.3s;
    color: #C2954A;
}

    @media (max-width: 360px) {
    font-size: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    font-size: 1rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: 1rem;
  }
`
export const FiltragemDiv = styled.div`
display: flex;
flex-direction: column;
gap: .7rem;
`
export const Filtragem = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
gap: .15rem;
`
export const BtnFiltroCor = styled.button`
width: 2.1rem;
height: 2.1rem;
border: 1px solid #A87826;
border-radius: 50%;

    @media (max-width: 360px) {
    width: 1.2rem;
    height: 1.2rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    width: 1.2rem;
    height: 1.2rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`
export const BtnFiltroTamanho = styled.button`
width: 2rem;
height: 2rem;
border: 1px solid #A87826;
border-radius: 50%;
background: #FFF;
color: #A87826;
transition: 0.3s ease;
    &:hover {
        background: #A87826;
        color: #FFF;
    }

    @media (max-width: 360px) {
        width: 1.3rem;
        height: 1.3rem;
        font-size: .4rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: 1.3rem;
        height: 1.3rem;
        font-size: .4rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
        width: 1.5rem;
        height: 1.5rem;
        font-size: .5rem;
  }
`
export const LinkProduto = styled(Link)`
width: 15rem;
padding: .7rem;
border: 1px solid #A87826;
text-align: center;
border-radius: 12px;
background: #A87826;
text-decoration: none;
color: #FFFFFF;
cursor: pointer;
font-size: 1.1rem;
    &:hover {
        transition: 0.3s;
        background: #FFFFFF;
        color: #A87826;
    }

    @media (max-width: 360px) {
    font-size: .7rem;
    width: 10rem;
    padding: .5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    font-size: .7rem;
    width: 10rem;
    padding: .5rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: .7rem;
    width: 10rem;
    padding: .5rem;
  }
`
export const FlexColumnFiltragem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const LabelFiltragem = styled.label`
font-size: 1rem;
color: #A87826;
text-transform: none;
margin: .5rem 0;

    @media (max-width: 360px) {
    font-size: .5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    font-size: .5rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: .7rem;
  }
`
export const InputFiltragem = styled.input`
padding: .5rem;
width: 6rem;
border: 1px solid #A87826;
border-radius: 8px;
    &:focus {
        outline-color: #A87826;
        outline-width: thin;
        font-family: "Poppins", sans-serif;
    }
    &::placeholder {
        color: #000000;
        opacity: 0.5;
        font-family: "Poppins", sans-serif;
    }

    @media (max-width: 360px) {
    width: 2.5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    width: 2.5rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    width: 2.5rem;
  }
`
export const ButtonRemoveFilter = styled.button`
width: 15rem;
padding: .5rem;
margin-top: 1rem;
border: 1px solid #A87826;
cursor: pointer;
border-radius: 8px;
background: #A87826;
color: #FFFFFF;
font-size: 1.1rem;
    &:hover {
        transition: 0.3s;
        background: #FFFFFF;
        color: #A87826;
    }

    @media (max-width: 360px) {
    font-size: .5rem;
    width: 5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    font-size: .5rem;
    width: 5rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: .7rem;
    width: 7rem;
  }
`
export const DivColumn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: .3rem;
`
export const InputMinMax = styled.input`
padding: .5rem;
width: 3rem;
border: 1px solid #A87826;
border-radius: 8px;
    &:focus {
        outline-color: #A87826;
        outline-width: thin;
        font-family: "Poppins", sans-serif;
    }
    &::placeholder {
        color: #000000;
        opacity: 0.5;
        font-family: "Poppins", sans-serif;
    }

    @media (max-width: 360px) {
        width: 2rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: 2rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
        width: 2rem;
  }
`