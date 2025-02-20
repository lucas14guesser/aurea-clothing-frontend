import React, { useContext, useEffect, useState } from 'react'; // Importa hooks do React
import { ContainerDetalhesPedido, ContainerInformacoesDetalhesPedido, ImgPedido, InformacaoDetalhesPedido, InformacaoDetalhesPedidoEndereco, LinkRastreioPedido, TituloDetalhesPedido } from '../styles/DetalhesPedido'
import { ButtonProduto } from '../styles/CategoriaProdutosStyle';
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import { useParams } from 'react-router-dom'; // Importa o hook para obter parâmetros da URL
import {
    Subtitulo,
    Titulo,
    TxtGerais
} from '../styles/GlobalStyles'; // Importa estilos globais reutilizáveis
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io'; // Importa ícones para a interface
import { UserContext } from '../router/userContext'; // Importa contexto para informações do usuário
import { BtnMenuUser, LinkMail, MenuUser, RowMenuTitle } from '../styles/UserDashboardStyles';
import ModalTroca from '../components/functions/modals/ModalTroca';
import { ButtonModalInternal, FlexRowModalFlexSt, ModalInternalContainerFlex, Star, StarsContainer } from '../styles/ModalsStyles';
import { BtnModalAvaName, DivAvaName, FlexRowLabelInputLoginCadastro, InputLoginCadastro, LabelLoginCadastro } from '../styles/ContaUserStyles';
import { IoHelpCircleOutline } from "react-icons/io5";
import { RiMailLine, RiUser3Line } from 'react-icons/ri'
import { TextareaFaleConosco } from '../styles/FaleConoscoStyles';
import ModalDevolucao from '../components/functions/modals/ModalDevolucao';
import { formatCurrencyBr, formatDateBrDefault } from '../services/Functions';
import ModalAvaliar from '../components/functions/modals/ModalAvaliar';
import SpinnerComponent from '../components/functions/main/SpinnerComponent';

