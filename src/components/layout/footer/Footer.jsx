import React from 'react'; // Importa o React para o funcionamento do componente
import { ContainerFooter, ContainerFooterFooter } from '../../../styles/FooterStyles'; // Importa os estilos específicos do rodapé
import SobreMim from './SobreMim.jsx'; // Importa o componente "Sobre Mim" que fornece informações sobre a empresa
import Informacoes from './Informacoes'; // Importa o componente que exibe informações úteis ou institucionais
import Politica from './Politica'; // Importa o componente que exibe a política da empresa, como privacidade ou termos de uso
import RedesSociais from './RedesSociais'; // Importa o componente que exibe links para as redes sociais da empresa
import FormasPagamento from './FormasPagamento'; // Importa o componente que exibe as formas de pagamento aceitas
import Copy from './Copy.jsx'; // Importa o componente que exibe o copyright ou informações de direitos autorais

// Função do componente Footer
function Footer() {
    return (
        <ContainerFooter>
            {/* Primeiro bloco do rodapé */}
            <ContainerFooterFooter>
                <SobreMim /> {/* Exibe informações sobre a empresa ou o serviço */}
                <Informacoes /> {/* Exibe informações institucionais ou úteis para os usuários */}
                <Politica /> {/* Exibe a política de privacidade ou termos de uso */}
                <RedesSociais /> {/* Exibe ícones e links para as redes sociais */}
            </ContainerFooterFooter>

            {/* Segundo bloco do rodapé */}
            <ContainerFooterFooter>
                <FormasPagamento /> {/* Exibe as formas de pagamento aceitas */}
            </ContainerFooterFooter>

            {/* Terceiro bloco do rodapé */}
            <ContainerFooterFooter>
                <Copy /> {/* Exibe informações sobre o copyright ou direitos autorais */}
            </ContainerFooterFooter>
        </ContainerFooter>
    );
}

export default Footer; // Exporta o componente Footer para ser utilizado em outras partes do aplicativo
