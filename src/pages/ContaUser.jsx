import React from 'react'; // Importa o React para o funcionamento do componente
import { ContainerConta } from '../styles/ContaUserStyles'; // Importa o container estilizado para envolver os componentes da página
import LoginTextCadastroSection from '../components/layout/login/LoginTextCadastroSection'; // Importa o componente que organiza as seções de login e cadastro
import TituloSection from '../components/layout/login/TituloSection'; // Importa o componente de título

// Função do componente ContaUser
function ContaUser() {
    return (
        <ContainerConta> {/* Contêiner principal que envolve os outros componentes da página */}
            <TituloSection /> {/* Componente que exibe o título da página */}
            <LoginTextCadastroSection /> {/* Componente que organiza as seções de login, texto informativo e cadastro */}
        </ContainerConta>
    );
}

export default ContaUser; // Exporta o componente para ser utilizado em outras partes do aplicativo
