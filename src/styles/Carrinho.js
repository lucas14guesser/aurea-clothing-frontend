import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerCarrinho = styled.div`
margin: 2rem 17rem;

  @media (max-width: 430px) {
    margin: 2rem;
  }
  
  @media (min-width: 1024px) and (max-width: 1439px) {
    margin: 2rem 11rem;
  }
`
export const FlexGapDiv = styled.div`
display: flex;
gap: 2rem;
align-items: center;
`
export const TituloCarrinho = styled.h1`
font-size: 2rem;
text-align: center;
`
export const ContainerCategoriaCarrinho = styled.div`
  display: flex;
  width: 100%;

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

  @media (max-width: 430px) {
    table {
      margin: 2rem 0;
    }
    
    th, td {
      padding: 5px;
      font-size: .7rem;
    }
  }
  
    @media (min-width: 1440px) and (max-width: 1919px) {
      width: 120%;
      table{
        width: 120%;
      }
  }
`
export const ContainerButton = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 4rem 0;

  @media (max-width: 430px) {
    flex-direction: row;
    margin: 2rem 0;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    margin: 0;
    width: 50.27rem;
  }
`
export const InptQtd = styled.input`
width: 3rem;
padding: .7rem;
border: 1px solid #A87826;
border-radius: .3rem;
outline: none;

  @media (max-width: 430px) {
    width: 2rem;
    padding: .3rem;
  }
`
export const LinkContinuarComprando = styled(Link)`
display: flex;
width: 16.74rem;
background: #A87826;
justify-content: center;
align-items: center;
gap: .5rem;
text-decoration: none;
font-size: 1.1rem;
color: #FFFFFF;
border: 1px solid #A87826;
padding: 1rem;
 &:hover {
    transition:0.3s;
    background: #FFFFFF;
   color: #A87826; 
  }
  
  @media (max-width: 430px) {
    width: 7rem;
    padding: .3rem;
    font-size: .5rem;
  }

    @media (min-width: 1024px) and (max-width: 1439px) {
      width: 14.3rem;   
    } 
`
export const ImageProdutoCarrinho = styled.img`
min-width: 5rem;
max-width: 5rem;
min-height: 5rem;
max-height: 5rem;

  @media (max-width: 430px) {
    min-width: 3rem;
    max-width: 3rem;
    min-height: 3rem;
    max-height: 3rem;
  }
`
export const ButtonCarrinho = styled.button`
display: flex;
background: #A87826;
justify-content: center;
width: 19.74rem;
gap: .5rem;
text-decoration: none;
font-size: 1.1rem;
color: #FFFFFF;
cursor: pointer;
border: 1px solid #A87826;
padding: 1rem;
 &:hover {
    transition:0.3s;
    background: #FFFFFF;
   color: #A87826; 
  }

  @media (max-width: 430px) {
    width: 8rem;
    padding: .5rem;
    font-size: .5rem;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 14.3rem;  
      ustify-content: right; 
  }
`
export const PMb = styled.p`
margin-bottom: 1rem;

  @media (max-width: 430px) {
    font-size: .7rem;
  }
`
export const ButtonCupom = styled.button`
display: flex;
flex-direction: row;
border: none;
text-decoration: underline;
color: #A87826;
margin-bottom: 2rem;
cursor: pointer;
&:hover{
    transition: 0.3s;
    color: #C2954A;
}

  @media (max-width: 430px) {
    font-size: .7rem;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 1rem;
  }
