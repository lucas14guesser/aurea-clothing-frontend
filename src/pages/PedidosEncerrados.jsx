import React, { useContext, useEffect, useMemo, useState } from 'react';
// Importação de componentes estilizados para estilizar a interface do usuário
import { BtnMenuUser, LinkMail, MenuUser, RowMenuTitle } from '../styles/UserDashboardStyles';
import { Titulo } from '../styles/GlobalStyles';
import { ListaPedidos } from '../styles/PedidosAdminStyle';
// Importação de axios para fazer requisições HTTP
import axios from 'axios';
// Importação de ícones da biblioteca react-icons
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
// Importação do contexto do usuário para obter informações do usuário autenticado
import { UserContext } from '../router/userContext';
// Importação de Link para navegação interna
import { Link } from 'react-router-dom';
import { formatDateBrDefault } from '../services/Functions';
import { BotaoPaginacao, ContainerPaginacao } from '../styles/ProdutoStyles';
import { ContainerPedidosAtivo, ThPedidoAtEcData, ThPedidoAtEcID, ThPedidoAtEcPagamento, ThPedidoAtEcStatus } from '../styles/PedidoStyles';

function PedidosEncerrados() {
  // Uso do contexto do usuário para obter informações do usuário logado e função de logout
  const { user, logout } = useContext(UserContext);

  // Estados para armazenar dados de pedidos, produtos, clientes e mensagens de sucesso/erro
  const [pedidos, setPedidos] = useState([]);
  const [itensPedido, setItensPedido] = useState({});
  const [produtos, setProdutos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Estado para controlar a exibição do menu do usuário
  const [openMenuUser, setOpenMenuUser] = useState(false);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Filtra os pedidos "em andamento"
  const pedidosEncerrados = useMemo(() => {
    return pedidos
      .filter((pedido) => pedido.status_pedido === 'encerrado')
      .sort((a, b) => b.id_pedido - a.id_pedido); // Ordenação decrescente
  }, [pedidos]);

  // Calcula o índice inicial e final dos pedidos na página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Pedidos a serem exibidos na página atual
  const currentItems = pedidosEncerrados.slice(startIndex, endIndex);

  // Total de páginas
  const totalPages = Math.ceil(pedidosEncerrados.length / itemsPerPage);

  // Função para mudar a página
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
          pedidosEncerrados.map(async (pedido) => {
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

    if (pedidosEncerrados.length > 0) {
      fetchItensPedido();
    }
  }, [pedidosEncerrados]); // Só executa quando pedidosEncerrados mudar

  // Função para alternar a exibição do menu do usuário
  const handleClickMenuUser = () => {
    setOpenMenuUser(!openMenuUser);
  };

  return (
    <React.Fragment>
      {/* Exibição do menu do usuário com base no estado openMenuUser */}
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
          {/* Links para navegação no menu do usuário */}
          <LinkMail to='/minha-conta'>Minha Conta</LinkMail>
          <LinkMail to='/pedidos-ativos'>Pedidos Ativos</LinkMail>
          <LinkMail to='/produtos'>Meus Produtos</LinkMail>
          <BtnMenuUser onClick={logout}>Sair</BtnMenuUser>
        </MenuUser>
      )}
      {/* Dashboard para exibir pedidos encerrados */}
      <ContainerPedidosAtivo>
        <Titulo>Pedidos Encerrados</Titulo>
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

export default PedidosEncerrados;
