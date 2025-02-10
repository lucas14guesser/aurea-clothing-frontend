import React from 'react'; // Importa o React para o funcionamento do componente
import { ContainerConta, FlexRowLoginTxtCadastro, TituloSection } from '../styles/ContaUserStyles'; // Importa os estilos para o layout
import CadastroForms from '../components/layout/cadastro/CadastroForms'; // Importa o componente do formulário de cadastro

// Função do componente CadastroUser
function CadastroUser() {
    return (
        <ContainerConta> {/* Contêiner principal que envolve toda a seção de cadastro */}
            <TituloSection>Sessão de cadastro</TituloSection> {/* Exibe o título da seção de cadastro */}
            <FlexRowLoginTxtCadastro> {/* Layout com flexbox que organiza os componentes lado a lado */}
                <CadastroForms /> {/* Exibe o formulário de cadastro */}
            </FlexRowLoginTxtCadastro>
        </ContainerConta>
    );
}

export default CadastroUser; // Exporta o componente CadastroUser para ser utilizado em outras partes do aplicativo
