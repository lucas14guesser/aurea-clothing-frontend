import React from 'react'; // Importa React para utilizar JSX
import { Titulo } from '../../../styles/GlobalStyles'; // Importa o componente de estilo 'Titulo' de um arquivo de estilos

// Componente funcional TituloSection
function TituloSection() {
    return (
        <Titulo> {/* Aplica o estilo do componente Titulo e exibe o texto */}
            Acesse sua conta ou cadastre-se
        </Titulo>
    );
}

export default TituloSection; // Exporta o componente TituloSection para ser utilizado em outros arquivos
