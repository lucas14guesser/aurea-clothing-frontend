import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerNav = styled.header`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: center;
padding: 0 4rem;
background: #FFFFFF;
box-shadow: 0 3px 3px #A87826;

    @media (max-width: 360px) {
        padding: 1rem;
    }

        @media (min-width: 361px) and (max-width: 429px) {
        padding: 1rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
        padding: 1rem 2rem;
    }
`
export const ContainerNavPrimeiraParte = styled.div`
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: nowrap;
padding: 1rem;
background: #FFFFFF;
gap: 3rem;

    @media (max-width: 360px) {
        padding: .5rem;
        gap: .5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        padding: .5rem;
        gap: .5rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
        padding: .5rem;
        gap: .5rem;
    }
`
export const ContainerNavSegundaParte = styled.div`
display: flex;
flex-direction: row;
align-items: center;
background: #FFFFFF;
margin-bottom: 1rem;
justify-content: center;

    @media (max-width: 360px) {
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 0;
    }

    @media (min-width: 360px) and (max-width: 429px) {
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 0;
    }

    @media (min-width: 430px) and (max-width: 520px) {
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 0;
    }
`
export const LinkImgNav = styled(Link)`
width: 15rem;

    @media (max-width: 360px) {
        width: 3.5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: 3.5rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
        width: 5.5rem;
    }
`
export const ImgNav = styled.img`
width: 100%;
`
export const ContainerInputButtonBuscaNav = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
`
export const InputBuscaNav = styled.input`
width: 20rem;
padding: 1rem;
border: 1px solid #A87826;
border-right: none;
border-radius: 12px 0 0 12px;
margin: 0;
font-size: 1.1rem;
color: #A87826;
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-size: 1.1rem;
        color: #A87826;
    }

    @media (max-width: 360px) {
        width: 7rem;
        padding: .5rem;
        font-size: .6rem;

        &::placeholder {
            font-size: .6rem;
        }
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: 7rem;
        padding: .5rem;
        font-size: .6rem;

        &::placeholder {
            font-size: .6rem;
        }
    }
    
    @media(min-width: 430px) and (max-width: 520px) {
        width: 7rem;
        padding: .7rem .5rem;
        font-size: .7rem;

        &::placeholder {
            font-size: .7rem;
        }
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        width: 12rem;
    }
`
export const BotaoBuscaNav = styled.button`
background: #A87826;
color: #FFFFFF;
padding: 1rem;
border: 1px solid #A87826;
border-left: none;
border-radius: 0 12px 12px 0;
cursor: pointer;
font-size: 1.3rem;
    &:hover {
        transition: 0.3s;
        background: #C2954A;
    }

    @media (max-width: 360px) {
        padding: .5rem .3rem;
        font-size: .5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        padding: .5rem .3rem;
        font-size: .5rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
        padding: .7rem .5rem;
        font-size: .7rem;
    }
`
export const ContainerListaNavBar = styled.div`
display: flex;
`
export const ListaListaNavBar = styled.ul`
display: flex;
gap: 2rem;
list-style: none;

    @media (max-width: 360px) {
        gap: .5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        gap: .5rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
        gap: .5rem;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        gap: 1rem;
    }
`
export const LiItemListaNav = styled.li`
display: flex;
flex-direction: row;
gap: 2rem;
position: relative;

&:hover ul {
    display: block;
}

    @media (max-width: 360px) {
        font-size: .4rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: .4rem;
    }
`
export const LinkLiNavBar = styled(Link)`
display: flex;
flex-direction: row;
text-decoration: none;
align-items: center;
color: #000000;
text-transform: uppercase;
    &:hover {
        transition: 0.3s;
        color: #A87826;
    }

    @media (max-width: 360px) {
        margin-left: 0;
        font-size: .5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        margin-left: 0;
        font-size: .5rem;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        margin-left: 0;
        font-size: .7rem;
    }

    @media(max-width: 1440px) {
        font-size: 0.93rem;
    }
`
export const ArrowNav = styled.p`
font-size: 1rem;
font-weight: 0;
`
export const SubMenu = styled.ul`
display: none;
position: absolute;
width: 23rem;
top: 100%;
left: 0;
background-color: #FFFFFF;
list-style: none;
margin: 0;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
z-index: 10;
border: 1px solid #A87826;

    @media (max-width: 360px) {
        width: 11rem;
        left: calc(-3.5rem);
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: 11rem;
        left: calc(-3.5rem);
    }

    @media (min-width: 430px) and (max-width: 520px) {
        width: 11rem;
        left: calc(-5.5rem);
    }
