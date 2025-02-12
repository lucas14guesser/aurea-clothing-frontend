import React, { useContext, useEffect, useState } from 'react'
import { Container, Subtitulo, TxtGerais } from '../styles/GlobalStyles'
import { BotaoAmeiCarrinho, BotaoPaginacao, ContainerAvaliacao, ContainerAviseFalta, ContainerBotoesFunction, ContainerDescricao, ContainerPaginacao, ContainerProduto, ContainerValorEntrega, DivDescricao, ImagemVariacao, ImgProdutospec, Preco, Star, StarDescript, SubContainerValorEntrega, TitleAvaliacao, TituloProduto, TxtAvaliacao, UlVariacao, UserAvaliacao } from '../styles/ProdutoStyles'
import { BotaoImagemDados } from '../styles/HomePageStyles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { UserContext } from '../router/userContext';
import { TbHeart, TbHeartFilled, TbShoppingCart, TbShoppingCartFilled } from 'react-icons/tb';
import { formatCurrencyBr, formatDateBrDefault, formatParcelas } from '../services/Functions';
import ModalAvisar from '../components/functions/modals/ModalAvisar';
import { ModalInternalContainer } from '../styles/ModalsStyles';
import { ButtonLoginCadastro, FlexRowLabelInputLoginCadastro } from '../styles/ContaUserStyles';
import { InputProdutos, LabelProdutos } from '../styles/ProdutosStyle';
import { RiMailLine, RiProductHuntLine } from 'react-icons/ri';

