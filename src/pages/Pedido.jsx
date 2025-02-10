import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import React, { useContext, useEffect, useState } from 'react'; // Importa hooks do React
import { useParams } from 'react-router-dom'; // Importa o hook para obter parâmetros da URL
import {
    BtnLinkAdminDash,
    BtnMenuUser,
    ContainerDashBoard,
    LinkMail,
    MenuUser,
    RowMenuTitle
} from '../styles/UserDashboardStyles'; // Importa estilos específicos para o dashboard do usuário
import {
    LinkVoltar,
    Subtitulo,
    Titulo,
    TxtGerais
} from '../styles/GlobalStyles'; // Importa estilos globais reutilizáveis
import {
    ContainerPedidoGeralInfo,
    ContainerPedidoInfo,
    ContainerPedidoParams,
    FlexColumnSection,
    TxtPedidoInfo
} from '../styles/PedidosAdminStyle'; // Importa estilos específicos para pedidos
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io'; // Importa ícones para a interface
import { UserContext } from '../router/userContext'; // Importa contexto para informações do usuário
import { formatCurrencyBr, formatDateBrDefault, formatParcelasClientes } from '../services/Functions';
import SpinnerComponent from '../components/functions/main/SpinnerComponent';

function Pedido() {
    const { user, logout } = useContext(UserContext); // Obtém o usuário logado e a função de logout do contexto

    const { id_pedido } = useParams(); // Obtém o parâmetro id_pedido da URL
    const [pedidos, setPedidos] = useState([]); // Estado para armazenar os detalhes do pedido
    const [produtos, setProdutos] = useState([]); // Estado para armazenar informações do produto
    const [clientes, setClientes] = useState([]); // Estado para armazenar informações do cliente
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
    const [itensPedido, setItensPedido] = useState([]); // Estado para armazenar informações do item do pedido (qtd)

    const [openMenuUser, setOpenMenuUser] = useState(false); // Estado para controlar o menu do usuário

    // Função para alternar o menu do usuário entre aberto e fechado
    const handleClickMenuUser = () => {
        setOpenMenuUser(!openMenuUser);
    };

    // Função para atualizar o status do pedido
    const handleUpdateStatusPedido = async () => {
        // Define o próximo status do pedido com base no status atual
        // Se o status atual for 'em andamento', altera para 'encerrado', e vice-versa
        const alterarStatus = pedidos.status_pedido === 'em andamento' ? 'encerrado' : 'em andamento';

        try {
            // Faz uma requisição PUT para atualizar o status do pedido no servidor
            const resp = await axios.put(`http://localhost:3001/aurea/pedido/${id_pedido}`, {
                status_pedido: alterarStatus // Envia o novo status no corpo da requisição
            });

            // Verifica se a atualização foi bem-sucedida com base na resposta do servidor
            if (resp.data.result) {
                // Exibe uma mensagem de sucesso ao usuário
                alert(`O status do pedido foi alterado para "${alterarStatus}".`);

                // Atualiza o estado local com o novo status do pedido
                setPedidos((prevPedidos) => ({
                    ...prevPedidos, // Mantém as demais propriedades do pedido
                    status_pedido: alterarStatus // Atualiza apenas o status
                }));
            } else {
                // Exibe uma mensagem de erro caso a resposta não indique sucesso
                alert('Não foi possível alterar o status do pedido.');
            }
        } catch (error) {
            // Captura erros durante a requisição e exibe no console
            console.error("Erro ao atualizar o status do pedido:", error);

            // Exibe uma mensagem de erro genérica ao usuário
            alert("Ocorreu um erro ao tentar atualizar o status do pedido.");
        }
    };

    // useEffect para buscar os dados do pedido, produto e cliente assim que o componente é montado
    useEffect(() => {
        const fetchDadosPedidoPorID = async () => {
            try {
                // Faz uma requisição para obter os detalhes do pedido pelo ID
                const resp = await axios.get(`http://localhost:3001/aurea/pedido/${id_pedido}`);
                setPedidos(resp.data.result); // Define os detalhes do pedido

                if (resp.data.result) { // Verifica se há um pedido válido antes de buscar cliente
                    // Faz uma requisição para obter informações do cliente relacionado ao pedido
                    const fetchCliente = await axios.get(`http://localhost:3001/aurea/usuario/${resp.data.result.id_user}`);
                    setClientes(fetchCliente.data.result);
                }
            } catch (error) {
                console.error('Erro ao buscar pedido.', error); // Exibe erro no console se algo der errado
            } finally {
                setLoading(false); // Define o estado de carregamento como falso após a conclusão
            }
        };
        fetchDadosPedidoPorID(); // Chama a função ao montar o componente
    }, [id_pedido]); // Dependência do useEffect, será executado quando o id_pedido mudar

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const fetchProdutosResponse = await axios.get(`http://localhost:3001/aurea/produto/pedido/${id_pedido}`);
                setProdutos(fetchProdutosResponse.data.result);
            } catch (error) {
                console.error('Erro ao buscar produtos.', error);
            }
        };

        if (id_pedido) {
            fetchProdutos();
        }
    }, [id_pedido]);

    useEffect(() => {
        const fetchItensPedido = async () => {
            try {
                const fetchItensPedidoResponse = await axios.get(`http://localhost:3001/aurea/itens-pedido/${id_pedido}`);
                setItensPedido(fetchItensPedidoResponse.data.result);
            } catch (error) {
                console.error('Erro ao buscar produtos.', error);
            }
        };

        if (id_pedido) {
            fetchItensPedido();
        }
    }, [id_pedido]);

    // Exibe mensagem de carregamento enquanto os dados estão sendo buscados
    if (loading) return <SpinnerComponent />;
    // Exibe mensagem de erro se o pedido não for encontrado
    if (!pedidos) return <p>Pedido não encontrado</p>;

    return (
        <React.Fragment>
            {/* Condicional para alternar entre ícones de menu aberto e fechado */}
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

            {/* Menu do usuário exibido ao clicar no ícone */}
            {openMenuUser && (
                <MenuUser>
                    <LinkMail to='/minha-conta'>Minha Conta</LinkMail>
                    <LinkMail to='/pedidos-ativos'>Pedidos Ativos</LinkMail>
                    <LinkMail to='/pedidos-encerrados'>Pedidos Encerrados</LinkMail>
                    <BtnMenuUser onClick={logout}>Sair</BtnMenuUser>
                </MenuUser>
            )}

            {/* Seção principal com os detalhes do pedido */}
            <ContainerDashBoard>
                <ContainerPedidoParams style={{ marginTop: '2rem' }}>
                    <Titulo>Detalhes do pedido</Titulo>
                    <ContainerPedidoGeralInfo>
                        {/* Exibindo informações do pedido */}
                        <ContainerPedidoInfo>
                            <Subtitulo>Pedido</Subtitulo>
                            <TxtPedidoInfo>Pedido: {pedidos.id_pedido}</TxtPedidoInfo>
                            <TxtPedidoInfo>Data: {formatDateBrDefault(pedidos.data_pedido)}</TxtPedidoInfo>
                            <TxtPedidoInfo>Endereço: {pedidos.endereco_pedido}</TxtPedidoInfo>
                            <TxtPedidoInfo>Pagamento: {pedidos.pagamento_pedido}</TxtPedidoInfo>
                            <TxtPedidoInfo>Status: {pedidos.status_pedido}</TxtPedidoInfo>
                        </ContainerPedidoInfo>

                        {/* Exibindo informações do cliente */}
                        <ContainerPedidoInfo>
                            <Subtitulo>Cliente</Subtitulo>
                            <TxtPedidoInfo>ID do cliente: {clientes.id_user}</TxtPedidoInfo>
                            <TxtPedidoInfo>Nome: {clientes.nome_user}</TxtPedidoInfo>
                            <TxtPedidoInfo>Sobrenome: {clientes.sobrenome_user}</TxtPedidoInfo>
                            <TxtPedidoInfo>Telefone: {clientes.telefone_user}</TxtPedidoInfo>
                            <TxtPedidoInfo>E-mail: {clientes.email_user}</TxtPedidoInfo>
                        </ContainerPedidoInfo>
                    </ContainerPedidoGeralInfo>

                    <ContainerPedidoGeralInfo>
                        {/* Exibindo informações do produto */}
                        {produtos && produtos.length > 0 ? (
                            produtos.map((produto, index) => (
                                <ContainerPedidoInfo key={index}>
                                    <Subtitulo>Produto</Subtitulo>
                                    <TxtPedidoInfo>ID do produto: {produto.id_produto}</TxtPedidoInfo>
                                    <TxtPedidoInfo>Nome: {produto.nome_produto}</TxtPedidoInfo>
                                    <TxtPedidoInfo>Categoria: {produto.categoria_produto}</TxtPedidoInfo>
                                    <TxtPedidoInfo>Cor: {produto.cor_produto}</TxtPedidoInfo>
                                    {produto.categoria_produto === 'promocoes' ? (
                                        <TxtPedidoInfo>Preço: {formatCurrencyBr(produto.preco_promocional_produto)}</TxtPedidoInfo>
                                    ) : (
                                        <TxtPedidoInfo>Preço: {formatCurrencyBr(produto.preco_produto)}</TxtPedidoInfo>
                                    )}

                                    {/* Exibindo quantidade correspondente ao produto */}
                                    {itensPedido && itensPedido.length > 0 ? (
                                        itensPedido
                                            .filter((item) => item.id_produto === produto.id_produto) // Filtra o item correspondente
                                            .map((item, idx) => (
                                                <TxtPedidoInfo key={idx}>Quantidade: {item.qtd_produto}</TxtPedidoInfo>
                                            ))
                                    ) : (
                                        <TxtGerais>Quantidade: Sem dados</TxtGerais>
                                    )}
                                </ContainerPedidoInfo>
                            ))
                        ) : (
                            <TxtGerais>Dados do produto não carregados</TxtGerais>
                        )}
                    </ContainerPedidoGeralInfo>

                    {/* Link para voltar à lista de pedidos com base no status */}
                    {pedidos.status_pedido === 'em andamento' ? (
                        <FlexColumnSection>
                            <BtnLinkAdminDash style={{ textAlign: 'center' }} onClick={handleUpdateStatusPedido}>Encerrar Pedido</BtnLinkAdminDash>
                            <LinkVoltar to='/pedidos-ativos' style={{ maxWidth: '100%' }}>Voltar para todos os pedidos ativos</LinkVoltar>
                        </FlexColumnSection>
                    ) : (
                        <FlexColumnSection>
                            <BtnLinkAdminDash style={{ textAlign: 'center' }} onClick={handleUpdateStatusPedido}>Reabrir Pedido</BtnLinkAdminDash>
                            <LinkVoltar to='/pedidos-encerrados' style={{ maxWidth: '100%' }}>Voltar para todos os pedidos encerrados</LinkVoltar>
                        </FlexColumnSection>
                    )}
                </ContainerPedidoParams>
            </ContainerDashBoard>
        </React.Fragment>
    );
}

export default Pedido; // Exporta o componente para uso em outras partes do projeto
