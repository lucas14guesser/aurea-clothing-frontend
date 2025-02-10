import React, { useContext, useState } from 'react'
import { BtnMenuUser, ContainerDashBoard, FormRedefinir, LinkMail, MenuUser, RowMenuTitle } from '../styles/UserDashBoardStyles';
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
import { StyledError, StyledSuccess, Titulo } from '../styles/GlobalStyles';
import { UserContext } from '../router/userContext';
import { ButtonLoginCadastro, FlexRowLabelInputLoginCadastro, InputLoginCadastro, LabelLoginCadastro, LinkForgotPass } from '../styles/ContaUserStyles';
import { RiMailLine } from 'react-icons/ri';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function RedefinirMail() {
    const { user, logout } = useContext(UserContext);
    const [emailRed, setEmailRed] = useState('');
    const [emailConfirmRed, setEmailConfirmRed] = useState('');
    const [successRed, setSuccessRed] = useState('');
    const [errorRed, setErrorRed] = useState('');
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [loading, setLoading] = useState(false);
    const [isTokenValid, setIsTokenValid] = useState(false);

    const [openMenuUser, setOpenMenuUser] = useState(false);

    const handleClickMenuUser = () => {
        setOpenMenuUser(!openMenuUser);
    }

    const handleEmailUpdate = async (e) => {
        e.preventDefault();

        setLoading(true);

        if (emailRed !== emailConfirmRed) {
            setErrorRed('Os e-mails não coincidem.');
            setSuccessRed('');
            return;
        }

        try {
            const resp = await axios.put(`http://localhost:3001/aurea/usuario/mail/redefinir-mail`, {
                token,
                email_user: emailRed
            });

            if (resp.data.error) {
                setErrorRed(resp.data.error);
                setSuccessRed('');
            } else {
                setSuccessRed('E-mail redefinido com sucesso.');
                setErrorRed('');
                setTimeout(() => logout(), 1500);
            }
        } catch (error) {
            setErrorRed('Erro ao redefinir e-mail. Tente novamente.');
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
                        <BtnMenuUser onClick={logout}>Sair</BtnMenuUser>
                    </MenuUser>
                )}
                <ContainerDashBoard>
                    <FormRedefinir onSubmit={handleEmailUpdate}>
                        <Titulo>Redefinir E-mail</Titulo>
                        <FlexRowLabelInputLoginCadastro>
                            <LabelLoginCadastro htmlFor='email-red'>
                                <RiMailLine />
                            </LabelLoginCadastro>
                            <InputLoginCadastro type='email' placeholder='Novo e-mail' name='email-red' required value={emailRed} onChange={(e) => setEmailRed(e.target.value)} />
                        </FlexRowLabelInputLoginCadastro>

                        <FlexRowLabelInputLoginCadastro>
                            <LabelLoginCadastro htmlFor='email-conf-red'>
                                <RiMailLine />
                            </LabelLoginCadastro>
                            <InputLoginCadastro type='email' placeholder='Confirmar novo e-mail' name='email-conf-red' required value={emailConfirmRed} onChange={(e) => setEmailConfirmRed(e.target.value)} />
                        </FlexRowLabelInputLoginCadastro>

                        {successRed && <StyledSuccess>{successRed}</StyledSuccess>}
                        {errorRed && <StyledError>{errorRed}</StyledError>}
                        <FlexRowLabelInputLoginCadastro style={{ alignItems: 'flex-end', gap: '2rem' }}>
                            <LinkForgotPass to='/minha-conta'>Voltar</LinkForgotPass>
                            <ButtonLoginCadastro type='submit' disabled={loading} style={{ width: '10rem' }}>{loading ? 'Redefinindo...' : 'Redefinir'}</ButtonLoginCadastro>
                        </FlexRowLabelInputLoginCadastro>
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
                    <FormRedefinir onSubmit={handleEmailUpdate}>
                        <Titulo>Redefinir E-mail</Titulo>
                        <FlexRowLabelInputLoginCadastro>
                            <LabelLoginCadastro htmlFor='email-red'>
                                <RiMailLine />
                            </LabelLoginCadastro>
                            <InputLoginCadastro type='email' placeholder='Novo e-mail' name='email-red' required value={emailRed} onChange={(e) => setEmailRed(e.target.value)} />
                        </FlexRowLabelInputLoginCadastro>

                        <FlexRowLabelInputLoginCadastro>
                            <LabelLoginCadastro htmlFor='email-conf-red'>
                                <RiMailLine />
                            </LabelLoginCadastro>
                            <InputLoginCadastro type='email' placeholder='Confirmar novo e-mail' name='email-conf-red' required value={emailConfirmRed} onChange={(e) => setEmailConfirmRed(e.target.value)} />
                        </FlexRowLabelInputLoginCadastro>

                        {successRed && <StyledSuccess>{successRed}</StyledSuccess>}
                        {errorRed && <StyledError>{errorRed}</StyledError>}
                        <FlexRowLabelInputLoginCadastro style={{ alignItems: 'flex-end', gap: '2rem' }}>
                            <LinkForgotPass to='/minha-conta'>Voltar</LinkForgotPass>
                            <ButtonLoginCadastro type='submit' disabled={loading} style={{ width: '10rem' }}>{loading ? 'Redefinindo...' : 'Redefinir'}</ButtonLoginCadastro>
                        </FlexRowLabelInputLoginCadastro>
                    </FormRedefinir>
                </ContainerDashBoard>
            </React.Fragment>
        )
    }
}

export default RedefinirMail