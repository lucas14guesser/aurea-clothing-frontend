import React, { useState, useContext } from 'react'; // Importa o React, useState e useContext para o gerenciamento de estado e contexto
import {
    ButtonEsqueciSenha,
    ButtonLoginCadastro, // Importa o botão de login estilizado
    ColumnLoginCadastro, // Importa o container principal estilizado para login
    ContainerForgotPassButtonLogin, // Importa o container para o botão e link de 'Esqueci minha senha'
    FlexRowLabelInputLoginCadastro, // Importa o container para inputs com rótulos alinhados
    InputLoginCadastro, // Importa o campo de entrada de login
    LabelLoginCadastro, // Importa o rótulo de login
    LinkForgotPass, // Importa o link para a página de recuperação de senha
    SubtituloContaUser
} from '../../../styles/ContaUserStyles'; // Importa os estilos de componentes para o login

import { StyledError, StyledSuccess, Titulo } from '../../../styles/GlobalStyles'; // Importa os estilos globais de erro e subtítulo
import { RiMailLine, RiLockPasswordLine } from "react-icons/ri"; // Importa os ícones para e-mail e senha
import axios from 'axios'; // Importa o axios para fazer requisições HTTP
import { useNavigate } from 'react-router-dom'; // Importa a função de navegação para redirecionamento
import { UserContext } from '../../../router/userContext'; // Importa o contexto de usuário para acessar e atualizar o estado global do login
import ModalEsqueciMinhaSenha from '../../functions/modals/ModalEsqueciMinhaSenha';

