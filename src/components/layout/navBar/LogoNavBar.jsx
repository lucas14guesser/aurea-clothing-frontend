import React from 'react'
import { ImgNav, LinkImgNav } from '../../../styles/NavBarStyles'

function LogoNavBar() {
    {/* Retorna um link que redireciona para a página inicial (rota '/') */}
    return (
        <LinkImgNav to='/'>
            {/* Renderiza a imagem da logo da Aurea Clothing */}
            <ImgNav src="\assets\logoAurea.png" alt="Logo da Aurea Clothing" />
        </LinkImgNav>
    )
}

export default LogoNavBar
