import { Link } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`
div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
}

body, html, #root {
	line-height: 1;
	background: #F0F0F0;
	font-family: "Poppins", sans-serif;
	color: #000000;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	border: 0;
	overflow-x: hidden;
	overflow-y: auto;
  box-sizing: border-box;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
h1, h2, h3, h4 {
font-family: "Playfair Display", serif;
}
`
export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 4rem 13rem;

    @media (max-width: 360px) {
        margin: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        margin: 1rem;
    }

  @media(max-width: 430px) {
    margin: 2rem;
  }
`
export const Titulo = styled.h1`
font-size: 2rem;
color: #A87826;

    @media (max-width: 360px) {
        font-size: 1.2rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: 1.2rem;
    }

    @media(max-width: 430px) {
        font-size: 1.5rem;
    }
`
export const Subtitulo = styled.h2`
font-size: 1.5rem;
color: #A87826;

    @media (max-width: 360px) {
        font-size: .8rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: .8rem;
    }

  @media(max-width: 430px) {
    font-size: 1rem;
  }
`
export const TxtGerais = styled.p`
font-size: 1rem;
font-family: "Poppins", sans-serif;

    @media (max-width: 360px) {
        font-size: .6rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: .6rem;
    }

	@media(max-width: 430px) {
		font-size: .7rem;
	}
`
export const ContainerBanner = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 30rem;
  margin-top: 0.2rem;
  margin-bottom: 2rem;

    @media (max-width: 360px) {
      height: 10rem;
      margin-bottom: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      height: 10rem;
      margin-bottom: 1rem;
    }

  @media (max-width: 430px) {
    height: 10rem;
    margin-bottom: 1rem;
  }
`
export const GoldenIcon = styled.span`
color: #A87826;
font-size: 1.3rem;

    @media (max-width: 360px) {
        font-size: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: 1rem;
    }

    @media(max-width: 430px) {
        font-size: 1rem;
    }
`
export const Bold = styled.p`
font-weight: 600;
`
export const LinkVoltar = styled(Link)`
display: flex;
flex-direction: row;
align-items: center;
text-decoration: none;
color: #000;
max-width: 4rem;
transition: 0.3s;
	&:hover {
		color: #A87826;
	}

    @media (max-width: 360px) {
        font-size: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: .7rem;
    }

    @media (max-width: 430px) {
        font-size: .7rem;
    }
`
export const LinkScrollToTop = styled(Link)`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 4rem;
align-items: flex-end;
text-decoration: none;
font-size: 1.1rem;
color: #A87826;
  &:hover {
  transition: 0.3s;
  color: #C2954A;
  text-decoration: underline;
  }
`
export const StyledError = styled.p`
font-size: .9rem;
color: red;
white-space: pre-wrap;
text-align: center;
margin-top: .1rem;

    @media (max-width: 360px) {
        font-size: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: .7rem;
    }

    @media (max-width: 430px) {
        font-size: .7rem;
    }
`
export const StyledSuccess = styled.p`
font-size: .9rem;
color: green;
white-space: pre-wrap;
text-align: center;
margin-top: .1rem;

    @media (max-width: 360px) {
        font-size: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: .7rem;
    }

    @media (max-width: 430px) {
        font-size: .7rem;
    }
`
const spin = keyframes`
0% {
	transform: rotate(0deg);
  }
100% {
	transform: rotate(360deg);
  }
`
export const SpinnerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh; /* Ajuste conforme o layout desejado */
`
export const Spinner = styled.div`
border: 4px solid rgba(0, 0, 0, 0.1);
border-top: 4px solid #a87826; /* Altere a cor conforme o design */
border-radius: 50%;
width: 40px;
height: 40px;
animation: ${spin} 1s linear infinite;
`
export const TxtPaginacao = styled.span`
font-size: 1rem;

    @media (max-width: 360px) {
        font-size: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: .7rem;
    }

  @media(max-width: 430px) {
    font-size: .7rem;
  }
`