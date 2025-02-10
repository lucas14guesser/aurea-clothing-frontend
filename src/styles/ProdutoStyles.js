import styled from "styled-components";

export const ContainerProduto = styled.div`
display:flex;
flex-direction: row;
background: #FFFFFF;
padding: 2.5rem;
border-radius: 16px;
justify-content: space-between;

    @media (max-width: 360px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
    align-items: center;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
    align-items: center;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
    align-items: center;
  }
`
export const TituloProdutoGeral = styled.h1`
font-size: 2rem;
color: #A87826;
margin: 4rem 4rem 1rem 10rem;

    @media (max-width: 360px) {
        font-size: 1.1rem;
        margin: 1rem 1rem .7rem 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: 1.1rem;
        margin: 1rem 1rem .7rem 1rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: 1.3rem;
    margin: 2rem 2rem 1rem 2rem;
  }
`
export const SubtituloProdutoGeral = styled.h2`
font-size: 1.5rem;
color: #A87826;
margin: 0 0 0 10rem;

    @media (max-width: 360px) {
        font-size: .8rem;
        margin: 0 0 0 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: .8rem;
        margin: 0 0 0 1rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: 1rem;
    margin: 0 0 0 2rem;
  }
`
export const DivDescricao = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;

    @media (max-width: 360px) {
      align-items: center;
      gap: .3rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      align-items: center;
      gap: .3rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    align-items: center;
    gap: .3rem;
  }
`
export const ContainerDescricao = styled.div`
display: flex;
flex-direction: row;
gap: 2rem;

    @media (max-width: 360px) {
      flex-direction: column;
      gap: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      flex-direction: column;
      gap: 1rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    flex-direction: column;
    gap: 1rem;
  }
`
export const Preco = styled.p`
font-weight: 500;
font-size: 1.1rem;


    @media (max-width: 360px) {
      font-size: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      font-size: .7rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: .7rem;
  }
`

export const UlVariacao = styled.ul`
display: grid;
grid-template-columns: repeat(3, auto);
flex-wrap: wrap;
overflow-x: unset;
width: fit-content;
grid-gap: .5rem;
padding: .5rem;
margin-top: 1.2rem;
border: 1px solid #A87826;
border-radius: 8px;
list-style: none;
`
export const ImagemVariacao = styled.img` 
width: 5rem;
height: 5rem;
transition: transform 0.5s ease;
cursor: pointer;
    &:hover {
        transform: scale(2.5);
        z-index: 10;
    }
`
export const ContainerAviseFalta = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
`
export const ContainerBotoesFunction = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
`
export const BotaoAmeiCarrinho = styled.button`
display: flex;
flex-direction: row;
gap: .3rem;
justify-content: center;
align-items: center;
width: 8.1rem;
padding: .7rem;
font-size: 1rem;
background: #A87826;
border: 1px solid #A87826;
border-radius: 8px;
color: #FFFFFF;
cursor: pointer;
    &:hover {
        transition: 0.3s;
        background: #FFFFFF;
        color: #A87826;
    }

    @media (max-width: 360px) {
      font-size: .7rem;
      padding: .5rem;
      width: 5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      font-size: .7rem;
      padding: .5rem;
      width: 5rem;
    }


  @media(min-width: 430px) and (max-width: 520px) {
    font-size: .7rem;
    padding: .5rem;
    width: 5rem;
  }
`
export const ContainerValorEntrega = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
padding: .5rem;
border-left: 1px solid #A87826;

    @media (max-width: 360px) {
      border-left: none;
      border-top: 1px solid #A87826;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      border-left: none;
      border-top: 1px solid #A87826;
    }


  @media(min-width: 430px) and (max-width: 520px) {
    border-left: none;
    border-top: 1px solid #A87826;
  }
`
export const SubContainerValorEntrega = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;
margin: 0 0 2rem 0;

    @media (max-width: 360px) {
      margin: 0 0 .5rem 0;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      margin: 0 0 .5rem 0;
    }


  @media(min-width: 430px) and (max-width: 520px) {
    margin: 0 0 .5rem 0;
  }