`
export const ContainerPagamento = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;;
margin: 8rem 0;

  @media (max-width: 430px) {
    margin: 4rem 0;
    flex-direction: column;
  }
`
export const ContainerAplicarCupom = styled.div`
display: flex;
width: 50%;
flex-direction: column;
gap: 1rem;

  @media (max-width: 430px) {
    width: 100%;
    gap: 2rem;
  }
`
export const AplicarCupom = styled.div`
display: flex; 
flex-direction: row;
`
export const ParagrafoCupom = styled.p`
display: flex;
flex-direction: column;
`
export const InputCupom = styled.input`
width: 23rem;
border: 1px solid #A87826;
padding: .7rem;
  &:focus {
      outline: none;
  }
  &::placeholder {
    color: #A87826;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 430px) {
    width: 7rem;
    padding: .5rem;

      &::placeholder {
        font-size: .7rem;
      }
  }
`
export const ButtonAplicarCupom = styled.button`
border: 1px solid #A87826;
background: #A87826;
color: #FFFFFF;
font-size: 1.1rem;
width: 9rem;
padding: .7rem;
cursor: pointer;
&:hover{
    transition: 0.3s;
    background: #C2954A;
}

  @media (max-width: 430px) {
    width: 7rem;
    padding: .3rem;
    font-size: .7rem;
  }
`
export const ContainerSubTotal = styled.div`
display: flex;
flex-direction: column;
width: 25%;

  @media (max-width: 430px) {
    width: 100%;
  }
`
export const SubTotalPagamento = styled.div`
padding: 1rem 0rem;
`
export const EntregaPagamento = styled.div`
display: flex;
flex-direction: column;
margin: 2rem 0;
gap: 1rem;
`
export const ButtonEndereco = styled.button`
display: flex;
flex-direction: row;
border: none;
cursor: pointer;
color: #A87826;
font-size: 1rem;
margin: 0;
padding: 0;
font-family: "Poppins", sans-serif;
`
export const ButtonAlterarEndereco = styled.button`
border: 1px solid #A87826;
background: #A87826;
color: #FFFFFF;
font-size: 1.1rem;
width: 18.6rem;
padding: .7rem;
cursor: pointer;
  &:hover{
      transition: 0.3s;
      background: #C2954A;
  }

  @media (max-width: 430px) {
    width: 9rem;
    padding: .5rem;
    font-size: .7rem;
  }
`
export const InputAlterarEndereco = styled.input`
width: 17rem;
border: 1px solid #A87826;
padding: .7rem;
font-size: 1rem;
font-family: "Poppins", sans-serif;
  &:focus {
      outline: none;
  }

  &::placeholder {
    color: #A87826;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 430px) {
    width: 9rem;
    padding: .3rem;
    font-size: .7rem;

      &::placeholder {
        font-size: .7rem;
      }
  }
`

export const ContainerComponents = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
export const ParagraEntregafoPagamento = styled.p`
padding-top: 1rem;
`
export const StrongNome = styled.strong`
padding-left: 0.5rem;
font-weight: 500;
`
export const TotalPagamento = styled.div`
display: flex;
flex-direction: column;
padding-top: 1rem;
padding-bottom:1rem;
`
export const FinalizarPagamento = styled.button`
border: 1px solid #A87826;
background: #A87826;
padding: .7rem;
font-size: 1.1rem;
color: #FFFFFF;
cursor: pointer;
width: 10rem;
&:hover{
    transition: 0.3s;
    background: #FFFFFF;
    color: #A87826;
}
`
export const ContainerFreteLabelInput = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
`
export const ContainerFreteEnderecos = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
`
export const RadioInput = styled.input`
display: none; /* Esconde o input original */
`
export const CustomRadioButton = styled.span`
width: 1rem;
height: 1rem;
border-radius: 50%;
border: 2px solid #A87826;
display: inline-block;
position: relative;
margin-right: 10px;
vertical-align: middle;

/* Adiciona efeito quando o rádio é selecionado */
  ${RadioInput}:checked + & {
    background-color: #A87826;
    box-shadow: inset 0 0 0 2px white; /* Simula o ponto central */
  }

  /* Efeito quando passa o mouse sobre o botão */
  &:hover {
    border-color: #A87826;
  }

  @media (max-width: 430px) {
    width: .5rem;
    height: .5rem;
  }
`
export const LabelRadio = styled.label`
display: flex;
align-items: center;
cursor: pointer;
margin-bottom: .3rem;
`
export const ContainerImgProduto = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
gap: .7rem;

  @media (max-width: 430px) {
    gap: .5rem;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    flex-wrap: wrap;
  }
`
export const InformacoesProduto = styled.p `
font-size: 1rem;

  @media (max-width: 430px) {
    font-size: .7rem;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 0.9rem;
  }
`