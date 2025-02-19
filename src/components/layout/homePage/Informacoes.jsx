import React from 'react'
import { ContainerInformacao, SubContainerInformacao, TextIconsHomePage, TxtInfo } from '../../../styles/HomePageStyles'
import { FaMapMarkedAlt, FaRegCreditCard } from 'react-icons/fa'
import { MdOutlineSecurity } from 'react-icons/md'

function Informacoes() {
    {/* Componente simples. - Faz algumas chamadas de ícones com a biblioteca react-icons e entrega algumas informações de envio, parcelamento e segurança de compra. */}
    return (
        <ContainerInformacao>
            <SubContainerInformacao>
                <TextIconsHomePage>
                    <FaMapMarkedAlt />
                </TextIconsHomePage>
                <TxtInfo>
                    <strong style={{fontWeight: '500'}}>Envio</strong>
                    <br />
                    Enviamos para todo o Brasil
                </TxtInfo>
            </SubContainerInformacao>
            <SubContainerInformacao>
                <TextIconsHomePage>
                    <FaRegCreditCard />
                </TextIconsHomePage>
                <TxtInfo>
                    <strong style={{fontWeight: '500'}}>Parcelamento</strong>
                    <br />
                    Parcelamos em até 3x sem juros
                </TxtInfo>
            </SubContainerInformacao>
            <SubContainerInformacao>
                <TextIconsHomePage>
                    <MdOutlineSecurity />
                </TextIconsHomePage>
                <TxtInfo>
                    <strong style={{fontWeight: '500'}}>Segurança</strong>
                    <br />
                    Loja com selo de proteção
                </TxtInfo>
            </SubContainerInformacao>
        </ContainerInformacao>
    )
}

export default Informacoes