import React from 'react'; // Importa o React para o funcionamento do componente
import { FlexRowLoginTxtCadastro } from '../../../styles/ContaUserStyles'; // Importa o container estilizado para organizar os componentes
import LoginSection from './LoginSection'; // Importa o componente LoginSection
import TextSection from './TextSection'; // Importa o componente TextSection
import CadastroSection from './CadastroSection'; // Importa o componente CadastroSection

// Função do componente LoginTextCadastroSection
function LoginTextCadastroSection() {
    return (
        <FlexRowLoginTxtCadastro> {/* Container que organiza os componentes em uma linha flexível */}
            <LoginSection /> {/* Componente que contém a seção de login */}
            <TextSection /> {/* Componente que exibe o texto informativo sobre o cadastro */}
            <CadastroSection /> {/* Componente que contém a seção de cadastro */}
        </FlexRowLoginTxtCadastro>
    );
}

export default LoginTextCadastroSection; // Exporta o componente para ser utilizado em outras partes do aplicativo
