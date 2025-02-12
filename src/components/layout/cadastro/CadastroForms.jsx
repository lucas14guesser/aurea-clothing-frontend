import React, { useState } from 'react'
// Importando os componentes estilizados para construção do formulário
import { ButtonLoginCadastro, ColumnLoginCadastro, FlexRowLabelInputLoginCadastro, InputLoginCadastro, LabelLoginCadastro, SubtituloContaUser } from '../../../styles/ContaUserStyles'
// Importando componentes globais para mensagens de erro e sucesso e subtítulo
import { StyledError, StyledSuccess } from '../../../styles/GlobalStyles'
// Importando ícones para os campos do formulário
import { RiLockPasswordLine, RiMailLine, RiPhoneLine, RiUser3Line } from 'react-icons/ri'
// Hooks para manipulação de navegação e localização
import { useLocation, useNavigate } from 'react-router-dom'
// Importando o axios para realizar requisições HTTP
import axios from 'axios'

function CadastroForms() {
    // Obtendo dados da localização para recuperar e-mail já configurado, se houver
    const location = useLocation();
    const navigate = useNavigate();
    const emailSettado = location.state?.emailSettado || '';

    // Declarando os estados para os campos do formulário
    const [nomeUser, setNomeUser] = useState('');
    const [sobrenomeUser, setSobrenomeUser] = useState('');
    const [telefoneUser, setTelefoneUser] = useState('');
    const [senhaUser, setSenhaUser] = useState('');
    // Estados para as mensagens de erro e sucesso
    const [errorMsg, setErrorMsg] = useState('');
    const [sucessMsg, setSucessMsg] = useState('');

    // Função para lidar com o envio do formulário
    const handleCadastro = async (e) => {
        e.preventDefault();

        // Coletando os dados inseridos no formulário
        const DadosUsuario = {
            nome_user: nomeUser,
            sobrenome_user: sobrenomeUser,
            telefone_user: telefoneUser,
            email_user: emailSettado,
            senha_user: senhaUser
        };

        try {
            // Enviando os dados para o backend via API
            const resp = await axios.post('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/usuario', DadosUsuario);

            // Caso a resposta seja bem-sucedida (status 200 ou 201)
            if (resp.status === 201 || resp.status === 200) {
                setSucessMsg('Usuário cadastrado com sucesso!');
                setErrorMsg('');
                // Limpando os campos do formulário após o sucesso
                setNomeUser('');
                setSobrenomeUser('');
                setTelefoneUser('');
                setSenhaUser('');

                // Redirecionando o usuário para a página de login após 1 segundo
                setTimeout(() => {
                    navigate('/login');
                }, 1000);

            } else {
                // Caso a resposta seja negativa
                setErrorMsg('Não foi possível realizar o cadastro. Tente novamente');
                setSucessMsg('');
            }
        } catch (error) {
            // Capturando e exibindo a mensagem de erro
            const MensagemErro = error.response?.data?.error
            setErrorMsg(MensagemErro);
            setSucessMsg('');
        }
    };

    return (
        <ColumnLoginCadastro>
            {/* Exibindo o subtítulo do formulário */}
            <SubtituloContaUser>
                Realize seu cadastro
            </SubtituloContaUser>
            {/* Formulário de cadastro */}
            <form onSubmit={handleCadastro}>
                {/* Campo para e-mail (somente leitura) */}
                <FlexRowLabelInputLoginCadastro>
                    <LabelLoginCadastro htmlFor="email-cadastro">
                        <RiMailLine />
                    </LabelLoginCadastro>
                    <InputLoginCadastro type="email" name='email-cadastro' id='email-cadastro' placeholder='E-mail' required value={emailSettado} readOnly />
                </FlexRowLabelInputLoginCadastro>

                {/* Campo para nome */}
                <FlexRowLabelInputLoginCadastro>
                    <LabelLoginCadastro htmlFor="nome-cadastro">
                        <RiUser3Line />
                    </LabelLoginCadastro>
                    <InputLoginCadastro type="text" name='nome-completo-cadastro' id='nome-cadastro' placeholder='Nome' required value={nomeUser} onChange={(e) => setNomeUser(e.target.value)} />
                </FlexRowLabelInputLoginCadastro>

                {/* Campo para sobrenome */}
                <FlexRowLabelInputLoginCadastro>
                    <LabelLoginCadastro htmlFor="sobrenome-cadastro">
                        <RiUser3Line />
                    </LabelLoginCadastro>
                    <InputLoginCadastro type="text" name='sobrenome-cadastro' id='sobrenome-cadastro' placeholder='Sobrenome' required value={sobrenomeUser} onChange={(e) => setSobrenomeUser(e.target.value)} />
                </FlexRowLabelInputLoginCadastro>

                {/* Campo para telefone */}
                <FlexRowLabelInputLoginCadastro>
                    <LabelLoginCadastro htmlFor="telefone-cadastro">
                        <RiPhoneLine />
                    </LabelLoginCadastro>
                    <InputLoginCadastro type="text" name='telefone-cadastro' id='telefone-cadastro' placeholder='Número de celular' required value={telefoneUser} onChange={(e) => setTelefoneUser(e.target.value)} />
                </FlexRowLabelInputLoginCadastro>

                {/* Campo para senha */}
                <FlexRowLabelInputLoginCadastro>
                    <LabelLoginCadastro htmlFor="senha-cadastro">
                        <RiLockPasswordLine />
                    </LabelLoginCadastro>
                    <InputLoginCadastro type="password" name='senha-cadastro' id='senha-cadastro' placeholder='Senha' required value={senhaUser} onChange={(e) => setSenhaUser(e.target.value)} />
                </FlexRowLabelInputLoginCadastro>

                {/* Exibindo a mensagem de erro, se houver */}
                {errorMsg && <StyledError>
                    {errorMsg}
                </StyledError>}

                {/* Exibindo a mensagem de sucesso, se houver */}
                {sucessMsg && <StyledSuccess>
                    {sucessMsg}
                </StyledSuccess>}

                {/* Botão de envio do formulário */}
                <ButtonLoginCadastro type='submit'>
                    Cadastrar
                </ButtonLoginCadastro>
            </form>
        </ColumnLoginCadastro>
    )
}

export default CadastroForms