function LoginSection() {
    // Declaração dos estados para o gerenciamento de dados do formulário e mensagens de erro e sucesso
    const [emailUser, setEmailUser] = useState(''); // Estado para armazenar o e-mail do usuário
    const [senhaUser, setSenhaUser] = useState(''); // Estado para armazenar a senha do usuário
    const [error, setError] = useState(''); // Estado para armazenar mensagens de erro
    const [success, setSuccess] = useState(''); // Estado para armazenar mensagens de sucesso

    const [modalRefSenha, setModalRefSenha] = useState(false);
    const [emailRef, setEmailRef] = useState('');
    const [errorRef, setErrorRef] = useState(''); // Estado para armazenar mensagens de erro
    const [successRef, setSuccessRef] = useState(''); // Estado para armazenar mensagens de sucesso
    const [sendLoading, setSendLoading] = useState(false);

    const navigate = useNavigate(); // Hook para navegação programática após o login
    const { login } = useContext(UserContext); // Usa o contexto do usuário para acessar a função de login

    // Função assíncrona que lida com o envio do formulário de login
    const handleLogin = async (e) => {
        e.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)
        setError(''); // Reseta a mensagem de erro antes de tentar o login
        setSuccess(''); // Reseta a mensagem de sucesso antes de tentar o login

        // Valida se ambos os campos (email e senha) foram preenchidos
        if (!emailUser || !senhaUser) {
            setError('Preencha todos os campos.'); // Exibe uma mensagem de erro se algum campo estiver vazio
            return;
        }

        // Cria um objeto com os dados do login a serem enviados ao backend
        const dadosLogin = {
            email_user: emailUser,
            senha_user: senhaUser
        };

        try {
            // Faz uma requisição POST para o servidor para realizar o login
            const resp = await axios.post('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/login', dadosLogin, {
                withCredentials: true // Inclui cookies, caso necessário para autenticação
            });

            // Verifica se a resposta foi bem-sucedida e se o login foi confirmado
            if (resp.status === 200 && resp.data.success) {
                setSuccess('Login bem-sucedido!'); // Exibe uma mensagem de sucesso
                await login(emailUser); // Chama a função de login do contexto
                navigate('/minha-conta'); // Redireciona o usuário para a página 'minha-conta' após o login
            } else {
                setError('Falha ao fazer login. Por favor, tente novamente.'); // Exibe uma mensagem de erro em caso de falha no login
            }
        } catch (error) {
            // Trata erros específicos com base no status da resposta
            if (error.response && error.response.status === 400) {
                setError(error.response.data.message); // Exibe a mensagem de erro do servidor
            } else if (error.response && error.response.status === 401) {
                setError('Credenciais inválidas. Tente novamente.'); // Exibe erro de credenciais inválidas
            } else {
                setError('Ocorreu um erro no servidor. Por favor, tente mais tarde.'); // Exibe erro genérico de servidor
            }
        }
    };

    const handleModalRefSenha = () => {
        setModalRefSenha(!modalRefSenha);
    }

    const handleRefSenha = async (e) => {
        e.preventDefault();

        setSendLoading(true);

        const dataRef = {
            email_user: emailRef
        };

        if (!emailRef) {
            setErrorRef('E-mail é obrigatório');
            return; // Previne a execução caso o e-mail não seja informado
        }

        try {
            const resp = await axios.post('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/usuario/senha/esqueci-senha', dataRef);

            if (resp.data.error) {
                setSuccessRef(''); // Limpa qualquer mensagem de sucesso
                setErrorRef(resp.data.error); // Exibe o erro retornado pelo back-end
            } else {
                setSuccessRef('E-mail enviado com sucesso. Siga as instruções para trocar de senha.');
                setErrorRef('');
                setEmailRef('');
            }
        } catch (error) {
            setErrorRef('Erro ao enviar e-mail.');
            console.error(error);
        } finally {
            setSendLoading(false)
        }
    };

    return (
        <ColumnLoginCadastro> {/* Container principal para o formulário de login */}
            <SubtituloContaUser> {/* Subtítulo indicando a seção de login */}
                Acesse sua conta
            </SubtituloContaUser>
            <form onSubmit={handleLogin}> {/* Formulário de login com função de submit definida */}
                <FlexRowLabelInputLoginCadastro> {/* Container para o campo de e-mail */}
                    <LabelLoginCadastro htmlFor="email-login"> {/* Rótulo do campo de e-mail */}
                        <RiMailLine /> {/* Ícone de e-mail */}
                    </LabelLoginCadastro>
                    <InputLoginCadastro
                        type="email"
                        name='email-login'
                        id='email-login'
                        placeholder='E-mail'
                        required
                        value={emailUser}
                        onChange={(e) => setEmailUser(e.target.value)} // Atualiza o estado de e-mail conforme o usuário digita
                    />
                </FlexRowLabelInputLoginCadastro>
                <FlexRowLabelInputLoginCadastro> {/* Container para o campo de senha */}
                    <LabelLoginCadastro htmlFor="senha-login"> {/* Rótulo do campo de senha */}
                        <RiLockPasswordLine /> {/* Ícone de senha */}
                    </LabelLoginCadastro>
                    <InputLoginCadastro
                        type="password"
                        name='senha-login'
                        id='senha-login'
                        placeholder='Senha'
                        required
                        value={senhaUser}
                        onChange={(e) => setSenhaUser(e.target.value)} // Atualiza o estado de senha conforme o usuário digita
                    />
                </FlexRowLabelInputLoginCadastro>
                {error && <StyledError>{error}</StyledError>} {/* Exibe a mensagem de erro, se houver */}
                {success && <p style={{ color: 'green' }}>{success}</p>} {/* Exibe a mensagem de sucesso, se houver */}
                <ContainerForgotPassButtonLogin> {/* Container para o botão de login e link para recuperação de senha */}
                    <LinkForgotPass onClick={handleModalRefSenha}> {/* Link para página de recuperação de senha */}
                        Esqueci minha senha
                    </LinkForgotPass>
                    <ButtonLoginCadastro type='submit'> {/* Botão para enviar o formulário */}
                        Entrar
                    </ButtonLoginCadastro>
                </ContainerForgotPassButtonLogin>
            </form>
            {modalRefSenha && (
                <ModalEsqueciMinhaSenha>
                    <Titulo>Esqueci minha senha</Titulo>
                    <FlexRowLabelInputLoginCadastro>
                        <LabelLoginCadastro>
                            <RiMailLine />
                        </LabelLoginCadastro>
                        <InputLoginCadastro
                            type='email'
                            placeholder='Seu e-mail'
                            value={emailRef}
                            onChange={(e) => setEmailRef(e.target.value)}
                        />
                    </FlexRowLabelInputLoginCadastro>
                    {successRef ? (
                        <StyledSuccess>{successRef}</StyledSuccess>
                    ) : (
                        <StyledError>{errorRef}</StyledError>
                    )}
                    <FlexRowLabelInputLoginCadastro>
                        <ButtonEsqueciSenha type='submit' onClick={handleRefSenha} disabled={sendLoading}>
                            {sendLoading ? 'Enviando...' : 'Enviar'}
                        </ButtonEsqueciSenha>
                        <ButtonEsqueciSenha type='submit' onClick={handleModalRefSenha}>
                            Fechar
                        </ButtonEsqueciSenha>
                    </FlexRowLabelInputLoginCadastro>
                </ModalEsqueciMinhaSenha>
            )}
        </ColumnLoginCadastro>
    );
}

export default LoginSection; // Exporta o componente LoginSection para ser utilizado em outras partes do aplicativo
