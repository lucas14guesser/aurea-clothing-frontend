import styled from "styled-components";

export const ContainerGeralFuncao = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #FFF;
margin: 2rem;
width: 100%;

    @media (max-width: 360px) {
      margin: 1rem 0;
      padding: 0 .5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      margin: 1rem 0;
      padding: 0 .5rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    margin: 1rem 0;
  }
`
export const ContainerFuncoes = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-evenly;
width: 100%;
padding: 1rem;

    @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    flex-direction: column;
    align-items: center;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ContainerFuncao = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 30%;
`
export const ContainerCrud = styled.div`
display: flex;
flex-direction: column;
padding: .7rem;
gap: 1rem;
border: 1px solid #A87826;
border-radius: 8px;
background: #FFF;
margin: 1rem 2rem;
text-align: center;
width: 85%;

    @media (max-width: 360px) {
        width: auto;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: auto;
    }

    @media (min-width: 430px) and (max-width: 520px) {
        width: auto;
    }
`
export const ContainerCrudProduto = styled.div`
display: flex;
flex-direction: column;
padding: .7rem;
gap: 1rem;
border: 1px solid #A87826;
border-radius: 8px;
background: #FFF;
margin: 1rem 2rem;
text-align: center;
width: 85%;

    @media (max-width: 360px) {
        width: auto;
        margin: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: auto;
        margin: 1rem;
    }

    @media (min-width: 430px) and (max-width: 520px) {
        width: auto;
        margin: 1rem;
    }
`
export const LabelInputProdutos = styled.div`
display: flex;
flex-direction: row;
gap: .5rem;
align-items: center;
`
export const LabelProdutos = styled.div`
font-size: 1rem;
color: #A87826;
`
export const InputProdutosFileWrapper = styled.div`
  position: relative;
  display: inline-block;

  label {
    background: #A87826;
    color: #fff;
    padding: .5rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #8a6620;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
`
export const InputProdutos = styled.input`
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

    @media (max-width: 360px) {
    width: 15rem;
    font-size: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    width: 15rem;
    font-size: .7rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    width: 15rem;
    font-size: .7rem;
  }
`
export const SelectProdutos = styled.select`
padding: .5rem;
width: 21.1rem;
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
      width: 16.1rem;
      font-size: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      width: 16.1rem;
      font-size: .7rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
      width: 16.1rem;
      font-size: .7rem;
    }
`
export const ButtonProdutos = styled.button`
width: 11rem;
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
      font-size: .7rem;
      width: 7.5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      font-size: .7rem;
      width: 7.5rem;
    }

    @media (min-width: 430px) and (max-width: 520px) {
      font-size: .7rem;
      width: 7.5rem;
    }
`
export const SectionBtnProdutos = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 1rem;
justify-content: center;
`
export const ImgTable = styled.img`
width: 7rem;
height: 7rem;

    @media (max-width: 360px) {
    width: 1.5rem;
    height: 1.5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    width: 1.5rem;
    height: 1.5rem;
    }

  @media (min-width: 430px) and (max-width: 520px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`
export const ListaProdutos = styled.div`
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

    @media (max-width: 360px) {
    table {
      margin: 2rem 0;
      width: auto;
    }
    
    th, td {
      padding: 2px;
      font-size: .33rem;
    }
    }

    @media (min-width: 361px) and (max-width: 429px) {
    table {
      margin: 2rem 0;
      width: auto;
    }
    
    th, td {
      padding: 2px;
      font-size: .33rem;
    }
    }

  @media (min-width: 430px) and (max-width: 520px) {
    table {
      margin: 2rem 0;
      width: auto;
    }
    
    th, td {
      padding: 2px;
      font-size: .43rem;
    }
  }
`
export const FileNameProduto = styled.p`
  font-size: .7rem;
  color: #A87826;
  max-width: 45%;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const ImgTableBanners = styled.img`
width: 100%;
min-height: 20rem;
max-height: 20rem;

    @media (max-width: 360px) {
    min-height: 7rem;
    max-height: 7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    min-height: 7rem;
    max-height: 7rem;
    }

	@media(min-width: 430px) and (max-width: 520px) {
    min-height: 10rem;
    max-height: 10rem;
	}
`
export const SpanTxt = styled.p`
font-size: 1rem;
font-family: "Poppins", sans-serif;

    @media (max-width: 360px) {
		font-size: .4rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
		font-size: .4rem;
    }

	@media(min-width: 430px) and (max-width: 520px) {
		font-size: .4rem;
	}
`