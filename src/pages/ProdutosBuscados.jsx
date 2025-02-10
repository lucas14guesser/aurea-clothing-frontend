import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { TxtGerais, TxtPaginacao } from '../styles/GlobalStyles';
import { BtnFiltroCor, BtnFiltroTamanho, ButtonAdicionarCarrinho, ButtonProduto, ButtonRemoveFilter, ContainerButtonsFunctions, ContainerCategoria, ContainerCategoriaProduto, ContainerEspecificacoesProduto, ContainerFiltros, ContainerProduto, ContainerProdutoProduto, DivColumn, Filtragem, FiltragemDiv, Filtros, FlexColumnFiltragem, InputFiltragem, InputMinMax, LabelFiltragem, LinkProduto, ListaItemProduto, NomeProduto } from '../styles/CategoriaProdutosStyle';
import { BsDashLg } from 'react-icons/bs';
import { BotaoPaginacao, ContainerPaginacao, ImgProduto, SubtituloProdutosSearch, TituloProdutosSearch } from '../styles/ProdutoStyles';
import { TbHeart, TbHeartFilled, TbShoppingBag } from 'react-icons/tb';
import { useContext } from 'react';
import { UserContext } from '../router/userContext';
import { formatarTitulo, formatCurrencyBr, formatParcelas } from '../services/Functions';
import SpinnerComponent from '../components/functions/main/SpinnerComponent';