`
export const LinkSubItemNavBar = styled(Link)`
  display: block;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: #000000;
  text-transform: uppercase;

  &:hover {
    transition: 0.3s;
    color: #A87826;
  }

    @media (max-width: 360px) {
        padding: .3rem .7rem;
        fomt-size: .3rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        padding: .3rem .7rem;
        fomt-size: .3rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
        font-size: .7rem;
        padding: .5rem 1rem;
    }
`
export const LinkSubItemTxtIconNavBar = styled(Link)`
  display: flex;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: #000000;
  text-transform: uppercase;
  gap: .3rem;

  &:hover {
    transition: 0.3s;
    color: #A87826;
  }

    @media (max-width: 360px) {
        padding: .3rem .5rem;
        font-size: .4rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        padding: .3rem .5rem;
        font-size: .4rem;
    }

     @media (min-width: 430px) and (max-width: 520px) {
        padding: .5rem .7rem;
        font-size: .5rem;
    }
`
export const ContainerIconesDeAcesso = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
margin: 0 0 0 2rem;
gap: 1.5rem;

    @media (max-width: 360px) {
        margin: 0 0 0 1rem;
        gap: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        margin: 0 0 0 1rem;
        gap: .7rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
        margin: 0 0 0 1rem;
        gap: .7rem; 
    }
`
export const LinkIconesDeAcesso = styled(Link)`
text-decoration: none;
color: #A87826;
font-size: 2rem;
    &:hover {
        transition: 0.3s;
        color: #C2954A;
    }

    @media (max-width: 360px) {
        font-size: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: 1rem;
    }

    @media (min-width: 430px) and (max-width: 520px) {
        font-size: 1.5rem;
    }
`
export const TxtIcon = styled.p`
color: #A87826;
font-size: 2rem;
margin-right: 3rem;
    &:hover {
        transition: 0.3s;
        color: #C2954A;
    }

    @media (max-width: 360px) {
        font-size: 1rem;
        margin-right: 0;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: 1rem;
        margin-right: 0;
    }

    @media (min-width: 430px) and (max-width: 520px) {
        font-size: 1.5rem;
        margin-right: 0;
    }
`
export const TxtIconUser = styled.p`
color: #A87826;
font-size: 2.1rem;
    &:hover {
        transition: 0.3s;
        color: #C2954A;
    }

    @media (max-width: 360px) {
        font-size: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        font-size: 1rem;
    }
    
    @media (min-width: 430px) and (max-width: 520px) {
        font-size: 1.5rem;
    }
`
export const LinkIconesDeAcessoUser = styled(Link)`
text-decoration: none;
color: #A87826;
font-size: 2rem;
    &:hover {
        transition: 0.3s;
        color: #C2954A;
    }
`
export const HamburgerMenuContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
        font-size: 1rem;
        font-weight: 500;
    }

    svg {
        color: #A87826;
        font-size: 1.5rem;

        @media (max-width: 360px) {
            font-size: .7rem;
        }

        @media (min-width: 361px) and (max-width: 429px) {
            font-size: .7rem;
        }

        @media(min-width: 430px) and (max-width: 520px) {
            font-size: .9rem;
        }
    }

    @media (max-width: 360px) {
        margin-right: 16rem;
        font-size: .1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        margin-right: 16rem;
        font-size: .1rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
        margin-right: 19rem;
        font-size: .1rem;
    }
`
export const SubMenuNav2 = styled.ul`
display: none;
position: absolute;
width: 23rem;
top: 100%;
left: 0;
background-color: #FFFFFF;
list-style: none;
margin: 0;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
z-index: 10;


    @media (max-width: 360px) {
        width: 7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: 7rem;
    }

    @media (min-width: 430px) and (max-width: 520px) {
        width: 10rem;
    }
`
export const SubMenuNav3 = styled.div`
position: absolute;
top: 0;
left: 100%;
width: 15rem;
background-color: #ffffff;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
z-index: 20;

    @media (max-width: 360px) {
        width: 7rem;

    @media (min-width: 361px) and (max-width: 429px) {
        width: 7rem;
    }

    @media (min-width: 430px) and (max-width: 520px) {
        width: 10rem;
    }
`