function Produto() {
    const { user } = useContext(UserContext);

    const [hoverListaAmeiStatus, setHoverListaAmeiStatus] = useState({});
    const [hoverCarrinhoStatus, setHoverCarrinhoStatus] = useState({});

    const { nome_produto } = useParams();
    const [produto, setProduto] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [clientes, setClientes] = useState([]);

    const [emailUser, setEmailUser] = useState('');
    const [produtoAviso, setProdutoAviso] = useState(null);

    const [modalAviso, setModalAviso] = useState(false);
    const [sendLoading, setSendLoading] = useState(false);

    const [listaAmeiStatus, setListaAmeiStatus] = useState({});
    const [carrinhoStatus, setCarrinhoStatus] = useState({}); // Estado para controlar o ícone de cada produto


    const [avaliacao, setAvaliacao] = useState([]);

    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPorPagina = 5; // Número de avaliações por página
    const inicioIndice = (paginaAtual - 1) * itensPorPagina;
    const fimIndice = inicioIndice + itensPorPagina;
    const avaliacaoPaginada = avaliacao.slice(inicioIndice, fimIndice);

    const frete = 14;

    useEffect(() => {
        const fetchProdutoPorNome = async () => {
            try {
                const resp = await axios.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/produto/nome/${nome_produto}`);
                setProduto(resp.data.result);
            } catch (error) {
                console.error('Erro ao buscar dados do produto.', error);
            }
        }
        fetchProdutoPorNome();
    }, [nome_produto]);

    // Verifica se o produto já está na lista "Amei" ao carregar a página
    useEffect(() => {
        if (user && user.id_user) {
            // Pega a lista de produtos "Amei" do localStorage ou do backend
            const listaAtual = JSON.parse(localStorage.getItem(`listaAmei_${user.id_user}`)) || [];

            // Cria um novo objeto de listaAmeiStatus com base nos produtos e na lista "Amei"
            const novoStatus = listaAtual.reduce((acc, item) => {
                acc[item.id_produto] = true; // Marca o produto como "adicionado"
                return acc;
            }, {});

            // Atualiza o estado de listaAmeiStatus com o status de cada produto
            setListaAmeiStatus(novoStatus);
        }
    }, [user]); // Executa quando o user mudar

    // Verifica se o produto já está no carrinho ao carregar a página
    useEffect(() => {
        if (user && user.id_user) {
            // Pega a lista de produtos no carrinho do localStorage ou do backend
            const listaAtual = JSON.parse(localStorage.getItem(`carrinho${user.id_user}`)) || [];

            // Cria um novo objeto de listaAmeiStatus com base nos produtos e no carrinho
            const novoStatus = listaAtual.reduce((acc, item) => {
                acc[item.id_produto] = true; // Marca o produto como "adicionado"
                return acc;
            }, {});

            // Atualiza o estado de listaAmeiStatus com o status de cada produto
            setCarrinhoStatus(novoStatus);
        }
    }, [user]); // Executa quando o user mudar

    // useEffect para buscar dados assim que o componente é montado
    useEffect(() => {
        // Função assíncrona para buscar pedidos
        const fetchAvaliacao = async () => {
            try {
                const resp = await axios.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/pedido/avaliacao-produto/${produto.id_produto}`);
                setAvaliacao(resp.data.result);
            } catch (error) {
                console.error('Erro ao listar avaliações', error);
            }
        };

        // Função assíncrona para buscar clientes
        const fetchDadosCliente = async () => {
            try {
                const resp = await axios.get('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/usuarios');
                setClientes(resp.data.result); // Salvando clientes no estado
            } catch (error) {
                setError('Erro ao obter dados dos clientes.');
                setSuccess('');
            }
        };

        // Chamando as funções de busca
        fetchAvaliacao();
        fetchDadosCliente();
    }, [produto.id_produto]); // Array de dependências vazio indica que este efeito executa apenas uma vez

    const handleListaAmei = async (produto) => {
        const id_user = user.id_user; // Acesso ao id_user

        // Verifica se o usuário está logado
        if (!id_user) {
            alert('Você precisa estar logado para adicionar à lista "Amei".');
            return;
        }

        try {
            // Verifica se o produto já está na lista "Amei" no localStorage
            const listaAtual = JSON.parse(localStorage.getItem(`listaAmei_${id_user}`)) || [];
            if (listaAtual.some((item) => item.id_produto === produto.id_produto)) {
                return;
            }

            // Verifica no backend se o produto já está na lista "Amei" do usuário
            const resp = await axios.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/lista-amei/${id_user}`);
            const listaBackend = resp.data;

            // Verifica se o produto já está na lista "Amei" do backend
            if (listaBackend.some((item) => item.id_produto === produto.id_produto)) {
                return;
            }

            // Envia o pedido para o backend para adicionar o produto à lista "Amei"
            const response = await axios.post('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/lista-amei', {
                id_user: id_user,
                id_produto: produto.id_produto, // id_produto extraído de ProdutoGeral
            });

            // Checa se a resposta foi bem-sucedida
            if (response.status !== 200 && response.status !== 201) {
                throw new Error('Erro ao adicionar o produto à lista "Amei".');
            }

            // Caso o produto seja adicionado com sucesso, atualiza o localStorage
            listaAtual.push(produto);
            localStorage.setItem(`listaAmei_${id_user}`, JSON.stringify(listaAtual));

            // Atualiza o estado local do ícone para este produto
            setListaAmeiStatus(prevState => ({
                ...prevState,
                [produto.id_produto]: true, // Marca este produto como adicionado
            }));

        } catch (error) {
            console.error('Erro ao adicionar à lista "Amei":', error.response ? error.response.data : error.message);
            alert('Erro ao adicionar o produto à lista.');
        }
    };

    const handleRemoveFromAmei = async (produtoId) => {
        try {
            const id_user = user.id_user;

            // Faz a requisição para remover do backend e do localStorage
            await axios.delete(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/lista-amei/${id_user}/${produtoId}`);

            // Atualiza o localStorage
            const listaAtual = JSON.parse(localStorage.getItem(`listaAmei_${id_user}`)) || [];
            const novaListaAmei = listaAtual.filter(produto => produto.id_produto !== produtoId);
            localStorage.setItem(`listaAmei_${id_user}`, JSON.stringify(novaListaAmei));

            // Atualiza o estado local do ícone para este produto
            setListaAmeiStatus(prevState => ({
                ...prevState,
                [produtoId]: false, // Marca este produto como não adicionado
            }));

        } catch (error) {
            console.error('Erro ao remover produto da lista "Amei":', error);
            alert('Erro ao remover o produto da lista.');
        }
    };

    const handleCarrinho = async (produto) => {
        const id_user = user.id_user;

        if (!user || !user.id_user) {
            alert('Você precisa estar logado para adicionar ao carrinho.');
            return;
        }

        try {

            // Verifica se o produto já está no carrinho no localStorage
            const listaAtual = JSON.parse(localStorage.getItem(`carrinho${id_user}`)) || [];
            if (listaAtual.some((item) => item.id_produto === produto.id_produto)) {
                return;
            }

            const resp = await axios.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/carrinho/${id_user}`);
            const listaBackend = resp.data;

            if (listaBackend.some((item) => item.id_produto === produto.id_produto)) {
                return; // Produto já está no carrinho no backend
            }

            await axios.post('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/carrinho', {
                id_user: id_user,
                id_produto: produto.id_produto,
                qtd_produto_carrinho: 1,
            });

            // Caso o produto seja adicionado com sucesso, atualiza o localStorage
            listaAtual.push(produto);
            localStorage.setItem(`carrinho${id_user}`, JSON.stringify(listaAtual));

            // Atualiza o estado local para o carrinho
            setCarrinhoStatus(prevState => ({
                ...prevState,
                [produto.id_produto]: true,
            }));
        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
            alert('Erro ao adicionar o produto no carrinho.');
        }
    };

    const handleRemoveFromCarrinho = async (produtoId) => {
        try {
            // Faz a requisição para o backend para remover o produto do carrinho
            await axios.delete(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/carrinho/${user.id_user}/${produtoId}`);

            // Atualiza o localStorage
            const listaAtual = JSON.parse(localStorage.getItem(`carrinho${user.id_user}`)) || [];
            const novoCarrinho = listaAtual.filter(produto => produto.id_produto !== produtoId);
            localStorage.setItem(`carrinho${user.id_user}`, JSON.stringify(novoCarrinho));

            // Atualiza o estado local do ícone para este produto
            setCarrinhoStatus(prevState => ({
                ...prevState,
                [produtoId]: false, // Marca este produto como não adicionado
            }));

        } catch (error) {
            console.error('Erro ao remover produto do carrinho:', error);
            alert('Erro ao remover o produto do carrinho.');
        }
    };

    const handleMouseEnter = (id, type) => {
        if (type === 'listaAmei') {
            setHoverListaAmeiStatus((prevStatus) => ({
                ...prevStatus,
                [id]: true,
            }));
        } else if (type === 'carrinho') {
            setHoverCarrinhoStatus((prevStatus) => ({
                ...prevStatus,
                [id]: true,
            }));
        }
    };

    const handleMouseLeave = (id, type) => {
        if (type === 'listaAmei') {
            setHoverListaAmeiStatus((prevStatus) => ({
                ...prevStatus,
                [id]: false,
            }));
        } else if (type === 'carrinho') {
            setHoverCarrinhoStatus((prevStatus) => ({
                ...prevStatus,
                [id]: false,
            }));
        }
    };

    const handleModalAviso = (produto) => {
        setProdutoAviso(produto);
        setModalAviso(!modalAviso);
    }

    const handleAviseQuandoChegar = async (e) => {
        // Previne o comportamento padrão do formulário (evitar recarregamento da página)
        e.preventDefault();

        // Define o estado de "loading" como verdadeiro, indicando que o processo de envio está em andamento
        setSendLoading(true);

        // Cria um objeto com os dados que serão enviados para a API (email do usuário e a dúvida)
        const dadosEnvio = {
            email_user: emailUser,   // Email do usuário
            nome_produto: produtoAviso.nome_produto,
        };

        try {
            const resp = await axios.post(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/aviso/${produtoAviso.nome_produto}`, dadosEnvio);

            if (resp.status === 200 && resp.data.message === 'E-mail enviado com sucesso!') {
                alert('E-mail enviado com sucesso!');
                setEmailUser('');
            } else {
                alert(resp.data.message || 'Erro ao enviar e-mail.');
            }
        } catch (error) {
            console.error(error);
            if (!error.response || error.response.status >= 500) {
                alert('Erro ao enviar e-mail.');
            }
        }
    }

    return (
        <Container>
            <TituloProduto>{produto.nome_produto}</TituloProduto>
            <ContainerProduto>
                <ContainerDescricao>
                    <ImgProdutospec src={`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/uploads/${produto.img_produto}`} alt={produto.nome_produto} />
                    <DivDescricao>
                        <Subtitulo>{produto.nome_produto}</Subtitulo>
                        {produto.categoria_produto === 'promocoes' ? (
                            <div>
                                <Preco style={{ textDecoration: 'line-through' }}>{formatCurrencyBr(produto.preco_produto)}</Preco>
                                <Preco style={{ color: '#A87826' }}>{formatCurrencyBr(produto.preco_promocional_produto)}</Preco>
                            </div>
                        ) : (
                            <Preco>{formatCurrencyBr(produto.preco_produto)}</Preco>
                        )}
                        <TxtGerais>{formatParcelas(produto.parcela_produto)}</TxtGerais>
                        <TxtGerais>Quantidade restante: {produto.qtd_produto}</TxtGerais>
                        <UlVariacao>
                            <li>
                                <ImagemVariacao src={`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/uploads/${produto.img_produto}`} alt={produto.nome_produto} />
                            </li>
                            <li>
                                <ImagemVariacao src={`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/uploads/${produto.img_produto}`} alt={produto.nome_produto} />
                            </li>
                            <li>
                                <ImagemVariacao src={`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/uploads/${produto.img_produto}`} alt={produto.nome_produto} />
                            </li>
                            <li>
                                <ImagemVariacao src={`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/uploads/${produto.img_produto}`} alt={produto.nome_produto} />
                            </li>
                            <li>
                                <ImagemVariacao src={`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/uploads/${produto.img_produto}`} alt={produto.nome_produto} />
                            </li>
                            <li>
                                <ImagemVariacao src={`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/uploads/${produto.img_produto}`} alt={produto.nome_produto} />
                            </li>
                        </UlVariacao>
                        {produto.qtd_produto === 0 ? (
                            <ContainerAviseFalta>
                                <p>Produto indisponível</p>
                                <BotaoImagemDados style={{ background: '#FFF', color: '#A87826' }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleModalAviso(produto)
                                    }} >
                                    Avise quando chegar
                                </BotaoImagemDados>
                            </ContainerAviseFalta>
                        ) : (
                            <ContainerBotoesFunction>
                                <BotaoAmeiCarrinho
                                    title={listaAmeiStatus[produto.id_produto] ? 'Remover da lista "Amei"' : 'Adicionar à lista "Amei"'}
                                    onClick={() =>
                                        listaAmeiStatus[produto.id_produto]
                                            ? handleRemoveFromAmei(produto.id_produto)
                                            : handleListaAmei(produto)
                                    }
                                    onMouseEnter={() => handleMouseEnter(produto.id_produto)}
                                    onMouseLeave={() => handleMouseLeave(produto.id_produto)}
                                    style={{
                                        background: listaAmeiStatus[produto.id_produto]
                                            ? hoverListaAmeiStatus[produto.id_produto]
                                                ? '#FFF'
                                                : '#FFF'
                                            : hoverListaAmeiStatus[produto.id_produto]
                                                ? '#FFF'
                                                : '#A87826',
                                        color: listaAmeiStatus[produto.id_produto]
                                            ? hoverListaAmeiStatus[produto.id_produto]
                                                ? '#A87826'
                                                : '#A87826'
                                            : hoverListaAmeiStatus[produto.id_produto]
                                                ? '#A87826'
                                                : '#FFF',
                                    }}
                                >
                                    {listaAmeiStatus[produto.id_produto] ? <TbHeart /> : <TbHeartFilled />}
                                    Amei
                                </BotaoAmeiCarrinho>
                                <BotaoAmeiCarrinho
                                    title={carrinhoStatus[produto.id_produto] ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
                                    onClick={() =>
                                        carrinhoStatus[produto.id_produto]
                                            ? handleRemoveFromCarrinho(produto.id_produto)
                                            : handleCarrinho(produto)
                                    }
                                    onMouseEnter={() => handleMouseEnter(produto.id_produto)}
                                    onMouseLeave={() => handleMouseLeave(produto.id_produto)}
                                    style={{
                                        background: carrinhoStatus[produto.id_produto]
                                            ? hoverCarrinhoStatus[produto.id_produto]
                                                ? '#FFF'
                                                : '#FFF'
                                            : hoverCarrinhoStatus[produto.id_produto]
                                                ? '#FFF'
                                                : '#A87826',
                                        color: carrinhoStatus[produto.id_produto]
                                            ? hoverCarrinhoStatus[produto.id_produto]
                                                ? '#A87826'
                                                : '#A87826'
                                            : hoverCarrinhoStatus[produto.id_produto]
                                                ? '#A87826'
                                                : '#FFF',
                                    }}
                                >
                                    {carrinhoStatus[produto.id_produto] ? <TbShoppingCart /> : <TbShoppingCartFilled />}
                                    Carrinho
                                </BotaoAmeiCarrinho>
                            </ContainerBotoesFunction>
                        )}
                    </DivDescricao>
                </ContainerDescricao>
                <ContainerValorEntrega>
                    <SubContainerValorEntrega>
                        <Subtitulo>Preço do produto:</Subtitulo>
                        {produto.categoria_produto === 'promocoes' ? (
                            <div>
                                <Preco style={{ textDecoration: 'line-through' }}>{formatCurrencyBr(produto.preco_produto)}</Preco>
                                <Preco style={{ color: '#A87826' }}>{formatCurrencyBr(produto.preco_promocional_produto)}</Preco>
                            </div>
                        ) : (
                            <Preco>{formatCurrencyBr(produto.preco_produto)}</Preco>
                        )}
                    </SubContainerValorEntrega>
                    <SubContainerValorEntrega>
                        <Subtitulo>Frete:</Subtitulo>
                        <SubContainerValorEntrega>
                            <Preco>Grande Florianópolis: {formatCurrencyBr(frete)}</Preco>
                            <Preco>Resto do Brasil: Necessário calcular.</Preco>
                        </SubContainerValorEntrega>
                    </SubContainerValorEntrega>
                    {produto.qtd_produto > 0 ? (
                        <SubContainerValorEntrega>
                            <BotaoImagemDados
                                title={carrinhoStatus[produto.id_produto] ? 'Remover do carrinho' : 'Adicionar no carrinho'}
                                onClick={() =>
                                    carrinhoStatus[produto.id_produto]
                                        ? handleRemoveFromCarrinho(produto.id_produto)
                                        : handleCarrinho(produto)
                                }
                            >
                                {carrinhoStatus[produto.id_produto] ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
                            </BotaoImagemDados>
                        </SubContainerValorEntrega>
                    ) : (
                        <TxtGerais>Produto indisponível</TxtGerais>
                    )}
                </ContainerValorEntrega>
            </ContainerProduto>
            {modalAviso && (
                <ModalAvisar>
                    <ModalInternalContainer style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Subtitulo>Preencha os campos</Subtitulo>
                        <FlexRowLabelInputLoginCadastro>
                            <LabelProdutos>
                                <RiMailLine />
                            </LabelProdutos>
                            <InputProdutos type='email' placeholder='E-mail' value={emailUser} onChange={(e) => setEmailUser(e.target.value)} />
                        </FlexRowLabelInputLoginCadastro>
                        {produtoAviso && (
                            <FlexRowLabelInputLoginCadastro>
                                <LabelProdutos>
                                    <RiProductHuntLine />
                                </LabelProdutos>
                                <InputProdutos type='text' value={produtoAviso.nome_produto} readOnly />
                            </FlexRowLabelInputLoginCadastro>
                        )}
                        <FlexRowLabelInputLoginCadastro>
                            <ButtonLoginCadastro
                                type='submit'
                                onClick={handleAviseQuandoChegar}
                                disabled={sendLoading || !emailUser}
                                style={{ width: '10rem' }}>
                                {sendLoading ? 'Enviando...' : 'Enviar'}
                            </ButtonLoginCadastro>
                            <ButtonLoginCadastro onClick={handleModalAviso} style={{ width: '10rem' }}>Fechar</ButtonLoginCadastro>
                        </FlexRowLabelInputLoginCadastro>
                    </ModalInternalContainer>
                </ModalAvisar>
            )}
            <ContainerAvaliacao>
                <Subtitulo>Avaliações do produto</Subtitulo>
                {Array.isArray(avaliacaoPaginada) && avaliacaoPaginada.length > 0 ? (
                    avaliacaoPaginada.map((avaliacaoPR) => {
                        const clienteFind = clientes.find((cliente) => cliente.id_user === avaliacaoPR.id_user);
                        const nomeCliente = clienteFind ? clienteFind.nome_user : 'Cliente não encontrado';

                        return (
                            <UserAvaliacao key={avaliacaoPR.id_avaliacao}>
                                <TxtGerais>{nomeCliente}</TxtGerais>
                                <TxtAvaliacao>
                                    Avaliação realizada em: {formatDateBrDefault(avaliacaoPR.data_avaliacao)}
                                </TxtAvaliacao>
                                <StarDescript>
                                    <div>
                                        {[1, 2, 3, 4, 5].map((nivel) => (
                                            <Star key={nivel} $filled={nivel <= avaliacaoPR.nivel_avaliacao}>
                                                ★
                                            </Star>
                                        ))}
                                    </div>
                                    <TitleAvaliacao style={{ fontWeight: '600' }}>{avaliacaoPR.titulo_avaliacao}</TitleAvaliacao>
                                    <TxtGerais>{avaliacaoPR.descricao_avaliacao}</TxtGerais>
                                </StarDescript>
                            </UserAvaliacao>
                        );
                    })
                ) : (
                    <p>Este produto ainda não possui avaliações</p>
                )}

                {/* Paginação */}
                {avaliacao.length > itensPorPagina && (
                    <ContainerPaginacao>
                        <BotaoPaginacao
                            disabled={paginaAtual === 1}
                            onClick={() => setPaginaAtual(paginaAtual - 1)}
                        >
                            Anterior
                        </BotaoPaginacao>
                        <span>Página {paginaAtual} de {Math.ceil(avaliacao.length / itensPorPagina)}</span>
                        <BotaoPaginacao
                            disabled={paginaAtual === Math.ceil(avaliacao.length / itensPorPagina)}
                            onClick={() => setPaginaAtual(paginaAtual + 1)}
                        >
                            Próxima
                        </BotaoPaginacao>
                    </ContainerPaginacao>
                )}
            </ContainerAvaliacao>
        </Container>
    )
}

export default Produto