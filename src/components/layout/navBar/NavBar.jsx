import React from 'react'; // Importa o React para o funcionamento do componente
import LogoNavBar from './LogoNavBar'; // Importa o componente que exibe o logotipo na barra de navegação
import BuscaNavBar from './BuscaNavBar'; // Importa o componente de busca da barra de navegação
import ListaNavBar from './ListaNavBar'; // Importa o componente que exibe a lista de links ou itens no menu da barra de navegação
import { ContainerNav, ContainerNavPrimeiraParte, ContainerNavSegundaParte } from '../../../styles/NavBarStyles'; // Importa os estilos da barra de navegação
import IconesDeAcesso from './IconesDeAcesso'; // Importa o componente que exibe ícones de acesso como login, carrinho, etc.

function NavBar() {
    return (
        <ContainerNav> {/* Contêiner principal da barra de navegação */}
            <ContainerNavPrimeiraParte>
                {/* Primeira parte da barra de navegação contendo o logo, busca e ícones de acesso */}
                <LogoNavBar /> {/* Exibe o logotipo */}
                <BuscaNavBar /> {/* Exibe a barra de pesquisa */}
                <IconesDeAcesso /> {/* Exibe os ícones de acesso (ex: login, carrinho) */}
            </ContainerNavPrimeiraParte>
            <ContainerNavSegundaParte>
                {/* Segunda parte da barra de navegação, geralmente contém o menu */}
                <ListaNavBar /> {/* Exibe a lista de links de navegação ou itens do menu */}
            </ContainerNavSegundaParte>
        </ContainerNav>
    );
}

export default NavBar; // Exporta o componente NavBar para ser utilizado em outras partes do aplicativo