`
export const ImgProduto = styled.img`
width: 15.95rem;
height: 20rem;


    @media (max-width: 360px) {
      width: 13rem;
      height: 15.95rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      width: 13rem;
      height: 15.95rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    width: 13rem;
    height: 15.95rem;
  }
`
export const ImgProdutospec = styled.img`
width: 21rem;
height: 25rem;


    @media (max-width: 360px) {
      width: 17rem;
      height: 21rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      width: 17rem;
      height: 21rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    width: 17rem;
    height: 21rem;
  }
`
export const ContainerAvaliacao = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
margin-top: 2rem;
`
export const UserAvaliacao = styled.div`
display: flex;
flex-direction: column;
width: 98%;
background: #FFF;
padding: 1rem;
align-items: flex-start;
gap: .3rem;

    @media (max-width: 360px) {
      width: 91%;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      width: 91%;
    }


  @media(min-width: 430px) and (max-width: 520px) {
    width: 91%;
  }
`
export const StarDescript = styled.div`
display: flex;
flex-direction: column;
gap: .7rem;
align-items: flex-start;
margin-top: 1rem;
`
export const Star = styled.span`
  font-size: 1.3rem;
  color: ${(props) => (props.$filled ? "#A87826" : "#ccc")};


    @media (max-width: 360px) {
      font-size: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      font-size: 1rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: 1rem;
  }
`
export const ContainerPaginacao = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
margin-top: 1rem;

    @media (max-width: 360px) {
		font-size: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
		font-size: .7rem;
    }
`
export const BotaoPaginacao = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: #FFF;
  border: 1px solid #A87826;
  color: #A87826;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

    @media (max-width: 360px) {
		padding: .3rem 1rem;
    font-size: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
		padding: .3rem 1rem;
    font-size: .7rem;
    }
`
export const TituloProduto = styled.h1`
font-size: 2rem;
color: #A87826;
margin: 2rem 0;
  @media(min-width: 430px) and (max-width: 520px) {
    font-size: 1.3rem;
  }
`
export const TxtAvaliacao = styled.p`
font-size: .7rem;
opacity: .7;


    @media (max-width: 360px) {
      font-size: .5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      font-size: .5rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: .5rem;
  }
`
export const TitleAvaliacao = styled.p`
font-size: 1.3rem;

    @media (max-width: 360px) {
      font-size: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      font-size: 1rem;
    }


  @media(min-width: 430px) and (max-width: 520px) {
    font-size: 1rem;
  }
`
export const ThProduto1 = styled.th`
width: 1rem;


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
export const ThProduto4 = styled.th`
width: 4rem;

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
export const ThProduto5 = styled.th`
width: 5rem;

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
export const ThProduto6 = styled.th`
width: 6rem;

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
export const ThProduto7 = styled.th`
width: 7rem;

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
export const TituloProdutosSearch = styled.h1`
font-size: 2rem;
color: #A87826;
margin: 4rem 4rem 1rem 10rem;

    @media (max-width: 360px) {
      font-size: 1.3rem;
      margin: 2rem 2rem 1rem 2rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      font-size: 1.3rem;
      margin: 2rem 2rem 1rem 2rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: 1.3rem;
    margin: 2rem 2rem 1rem 2rem;
  }
`
export const SubtituloProdutosSearch = styled.h2`
font-size: 1.5rem;
color: #A87826;
margin: 0 0 0 10rem;

    @media (max-width: 360px) {
      font-size: 1rem;
      margin: 0 0 0 2rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      font-size: 1rem;
      margin: 0 0 0 2rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: 1rem;
    margin: 0 0 0 2rem;
  }
`
export const TxtFilter = styled.p`
font-size: 1rem;
font-family: "Poppins", sans-serif;
color: #A87826;

    @media (max-width: 360px) {
      font-size: .5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      font-size: .5rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: .65rem;
  }
`
export const PrecoPromocionalProduto = styled.p`
text-decoration: line-through;
font-size: 1rem;

    @media (max-width: 360px) {
      font-size: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      font-size: .7rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: .7rem;
  }
`
export const TxtProduto = styled.p`
font-size: 1rem;
color: #A87826;


    @media (max-width: 360px) {
      font-size: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      font-size: .7rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: .7rem;
  }
`