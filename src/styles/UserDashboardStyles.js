import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerDashBoard = styled.div`
display: flex;
flex-direction: row;
margin: 4.5rem 0 1.5rem 0;
gap: 2rem;
justify-content: center;
align-items: center;

    @media (max-width: 430px) {
        flex-direction: column;
        margin: 4rem 0 1rem 0;
    }
`
export const Informacoes = styled.div`
padding: 2rem;
background: #FFFFFF;
border: 1px solid #A87826;
border-radius: 16px;

    @media (max-width: 430px) {
        padding: .5rem;
        width: 90%;
    }
`
export const DivLinha = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 1.5rem 0;

    @media (max-width: 430px) {
        flex-direction: column;
        padding: 1rem 0;
        gap: 2rem;
    }
`
export const DivLinhaMb2 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 1.5rem 0;
margin-bottom: 2rem;

    @media (max-width: 430px) {
        flex-direction: column;
        padding: 1rem 0;
        gap: 2rem;
    }
`

export const DivColuna = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 45%;

    @media (max-width: 430px) {
        width: 100%;
        gap: .3rem;
    }
`
export const TituloDashBoard = styled.h1`
font-size: 1.5rem;
font-weight: 500;
`
export const EditarDashBoard = styled.button`
color: #FFFFFF;
background: #A87826;
border: 1px solid #A87826;
padding: .7rem;
border-radius: 8px;
font-size: 1.1rem;
width: 7rem;
cursor: pointer;
margin: 2rem 0 0 37rem;
    &:hover {
        transition: 0.3s;
        background: #FFFFFF;
        color: #A87826;
    }

    @media (max-width: 430px) {
        padding: .5rem;
        font-size: .9rem;
        margin: 0;
    }
`
export const DivFlexBtn = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
gap: 2rem;
align-items: center;
`
export const RowMenuTitle = styled.div`
display: flex;
flex-direction: row;
gap: .2rem;
align-items: center;
margin: 2rem 0 0 2rem;

@media(max-width: 430px) {
    margin: 1rem 0 0 .5rem;
}
`
export const MenuUser = styled.div`
display: flex;
flex-direction: column;
margin-left: 4.3rem;
background: #A87826;
width: 17rem;
border: 1px solid #A87826;
text-align: center;
position: absolute;

@media(max-width: 430px) {
    margin-left: 2.3rem;
    width: 13rem;
}
`
export const LinkMail = styled(Link)`
padding: .7rem;
color: #FFF;
text-decoration: none;
border-bottom: 1px;
border-style: solid;
border-color: #A87826;
border-top: 1px;
border-right: 0;
border-left: 0;
transition: 0.3s ease;
    &:hover {
        background: #FFF;
        color: #A87826;
    }

    @media (max-width: 430px) {
        font-size: .7rem;
        padding: .5rem;
    }
`
export const BtnMenuUser = styled.button`
padding: .5rem;
color: #FFF;
background: #A87826;
font-family: "Poppins", sans-serif;
font-size: 1rem;
cursor: pointer;
border: 0;
transition: 0.3s ease;
    &:hover {
        background: #FFF;
        color: #A87826;
    }

    @media (max-width: 430px) {
        font-size: .7rem;
        padding: .3rem;
    }
`
export const FormRedefinir = styled.form`
display: flex;
flex-direction: column;
width: 50%;
text-align: center;
gap: 1.5rem;
padding: 2rem;
background: #FFFFFF;
border: 1px solid #A87826;
border-radius: 16px;
align-items: center;

    @media (max-width: 360px) {
        padding: 2rem;
        gap: .5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        padding: 2rem;
        gap: .5rem;
    }

    @media (min-width: 430px) and (max-width: 520px) {
        width: 75%;
        padding: 1rem;
        gap: .5rem;
    }
`
export const ContainerAdminDashboard = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
text-align: center;
gap: 3rem;

    @media (max-width: 430px) {
        flex-direction: column;
        gap: 2rem;
    }
`
export const ContainerPainelAdmin = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 2rem;

    @media (max-width: 430px) {
        gap: 1rem;
    }
`
export const PainelAdmin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
background: #FFF;
color: #A87826;
border: 1px solid #A87826;
border-radius: 8px;
width: 15rem;
height: 7rem;
padding: 2rem;
transition: 0.3s ease;
    &:hover {
        background: #FFF;
        color: #A87826;
    }

    @media (max-width: 430px) {
        width: 13rem;
        padding: 1rem;
    }
`
export const BtnLinkAdminDash = styled(Link)`
text-decoration: none;
padding: .7rem;
width: 10rem;
background: #A87826;
color: #FFF;
border: 1px solid #A87826;
border-radius: 8px;
transition: 0.3s ease;
    &:hover {
        background: #FFF;
        color: #A87826;
    }

    @media (max-width: 430px) {
        width: 7rem;
        font-size: .7rem;
    }
`
export const ContainerDashBoardColumn = styled.div`
display: flex;
flex-direction: column;
margin: 4.5rem 0 1.5rem 0;
gap: 2rem;
justify-content: center;
align-items: center;

    @media(max-width: 430px) {
        margin: 2rem 0;
    }
`
export const TituloDash = styled.h1`
font-size: 1.3rem;

    @media (max-width: 430px) {
        font-size: 1rem;
    }
`
export const SubtituloUserDash = styled.h2`
font-size: 1.5rem;
color: #A87826;
margin-bottom: 2rem;
`
export const InputUserDash = styled.input`
padding: .5rem;
width: 15rem;
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
`
export const TxtHamburguerUserDash = styled.p`
font-size: 2rem;
cursor: pointer;
color: #A87826;
height: 1.7rem;

@media(max-width: 430px) {
    font-size: 1.5rem;
    height: 1.2rem;
}
`