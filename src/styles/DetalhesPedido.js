import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerDetalhesPedido = styled.div`
display: flex;
flex-direction: column;
margin: 4rem 5rem;

    @media (max-width: 430px) {
        margin: 2rem 1rem;
    }
`
export const ContainerInformacoesDetalhesPedido = styled.div`
display: flex;
flex-direction: row;
gap: 2rem;
padding: 2rem;
justify-content: space-evenly;
align-items: flex-start;
background: #FFFFFF;
margin: 2rem 0;
border: 1px solid #A87826;
border-radius: 16px;
width: 100%;

    @media (max-width: 430px) {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 1rem;
        justify-content: flex-start;
        margin: 1rem 0;
        width: 90%;
    }
`
export const TituloDetalhesPedido = styled.h1`
font-size: 2rem;
color: #A87826;
margin-top: 4rem;

    @media (max-width: 430px) {
        margin-top: 2rem;
        font-size: 1.5rem;
    }
`
export const InformacaoDetalhesPedido = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`
export const InformacaoDetalhesPedidoEndereco = styled.div`
display: flex;
width: 20%;
flex-direction: column;
gap: 1rem;

    @media (max-width: 430px) {
        width: 100%;
    }
`
export const LinkRastreioPedido = styled(Link)`
text-decoration: none;
color: #A87826;
    &:hover {
        transition: 0.3s;
        color: #C2954A;
    }
`
export const ImgPedido = styled.img`
width: 5rem;
height: 5rem;

    @media (max-width: 430px) {
        width: 5rem;
        height: 5rem;
    }
`