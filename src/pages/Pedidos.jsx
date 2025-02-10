// Front-end (React)
import React, { useContext, useEffect, useState } from 'react';
// Estilos específicos da página de pedidos
import { ContainerPedido, ContainerPedidos, ConteudoPedidos, DataPedido, LinkDetalhesPedidos, PedidoAceito, VerificacaoEntregue } from '../styles/PedidosStyles';
import { Subtitulo, Titulo, TxtGerais } from '../styles/GlobalStyles';
// Contexto do usuário (informações do usuário logado)
import { UserContext } from '../router/userContext';
// Axios para fazer requisições HTTP
import axios from 'axios';
// Estilos do menu do usuário
import { BtnMenuUser, LinkMail, MenuUser, RowMenuTitle } from '../styles/UserDashBoardStyles';
// Ícones para controlar o menu de usuário
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
import { formatDateBrDefault } from '../services/Functions';
import { TituloPedido } from '../styles/PedidoStyles';
import { BotaoPaginacao, ContainerPaginacao } from '../styles/ProdutoStyles';

function Pedidos() {
  const { user, logout } = useContext(UserContext);
  const [pedidos, setPedidos] = useState([]);  // Estado para armazenar os pedidos do usuário
  const [openMenuUser, setOpenMenuUser] = useState(false); // Estado para controlar a visibilidade do menu de usuário

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchDadosPedidos = async () => {
      try {
        // Requisição para buscar os pedidos do usuário com o id_user
        const resp = await axios.get(`http://localhost:3001/aurea/pedido/user/${user.id_user}`);
        const pedidos = resp.data.result;

        if (Array.isArray(pedidos)) {
          setPedidos(pedidos); // Atualiza o estado com os pedidos agrupados
        }
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    };

    fetchDadosPedidos();
  }, [user.id_user]);

  const handleClickMenuUser = () => {
    setOpenMenuUser(!openMenuUser); // Alterna a visibilidade do menu de usuário
  }

  // Cálculo dos índices de paginação
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = pedidos.slice(startIndex, endIndex);
  const totalPages = Math.ceil(pedidos.length / itemsPerPage);

  // Função para mudar a página
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <React.Fragment>
      {/* Menu de usuário */}
      {openMenuUser ? (
        <RowMenuTitle>
          <IoIosArrowDown
            style={{ fontSize: '2rem', color: '#A87826', cursor: 'pointer' }}
            onClick={handleClickMenuUser}
          />
          <Titulo>Boas-vindas, {user.nome_user}</Titulo>
        </RowMenuTitle>
      ) : (
        <RowMenuTitle>
          <IoIosMenu
            style={{ fontSize: '2rem', color: '#A87826', cursor: 'pointer' }}
            onClick={handleClickMenuUser}
          />
          <Titulo>Boas-vindas, {user.nome_user}</Titulo>
        </RowMenuTitle>
      )}

      {/* Menu de navegação do usuário */}
      {openMenuUser && (
        <MenuUser>
          <LinkMail to='/minha-conta'>Minha Conta</LinkMail>
          <BtnMenuUser onClick={logout}>Sair</BtnMenuUser>
        </MenuUser>
      )}

      {/* Exibe os pedidos do usuário */}
      <ContainerPedidos>
        <TituloPedido>Meus Pedidos</TituloPedido>
        <ContainerPedido>
          {currentItems.length > 0 ? (
            currentItems.map((pedido) => (
              <PedidoAceito key={pedido.id_pedido}>
                <DataPedido>
                  {formatDateBrDefault(pedido.data_pedido)}
                  <VerificacaoEntregue>{pedido.status_pedido}</VerificacaoEntregue>
                </DataPedido>
                <ConteudoPedidos>
                  <Subtitulo>Dados: </Subtitulo>
                  <TxtGerais>Endereço: {pedido.endereco_pedido}</TxtGerais>
                  <TxtGerais>Nº: {pedido.num_endereco_pedido}</TxtGerais>
                  <TxtGerais>Frete: {pedido.opcao_frete_pedido}</TxtGerais>
                  <TxtGerais>Código rastreio: {pedido.cd_rastreio_frete_pedido}</TxtGerais>
                  <Subtitulo>Produtos: </Subtitulo>
                  {pedido.itens.map((item) => (
                    <React.Fragment key={item.nome_produto}>
                      <TxtGerais>{item.nome_produto}</TxtGerais>
                    </React.Fragment>
                  ))}
                  <LinkDetalhesPedidos to={`/detalhes-pedido/${pedido.id_pedido}`}>
                    <p>Ver detalhes do pedido</p>
                  </LinkDetalhesPedidos>
                </ConteudoPedidos>
              </PedidoAceito>
            ))
          ) : (
            <p>Você não possui pedidos.</p>
          )}
        </ContainerPedido>
      </ContainerPedidos>
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
    </React.Fragment>
  );
}

export default Pedidos;
