import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerInformacoesTrocaDevolucoes = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
padding: 2rem;
justify-content: space-around;
align-items: flex-start;
background: #FFFFFF;
margin: 2rem 0;
border: 1px solid #A87826;
border-radius: 16px;

    @media (max-width: 430px) {
        padding: 1rem;
        margin: 1rem 0;
    }
`
export const TxtTrocasDevolucoes = styled.p`
font-size: 1rem;
margin-bottom: 1rem;

    @media (max-width: 430px) {
        font-size: .7rem;
    }
`
export const ItemListaTrocasDevolucoes = styled.li`
font-size: 1.3rem;
font-weight: 500;
margin-bottom: .7rem;

    @media (max-width: 430px) {
        font-size: 1rem;
    }
`
export const ListaOrdenadaTrocasDevolucoes = styled.ol`
list-style: normal;
margin: 1rem;
`
export const ListaNaoOrdenadaTrocasDevolucoes = styled.ul`
list-style: disc;
margin: 1rem;

    @media (max-width: 430px) {
        font-size: .7rem;
    }
`
export const LinkMailTo = styled(Link)`
text-decoration: none;
color: #A87826;
    &:hover {
        transition: 0.3s;
        color: #C2954A;
    }
`