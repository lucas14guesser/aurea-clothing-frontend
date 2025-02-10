import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerFooter = styled.div`
display: flex;
flex-direction: column;
padding: 3rem;
gap: 3rem;
background: #FFFFFF;
margin-top: 4rem;
box-shadow: 0 -3px 3px #A87826;

    @media(max-width: 430px) {
        padding: 1rem;
    }
`
export const ContainerFooterFooter = styled.div `
display: flex;
flex-direction: row;
margin-left: 5rem;
margin-right: 5rem;
gap: 7rem;

    @media(max-width: 430px) {
        margin-left: 1rem;
        margin-right: 1rem;
        flex-direction: column;
        gap: 3rem;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    @media (min-width: 1440px) and (max-width: 1439px) {
        gap: 4rem;
    }
`
export const SubContainer = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 1rem;
`
export const SubContainerAbout = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 1rem;
width: 50%;

    @media(max-width: 430px) {
        width: 100%;
    }
`
export const ContainerIconsFooter = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 1rem;

    @media(max-width: 430px) {
        gap: .5rem;
    }
`
export const IconesRedesSociais = styled(Link)`
font-size: 2rem;
color: #A87826;
text-decoration: none;
    &:hover {
        transition: 0.3s;
        color: #C2954A;
    }

    @media(max-width: 430px) {
        font-size: 1rem;
    }
`
export const IconeLinkTr = styled(Link)`
font-size: 1.7rem;
color: #A87826;
text-decoration: none;
    &:hover {
        transition: 0.3s;
        color: #C2954A;
    }

    @media(max-width: 430px) {
        font-size: .8rem;
    }
`
export const ContainerInfoInfo = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;
`
export const LinkInfoInfo = styled(Link)`
display: flex;
flex-direction: row;
align-items: center;
gap: .5rem;
text-decoration: none;
color: #000000;
    &:hover {
        transition: 0.3s;
        color: #A87826;
    }

        @media(max-width: 430px) {
        font-size: .7rem;
    }
`
export const TxtInfoInfo = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: .5rem;
color: #000000;
`
export const ContainerCopy = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: .5rem;
justify-content: center;
width: 100%;
color: #000000;
`
export const ListaFormasPagamento = styled.ul`
display: flex;
flex-direction: row;
`
export const ItemListaFormasPagamento = styled.li`
display: flex;
gap: .5rem;
`
export const ImagemFormasPagamento = styled.img`
width: 45px;
height: 32px;
background: #F0F0F0;

    @media(max-width: 430px) {
        width: 33px;
        height: 20px;
    }
`
export const TxtCopy = styled.p`
font-size: 1rem;
font-family: "Poppins", sans-serif;

	@media(max-width: 430px) {
		font-size: .54rem;
	}
`