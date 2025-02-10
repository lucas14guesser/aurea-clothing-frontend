import React from 'react'
// Importando componentes estilizados de FooterStyles e GlobalStyles
import { ContainerIconsFooter, IconeLinkTr, IconesRedesSociais, SubContainer } from '../../../styles/FooterStyles'
import { Titulo, TxtGerais } from '../../../styles/GlobalStyles'
// Importando ícones das redes sociais
import { FaInstagram, FaExternalLinkAlt, FaWhatsapp } from "react-icons/fa";

function RedesSociais() {
    return (
        // SubContainer é o contêiner principal da seção
        <SubContainer>
            {/* Titulo é um componente estilizado que exibe o título da seção */}
            <Titulo>
                Redes Sociais
            </Titulo>

            {/* TxtGerais é um componente estilizado que descreve a seção */}
            <TxtGerais>
                Acesse nossas redes sociais e acompanhe nosso trabalho de perto.
            </TxtGerais>

            {/* Container que envolve os ícones das redes sociais */}
            <ContainerIconsFooter>
                {/* Link para o Instagram, com o ícone correspondente */}
                <IconesRedesSociais to='https://www.instagram.com/aureaaclothing/' target='_blank' title='Instagram'>
                    <FaInstagram />
                </IconesRedesSociais>

                {/* Link para o WhatsApp, com o ícone correspondente */}
                <IconesRedesSociais to='https://api.whatsapp.com/send/?phone=5548984082394' target='_blank' title='Whatsapp'>
                    <FaWhatsapp />
                </IconesRedesSociais>

                {/* Link para uma página externa, com o ícone correspondente */}
                <IconeLinkTr to='https://beacons.ai/aureaclothing' target='_blank' title='Links Externos'>
                    <FaExternalLinkAlt />
                </IconeLinkTr>
            </ContainerIconsFooter>
        </SubContainer>
    )
}

export default RedesSociais
