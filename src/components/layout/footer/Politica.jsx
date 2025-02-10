import React from 'react'
// Importando componentes de estilos de FooterStyles e GlobalStyles
import { LinkInfoInfo, SubContainer } from '../../../styles/FooterStyles'
import { Titulo } from '../../../styles/GlobalStyles'

function Politica() {
    return (
        // SubContainer é o contêiner principal da seção
        <SubContainer>
            {/* Titulo é um componente estilizado que exibe o título da seção */}
            <Titulo>
                Políticas
            </Titulo>

            {/* Links para páginas relacionadas às políticas da loja */}
            <LinkInfoInfo to="/fale-conosco">
                Fale conosco
            </LinkInfoInfo>
            <LinkInfoInfo to="/trocas-devolucoes">
                Trocas e Devoluções
            </LinkInfoInfo>
            <LinkInfoInfo to="/politica-privacidade">
                Política de privacidade
            </LinkInfoInfo>
        </SubContainer>
    )
}

export default Politica