function ProdutosBuscados() {
    const { search } = useLocation();
    const query = new URLSearchParams(search).get('query');
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { user } = useContext(UserContext);

    // Estado para armazenar os filtros de cor, tamanho e preço
    const [corSelecionada, setCorSelecionada] = useState(null);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState('');
    const [precoMin, setPrecoMin] = useState('');
    const [precoMax, setPrecoMax] = useState('');
    const [produtoStatus, setProdutoStatus] = useState({}); // Estado para controlar o ícone de cada produto

    // Verifica se o produto já está na lista "Amei" ao carregar a página
    useEffect(() => {
        if (user && user.id_user) {
            const listaAtual = JSON.parse(localStorage.getItem(`listaAmei_${user.id_user}`)) || [];
            const novoStatus = listaAtual.reduce((acc, item) => {
                acc[item.id_produto] = true;
                return acc;
            }, {});
            setProdutoStatus(novoStatus);
        }
    }, [user]);

    // Função para filtrar os produtos com base nos filtros de cor, tamanho e preço
    const filtrarProdutos = (produtos, filtroCor, filtroTamanho, filtroPrecoMin, filtroPrecoMax) => {
        let produtosFiltrados = produtos;

        // Filtra produtos por cor, caso um filtro de cor esteja selecionado
        if (filtroCor) {
            produtosFiltrados = produtosFiltrados.filter(produto => produto.cor_produto === filtroCor);
        }

        // Filtra produtos por tamanho, caso um filtro de tamanho esteja selecionado
        if (filtroTamanho) {
            produtosFiltrados = produtosFiltrados.filter(produto => produto.tamanho_produto === filtroTamanho);
        }

        // Filtra produtos por preço mínimo e máximo
        if (filtroPrecoMin && filtroPrecoMax) {
            produtosFiltrados = produtosFiltrados.filter(produto =>
                produto.preco_produto >= filtroPrecoMin && produto.preco_produto <= filtroPrecoMax
            );
        }

        return produtosFiltrados;
    };

    // Aplica os filtros antes de calcular a paginação
    const produtosFiltrados = filtrarProdutos(produtos, corSelecionada, tamanhoSelecionado, precoMin, precoMax);

    // Calcula os índices para paginação
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Produtos a serem exibidos na página atual
    const currentItems = produtosFiltrados.slice(startIndex, endIndex);

    // Total de páginas baseado nos produtos filtrados
    const totalPages = Math.ceil(produtosFiltrados.length / itemsPerPage);

    // Função para mudar a página
    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Função para buscar produtos
    useEffect(() => {
        const buscarProdutos = async () => {
            try {
                setLoading(true);
                const [resNome, resCategoria] = await Promise.all([
                    axios.get(`http://localhost:3001/aurea/busca/nome/${query}`),
                    axios.get(`http://localhost:3001/aurea/busca/categoria/${query}`),
                ]);

                const resultadosNome = resNome.data.result || [];
                const resultadosCategoria = resCategoria.data.result || [];

                const resultadosUnicos = [
                    ...new Map(resultadosNome.concat(resultadosCategoria).map((produto) => [produto.id_produto, produto])).values(),
                ];

                setProdutos(resultadosUnicos);
            } catch (err) {
                setError('Erro ao buscar produtos. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            buscarProdutos();
        }
    }, [query]);

    // Lista de cores
    const cores = [
        { nome: 'amarelo', cor: '#FFF800' },
        { nome: 'azul', cor: '#007BFF' },
        { nome: 'branco', cor: '#fff' },
        { nome: 'cinza', cor: '#737373' },
        { nome: 'laranja', cor: '#FA5400' },
        { nome: 'marrom', cor: '#8C5900' },
        { nome: 'nude', cor: '#F2D2BD' },
        { nome: 'preto', cor: '#000' },
        { nome: 'rosa', cor: '#FFDBDB' },
        { nome: 'rosê', cor: '#C21E56' },
        { nome: 'roxo', cor: '#A347FF' },
        { nome: 'verde', cor: '#00AD1D' },
        { nome: 'vermelho', cor: '#8C0000' },
    ];

    // Função para gerenciar o clique do botão e aplicar o tamanho
    const handleClick = (tamanho) => {
        setTamanhoSelecionado(tamanho); // Atualiza o tamanho selecionado
    };

    // Lista de tamanhos
    const tamanhos = [
        { tamanho: 'PP' },
        { tamanho: 'P' },
        { tamanho: 'M' },
        { tamanho: 'G' },
        { tamanho: 'GG' },
    ]


    const handleListaAmei = async (produto) => {
        try {
            const id_user = user.id_user; // Acesso ao id_user

            // Verifica se o usuário está logado
            if (!id_user) {
                alert('Você precisa estar logado para adicionar à lista "Amei".');
                return;
            }

            // Verifica se o produto já está na lista "Amei" no localStorage
            const listaAtual = JSON.parse(localStorage.getItem(`listaAmei_${id_user}`)) || [];
            if (listaAtual.some((item) => item.id_produto === produto.id_produto)) {
                return;
            }

            // Verifica no backend se o produto já está na lista "Amei" do usuário
            const resp = await axios.get(`http://localhost:3001/aurea/lista-amei/${id_user}`);
            const listaBackend = resp.data;

            // Verifica se o produto já está na lista "Amei" do backend
            if (listaBackend.some((item) => item.id_produto === produto.id_produto)) {
                return;
            }

            // Envia o pedido para o backend para adicionar o produto à lista "Amei"
            const response = await axios.post('http://localhost:3001/aurea/lista-amei', {
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
            setProdutoStatus(prevState => ({
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
            await axios.delete(`http://localhost:3001/aurea/lista-amei/${id_user}/${produtoId}`);

            // Atualiza o localStorage
            const listaAtual = JSON.parse(localStorage.getItem(`listaAmei_${id_user}`)) || [];
            const novaListaAmei = listaAtual.filter(produto => produto.id_produto !== produtoId);
            localStorage.setItem(`listaAmei_${id_user}`, JSON.stringify(novaListaAmei));

            // Atualiza o estado local do ícone para este produto
            setProdutoStatus(prevState => ({
                ...prevState,
                [produtoId]: false, // Marca este produto como não adicionado
            }));

        } catch (error) {
            console.error('Erro ao remover produto da lista "Amei":', error);
            alert('Erro ao remover o produto da lista.');
        }
    };

    const titulo = `Busca de ${formatarTitulo(query)}`;
    const subtitulo = `Estes são todos os resultados da sua busca de ${formatarTitulo(query)}`

    if (loading) return <SpinnerComponent />;
    if (error) return <p>{error}</p>;

    return (
        <React.Fragment>
            {/* Título e subtítulo da página */}
            <TituloProdutosSearch>{titulo}</TituloProdutosSearch>
            <SubtituloProdutosSearch>{subtitulo}</SubtituloProdutosSearch>

            <ContainerCategoriaProduto>
                <ContainerCategoria>
                    <ContainerFiltros>
                        {/* Filtro de Cor */}
                        <Filtros>
                            <TxtGerais style={{ color: '#A87826' }}>Filtrar por cor</TxtGerais>
                            <FiltragemDiv>
                                <Filtragem>
                                    {cores.map(({ nome, cor }) => (
                                        <BtnFiltroCor
                                            key={nome}
                                            style={{
                                                backgroundColor: cor,
                                                border: corSelecionada === nome ? '2px solid #A87826' : 'none', // Borda de 2px para a cor selecionada
                                            }}
                                            onClick={() => setCorSelecionada(nome)}
                                        />
                                    ))}
                                </Filtragem>
                            </FiltragemDiv>
                        </Filtros>

                        {/* Filtro de Tamanho */}
                        <Filtros>
                            <TxtGerais style={{ color: '#A87826' }}>Filtrar por tamanho</TxtGerais>
                            <FiltragemDiv>
                                {/* Botões para selecionar os tamanhos */}
                                <Filtragem>
                                    {tamanhos.map(({ tamanho }) => {
                                        return ( // Retornar o componente aqui
                                            <BtnFiltroTamanho
                                                key={tamanho}
                                                onClick={() => handleClick(tamanho)}
                                                style={tamanhoSelecionado === tamanho ? { backgroundColor: '#A87826', color: '#fff' } : {}}
                                            >
                                                {tamanho}
                                            </BtnFiltroTamanho>
                                        );
                                    })}
                                </Filtragem>
                                <BtnFiltroTamanho onClick={() => handleClick('único')} style={tamanhoSelecionado === 'único' ? { backgroundColor: '#A87826', color: '#fff', width: '3rem' } : { width: '3rem' }} >Único</BtnFiltroTamanho>
                                {/* Campo para inserir um tamanho específico caso o usuário deseje */}
                                <InputMinMax
                                    type="number"
                                    placeholder="Nº"
                                    value={tamanhoSelecionado}
                                    onChange={(e) => setTamanhoSelecionado(e.target.value)}
                                />
                            </FiltragemDiv>
                        </Filtros>

                        {/* Filtro de Preço */}
                        <Filtros>
                            <TxtGerais style={{ color: '#A87826' }}>Filtrar por preço</TxtGerais>
                            <FiltragemDiv>
                                <Filtragem>
                                    {/* Campos para filtrar o preço mínimo e máximo */}
                                    <FlexColumnFiltragem>
                                        <LabelFiltragem>Mínimo</LabelFiltragem>
                                        <InputFiltragem
                                            type="text"
                                            value={precoMin}
                                            placeholder='0'
                                            onChange={(e) => setPrecoMin(e.target.value)}
                                        />
                                    </FlexColumnFiltragem>

                                    <TxtGerais style={{ margin: '2.2rem 0 0 0', color: '#A87826' }}>
                                        <BsDashLg />
                                    </TxtGerais>

                                    <FlexColumnFiltragem>
                                        <LabelFiltragem>Máximo</LabelFiltragem>
                                        <InputFiltragem
                                            type="text"
                                            value={precoMax}
                                            placeholder='3000'
                                            onChange={(e) => setPrecoMax(e.target.value)}
                                        />
                                    </FlexColumnFiltragem>
                                </Filtragem>
                            </FiltragemDiv>
                        </Filtros>
                    </ContainerFiltros>
                    {/* Botão para remover todos os filtros */}
                    <ButtonRemoveFilter onClick={() => { setCorSelecionada(null); setTamanhoSelecionado(''); setPrecoMin(''); setPrecoMax('') }}>Remover Filtros</ButtonRemoveFilter>
                </ContainerCategoria>

                <ContainerProduto>
                    <ContainerProdutoProduto>
                        {/* Produtos filtrados */}
                        {currentItems.length > 0 ? (
                            currentItems.map((produto) => (
                                <ListaItemProduto key={produto.id_produto}>
                                    {/* Exibe a imagem do produto, se houver */}
                                    {produto.img_produto && <ImgProduto src={`http://localhost:3001/uploads/${produto.img_produto}`} alt={produto.nome_produto} />}
                                    <ContainerEspecificacoesProduto>
                                        {/* Exibe o nome do produto e seu preço */}
                                        {produto.nome_produto && <NomeProduto>{produto.nome_produto}</NomeProduto>}
                                        <DivColumn>
                                            {produto.preco_produto && <p style={{ color: '#A87826' }}>{formatCurrencyBr(produto.preco_produto)}</p>}
                                            {produto.parcela_produto && <p style={{ color: '#A87826' }}>{formatParcelas(produto.parcela_produto)}</p>}
                                        </DivColumn>
                                        {/* Botões de ação */}
                                        <ContainerButtonsFunctions>
                                            <ButtonAdicionarCarrinho
                                                title={produtoStatus[produto.id_produto] ? 'Remover da lista "Amei"' : 'Adicionar à lista "Amei"'}
                                                onClick={() =>
                                                    produtoStatus[produto.id_produto]
                                                        ? handleRemoveFromAmei(produto.id_produto)
                                                        : handleListaAmei(produto)
                                                }
                                            >
                                                {produtoStatus[produto.id_produto] ? <TbHeartFilled /> : <TbHeart />}
                                            </ButtonAdicionarCarrinho>
                                            <ButtonAdicionarCarrinho title='Adicionar ao ""meu carrinho"'>
                                                <TbShoppingBag />
                                            </ButtonAdicionarCarrinho>
                                        </ContainerButtonsFunctions>
                                        {/* Exibe o botão de "Avise quando chegar" se o produto estiver esgotado */}
                                        {produto.qtd_produto === 0 ? (
                                            <ButtonProduto style={{ background: '#FFF', color: '#A87826' }}>Avise quando chegar</ButtonProduto>
                                        ) : (
                                            <LinkProduto to={`/produto/${produto.nome_produto}`}>Detalhes do produto</LinkProduto>
                                        )}
                                    </ContainerEspecificacoesProduto>
                                </ListaItemProduto>
                            ))
                        ) : (
                            <p>Nenhum produto encontrado com os filtros aplicados.</p>
                        )}

                        {/* Controles de Paginação */}
                        <ContainerPaginacao>
                            <BotaoPaginacao
                                disabled={currentPage === 1}
                                onClick={() => changePage(currentPage - 1)}
                            >
                                Anterior
                            </BotaoPaginacao>

                            <TxtPaginacao>Página {currentPage} de {totalPages}</TxtPaginacao>

                            <BotaoPaginacao
                                disabled={currentPage === totalPages}
                                onClick={() => changePage(currentPage + 1)}
                            >
                                Próxima
                            </BotaoPaginacao>
                        </ContainerPaginacao>
                    </ContainerProdutoProduto>
                </ContainerProduto>
            </ContainerCategoriaProduto>
        </React.Fragment>
    );
}

export default ProdutosBuscados;
