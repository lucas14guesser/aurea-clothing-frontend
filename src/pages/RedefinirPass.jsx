import React, { useContext, useState } from 'react';
import { BtnMenuUser, ContainerDashBoard, FormRedefinir, LinkMail, MenuUser, RowMenuTitle } from '../styles/UserDashBoardStyles';
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
import { StyledError, StyledSuccess, Titulo } from '../styles/GlobalStyles';
import { UserContext } from '../router/userContext';
import { ButtonLoginCadastro, FlexRowLabelInputLoginCadastro, InputLoginCadastro, LabelLoginCadastro, LinkForgotPass } from '../styles/ContaUserStyles';
import { RiLockPasswordLine } from 'react-icons/ri';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function RedefinirPass() {
    const { user, logout } = useContext(UserContext);
    const [senhaRed, setSenhaRed] = useState('');
    const [senhaConfirmRed, setSenhaConfirmRed] = useState('');
    const [successRed, setSuccessRed] = useState('');
    const [errorRed, setErrorRed] = useState('');
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [loading, setLoading] = useState(false);


    const [openMenuUser, setOpenMenuUser] = useState(false);

    const handleClickMenuUser = () => {
        setOpenMenuUser(!openMenuUser);
    };

    const handleSenhaUpdate = async (e) => {
        e.preventDefault();

        setLoading(true);

        if (senhaRed !== senhaConfirmRed) {
            setErrorRed('As senhas não coincidem.');
            setSuccessRed('');
            return;
        }

        try {
            const resp = await axios.put(`http://localhost:3001/aurea/usuario/senha/redefinir-senha`, {
                token,
                senha_user: senhaRed
            });

            if (resp.data.error) {
                setErrorRed(resp.data.error);
                setSuccessRed('');
            } else {
                setSuccessRed('Senha redefinida com sucesso.');
                setErrorRed('');
                setTimeout(() => logout(), 1500);
            }
        } catch (error) {
            setErrorRed('Erro ao redefinir senha. Tente novamente.');
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
                    <FormRedefinir onSubmit={handleSenhaUpdate}>
                        <Titulo>Redefinir Senha</Titulo>
                        <FlexRowLabelInputLoginCadastro>
                            <LabelLoginCadastro htmlFor='senha-red'>
                                <RiLockPasswordLine />
                            </LabelLoginCadastro>
                            <InputLoginCadastro
                                type='password'
                                placeholder='Nova senha'
                                name='senha-red'
                                required
                                value={senhaRed}
                                onChange={(e) => setSenhaRed(e.target.value)}
                            />
                        </FlexRowLabelInputLoginCadastro>

                        <FlexRowLabelInputLoginCadastro>
                            <LabelLoginCadastro htmlFor='senha-conf-red'>
                                <RiLockPasswordLine />
                            </LabelLoginCadastro>
                            <InputLoginCadastro
                                type='password'
                                placeholder='Confirmar nova senha'
                                name='senha-conf-red'
                                required
                                value={senhaConfirmRed}
                                onChange={(e) => setSenhaConfirmRed(e.target.value)}
                            />
                        </FlexRowLabelInputLoginCadastro>

                        {successRed && <StyledSuccess>{successRed}</StyledSuccess>}
                        {errorRed && <StyledError>{errorRed}</StyledError>}
                        <FlexRowLabelInputLoginCadastro style={{ alignItems: 'flex-end', gap: '2rem' }}>
                            <LinkForgotPass to='/minha-conta'>Voltar</LinkForgotPass>
                            <ButtonLoginCadastro type='submit' disabled={loading} style={{ width: '10rem' }}>
                                {loading ? 'Redefinindo...' : 'Redefinir'}
                            </ButtonLoginCadastro>
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
                    <FormRedefinir onSubmit={handleSenhaUpdate}>
                        <Titulo>Redefinir Senha</Titulo>
                        <FlexRowLabelInputLoginCadastro>
                            <LabelLoginCadastro htmlFor='senha-red'>
                                <RiLockPasswordLine />
                            </LabelLoginCadastro>
                            <InputLoginCadastro
                                type='password'
                                placeholder='Nova senha'
                                name='senha-red'
                                required
                                value={senhaRed}
                                onChange={(e) => setSenhaRed(e.target.value)}
                            />
                        </FlexRowLabelInputLoginCadastro>

                        <FlexRowLabelInputLoginCadastro>
                            <LabelLoginCadastro htmlFor='senha-conf-red'>
                                <RiLockPasswordLine />
                            </LabelLoginCadastro>
                            <InputLoginCadastro
                                type='password'
                                placeholder='Confirmar nova senha'
                                name='senha-conf-red'
                                required
                                value={senhaConfirmRed}
                                onChange={(e) => setSenhaConfirmRed(e.target.value)}
                            />
                        </FlexRowLabelInputLoginCadastro>

                        {successRed && <StyledSuccess>{successRed}</StyledSuccess>}
                        {errorRed && <StyledError>{errorRed}</StyledError>}
                        <FlexRowLabelInputLoginCadastro style={{ alignItems: 'flex-end', gap: '2rem' }}>
                            <LinkForgotPass to='/minha-conta'>Voltar</LinkForgotPass>
                            <ButtonLoginCadastro type='submit' disabled={loading} style={{ width: '10rem' }}>
                                {loading ? 'Redefinindo...' : 'Redefinir'}
                            </ButtonLoginCadastro>
                        </FlexRowLabelInputLoginCadastro>
                    </FormRedefinir>
                </ContainerDashBoard>
            </React.Fragment>
        )
    }
}

export default RedefinirPass;
