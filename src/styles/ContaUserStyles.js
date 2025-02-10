import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerConta = styled.div`
margin: 2rem 16rem;

    @media (max-width: 430px) {
        margin: 2rem;
    }
`
export const TituloSection = styled.h1`
font-size: 2rem;
color: #A87826;
margin-bottom: 2rem;
`
export const SubtituloContaUser = styled.h2`
font-size: 1.5rem;
color: #A87826;
margin-bottom: 1.5rem;

    @media (max-width: 430px) {
        font-size: 1rem;
        margin-bottom: 1rem;
    }
`
export const FlexRowLoginTxtCadastro = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 1rem;
align-items: center;
margin-top: 2rem;

    @media (max-width: 430px) {
        flex-direction: column;
        gap: 2rem;
        margin-top: 1rem;;
    }
`
export const ContainerTxtLoginCadastro = styled.div`
max-width: 13rem;
margin: 0 3rem;
`
export const ColumnLoginCadastro = styled.div`
display: flex;
flex-direction: column;
background: #FFFFFF;
border: 1px solid #A87826;
border-radius: 12px;
width: 20rem;
padding: 4rem;

    @media (max-width: 430px) {
        width: 90%;
        padding: 1rem;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        padding: 2rem;
    }
`
export const FlexRowLabelInputLoginCadastro = styled.div`
display: flex;
flex-direction: row;
gap: .5rem;
align-items: center;
`
export const LabelLoginCadastro = styled.label`
font-size: 1.3rem;
color: #A87826;
text-transform: uppercase;
margin: .5rem 0;

    @media (max-width: 430px) {
        font-size: 1.1rem;
    }
`
export const InputLoginCadastro = styled.input`
padding: .5rem;
width: 20rem;
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

    @media (max-width: 430px) {
        width: 17rem;
    }


`
export const ContainerForgotPassButtonLogin = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
align-items: end;
`
export const LinkForgotPass = styled(Link)`
text-decoration: underline;
color: #000000;
padding: .5rem;
background: #FFFFFF;
    &:hover {
        transition: 0.3s;
        color: #A87826;
    }

    @media (max-width: 430px) {
        font-size: .7rem;
    }
`
export const ButtonLoginCadastro = styled.button`
width: 7rem;
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

    @media (max-width: 430px) {
        width: 5rem;
        font-size: .7rem;
    }

`
export const ButtonRedefinir = styled.button`
width: 17rem;
padding: 1rem;
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

    @media (max-width: 430px) {
        font-size: .7rem;
        padding: .5rem;
        width: 13rem;
    }
`
export const ButtonGoogleLoginCadastro = styled.button`
margin-top: 2rem;
padding: .5rem;
font-size: 1.1rem;
background: blue;
color: #FFFFFF;
border: 1px solid blue;
border-radius: 16px;
cursor: pointer;
`
export const ButtonEsqueciSenha = styled.button`
width: 10rem;
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
`
export const TxtCadastro = styled.p`
font-size: 1rem;
font-family: "Poppins", sans-serif;

    @media (max-width: 430px) {
        font-size: .7rem;
    }
`
export const DivAvaName = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
export const BtnModalAvaName = styled.button`
width: 7rem;
height: 2.3rem;
margin: 0 0 1.5rem .5rem;
color: #FFF;
border: none;
border-radius: 5px;
cursor: pointer;
`