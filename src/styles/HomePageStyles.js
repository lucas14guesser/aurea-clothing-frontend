import {styled} from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHomePage = styled.div`
display:flex;
color: #000000;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const BannerImage = styled.img`
width: 100%;
height: 100%;
`
export const LinkIconsHomepage = styled(Link)`
text-decoration: none;
color: #000000;;
justify-content: center;
align-items: center;
`
export const ContainerInformacao = styled.div `
display:flex;
width:100%;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10rem;
padding: 2rem 0;
background: #FFFFFF;

  @media (max-width: 360px) {
    gap: 1.5rem;
    padding: 1rem 0;
  }

    @media (min-width: 361px) and (max-width: 429px) {
      gap: 1.5rem;
      padding: 1rem 0;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    gap: 2rem;
    padding: 1rem 0;
  }
`
export const SubContainerInformacao = styled.div`
display: flex;
flex-direction: column;
align-item: center;
text-align: center;
`
export const TextIconsHomePage = styled.p `
font-size: 3rem;
color: #A87826;

  @media (max-width: 360px) {
    font-size: 1rem;
  }

  @media (min-width: 361px) and (max-width: 429px) {
    font-size: 1rem;
  }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: 1.3rem;
  }
`
export const TxtInfo = styled.p`
font-size: 1rem;

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
export const CarouselBanner = styled.div `
position: relative;
overflow: hidden;
width: 500px;
min-height: 20rem;
max-height: 20rem;
margin: 4rem 0;
`
export const ContainerCarouselBanner = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ $slideIndex }) => `translateX(${-$slideIndex * 100}%)`};
`
export const ImagemCarouselBanner = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;

    @media (max-width: 360px) {
        height: auto;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        height: auto;
    }

  @media (min-width: 430px) and (max-width: 520px) {
    height: auto;
  }
`
export const PrevCarouselBanner = styled.button `
position: absolute;
top: 50%;
transform: translateY(-50%);
font-size: 2rem;
background-color: #FFFFFF;
color: #A87826;
border: none;
padding: 10px;
cursor: pointer;
z-index: 1;
left: 10px;

    @media (max-width: 360px) {
        font-size: .7rem;
        padding: 4px;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: .7rem;
        padding: 4px;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: .7rem;
    padding: 5px;
  }
`
export const NextCarouselBanner = styled.button `
position: absolute;
top: 50%;
transform: translateY(-50%);
font-size: 2rem;
background-color: #FFFFFF;
color: #A87826;
border: none;
padding: 10px;
cursor: pointer;
z-index: 1;
right: 10px;

    @media (max-width: 360px) {
        font-size: .7rem;
        padding: 4px;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: .7rem;
        padding: 4px;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: .7rem;
    padding: 5px;
  }
`
export const Carousel = styled.div `
  position: relative;
  width: 65rem;


    @media (max-width: 360px) {
        width: 17rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: 20rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
      width: 20rem;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
      width: 100%;
    }
`
export const CarouselHidden = styled.div`
overflow: hidden;
display: flex;
`
export const ContainerCarousel = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
margin: 4rem 0;
`
export const CarouselSlide = styled.div `
display: flex;
transition: transform 0.5s ease;
gap: 1rem;
`
export const ImagemCarousel = styled.img `
  flex-shrink: 0;
  width: 19rem;
  height: 35rem;
  object-fit: cover;
  border-radius: 1rem;

    @media (max-width: 360px) {
        width: 16rem;
        height: 22rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        height: 20rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    height: 20rem;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 100%;
    height: 30rem;
  }
`
export const PrevCarousel = styled.button `
position: absolute;
top: 50%;
transform: translateY(-50%);
font-size: 2rem;
background-color: #transparent;
color: #A87826;
border: none;
padding: 10px;
cursor: pointer;
left: -3rem;

    @media (max-width: 360px) {
        font-size: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: 1rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: 1.3rem;
  }
`
export const NextCarousel = styled.button `
position: absolute;
top: 50%;
transform: translateY(-50%);
font-size: 2rem;
background-color: #transparent;
color: #A87826;
border: none;
padding: 10px;
cursor: pointer;
right: -3rem;

    @media (max-width: 360px) {
        font-size: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: 1rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: 1.3rem;
  }
`
export const TituloCarousel = styled.h1 `
text-align: center;
color: #A87826;
font-size: 2rem;

    @media (max-width: 360px) {
        font-size: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: 1rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: 1.3rem;
  }
`
export const ContainerImagemDados = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0);
padding: 1rem;
border-radius: 1rem;
background: #FFFFFF;
width: 19rem;
gap: 1rem;
cursor: pointer;

    @media (max-width: 360px) {
        width: 16rem;
        padding: .5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        padding: .5rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    padding: .5rem;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 15rem;
  }
`
export const TituloImagemDados = styled.h1`
font-size: 1.5rem;
color: #A87826;
text-align: center;

    @media (max-width: 360px) {
        font-size: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: 1rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    font-size: 1.2rem;
  }
`
export const BotaoImagemDados = styled.button`
padding: 1rem;
width: 15rem;
background: #A87826;
border: 1px solid #A87826;
color: #FFFFFF;
cursor: pointer;
font-size: 1rem;
font-family: "Poppins", sans-serif;
  &:hover {
    background: #FFFFFF;
    Color: #A87826;
    border: 1px solid #A87826;
    transition: 0.3s;
}

    @media (max-width: 360px) {
        width: 10rem;
        font-size: .7rem;
        padding: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: 10rem;
        font-size: .7rem;
        padding: .7rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    width: 12rem;
    font-size: .7rem;
    padding: .7rem;
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    width: 13rem;
  }
`
export const LinkProdutoHome = styled(Link)`
width: 15rem;
padding: 1.2rem;
border: 1px solid #A87826;
text-align: center;
border-radius: 12px;
background: #A87826;
text-decoration: none;
color: #FFFFFF;
cursor: pointer;
font-size: 1.1rem;
    &:hover {
        transition: 0.3s;
        background: #FFFFFF;
        color: #A87826;
    }
    
    @media (max-width: 360px) {
        width: 10rem;
        font-size: .8rem;
        padding: .9rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: 10rem;
        font-size: .8rem;
        padding: .9rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
      width: 12rem;
      font-size: .8rem;
      padding: .9rem;
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    width: 13rem;
  }
`
export const TxtCarousel = styled.p`
font-size: 1rem;
font-family: "Poppins", sans-serif;

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