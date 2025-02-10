import React, { useState } from 'react'; // Importa React e useState para gerenciamento de estado no componente
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação entre páginas
import {
    ButtonLoginCadastro, // Importa o componente de botão estilizado para cadastro
    ColumnLoginCadastro, // Importa o container estilizado para coluna de cadastro
    FlexRowLabelInputLoginCadastro, // Importa o container estilizado para alinhar rótulo e campo de input
    InputLoginCadastro, // Importa o campo de input estilizado para o cadastro
    LabelLoginCadastro, // Importa o rótulo estilizado para o campo de input
    SubtituloContaUser
} from '../../../styles/ContaUserStyles'; // Importa os componentes estilizados definidos em ContaUserStyles
import { RiMailLine } from "react-icons/ri"; // Importa o ícone de email para o campo de input

// Função do componente CadastroSection
function CadastroSection() {
    // Declaração de estado para o email inserido pelo usuário
    const [emailSettado, setEmailSettado] = useState(''); // Inicializa o estado do email com um valor vazio

    // Hook para navegação entre páginas
    const navigate = useNavigate();

    // Função para atualizar o estado do email quando o usuário digitar
    const handleEmailChange = (e) => {
        setEmailSettado(e.target.value); // Atualiza o estado com o valor do campo de email
    };

    // Função chamada ao clicar no botão de cadastro
    const handleCadastroClick = () => {
        if (emailSettado) {
            navigate('/cadastro', { state: { emailSettado } }); // Navega para a página de cadastro passando o email como estado
        } else {
            alert('E-mail é obrigatório.');
        }
    };

    return (
        <ColumnLoginCadastro> {/* Container que organiza a coluna de cadastro */}
            <SubtituloContaUser style={{ marginBottom: '1.5rem' }}>
                Realize o cadastro
            </SubtituloContaUser> {/* Exibe um subtítulo de orientação para o usuário */}

            <FlexRowLabelInputLoginCadastro> {/* Container estilizado que organiza o rótulo e input */}
                <LabelLoginCadastro htmlFor="email-cadastro"> {/* Rótulo do campo de email */}
                    <RiMailLine /> {/* Ícone de email ao lado do campo */}
                </LabelLoginCadastro>
                <InputLoginCadastro
                    type="email"
                    name='email-cadastro'
                    id='email-cadastro'
                    placeholder='E-mail'
                    required
                    value={emailSettado}
                    onChange={handleEmailChange}
                /> {/* Campo de input para o email */}
            </FlexRowLabelInputLoginCadastro>

            <ButtonLoginCadastro onClick={handleCadastroClick}>
                Cadastrar
            </ButtonLoginCadastro> {/* Botão que aciona a navegação para a página de cadastro */}

            {/* 
            <ButtonGoogleLoginCadastro>
                Cadastrar com Google
            </ButtonGoogleLoginCadastro>
            */}
        </ColumnLoginCadastro>
    );
}

export default CadastroSection; // Exporta o componente para ser utilizado em outras partes do aplicativo
