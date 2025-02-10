import React, { useContext, useEffect, useState } from 'react';
import { BtnLinkAdminDash, BtnMenuUser, ContainerAdminDashboard, ContainerDashBoard, ContainerDashBoardColumn, ContainerPainelAdmin, DivColuna, DivFlexBtn, DivLinha, DivLinhaMb2, EditarDashBoard, Informacoes, InputUserDash, LinkMail, MenuUser, PainelAdmin, RowMenuTitle, SubtituloUserDash, TituloDash, TxtHamburguerUserDash } from '../styles/UserDashBoardStyles';
import { StyledError, StyledSuccess, Titulo, TxtGerais } from '../styles/GlobalStyles';
import ModalUserProfile from '../components/functions/modals/ModalUserProfile';
import { ButtonModal, ModalInternalContainer } from '../styles/ModalsStyles';
import { UserContext } from '../router/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoIosMenu, IoIosArrowDown } from "react-icons/io";
import { formatDateBrDefault } from '../services/Functions';
import SpinnerComponent from '../components/functions/main/SpinnerComponent';

function UserDashBoard() {
    const [modalUserProfileOpen, setModalUserProfileOpen] = useState(false);
    const { user, isLoading, isAuthenticated, logout, updateUser } = useContext(UserContext);
    const navigate = useNavigate()

    const [editNomeUser, setEditNomeUser] = useState(user.nome_user);
    const [editSobrenomeUser, setEditSobrenomeUser] = useState(user.sobrenome_user);
    const [editNascUser, setEditNascUser] = useState(user.nasc_user);
    const [editTelefoneUser, setEditTelefoneUser] = useState(user.telefone_user);
    const [editCpfUser, setEditCpfUser] = useState(user.cpf_user);
    const [editField, setEditField] = useState(false);
    const [editError, setEditError] = useState('');
    const [editSuccess, setEditSuccess] = useState('');

    const [openMenuUser, setOpenMenuUser] = useState(false);

    const [pedidos, setPedidos] = useState([]);
    const [errorPedidos, setErrorPedidos] = useState('');

    const formatDateSqlDefault = (data) => {
        return new Date(data).toJSON().slice(0, 10);
    }

    const handleClickModalUserProfile = () => {
        setModalUserProfileOpen(true);
    };

    const handleCloseModalUserProfile = () => {
        setModalUserProfileOpen(false);
        setEditField(false);
    };

    const handleClickMenuUser = () => {
        setOpenMenuUser(!openMenuUser);
    }

    const handleClickEditar = async () => {
        setEditField(!editField);

        const dadosUser = {
            nome_user: editNomeUser,
            sobrenome_user: editSobrenomeUser,
            cpf_user: editCpfUser,
            nasc_user: formatDateSqlDefault(editNascUser),
            telefone_user: editTelefoneUser
        }

        if (editField) {
            try {
                const resp = await axios.put(`http://localhost:3001/aurea/usuario/${user.id_user}`, dadosUser)

                if (resp.data.error) {
                    setEditError(resp.data.error);
                    setEditSuccess('');
                } else {
                    updateUser(dadosUser);
                    setEditSuccess('Seus dados foram atualizados.');
                    setEditField(false);
                }
            } catch (error) {
                setEditError('Erro ao atualizar dados.');
            }
        }
    }

    useEffect(() => {
        const fetchDadosPedido = async () => {
            try {
                const resp = await axios.get('http://localhost:3001/aurea/pedidos');
                if (resp.data.result) {
                    setPedidos(resp.data.result);
                }
            } catch (error) {
                resp.result.error;
            }
        }
        fetchDadosPedido();
    }, []);

    useEffect(() => {
        if (isLoading) {
            return;
        }

        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, isLoading, navigate]);

    if (isLoading) {
        return <SpinnerComponent />;
    }

    if (!user) {
        return <p>Usuário não encontrado.</p>;
    }

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
                        <LinkMail to='/pedidos-ativos'>Pedidos Ativos</LinkMail>
                        <LinkMail to='/pedidos-encerrados'>Pedidos Encerrados</LinkMail>
                        <LinkMail to='/produtos'>Meus Produtos</LinkMail>
                        <LinkMail to='/banners'>Meus Banners</LinkMail>
                        <LinkMail to='/cupom'>Meus Cupons</LinkMail>
                        <LinkMail to='/cd-rastreio'>Meus Rastreios</LinkMail>
                        <LinkMail to='/redefinicao-mail'>Redefinir E-mail</LinkMail>
                        <LinkMail to='/redefinicao-senha'>Redefinir Senha</LinkMail>
                        <BtnMenuUser onClick={logout}>Sair</BtnMenuUser>
                    </MenuUser>
                )}
                <ContainerDashBoardColumn>
                    <Titulo>O que você quer fazer?</Titulo>
                    <ContainerAdminDashboard>
                        <ContainerPainelAdmin>
                            <PainelAdmin>
                                <TituloDash>Pedidos Ativos</TituloDash>
                                <TituloDash>
                                    {pedidos.filter(pedido => pedido.status_pedido === 'em andamento').length > 0 ? pedidos.filter(pedido => pedido.status_pedido === 'em andamento').length : 0}
                                </TituloDash>
                                <BtnLinkAdminDash to='/pedidos-ativos'>Verificar Pedidos</BtnLinkAdminDash>
                            </PainelAdmin>
                        </ContainerPainelAdmin>

                        <ContainerPainelAdmin>
                            <PainelAdmin>
                                <TituloDash>Pedidos Encerrados</TituloDash>
                                <TituloDash>
                                    {pedidos.filter(pedido => pedido.status_pedido === 'encerrado').length > 0 ? pedidos.filter(pedido => pedido.status_pedido === 'encerrado').length : 0}
                                </TituloDash>
                                <BtnLinkAdminDash to='/pedidos-encerrados'>Verificar Pedidos</BtnLinkAdminDash>
                            </PainelAdmin>
                        </ContainerPainelAdmin>
                    </ContainerAdminDashboard>

                    <ContainerAdminDashboard>
                        <ContainerPainelAdmin>
                            <PainelAdmin>
                                <TituloDash>Produtos</TituloDash>
                                <TxtGerais>
                                    Cadastre ou Remova seus produtos.
                                </TxtGerais>
                                <BtnLinkAdminDash to='/produtos'>Ir para funções</BtnLinkAdminDash>
                            </PainelAdmin>
                        </ContainerPainelAdmin>

                        <ContainerPainelAdmin>
                            <PainelAdmin>
                                <TituloDash>Banner</TituloDash>
                                <TxtGerais>
                                    Cadastre ou Remova seus banners.
                                </TxtGerais>
                                <BtnLinkAdminDash to='/banners'>Ir para funções</BtnLinkAdminDash>
                            </PainelAdmin>
                        </ContainerPainelAdmin>
                    </ContainerAdminDashboard>

                    <ContainerAdminDashboard>
                        <ContainerPainelAdmin>
                            <PainelAdmin>
                                <TituloDash>Cupons</TituloDash>
                                <TxtGerais>
                                    Cadastre ou remova seus cupons de desconto.
                                </TxtGerais>
                                <BtnLinkAdminDash to='/cupom'>Ir para funções</BtnLinkAdminDash>
                            </PainelAdmin>
                        </ContainerPainelAdmin>

                        <ContainerPainelAdmin>
                            <PainelAdmin>
                                <TituloDash>Código de rastreio</TituloDash>
                                <TxtGerais>
                                    Cadastre os códigos de rastreio dos pedidos.
                                </TxtGerais>
                                <BtnLinkAdminDash to='/cd-rastreio'>Ir para funções</BtnLinkAdminDash>
                            </PainelAdmin>
                        </ContainerPainelAdmin>
                    </ContainerAdminDashboard>
                </ContainerDashBoardColumn>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            {openMenuUser ? (
                <RowMenuTitle>
                    <TxtHamburguerUserDash><IoIosArrowDown onClick={handleClickMenuUser} /></TxtHamburguerUserDash>
                    <Titulo>Boas-vindas, {user.nome_user}</Titulo>
                </RowMenuTitle>
            ) : (
                <RowMenuTitle>
                    <TxtHamburguerUserDash><IoIosMenu onClick={handleClickMenuUser} /></TxtHamburguerUserDash>
                    <Titulo>Boas-vindas, {user.nome_user}</Titulo>
                </RowMenuTitle>
            )}
            {openMenuUser && (
                <MenuUser>
                    <LinkMail to='/meus-pedidos'>Meus Pedidos</LinkMail>
                    <LinkMail to='/redefinicao-mail'>Redefinir E-mail</LinkMail>
                    <LinkMail to='/redefinicao-senha'>Redefinir Senha</LinkMail>
                    <BtnMenuUser onClick={logout}>Sair</BtnMenuUser>
                </MenuUser>
            )}
            <ContainerDashBoard>
                <Informacoes>
                    <DivLinha>
                        <DivColuna>
                            <Titulo style={{ fontWeight: '500' }}>Nome</Titulo>
                            <p>{user.nome_user || 'N/A'}</p>
                        </DivColuna>
                        <DivColuna>
                            <Titulo style={{ fontWeight: '500' }}>Sobrenome</Titulo>
                            <p>{user.sobrenome_user || 'N/A'}</p>
                        </DivColuna>
                    </DivLinha>
                    <DivLinha>
                        <DivColuna>
                            <Titulo style={{ fontWeight: '500' }}>Email</Titulo>
                            <p>{user.email_user || 'N/A'}</p>
                        </DivColuna>
                        <DivColuna>
                            <Titulo style={{ fontWeight: '500' }}>CPF</Titulo>
                            <p>{user.cpf_user || 'N/A'}</p>
                        </DivColuna>
                    </DivLinha>
                    <DivLinhaMb2>
                        <DivColuna>
                            <Titulo style={{ fontWeight: '500' }}>Nascimento</Titulo>
                            <p>{formatDateBrDefault(user.nasc_user) || 'N/A'}</p>
                        </DivColuna>
                        <DivColuna>
                            <Titulo style={{ fontWeight: '500' }}>Telefone</Titulo>
                            <p>{user.telefone_user || 'N/A'}</p>
                        </DivColuna>
                    </DivLinhaMb2>
                    <EditarDashBoard onClick={handleClickModalUserProfile}>
                        Editar
                    </EditarDashBoard>
                </Informacoes>
            </ContainerDashBoard>

            {modalUserProfileOpen && (
                <ModalUserProfile>
                    <SubtituloUserDash>Minhas Informações</SubtituloUserDash>
                    <ModalInternalContainer>
                        <Informacoes>
                            <DivLinha>
                                <DivColuna>
                                    <Titulo style={{ fontWeight: '500' }}>
                                        Nome
                                    </Titulo>
                                    {editField ? (
                                        <InputUserDash type='text' name='nome' value={editNomeUser} onChange={(e) => setEditNomeUser(e.target.value)} />
                                    ) : (
                                        <p>{user.nome_user}</p>
                                    )}
                                </DivColuna>
                                <DivColuna>
                                    <Titulo style={{ fontWeight: '500' }}>
                                        Sobrenome
                                    </Titulo>
                                    {editField ? (
                                        <InputUserDash type='text' name='sobrenome' value={editSobrenomeUser} onChange={(e) => setEditSobrenomeUser(e.target.value)} />
                                    ) : (
                                        <p>{user.sobrenome_user}</p>
                                    )}
                                </DivColuna>
                            </DivLinha>
                            <DivLinha>
                                <DivColuna>
                                    <Titulo style={{ fontWeight: '500' }}>
                                        Email
                                    </Titulo>
                                    <p>{user.email_user}</p>
                                </DivColuna>
                                <DivColuna>
                                    <Titulo style={{ fontWeight: '500' }}>
                                        CPF
                                    </Titulo>
                                    {editField ? (
                                        <InputUserDash type='text' name='cpf' value={editCpfUser} onChange={(e) => setEditCpfUser(e.target.value)} />
                                    ) : (
                                        <p>{user.cpf_user}</p>
                                    )}
                                </DivColuna>
                            </DivLinha>
                            <DivLinhaMb2>
                                <DivColuna>
                                    <Titulo style={{ fontWeight: '500' }}>
                                        Nascimento
                                    </Titulo>
                                    {editField ? (
                                        <InputUserDash type='date' name='nasc' value={editNascUser} onChange={(e) => setEditNascUser(e.target.value)} />
                                    ) : (
                                        <p>{formatDateBrDefault(user.nasc_user)}</p>
                                    )}
                                </DivColuna>
                                <DivColuna>
                                    <Titulo style={{ fontWeight: '500' }}>
                                        Telefone
                                    </Titulo>
                                    {editField ? (
                                        <InputUserDash type='text' name='telefone' value={editTelefoneUser} onChange={(e) => setEditTelefoneUser(e.target.value)} />
                                    ) : (
                                        <p>{user.telefone_user}</p>
                                    )}
                                </DivColuna>
                            </DivLinhaMb2>
                            <DivFlexBtn>
                                {editSuccess && <StyledSuccess>{editSuccess}</StyledSuccess>}
                                {editError && <StyledError>{editError}</StyledError>}
                                {editField ? (
                                    <ButtonModal onClick={handleClickEditar}>Salvar</ButtonModal>
                                ) : (
                                    <ButtonModal onClick={handleClickEditar}>Editar</ButtonModal>
                                )}
                                <ButtonModal onClick={handleCloseModalUserProfile}>Fechar</ButtonModal>
                            </DivFlexBtn>
                        </Informacoes>
                    </ModalInternalContainer>
                </ModalUserProfile>
            )}
        </React.Fragment>
    );
}

export default UserDashBoard;
