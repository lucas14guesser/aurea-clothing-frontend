import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerFaleConosco = styled.div` 
margin-top: 2rem;
background: white;
`
export const DivDuvida = styled.div`
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
    width: 90%;
    gap: 1rem;
    
  }
`
export const Lista = styled.ul`
` 
export const LinkInformacao = styled(Link)` 
display: flex;
flex-direction: row;
align-items: center;
text-decoration: none;
color: black;
`
export const LinhaLista = styled.li `
margin-bottom: 1rem;
`
export const TextoOverflow = styled.p` 
margin: 1rem 0 1.5rem 1rem;
text-align: justify;

    @media (max-width: 430px) {
        font-size: .7rem;
    }
`
export const TextareaFaleConosco = styled.textarea`
  padding: .5rem;
  width: 20rem;
  height: 6rem;
  border: 1px solid #A87826;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  resize: vertical;

  &:focus {
    outline-color: #A87826;
    outline-width: thin;
    font-family: "Poppins", sans-serif;
  }

  &::placeholder {
    color: #000000;
    font-family: "Poppins", sans-serif;
  }

    @media (max-width: 430px) {
        width: 17rem;
        
    }
`
