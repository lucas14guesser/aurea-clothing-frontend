import React from 'react'
// Importação de estilos personalizados
import { ContainerInfoInfo, LinkInfoInfo, SubContainer, TxtInfoInfo } from '../../../styles/FooterStyles'
import { Titulo, TxtGerais, GoldenIcon } from '../../../styles/GlobalStyles'
// Importação de ícones do pacote react-icons
import { IoLogoWhatsapp, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { PiClockLight } from "react-icons/pi";

function Informacoes() {
    return (
        // Componente principal que envolve todas as informações de contato
        <SubContainer>
            {/* Título da seção */}
            <Titulo>
                Contato e Informações
            </Titulo>

            {/* Seção de informações do WhatsApp */}
            <ContainerInfoInfo>
                <TxtGerais>WhatsApp</TxtGerais>
                {/* Link para abrir o WhatsApp com o número da loja */}
                <LinkInfoInfo
                    to="https://api.whatsapp.com/send/?phone=5548984082394"
                    target="_blank" // Abre o link em uma nova aba
                >
                    {/* Ícone do WhatsApp seguido pelo número de telefone */}
                    <GoldenIcon><IoLogoWhatsapp /></GoldenIcon>
                    <TxtGerais>(48)98408-2394</TxtGerais>
                </LinkInfoInfo>
            </ContainerInfoInfo>

            {/* Seção de informações de E-mail */}
            <ContainerInfoInfo>
                <TxtGerais>
                    E-mail
                </TxtGerais>
                {/* Link para enviar um e-mail diretamente para a loja */}
                <LinkInfoInfo
                    to="mailto:aureaclothiingstore@gmail.com"
                    target="_blank"
                >
                    {/* Ícone de e-mail seguido pelo endereço de e-mail */}
                    <GoldenIcon><IoMailOutline /></GoldenIcon>
                    <TxtGerais>aureaclothingstore@gmail.com</TxtGerais>
                </LinkInfoInfo>
            </ContainerInfoInfo>

            {/* Seção de informações de Localização */}
            <ContainerInfoInfo>
                <TxtGerais>
                    Localização
                </TxtGerais>
                {/* Link para abrir o Google Maps com o endereço da loja */}
                <LinkInfoInfo
                    to='https://maps.app.goo.gl/Qvctwicb3V2scRGR7'
                    target='_blank'
                >
                    {/* Ícone de localização seguido pelo endereço completo */}
                    <GoldenIcon><IoLocationOutline /></GoldenIcon>
                    <TxtGerais>Av. das Tipuanas, 337 - sala 9 - Madri, Palhoça - SC, 88131-300.</TxtGerais>
                </LinkInfoInfo>
            </ContainerInfoInfo>

            {/* Seção de informações do Horário de atendimento */}
            <ContainerInfoInfo>
                <TxtGerais>
                    Horário de atendimento
                </TxtGerais>
                {/* Horário de funcionamento da loja com ícone de relógio */}
                <TxtInfoInfo>
                    <GoldenIcon><PiClockLight /></GoldenIcon>
                    <TxtGerais>Seg a sex das 13:30h às 18:00h
                        <br />
                        Sab 09:30h às 13:30h
                    </TxtGerais>
                </TxtInfoInfo>
            </ContainerInfoInfo>
        </SubContainer>
    )
}

export default Informacoes
