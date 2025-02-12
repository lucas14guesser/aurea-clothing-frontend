import React, { useContext, useEffect, useMemo, useState } from 'react';
import { BtnMenuUser, LinkMail, MenuUser, RowMenuTitle } from '../styles/UserDashboardStyles';
import { Titulo, TxtGerais } from '../styles/GlobalStyles';
import { ListaPedidos } from '../styles/PedidosAdminStyle';
import axios from 'axios'; // Para fazer requisições HTTP
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io'; // Ícones para o menu
import { UserContext } from '../router/userContext'; // Contexto de usuário para obter informações do usuário atual
import { Link } from 'react-router-dom'; // Para navegação entre páginas
import { formatDateBrDefault } from '../services/Functions';
import { BotaoPaginacao, ContainerPaginacao } from '../styles/ProdutoStyles';
import { ContainerPedidosAtivo, ThPedidoAtEcData, ThPedidoAtEcID, ThPedidoAtEcPagamento, ThPedidoAtEcStatus } from '../styles/PedidoStyles';

// Componente que lista os pedidos ativos
function PedidosAtivos() {
    const { user, logout } = useContext(UserContext);

    const [itensPedido, setItensPedido] = useState({});
    const [pedidos, setPedidos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [openMenuUser, setOpenMenuUser] = useState(false);
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const pedidosEmAndamento = useMemo(() => {
        return pedidos
            .filter((pedido) => pedido.status_pedido === 'em andamento')
            .sort((a, b) => b.id_pedido - a.id_pedido); // Ordenação decrescente
    }, [pedidos]);


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = pedidosEmAndamento.slice(startIndex, endIndex);
    const totalPages = Math.ceil(pedidosEmAndamento.length / itemsPerPage);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Carregar dados iniciais
    useEffect(() => {
        const fetchDados = async () => {
            try {
                const respPedidos = await axios.get('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/pedidos');
                setPedidos(respPedidos.data.result);

                const respClientes = await axios.get('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/usuarios');
                setClientes(respClientes.data.result);
            } catch (error) {
                setError('Erro ao obter dados.');
            }
        };
        fetchDados();
    }, []);

    useEffect(() => {
        const fetchItensPedido = async () => {
            try {
                // Fazer requisição apenas se ainda não houver itens carregados para o pedido
                const allItens = await Promise.all(
                    pedidosEmAndamento.map(async (pedido) => {
                        if (!itensPedido[pedido.id_pedido]) {
                            const respItens = await axios.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/itens-pedido/${pedido.id_pedido}`);
                            return { id_pedido: pedido.id_pedido, itens: respItens.data.result };
                        }
                        return null;
                    })
                );

                // Filtrar os pedidos que tiveram itens retornados e atualizar o estado
                const itensAtualizados = allItens.filter(Boolean).reduce((acc, item) => {
                    acc[item.id_pedido] = item.itens;
                    return acc;
                }, {});

                // Atualizar o estado de itensPedido com os itens novos
                setItensPedido((prevItens) => ({
                    ...prevItens,
                    ...itensAtualizados,
                }));
            } catch (error) {
                setError('Erro ao obter dados dos itens do pedido.');
            }
        };

        if (pedidosEmAndamento.length > 0) {
            fetchItensPedido();
        }
    }, [pedidosEmAndamento]); // Só executa quando pedidosEmAndamento mudar

    const handleClickMenuUser = () => {
        setOpenMenuUser(!openMenuUser);
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

            {openMenuUser && (
                <MenuUser>
                    <LinkMail to='/minha-conta'>Minha Conta</LinkMail>
                    <LinkMail to='/pedidos-encerrados'>Pedidos Encerrados</LinkMail>
                    <LinkMail to='/produtos'>Meus Produtos</LinkMail>
                    <BtnMenuUser onClick={logout}>Sair</BtnMenuUser>
                </MenuUser>
            )}

            {/* Conteúdo principal */}
            <ContainerPedidosAtivo>
                <Titulo>Pedidos Ativos</Titulo>
                <TxtGerais>Clique no ID do pedido para visualizá-lo.</TxtGerais>

                {/* Tabela de pedidos ativos */}
                <ListaPedidos>
                    <table>
                        <thead>
                            <tr>
                                <ThPedidoAtEcID>ID</ThPedidoAtEcID>
                                <th>Produto</th>
                                <th>Cliente</th>
                                <ThPedidoAtEcData>Data</ThPedidoAtEcData>
                                <ThPedidoAtEcPagamento>Pagamento</ThPedidoAtEcPagamento>
                                <ThPedidoAtEcStatus>Status</ThPedidoAtEcStatus>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems
                                .slice() // Faz uma cópia do array para evitar mutação do estado original
                                .sort((a, b) => b.id_pedido - a.id_pedido) // Ordena em ordem decrescente
                                .map((pedido) => {
                                    // Obter itens do pedido
                                    const itensDoPedido = itensPedido[pedido.id_pedido] || [];

                                    // Somar a quantidade total de produtos em cada pedido
                                    const quantidadeProdutos = itensDoPedido.reduce((total, item) => total + item.qtd_produto, 0);

                                    const clienteFind = clientes.find((cliente) => cliente.id_user === pedido.id_user);
                                    const nomeCliente = clienteFind ? clienteFind.nome_user : 'Cliente não encontrado';
                                    const sobrenomeCliente = clienteFind ? clienteFind.sobrenome_user : 'Cliente não encontrado';
                                    const nomeCompleto = `${nomeCliente} ${sobrenomeCliente}`;

                                    return (
                                        <tr key={pedido.id_pedido}>
                                            <td>
                                                <Link to={`/pedido/${pedido.id_pedido}`} style={{ textDecoration: 'none', color: '#A87826' }}>
                                                    {pedido.id_pedido}
                                                </Link>
                                            </td>
                                            <td>{quantidadeProdutos > 0 ? quantidadeProdutos + ' Produto(s)' : 'Nenhum produto'}</td>
                                            <td>{nomeCompleto}</td>
                                            <td>{formatDateBrDefault(pedido.data_pedido)}</td>
                                            <td>{pedido.pagamento_pedido}</td>
                                            <td>{pedido.status_pedido}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </ListaPedidos>
                {/* Controles de navegação da paginação */}
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
            </ContainerPedidosAtivo>
        </React.Fragment>
    );
}

export default PedidosAtivos;