function DetalhesPedido() {
    const { user, logout, userEmail } = useContext(UserContext); // Obtém o usuário logado e a função de logout do contexto

    const { id_pedido } = useParams(); // Obtém o parâmetro id_pedido da URL

    const [openMenuUser, setOpenMenuUser] = useState(false); // Estado para controlar o menu do usuário

    // Estado de carregamento no envio de e-mail.
    const [sendLoading, setSendLoading] = useState(false);

    const [solicitacaoTroca, setSolicitacaoTroca] = useState('');
    const [solicitacaoDevolucao, setSolicitacaoDevolucao] = useState('');

    const [modalAvaliar, setModalAvaliar] = useState(false);
    const [modalTroca, setModalTroca] = useState(false);
    const [modalDevolucao, setModalDevolucao] = useState(false);

    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [avaliacao, setAvaliacao] = useState(0);
    const [descricaoAvaliacao, setDescricaoAvaliacao] = useState('');
    const [tituloAvaliacao, setTituloAvaliacao] = useState('');

    const [pedidos, setPedidos] = useState([]); // Estado para armazenar os detalhes do pedido
    const [produtos, setProdutos] = useState([]); // Estado para armazenar informações do produto
    const [itensPedido, setItensPedido] = useState([]); // Estado para armazenar informações dos itens do pedido

    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

    // Função para alternar o menu do usuário entre aberto e fechado
    const handleClickMenuUser = () => {
        setOpenMenuUser(!openMenuUser);
    };

    const handleClickModalAvaliar = () => {
        setModalAvaliar(!modalAvaliar);
    };

    const handleClickModalTrade = () => {
        setModalTroca(!modalTroca);
    };

    const handleClickModalDevolucao = () => {
        setModalDevolucao(!modalDevolucao);
    };

    // Função de envio de e-mail para a API
    const handleSendTrade = async (e) => {
        // Previne o comportamento padrão do formulário (evitar recarregamento da página)
        e.preventDefault();

        // Define o estado de "loading" como verdadeiro, indicando que o processo de envio está em andamento
        setSendLoading(true);

        // Cria um objeto com os dados que serão enviados para a API (email do usuário e a dúvida)
        const dadosEnvio = {
            id_pedido: id_pedido,
            email_user: userEmail,   // Email do usuário
            solicitacao_troca: solicitacaoTroca, // Dúvida ou mensagem do usuário
        };

        try {
            // Faz a requisição POST para a API, enviando os dados com o axios
            const resp = await axios.post('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/solicitacao-troca', dadosEnvio);

            // Verifica se a resposta da API foi bem-sucedida (código 200)
            if (resp.status === 200) {
                // Exibe uma mensagem de sucesso para o usuário
                alert('E-mail enviado com sucesso!');
                // Limpa os campos de email e dúvida após o envio bem-sucedido
                setSolicitacaoTroca('');
            } else {
                // Caso o status não seja 200, exibe uma mensagem de erro genérica
                alert('Não foi possível enviar o e-mail.')
            }
        } catch (error) {
            // Caso ocorra algum erro durante o envio (exemplo: falha na rede ou na API), exibe uma mensagem de erro
            alert('Erro ao enviar e-mail.')
        } finally {
            // Após a execução da requisição (independente de sucesso ou falha), define o estado de "loading" como falso
            setSendLoading(false);
        }
    }

    // Função de envio de e-mail para a API
    const handleSendDevolucao = async (e) => {
        // Previne o comportamento padrão do formulário (evitar recarregamento da página)
        e.preventDefault();

        // Define o estado de "loading" como verdadeiro, indicando que o processo de envio está em andamento
        setSendLoading(true);

        // Cria um objeto com os dados que serão enviados para a API (email do usuário e a dúvida)
        const dadosEnvio = {
            id_pedido: id_pedido,
            email_user: userEmail,   // Email do usuário
            solicitacao_devolucao: solicitacaoDevolucao, // Dúvida ou mensagem do usuário
        };

        try {
            // Faz a requisição POST para a API, enviando os dados com o axios
            const resp = await axios.post('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/solicitacao-devolucao', dadosEnvio);

            // Verifica se a resposta da API foi bem-sucedida (código 200)
            if (resp.status === 200) {
                // Exibe uma mensagem de sucesso para o usuário
                alert('E-mail enviado com sucesso!');
                // Limpa os campos de email e dúvida após o envio bem-sucedido
                setSolicitacaoDevolucao('');
            } else {
                // Caso o status não seja 200, exibe uma mensagem de erro genérica
                alert('Não foi possível enviar o e-mail.')
            }
        } catch (error) {
            // Caso ocorra algum erro durante o envio (exemplo: falha na rede ou na API), exibe uma mensagem de erro
            alert('Erro ao enviar e-mail.')
        } finally {
            // Após a execução da requisição (independente de sucesso ou falha), define o estado de "loading" como falso
            setSendLoading(false);
        }
    }

    const itensPedidoComNome = itensPedido.map((item) => {
        const produtoEncontrado = produtos.find(p => p.id_produto === item.id_produto);
        return {
            ...item,
            nome_produto: produtoEncontrado ? produtoEncontrado.nome_produto : "Produto desconhecido"
        };
    });


    const handleClickStar = (nivel) => {
        setAvaliacao(nivel);
    }

    const handleAvaliarProduto = async (e, id_produto) => {
        e.preventDefault();

        const dadosAvaliacao = {
            nivel_avaliacao: avaliacao,
            descricao_avaliacao: descricaoAvaliacao,
            data_avaliacao: new Date().toISOString().split('T')[0],
            titulo_avaliacao: tituloAvaliacao,
            id_user: user.id_user,
            id_produto: id_produto,
        }

        try {
            const resp = await axios.post('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/pedido/avaliar', dadosAvaliacao);
            if (resp.data.result) {
                alert('Produto avaliado com sucesso!');

                setModalAvaliar(false);
                setAvaliacao(0);
                setTituloAvaliacao('');
                setDescricaoAvaliacao('');
            } else {
                alert('Não foi possível avaliar o produto.');
            }
        } catch (error) {
            console.error('Erro ao avaliar produto.', error.message);
        }
    }

    useEffect(() => {
        const fetchDadosPedidoPorID = async () => {
            try {
                const resp = await axios.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/pedido/${id_pedido}`);
                setPedidos(resp.data.result);
            } catch (error) {
                console.error('Erro ao buscar dados do pedido.', error);
            } finally {
                setLoading(false);
            }
        };

        if (id_pedido) {
            fetchDadosPedidoPorID();
        }
    }, [id_pedido]);

    useEffect(() => {
        const fetchDadosItensPedidoPorID = async () => {
            try {
                const resp = await axios.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/itens-pedido/${id_pedido}`);
                setItensPedido(resp.data.result);
            } catch (error) {
                console.error('Erro ao buscar dados do pedido.', error);
            } finally {
                setLoading(false);
            }
        };

        if (id_pedido) {
            fetchDadosItensPedidoPorID();
        }
    }, [id_pedido]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const fetchProdutosResponse = await axios.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/produto/pedido/${id_pedido}`);
                setProdutos(fetchProdutosResponse.data.result);
            } catch (error) {
                console.error('Erro ao buscar produtos.', error);
            }
        };

        if (id_pedido) {
            fetchProdutos();
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
                    <LinkMail to='/meus-pedidos'>Meus Pedidos</LinkMail>
                    <BtnMenuUser onClick={logout}>Sair</BtnMenuUser>
                </MenuUser>
            )}
            <ContainerDetalhesPedido>
                <TituloDetalhesPedido>Detalhes do pedido #{pedidos.id_pedido}</TituloDetalhesPedido>
                <ContainerInformacoesDetalhesPedido>
                    {/* Mapeia os produtos e exibe as informações de cada um */}
                    {produtos && produtos.length > 0 ? (
                        produtos.map((produto, index) => (
                            <InformacaoDetalhesPedido key={index}>
                                <ImgPedido
                                    src={produto.img_produto} // Use a URL completa do Cloudinary diretamente
                                    alt={produto.nome_produto}
                                />
                                <TxtGerais style={{ color: '#A87826' }}>{produto.nome_produto}</TxtGerais>
                                <TxtGerais>Cor: {produto.cor_produto}</TxtGerais>
                                <TxtGerais>Tamanho: {produto.tamanho_produto}</TxtGerais>
                                {produto.preco_promocional_produto ? (
                                    <TxtGerais>Preço: {formatCurrencyBr(produto.preco_promocional_produto)}</TxtGerais>
                                ) : (
                                    <TxtGerais>Preço: {formatCurrencyBr(produto.preco_produto)}</TxtGerais>
                                )}
                            </InformacaoDetalhesPedido>
                        ))
                    ) : loading ? (
                        <TxtGerais>Carregando produtos...</TxtGerais>
                    ) : (
                        <TxtGerais>Dados do produto não disponíveis</TxtGerais>
                    )}

                    {/* Outras informações do pedido */}
                    <InformacaoDetalhesPedido>
                        <Subtitulo>Data do Pedido</Subtitulo>
                        <TxtGerais>{formatDateBrDefault(pedidos.data_pedido)}</TxtGerais>
                    </InformacaoDetalhesPedido>

                    <InformacaoDetalhesPedidoEndereco>
                        <Subtitulo>Endereço</Subtitulo>
                        <TxtGerais>{pedidos.endereco_pedido}</TxtGerais>
                    </InformacaoDetalhesPedidoEndereco>

                    <InformacaoDetalhesPedido>
                        <Subtitulo>Status do Pedido</Subtitulo>
                        <TxtGerais>{pedidos.status_pedido}</TxtGerais>
                    </InformacaoDetalhesPedido>

                    <InformacaoDetalhesPedido>
                        <Subtitulo>Rastreio</Subtitulo>
                        <TxtGerais>Opção frete: {pedidos.opcao_frete_pedido}</TxtGerais>
                        <TxtGerais>Código de rastreio: {pedidos.cd_rastreio_frete_pedido}</TxtGerais>
                        {pedidos.opcao_frete_pedido === 'sedex' ? (
                            <LinkRastreioPedido to="https://rastreamento.correios.com.br/app/index.php" target='_blank' style={{ textDecoration: 'underline' }}>Rastrear pedido</LinkRastreioPedido>
                        ) : pedidos.opcao_frete_pedido === 'jadlog' ? (
                            <LinkRastreioPedido to="https://www.jadlog.com.br/jadlog/home" target='_blank' style={{ textDecoration: 'underline' }}>Rastrear pedido</LinkRastreioPedido>
                        ) : (
                            <LinkRastreioPedido to="https://disktenha.com.br/" target='_blank' style={{ textDecoration: 'underline' }}>Rastrear pedido</LinkRastreioPedido>
                        )}
                    </InformacaoDetalhesPedido>

                    {/* Funções com base no status do pedido */}
                    {pedidos.status_pedido === 'encerrado' ? (
                        <InformacaoDetalhesPedido>
                            <Subtitulo>Funções</Subtitulo>
                            <ButtonProduto onClick={handleClickModalAvaliar}>Avaliar Pedido</ButtonProduto>
                            <ButtonProduto onClick={handleClickModalTrade}>Solicitar Troca</ButtonProduto>
                            <ButtonProduto onClick={handleClickModalDevolucao}>Solicitar Devolução</ButtonProduto>
                        </InformacaoDetalhesPedido>
                    ) : (
                        <InformacaoDetalhesPedido>
                            <Subtitulo>Funções</Subtitulo>
                            <ButtonProduto onClick={handleClickModalTrade}>Solicitar Troca</ButtonProduto>
                            <ButtonProduto onClick={handleClickModalDevolucao}>Solicitar Devolução</ButtonProduto>
                        </InformacaoDetalhesPedido>
                    )}
                </ContainerInformacoesDetalhesPedido>
            </ContainerDetalhesPedido>

            {/* Modal para avaliar o produto */}
            {modalAvaliar && (
                <ModalAvaliar>
                    {/* Seletor de produtos */}
                    <DivAvaName>
                        {itensPedidoComNome?.map((item) => (
                            <BtnModalAvaName
                                key={item.id_produto}
                                onClick={() => {
                                    setProdutoSelecionado(item);
                                }}
                                style={{
                                    background: produtoSelecionado?.id_produto === item.id_produto ? '#a87826' : '#ccc',
                                }}
                            >
                                {item.nome_produto}
                            </BtnModalAvaName>
                        ))}
                    </DivAvaName>

                    {/* Exibir o formulário apenas se houver um produto selecionado */}
                    {produtoSelecionado && (
                        <ModalInternalContainerFlex>
                            <Subtitulo>Avaliar Produto</Subtitulo>
                            <p>{produtoSelecionado?.nome_produto}</p>
                            <StarsContainer>
                                {[1, 2, 3, 4, 5].map((nivel) => (
                                    <Star
                                        key={nivel}
                                        $filled={nivel <= avaliacao}
                                        onClick={() => handleClickStar(nivel)}
                                    >
                                        ★
                                    </Star>
                                ))}
                            </StarsContainer>
                            <InputLoginCadastro
                                type="text"
                                placeholder="Título da avaliação"
                                value={tituloAvaliacao}
                                onChange={(e) => setTituloAvaliacao(e.target.value)}
                            />
                            <TextareaFaleConosco
                                type="text"
                                placeholder="Nos diga o que achou deste produto..."
                                value={descricaoAvaliacao}
                                onChange={(e) => setDescricaoAvaliacao(e.target.value)}
                            />
                            <FlexRowLabelInputLoginCadastro>
                                <ButtonModalInternal
                                    type="submit"
                                    onClick={(e) => handleAvaliarProduto(e, produtoSelecionado.id_produto)}
                                >
                                    Avaliar
                                </ButtonModalInternal>
                                <ButtonModalInternal
                                    type="button"
                                    onClick={handleClickModalAvaliar}
                                >
                                    Fechar
                                </ButtonModalInternal>
                            </FlexRowLabelInputLoginCadastro>
                        </ModalInternalContainerFlex>
                    )}
                </ModalAvaliar>
            )}

            {/* Modal para solicitar troca */}
            {modalTroca && (
                <ModalTroca>
                    <ModalInternalContainerFlex>
                        <Subtitulo>Solicitar Troca</Subtitulo>

                        {/* Formulário de solicitação de troca */}
                        <FlexRowLabelInputLoginCadastro>
                            <LabelLoginCadastro>
                                <RiUser3Line />
                            </LabelLoginCadastro>
                            <InputLoginCadastro type='text' value={id_pedido} readOnly /> {/* Exibe o ID do pedido */}
                        </FlexRowLabelInputLoginCadastro>

                        <FlexRowLabelInputLoginCadastro>
                            <LabelLoginCadastro>
                                <RiMailLine />
                            </LabelLoginCadastro>
                            <InputLoginCadastro type='email' value={userEmail} readOnly /> {/* Exibe o e-mail do usuário */}
                        </FlexRowLabelInputLoginCadastro>

                        {/* Campo para descrição da solicitação de troca */}
                        <FlexRowLabelInputLoginCadastro style={{ alignItems: 'flex-start' }}>
                            <LabelLoginCadastro>
                                <IoHelpCircleOutline />
                            </LabelLoginCadastro>
                            <TextareaFaleConosco
                                type='text'
                                placeholder='Nos diga porque você deseja trocar seu produto...'
                                value={solicitacaoTroca}
                                onChange={(e) => setSolicitacaoTroca(e.target.value)}
                            /> {/* O campo de texto para o usuário explicar a troca */}
                        </FlexRowLabelInputLoginCadastro>

                        {/* Botões de envio ou fechamento da solicitação de troca */}
                        <FlexRowLabelInputLoginCadastro>
                            <ButtonModalInternal type='submit' onClick={handleSendTrade} disabled={sendLoading}>
                                {sendLoading ? 'Enviando...' : 'Enviar'}
                            </ButtonModalInternal>
                            <ButtonModalInternal type='button' onClick={handleClickModalTrade}>
                                Fechar
                            </ButtonModalInternal>
                        </FlexRowLabelInputLoginCadastro>
                    </ModalInternalContainerFlex>
                </ModalTroca>
            )}

            {/* Modal para solicitar devolução */}
            {modalDevolucao && (
                <ModalDevolucao>
                    <ModalInternalContainerFlex>
                        <Subtitulo>Solicitar Devolução</Subtitulo>

                        {/* Formulário de solicitação de devolução */}
                        <FlexRowLabelInputLoginCadastro>
                            <LabelLoginCadastro>
                                <RiUser3Line />
                            </LabelLoginCadastro>
                            <InputLoginCadastro type='text' value={id_pedido} readOnly /> {/* Exibe o ID do pedido */}
                        </FlexRowLabelInputLoginCadastro>

                        <FlexRowLabelInputLoginCadastro>
                            <LabelLoginCadastro>
                                <RiMailLine />
                            </LabelLoginCadastro>
                            <InputLoginCadastro type='email' value={userEmail} readOnly /> {/* Exibe o e-mail do usuário */}
                        </FlexRowLabelInputLoginCadastro>

                        {/* Campo para descrição da solicitação de devolução */}
                        <FlexRowModalFlexSt>
                            <LabelLoginCadastro>
                                <IoHelpCircleOutline />
                            </LabelLoginCadastro>
                            <TextareaFaleConosco
                                type='text'
                                placeholder='Nos diga porque você deseja devolver seu produto...'
                                value={solicitacaoDevolucao}
                                onChange={(e) => setSolicitacaoDevolucao(e.target.value)}
                            /> {/* O campo de texto para o usuário explicar a devolução */}
                        </FlexRowModalFlexSt>

                        {/* Botões de envio ou fechamento da solicitação de devolução */}
                        <FlexRowModalFlexSt style={{ alignItems: 'center' }}>
                            <ButtonModalInternal type='submit' onClick={handleSendDevolucao} disabled={sendLoading}>
                                {sendLoading ? 'Enviando...' : 'Enviar'}
                            </ButtonModalInternal>
                            <ButtonModalInternal type='button' onClick={handleClickModalDevolucao}>
                                Fechar
                            </ButtonModalInternal>
                        </FlexRowModalFlexSt>
                    </ModalInternalContainerFlex>
                </ModalDevolucao>
            )}

        </React.Fragment>
    )
}

export default DetalhesPedido