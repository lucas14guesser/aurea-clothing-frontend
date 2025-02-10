import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerPedidos = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
gap: 4rem;
margin: 4rem;

    @media (max-width: 430px) {
        margin: 2rem;
        gap: 2rem;
    }
`
export const TituloPedido = styled.h1`
font-size: 1.5rem;

`
export const ConteudoNaoPossuiPedidos = styled.div`
`
export const ParagrafoConteudoNaoPossuiPedido = styled.p`
font-size: 1rem;
text-align: center
`
export const ContainerPedido = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 2rem;

    @media (max-width: 430px) {
        gap: 1rem;
    }
`
export const PedidoAceito = styled.div`
 margin: 0;
 align-itens: center;  
 border: 1px solid rgba(168, 120, 38, 0.4);
 width: 30rem;

    @media (max-width: 430px) {
        width: 100%;
    }
`
export const DataPedido = styled.div`
background-color: white; 
color: black; 
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(168, 120, 38, 0.4);

    @media (max-width: 430px) {
        padding: 7px;
    }
`
export const VerificacaoEntregue = styled.p`
background-color:#A87826; 
color: white;
border: none;
padding: 10px 20px;
border-radius: 5px;
width: 8rem;
text-align: center;

    @media (max-width: 430px) {
        padding: 7px;
        font-size: .7rem;
        width: 6rem;
    }
`
export const ConteudoPedidos = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
align-items: flex-start;
padding: 1rem;

    @media (max-width: 430px) {
        gap: 1rem;
        padding: .5rem;
        align-items: flex-start;
    }

`
export const ImagemPedidos = styled.img`
width: 10rem;
height: 10rem;
opacity: 90%;

    @media (max-width: 430px) {
        width: 7rem;
        height: 7rem;
    }
`
export const DescricaoPedido = styled.div`
display: flex;
flex-direction: column;
padding-top: 1rem;
gap: 0.5rem;

    @media (max-width: 430px) {
        padding-top: 0;
    }
`
export const LinkPedido = styled(Link)`
font-weigth: 600;
text-transform: none;
color: #A87826;
font-weight: 600;

    @media (max-width: 430px) {
        font-size: .9rem;
    }
`
export const ParagrafoPedidos = styled.p`
font-weight: 300;
`
export const PrecoPedidos = styled.p`
font-weight: 500;

    @media (max-width: 430px) {
        font-size: .7rem;
    }
`
export const LinkDetalhesPedidos = styled(Link)`
font-weigth: 600;
text-transform: none;
color:#A87826;
font-weight: 600;

    @media (max-width: 430px) {
        margin-left: 0;
        font-size: .7rem;
    }
`