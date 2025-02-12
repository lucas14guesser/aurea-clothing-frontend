import React, { useContext, useEffect, useState } from 'react'
import { Container, Titulo, TxtGerais } from '../styles/GlobalStyles'
import { ButtonProdutos, ContainerCrud, ContainerFuncao, ContainerFuncoes, ContainerGeralFuncao, InputProdutos, LabelInputProdutos, LabelProdutos, ListaProdutos, SectionBtnProdutos } from '../styles/ProdutosStyle'
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { BsPencil, BsCalendar3 } from "react-icons/bs";
import axios from 'axios';
import { BtnMenuUser, LinkMail, MenuUser, RowMenuTitle } from '../styles/UserDashboardStyles';
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
import { UserContext } from '../router/userContext'; // Contexto de usuário para obter informações do usuário atual
import { CiSearch } from 'react-icons/ci';
import { BotaoBuscaNav, ContainerInputButtonBuscaNav, InputBuscaNav } from '../styles/NavBarStyles';
import { formatDateBrDefault } from '../services/Functions';
import { ContainerSearchCdRastreio } from '../styles/CdRastreioStyles';

function Cupom() {
    // Obtendo dados do contexto de usuário, incluindo funções para logout
    const { user, logout } = useContext(UserContext);

    const [nomeCupom, setNomeCupom] = useState('');
    const [validadeCupom, setvalidadeCupom] = useState('');
    const [descontoCupom, setDescontoCupom] = useState('');
    const [cupom, setCupom] = useState([]);

    const [nomeCupomExcluir, setNomeCupomExcluir] = useState('');

    // Estado para controlar a visibilidade do menu do usuário
    const [openMenuUser, setOpenMenuUser] = useState(false);

    const [search, setSearch] = useState('');
    const [filterCupom, setFilterCupom] = useState([]);

    // Função para alternar a exibição do menu do usuário
    const handleClickMenuUser = () => {
        setOpenMenuUser(!openMenuUser);
    };

    useEffect(() => {
        const fetchCupom = async () => {
            try {
                const resp = await axios.get('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/listar-todos-cupom');
                setCupom(resp.data.result);
                setFilterCupom(resp.data.result);
            } catch (error) {
                console.error('Erro ao buscar todos os cupom.', error);
            }
        }
        fetchCupom();
    }, []);

    const handleSearchCupom = (e) => {
        const pesquisado = e.target.value.toLowerCase();
        setSearch(pesquisado);

        const results = cupom.filter((cupom) =>
            cupom.nome_cupom.toLowerCase().includes(pesquisado)
        );
        setFilterCupom(results);
    }

    const handleCadastrarCupom = async (e) => {
        e.preventDefault();

        const dadosCupom = {
            nome_cupom: nomeCupom,
            validade_cupom: validadeCupom,
            desconto_cupom: descontoCupom,
        }

        try {
            const resp = await axios.post('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/gerar-cupom', dadosCupom);

            if (resp.data.result) {
                alert('Cupom de desconto gerado com sucesso!');
                setNomeCupom('');
                setvalidadeCupom('');
                setDescontoCupom('');
            } else {
                alert('Erro ao gerar cupom de desconto.');
            }
        } catch (error) {
            console.error('Erro ao gerar cupom de desconto', error);
        }
    };

    const handleExcluirCupom = async (e) => {
        e.preventDefault();

        if (!nomeCupomExcluir) {
            alert('Por favor, insira um nome de cupom válido');
            return;
        }

        try {
            const resp = await axios.delete(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/deletar-cupom/${nomeCupomExcluir}`);
            if (resp.data.result) {
                setNomeCupomExcluir('');
                alert('Cupom de desconto excluído com sucesso!');
            } else {
                alert('Erro ao excluir cupom de desconto.');
            }
        } catch (error) {
            console.error('Erro ao excluir cupom de desconto', error);
            alert('Erro ao excluir cupom de desconto.');
        }
    }

    return (
        <React.Fragment>
            {/* Menu do usuário */}
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

            {/* Links do menu do usuário */}
            {openMenuUser && (
                <MenuUser>
                    <LinkMail to='/minha-conta'>Minha Conta</LinkMail>
                    <LinkMail to='/pedidos-ativos'>Pedidos Ativos</LinkMail>
                    <LinkMail to='/pedidos-encerrados'>Pedidos Encerrados</LinkMail>
                    <BtnMenuUser onClick={logout}>Sair</BtnMenuUser>
                </MenuUser>
            )}
            <Container>
                <Titulo>Cupom</Titulo>
                <ContainerGeralFuncao>
                    <ContainerFuncoes>
                        <ContainerFuncao>
                            <ContainerCrud>
                                <TxtGerais style={{ color: '#A87826' }}>Cadastrar cupom de desconto</TxtGerais>
                                <LabelInputProdutos>
                                    <LabelProdutos htmlFor='nome_cupom'><BsPencil /></LabelProdutos>
                                    <InputProdutos type='text' placeholder='Nome do Cupom' id='nome_cupom' required value={nomeCupom} onChange={(e) => setNomeCupom(e.target.value)} />
                                </LabelInputProdutos>

                                <LabelInputProdutos>
                                    <LabelProdutos htmlFor='validade_cupom'><BsCalendar3 /></LabelProdutos>
                                    <InputProdutos type='date' id='validade_cupom' name='validade_cupom' required value={validadeCupom} onChange={(e) => setvalidadeCupom(e.target.value)} />
                                </LabelInputProdutos>

                                <LabelInputProdutos>
                                    <LabelProdutos htmlFor='desconto_cupom'><MdOutlineAttachMoney /></LabelProdutos>
                                    <InputProdutos type='number' placeholder='Desconto do Cupom em %' id='desconto_cupom' required value={descontoCupom} onChange={(e) => setDescontoCupom(e.target.value)} />
                                </LabelInputProdutos>

                                <SectionBtnProdutos>
                                    <ButtonProdutos onClick={handleCadastrarCupom}>Gerar</ButtonProdutos>
                                </SectionBtnProdutos>
                            </ContainerCrud>
                        </ContainerFuncao>

                        <ContainerFuncao>
                            <ContainerCrud>
                                <TxtGerais style={{ color: '#A87826' }}>Excluir cupom de desconto</TxtGerais>
                                <LabelInputProdutos>
                                    <LabelProdutos htmlFor='nome_cupom'><AiOutlineProduct /></LabelProdutos>
                                    <InputProdutos type='text' id='nome_cupom' placeholder='Nome do cupom' value={nomeCupomExcluir} onChange={(e) => setNomeCupomExcluir(e.target.value)} />
                                </LabelInputProdutos>
                                <SectionBtnProdutos>
                                    <ButtonProdutos onClick={handleExcluirCupom}>Excluir Cupom</ButtonProdutos>
                                </SectionBtnProdutos>
                            </ContainerCrud>
                        </ContainerFuncao>
                    </ContainerFuncoes>
                </ContainerGeralFuncao>
                <ContainerSearchCdRastreio>
                    {/* Campo de entrada de texto para a busca - possui um placeholder para guiar o usuário */}
                    <InputBuscaNav
                        type="text"
                        name="searchCupom"
                        id="searchCupom"
                        value={search}
                        placeholder='Cupom que procura?'
                        onChange={handleSearchCupom}
                    />
                    {/* Botão de busca que exibe um ícone de lupa (CiSearch) */}
                    <BotaoBuscaNav>
                        <CiSearch />
                    </BotaoBuscaNav>
                </ContainerSearchCdRastreio>

                <ListaProdutos>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Validade</th>
                                <th>Desconto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(filterCupom) && filterCupom.map((cupom) => (
                                <tr key={cupom.nome_cupom}>
                                    <td>{cupom.nome_cupom}</td>
                                    <td>{`Até ${formatDateBrDefault(cupom.validade_cupom)}`}</td>
                                    <td>{`${cupom.desconto_cupom}%`}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ListaProdutos>




            </Container>
        </React.Fragment>
    )
}

export default Cupom