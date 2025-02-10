import React from 'react'
// Importando o componente ContainerCopy para estilizar o contêiner do rodapé
import { ContainerCopy, TxtCopy } from '../../../styles/FooterStyles'
// Importando o componente GoldenIcon para estilizar o ícone de copyright
import { GoldenIcon } from '../../../styles/GlobalStyles';

function Copy() {
    // Obtendo o ano atual para exibição dinâmica no rodapé
    const year = new Date().getFullYear();

    return (
        // ContainerCopy é o contêiner principal onde o texto de copyright será exibido
        <ContainerCopy>
            {/* GoldenIcon é um ícone estilizado que exibe o símbolo de copyright */}
            <GoldenIcon>&copy;</GoldenIcon>
            {/* Exibindo o ano dinâmico, seguido do texto de copyright */}
            <TxtCopy>{year} Áurea Clothing - Vestindo mulheres incríveis. Todos os direitos reservados</TxtCopy>
        </ContainerCopy>
    )
}

export default Copy
