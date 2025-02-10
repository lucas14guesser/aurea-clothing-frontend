import React, { useContext, useState } from 'react';
import { BtnMenuUser, ContainerDashBoard, FormRedefinir, LinkMail, MenuUser, RowMenuTitle } from '../styles/UserDashboardStyles';
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
import { StyledError, StyledSuccess, Titulo, TxtGerais } from '../styles/GlobalStyles';
import { UserContext } from '../router/userContext';
import { ButtonRedefinir } from '../styles/ContaUserStyles';
import axios from 'axios';

function ConfigurarRedefinicaoMail() {
    const { user, logout } = useContext(UserContext);
    const [successRed, setSuccessRed] = useState('');
    const [errorRed, setErrorRed] = useState('');
    const [openMenuUser, setOpenMenuUser] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClickMenuUser = () => {
        setOpenMenuUser(!openMenuUser);
    };

    const handleSolicitarRedefinicao = async () => {
        setLoading(true);

        try {
            const resp = await axios.post(`http://localhost:3001/aurea/usuario/${user.id_user}/solicitar-redefinicao-mail`);

            if (resp.data.error) {
                console.error('Erro na resposta:', resp.data.error);
                setErrorRed(resp.data.error);
                setSuccessRed('');
            } else {
                setSuccessRed('Solicitação enviada com sucesso. Verifique seu e-mail.');
                setErrorRed('');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            setErrorRed('Erro ao enviar solicitação. Tente novamente.');
            setSuccessRed('');
        } finally {
            setLoading(false);
        }
    };

    if (user.funcao_user === 'admin') {
        return (
            <React.Fragment>
                {openMenuUser ? (
                    <RowMenuTitle>
                        <IoIosArrowDown style={{ fontSize: '2rem', color: '#A87826', cursor: 'pointer' }} onClick={handleClickMenuUser} />
                        <Titulo>Boas-vindas, {user.nome_user}</Titulo>
                    </RowMenuTitle>
                ) : (
                    <RowMenuTitle>
                        <IoIosMenu style={{ fontSize: '2rem', color: '#A87826', cursor: 'pointer' }} onClick={handleClickMenuUser} />
                        <Titulo>Boas-vindas, {user.nome_user}</Titulo>
                    </RowMenuTitle>
                )}
                {openMenuUser && (
                    <MenuUser>
                        <LinkMail to='/minha-conta'>Minha Conta</LinkMail>
                        <LinkMail to='/pedidos-ativos'>Pedidos Ativos</LinkMail>
                        <LinkMail to='/pedidos-encerrados'>Pedidos Encerrados</LinkMail>
                        <LinkMail to='/produtos'>Meus Produtos</LinkMail>
                        <BtnMenuUser onClick={logout}>Sair</BtnMenuUser>
                    </MenuUser>
                )}
                <ContainerDashBoard>
                    <FormRedefinir>
                        <Titulo>Redefinir E-mail</Titulo>
                        <TxtGerais>Para redefinir o seu e-mail, clique no botão abaixo e confirme sua solicitação em seu e-mail.</TxtGerais>
                        {successRed && <StyledSuccess>{successRed}</StyledSuccess>}
                        {errorRed && <StyledError>{errorRed}</StyledError>}
                        <ButtonRedefinir
                            type="button"
                            onClick={handleSolicitarRedefinicao}
                            disabled={loading}
                        >
                            {loading ? 'Solicitando...' : 'Solicitar redefinição de e-mail'}
                        </ButtonRedefinir>
                        <TxtGerais>Verifique também sua caixa de spam se não encontrar o e-mail na sua caixa de entrada.</TxtGerais>
                    </FormRedefinir>
                </ContainerDashBoard>
            </React.Fragment>
        )
    }

    if (user.funcao_user === 'user') {
        return (
            <React.Fragment>
                {openMenuUser ? (
                    <RowMenuTitle>
                        <IoIosArrowDown style={{ fontSize: '2rem', color: '#A87826', cursor: 'pointer' }} onClick={handleClickMenuUser} />
                        <Titulo>Boas-vindas, {user.nome_user}</Titulo>
                    </RowMenuTitle>
                ) : (
                    <RowMenuTitle>
                        <IoIosMenu style={{ fontSize: '2rem', color: '#A87826', cursor: 'pointer' }} onClick={handleClickMenuUser} />
                        <Titulo>Boas-vindas, {user.nome_user}</Titulo>
                    </RowMenuTitle>
                )}
                {openMenuUser && (
                    <MenuUser>
                        <LinkMail to='/minha-conta'>Minha Conta</LinkMail>
                        <LinkMail to='/meus-pedidos'>Meus Pedidos</LinkMail>
                        <BtnMenuUser onClick={logout}>Sair</BtnMenuUser>
                    </MenuUser>
                )}
                <ContainerDashBoard>
                    <FormRedefinir>
                        <Titulo>Redefinir E-mail</Titulo>
                        <TxtGerais>Para redefinir o seu e-mail, clique no botão abaixo e confirme sua solicitação em seu e-mail.</TxtGerais>
                        {successRed && <StyledSuccess>{successRed}</StyledSuccess>}
                        {errorRed && <StyledError>{errorRed}</StyledError>}
                        <ButtonRedefinir
                            type="button"
                            onClick={handleSolicitarRedefinicao}
                            disabled={loading}
                        >
                            {loading ? 'Solicitando...' : 'Solicitar redefinição de e-mail'}
                        </ButtonRedefinir>
                        <TxtGerais>Verifique também sua caixa de spam se não encontrar o e-mail na sua caixa de entrada.</TxtGerais>
                    </FormRedefinir>
                </ContainerDashBoard>
            </React.Fragment>
        )
    }
}

export default ConfigurarRedefinicaoMail;
