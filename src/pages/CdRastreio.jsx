import React, { useContext, useEffect, useState } from 'react'
import { Container, Titulo, TxtGerais } from '../styles/GlobalStyles'
import { ButtonProdutos, ContainerCrud, ContainerFuncao, ContainerFuncoes, ContainerGeralFuncao, InputProdutos, LabelInputProdutos, LabelProdutos, ListaProdutos, SectionBtnProdutos } from '../styles/ProdutosStyle'
import { BsPencil } from "react-icons/bs";
import { IoIosCodeDownload } from "react-icons/io";
import axios from 'axios';
import { BtnMenuUser, LinkMail, MenuUser, RowMenuTitle } from '../styles/UserDashBoardStyles';
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
import { UserContext } from '../router/userContext'; // Contexto de usuário para obter informações do usuário atual
import { CiSearch } from 'react-icons/ci';
import { BotaoBuscaNav, InputBuscaNav } from '../styles/NavBarStyles';
import { formatDateBrDefault } from '../services/Functions';
import { BotaoPaginacao, ContainerPaginacao } from '../styles/ProdutoStyles';
import { ContainerSearchCdRastreio } from '../styles/CdRastreioStyles';

function CdRastreio() {
    // Obtendo dados do contexto de usuário, incluindo funções para logout
    const { user, logout } = useContext(UserContext);

    const [pedidos, setPedidos] = useState([]);
    const [filterPedidos, setFilterPedidos] = useState([]);

    const [search, setSearch] = useState('');


    const [idPedido, setIdPedido] = useState('');
    const [cdRastreio, setCdRastreio] = useState('');

    // Estado para controlar a visibilidade do menu do usuário
    const [openMenuUser, setOpenMenuUser] = useState(false);

    // Função para alternar a exibição do menu do usuário
    const handleClickMenuUser = () => {
        setOpenMenuUser(!openMenuUser);
    };

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    // Função para calcular o índice inicial e final dos itens da página atual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Filtra os produtos para mostrar apenas os itens da página atual
    const currentItems = filterPedidos.slice(startIndex, endIndex);

    // Calcula o número total de páginas
    const totalPages = Math.ceil(filterPedidos.length / itemsPerPage);

    // Função para mudar a página
    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                const resp = await axios.get('http://localhost:3001/aurea/pedidos');
                setPedidos(resp.data.result);
                setFilterPedidos(resp.data.result);
            } catch (error) {
                console.error('Erro ao buscar todos os pedidos.', error);
            }
        }
        fetchPedidos();
    }, []);

    const handleSearchPedido = (e) => {
        const pesquisado = e.target.value.toLowerCase();
        setSearch(pesquisado);

        const results = pedidos.filter((pedido) =>
            pedido.id_pedido.toString().toLowerCase().includes(pesquisado)
        );
        setFilterPedidos(results);
    }

    const handleAdicionarCdRastreio = async (e) => {
        e.preventDefault();

        const dadosRastreio = {
            id_pedido: idPedido,
            cd_rastreio_frete_pedido: cdRastreio,
        }

        try {
            const resp = await axios.put(`http://localhost:3001/aurea/pedido/cd-rastreio/${idPedido}`, dadosRastreio);

            if (resp.data.result) {
                alert('Código de rastreio adicionado com sucesso!');
                setIdPedido('');
                setCdRastreio('');
            } else {
                alert('Erro ao adicionar código de rastreio.');
            }
        } catch (error) {
            console.error('Erro ao adicionar código de rastreio', error);
        }
    };

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
                <Titulo>Código de Rastreio</Titulo>
                <ContainerGeralFuncao>
                    <ContainerFuncoes>
                        <ContainerFuncao>
                            <ContainerCrud>
                                <TxtGerais style={{ color: '#A87826' }}>Adicionar código de rastreio</TxtGerais>
                                <LabelInputProdutos>
                                    <LabelProdutos htmlFor='id_pedido'><BsPencil /></LabelProdutos>
                                    <InputProdutos type='text' placeholder='ID do Pedido' id='id_pedido' required value={idPedido} onChange={(e) => setIdPedido(e.target.value)} />
                                </LabelInputProdutos>

                                <LabelInputProdutos>
                                    <LabelProdutos htmlFor='cd_rastreio'><IoIosCodeDownload /></LabelProdutos>
                                    <InputProdutos type='text' id='cd_rastreio' name='cd_rastreio' placeholder='Código de rastreio' required value={cdRastreio} onChange={(e) => setCdRastreio(e.target.value)} />
                                </LabelInputProdutos>

                                <SectionBtnProdutos>
                                    <ButtonProdutos onClick={handleAdicionarCdRastreio}>Adicionar</ButtonProdutos>
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
                        placeholder='Pedido que procura?'
                        onChange={handleSearchPedido}
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
                                <th>ID</th>
                                <th>Data</th>
                                <th>Pagamento</th>
                                <th>Endereço</th>
                                <th>Nº Endereço</th>
                                <th>Frete</th>
                                <th>Código Rastreio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(currentItems) && currentItems.map((pedido) => (
                                <tr key={pedido.id_pedido}>
                                    <td>{pedido.id_pedido}</td>
                                    <td>{formatDateBrDefault(pedido.data_pedido)}</td>
                                    <td>{pedido.pagamento_pedido}</td>
                                    <td>{pedido.endereco_pedido}</td>
                                    <td>{pedido.num_endereco_pedido}</td>
                                    <td>{pedido.opcao_frete_pedido}</td>
                                    <td>{pedido.cd_rastreio_frete_pedido}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ListaProdutos>
                {/* Controles de paginação */}
                <ContainerPaginacao>
                    <BotaoPaginacao
                        disabled={currentPage === 1}
                        onClick={() => changePage(currentPage - 1)}
                    >
                        Anterior
                    </BotaoPaginacao>

                    <span>Página {currentPage} de {totalPages}</span>

                    <BotaoPaginacao
                        disabled={currentPage === totalPages}
                        onClick={() => changePage(currentPage + 1)}
                    >
                        Próxima
                    </BotaoPaginacao>
                </ContainerPaginacao>




            </Container>
        </React.Fragment>
    )
}

export default CdRastreio