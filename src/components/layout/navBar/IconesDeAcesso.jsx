import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoChatboxEllipsesOutline, IoLogoWhatsapp, IoMailOutline } from "react-icons/io5";
import { BsBox2Heart } from "react-icons/bs";
import { ContainerIconesDeAcesso, SubMenu, LiItemListaNav, LinkIconesDeAcesso, LinkSubItemTxtIconNavBar, TxtIcon, TxtIconUser } from '../../../styles/NavBarStyles';
import { LiaUserCircle, LiaShoppingBagSolid } from "react-icons/lia";


{/* Lista de ícones de acesso rápido, contendo apenas o ícone de usuário */ }
const ListaIconesDeAcesso = [
    { id: 'user', icon: <LiaUserCircle /> },
]

{/* Lista de ícones relacionados ao chat, incluindo o ícone de chatbox */ }
const ListaChatIcon = [
    { id: 'chat', icon: <IoChatboxEllipsesOutline /> },
]

{/* Itens do submenu para cada ícone de acesso. - Contém objetos com label e ícone, além de um campo de URL para links externos no caso do chat */ }
const subMenuItensLinkDeAcesso = {
    user: [
        { label: <><LiaUserCircle />Minha Conta</> },
        { label: <><BsBox2Heart />Meus Pedidos</> },
        { label: <><FaRegHeart />Lista Amei</> },
        { label: <><LiaShoppingBagSolid />Meu Carrinho</> },
    ],
    chat: [
        { label: <><IoLogoWhatsapp />(48)98408-2394</>, url: 'https://api.whatsapp.com/send/?phone=5548984082394' },
        { label: <><IoMailOutline />aureaclothingstore@gmail.com</>, url: 'mailto:aureaclothingstore@gmail.com' },
    ],
}

function IconesDeAcesso() {
    {/* Estado responsável por armazenar qual submenu está ativo (aberto). Inicialmente nulo, ou seja, nenhum submenu aberto */ }
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    {/* Função para abrir o submenu ao passar o mouse sobre o ícone - Define o submenu ativo com base no id passado */ }
    const handleMouseEnter = (id) => {
        setActiveSubMenu(id);
    }

    {/* Função para fechar o submenu ao retirar o mouse do ícone - Reseta o estado para null */ }
    const handleMouseLeave = () => {
        setActiveSubMenu(null);
    }

    return (
        <ContainerIconesDeAcesso>
            {/* Mapeamento da lista de ícones do chat para renderizar cada ícone - Inclui eventos de hover para abrir/fechar o submenu */}
            {ListaChatIcon.map(({ id, icon }) => (
                <LiItemListaNav
                    key={id}
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={handleMouseLeave}
                >
                    <TxtIcon>
                        {icon}
                    </TxtIcon>
                    {/* Renderização condicional do submenu de chat - Exibe se o id ativo corresponder a 'chat' */}
                    {id === 'chat' && activeSubMenu === id && (
                        <SubMenu>
                            {/* Mapeia os itens do submenu de chat para criar links - Cada item pode ter um link externo */}
                            {subMenuItensLinkDeAcesso[id].map(({ label, url }, index) => (
                                <LinkSubItemTxtIconNavBar
                                    key={`${label}-${index}`}
                                    to={url}
                                    as="a"
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {label}
                                </LinkSubItemTxtIconNavBar>
                            ))}
                        </SubMenu>
                    )}
                </LiItemListaNav>
            ))}

            {/* Link direto para o carrinho de compras com o ícone de uma sacola */}
            <LinkIconesDeAcesso to="/meu-carrinho" title='Meu Carrinho'>
                <LiaShoppingBagSolid />
            </LinkIconesDeAcesso>

            {/* Mapeamento da lista de ícones de usuário para renderizar o ícone e seu submenu */}
            {ListaIconesDeAcesso.map(({ id, icon }) => (
                <LiItemListaNav key={id}>
                    <TxtIconUser>
                        {icon}
                    </TxtIconUser>
                    {/* Renderização condicional do submenu de usuário - Apenas é exibido se o id for 'user' */}
                    {id === 'user' && (
                        <SubMenu>
                            {/* Mapeia os itens do submenu de usuário - Utiliza o label para criar os links */}
                            {subMenuItensLinkDeAcesso[id].map(({ label }, index) => (
                                <LinkSubItemTxtIconNavBar
                                    key={`subitem-${index}`}
                                    to={`/${label.props.children[1].toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                    {label}
                                </LinkSubItemTxtIconNavBar>
                            ))}
                        </SubMenu>
                    )}
                </LiItemListaNav>
            ))}
        </ContainerIconesDeAcesso>
    )
}

export default IconesDeAcesso
