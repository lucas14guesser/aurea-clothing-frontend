import React from 'react'
import { SubContainerAbout } from '../../../styles/FooterStyles'
import { Titulo, TxtGerais } from '../../../styles/GlobalStyles'

function SobreMim() {
    {/* Renderiza um container estilizado para o conteúdo "Sobre a loja" */ }
    return (
        <SubContainerAbout>
            {/* Título da seção "Sobre a loja" */}
            <Titulo>
                Sobre a loja
            </Titulo>

            {/* Texto descritivo sobre a missão e visão da loja Áurea Clothing */}
            <TxtGerais style={{textAlign: 'justify'}}>
                Na Áurea Clothing, acreditamos que cada mulher é incrível à sua maneira, e nossas roupas são feitas para celebrar essa singularidade.
                Combinamos estilo, conforto e qualidade para oferecer peças que realçam a confiança e o poder de cada mulher. Nossa missão é vestir
                mulheres incríveis com looks que as façam sentir-se ainda mais especiais todos os dias. Junte-se a nós e descubra como a moda pode ser
                uma extensão da sua personalidade única.
            </TxtGerais>
        </SubContainerAbout>
    )
}

export default SobreMim
