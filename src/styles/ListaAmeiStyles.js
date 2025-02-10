import styled from "styled-components";

export const ContainerListaAmei = styled.div `
display: flex;
flex-direction: column;
flex-wrap: wrap;
gap: 1rem;
width: 90%;
align-self: center;
border-left: 1px solid #A87826;
padding: 0 0 0 1rem;
margin: 2rem 10rem;

    @media (max-width: 430px) {
        margin: 2rem;
    }
`
export const TituloListaAmei = styled.h1`
font-size: 2rem;
color: #A87826;
margin-top: 1rem;

    @media (max-width: 430px) {
        margin-top: 0;
        font-size: 1.5rem;
    }
`