import React, { useState, useEffect } from 'react';
// Remova essa linha, pois você está exportando no final do arquivo
// import { ListaItemNavBar } from '../../../services/Functions';
import {
    ContainerListaNavBar,
    LiItemListaNav,
    LinkLiNavBar,
    ListaListaNavBar,
    SubMenu,
    LinkSubItemNavBar,
    ArrowNav,
    HamburgerMenuContainer,
    SubMenuNav2,
    SubMenuNav3
} from '../../../styles/NavBarStyles';
import { BsArrowDownShort } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

function ListaNavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null); // Estado para controlar o submenu ativo
    const [isMobileView, setMobileView] = useState(false);

    const subMenuItensLista = {
        'todas-as-categorias': ['Alfaiataria', 'Blusas', 'Jeans', 'Macaquinhos', 'Conjuntos', 'Vestidos', 'Saias', 'Shorts', 'Acessórios', 'Lançamentos', 'Promoções'],
        'alfaiataria': ['Calças', 'Blazer', 'Short'],
        'acessorios': ['Bolsas', 'Cintos', 'Bonés']
    };

    // Verifica largura da tela
    useEffect(() => {
        const checkViewport = () => setMobileView(window.innerWidth <= 1440);
        window.addEventListener('resize', checkViewport);
        checkViewport();
        return () => window.removeEventListener('resize', checkViewport);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        setActiveSubMenu(false);
    }

    // Lógica para abrir submenu
    const handleSubMenuClick = (category) => {
        setActiveSubMenu((prev) => (prev === category ? null : category)); // Fecha se já estiver aberto
    };

    return (
        <ContainerListaNavBar>
            {isMobileView ? (
                // Menu Hamburguer
                <LiItemListaNav>
                    <HamburgerMenuContainer onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </HamburgerMenuContainer>
                    {isMenuOpen && (
                        <SubMenuNav2>
                            {subMenuItensLista['todas-as-categorias'].map((subItem) => {
                                const formattedSubItem = subItem.toLowerCase()
                                    .normalize('NFD')
                                    .replace(/[\u0300-\u036f]/g, '')
                                    .replace(/\s+/g, '-');

                                return (
                                    <div key={subItem} style={{ position: 'relative' }}>
                                        <LinkSubItemNavBar
                                            to={`/${formattedSubItem}`}
                                            onClick={(e) => {
                                                if (subMenuItensLista[formattedSubItem]) {
                                                    e.preventDefault(); // Evita redirecionamento ao clicar
                                                    handleSubMenuClick(formattedSubItem);
                                                }
                                            }}
                                        >
                                            {subItem}
                                        </LinkSubItemNavBar>
                                        {/* Submenu ao lado */}
                                        {activeSubMenu === formattedSubItem && subMenuItensLista[formattedSubItem] && (
                                            <SubMenuNav3>
                                                {subMenuItensLista[formattedSubItem].map((item) => (
                                                    <LinkSubItemNavBar key={item} to={`/${formattedSubItem}/${item.toLowerCase()}`}>
                                                        {item}
                                                    </LinkSubItemNavBar>
                                                ))}
                                            </SubMenuNav3>
                                        )}
                                    </div>
                                );
                            })}
                        </SubMenuNav2>
                    )}
                </LiItemListaNav>
            ) : (
                // Renderiza a lista padrão
                <ListaListaNavBar>
                    {ListaItemNavBar.map((listaNavBar) => {
                        const formattedCategory = listaNavBar.toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .replace(/\s+/g, '-');

                        const hasSubMenu = subMenuItensLista[formattedCategory];

                        return (
                            <LiItemListaNav key={listaNavBar}>
                                <LinkLiNavBar to={formattedCategory === 'todas-as-categorias' ? '/' : `/${formattedCategory}`}>
                                    <p>{listaNavBar}</p>
                                    {hasSubMenu && <ArrowNav><BsArrowDownShort /></ArrowNav>}
                                </LinkLiNavBar>
                                {hasSubMenu && (
                                    <SubMenu>
                                        {subMenuItensLista[formattedCategory].map((subItem) => {
                                            const formattedSubItem = subItem.toLowerCase()
                                                .normalize('NFD')
                                                .replace(/[\u0300-\u036f]/g, '')
                                                .replace(/\s+/g, '-');

                                            return (
                                                <LinkSubItemNavBar key={subItem} to={`/${formattedCategory}/${formattedSubItem}`}>
                                                    {subItem}
                                                </LinkSubItemNavBar>
                                            );
                                        })}
                                    </SubMenu>
                                )}
                            </LiItemListaNav>
                        );
                    })}
                </ListaListaNavBar>
            )}
        </ContainerListaNavBar>
    );
}

export default ListaNavBar;

// Lista de categorias exportada apenas aqui
export const ListaItemNavBar = ['Lançamentos', 'Promoções', 'Alfaiataria', 'Blusas', 'Jeans', 'Macaquinhos', 'Conjuntos', 'Vestidos', 'Saias', 'Shorts', 'Acessórios'];