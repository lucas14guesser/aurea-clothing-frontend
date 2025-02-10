import React from 'react'; // Importa o React, necessário para a criação de componentes
import { ContainerTxtLoginCadastro, TxtCadastro } from '../../../styles/ContaUserStyles'; // Importa o componente estilizado para o container de texto

// Definição do componente TextSection
function TextSection() {
    return (
        <ContainerTxtLoginCadastro> {/* Container estilizado para o texto */}
            <TxtCadastro> {/* Componente de texto genérico */}
                Se você ainda não tem uma conta, por favor, cadastre-se ao lado. {/* Texto exibido ao usuário */}
            </TxtCadastro>
        </ContainerTxtLoginCadastro>
    );
}

export default TextSection; // Exporta o componente TextSection para ser utilizado em outras partes do aplicativo
