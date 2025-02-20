import React, { useContext, useEffect, useState } from 'react';
import { ContainerCategoriaProduto, ContainerCategoria, ContainerProduto, ContainerProdutoProduto, ContainerFiltros, Filtros, ContainerEspecificacoesProduto, ListaItemProduto, ButtonAdicionarCarrinho, NomeProduto, ContainerButtonsFunctions, ButtonProduto, FiltragemDiv, BtnFiltroCor, Filtragem, BtnFiltroTamanho, LinkProduto, TxtFiltroMaxMin, FlexColumnFiltragem, LabelFiltragem, InputFiltragem, ButtonRemoveFilter, DivColumn, InputMinMax } from '../../../styles/CategoriaProdutosStyle';
import { TxtPaginacao } from '../../../styles/GlobalStyles';
import { TbShoppingCart, TbShoppingCartFilled, TbHeart, TbHeartFilled } from "react-icons/tb";
import { BsDashLg } from "react-icons/bs";
import { BotaoPaginacao, ContainerPaginacao, ImgProduto, PrecoPromocionalProduto, SubtituloProdutoGeral, TituloProdutoGeral, TxtFilter, TxtProduto } from '../../../styles/ProdutoStyles';
import { UserContext } from '../../../router/userContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BotaoImagemDados } from '../../../styles/HomePageStyles';

const ProdutosGeral = ({ titulo, subtitulo, produtos }) => {
    const { user } = useContext(UserContext);

    // Estado para armazenar os filtros de cor, tamanho e preço
    const [corSelecionada, setCorSelecionada] = useState(null);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState('');
    const [precoMin, setPrecoMin] = useState('');
    const [precoMax, setPrecoMax] = useState('');
    const [listaAmeiStatus, setListaAmeiStatus] = useState({});  // Estado para a lista "Amei"
    const [carrinhoStatus, setCarrinhoStatus] = useState({});    // Estado para o carrinho
    const navigate = useNavigate();

    // Verifica se o produto já está na lista "Amei" ao carregar a página
    useEffect(() => {
        if (user && user.id_user) {
            // Pega a lista de produtos "Amei" do localStorage ou do backend
            const listaAtual = JSON.parse(localStorage.getItem(`listaAmei_${user.id_user}`)) || [];

            // Cria um novo objeto de produtoStatus com base nos produtos e na lista "Amei"
            const novoStatus = listaAtual.reduce((acc, item) => {
                acc[item.id_produto] = true; // Marca o produto como "adicionado"
                return acc;
            }, {});

            // Atualiza o estado de produtoStatus com o status de cada produto
            setListaAmeiStatus(novoStatus);
        }
    }, [user]); // Executa quando o user mudar

    // Verifica se o produto já está no carrinho ao carregar a página
    useEffect(() => {
        if (user && user.id_user) {
            // Pega a lista de produtos no carrinho do localStorage ou do backend
            const listaAtual = JSON.parse(localStorage.getItem(`carrinho${user.id_user}`)) || [];

            // Cria um novo objeto de produtoStatus com base nos produtos e no carrinho
            const novoStatus = listaAtual.reduce((acc, item) => {
                acc[item.id_produto] = true; // Marca o produto como "adicionado"
                return acc;
            }, {});

            // Atualiza o estado de produtoStatus com o status de cada produto
            setCarrinhoStatus(novoStatus);
        }
    }, [user]); // Executa quando o user mudar

    // Função que formata o valor para o formato de moeda brasileira (R$ 100,00)
    const formatCurrencyBr = (valor) => {
        if (typeof valor !== "number") return "0,00"; // Caso o valor não seja um número
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // Formata como moeda brasileira
    };

    // Função que formata o título das categorias com palavras amigáveis
    const formatarTitulo = (titulo) => {
        if (!titulo) return ''; // Se o título for indefinido ou nulo, retorna uma string vazia.

        const dicionario = {
            calcas: 'calças',
            acessorios: 'acessórios',
            bones: 'bonés',
            lancamentos: 'lançamentos',
            promocoes: 'promoções',
        };

        // Substitui as palavras do título conforme o dicionário
        let tituloFormatado = titulo;
        for (let chave in dicionario) {
            const regex = new RegExp(`\\b${chave}\\b`, 'g'); // Palavra inteira
            tituloFormatado = tituloFormatado.replace(regex, dicionario[chave]);
        }

        // Retorna o título formatado
        return tituloFormatado;
    };

    // Função que formata as parcelas do produto
    const formatParcelas = (parcelas) => {
        if (!parcelas || parcelas === 1) {
            return "À vista"; // Se não houver parcelas ou for 1 parcela, retorna "À vista"
        }
        return `Em até ${parcelas}X`; // Caso contrário, retorna o número de parcelas com "X" (ex: 10X)
    };

    // Função para gerenciar o clique do botão e aplicar o tamanho
    const handleClickTamanho = (tamanho) => {
        // Se o tamanho já estiver selecionado, desmarque
        if (tamanhoSelecionado === tamanho) {
            setTamanhoSelecionado(null); // Remove o filtro de tamanho
        } else {
            setTamanhoSelecionado(tamanho); // Define o tamanho selecionado
        }
    };


    // Função para filtrar os produtos com base nos filtros de cor, tamanho e preço
    const filtrarProdutos = (produtos, filtroCor, filtroTamanho, filtroPrecoMin, filtroPrecoMax) => {
        if (!Array.isArray(produtos)) {
            console.error('Produtos não é um array válido');
            return []; // Retorna um array vazio caso o produtos não seja válido
        }

        let produtosFiltrados = produtos;

        // Filtra produtos por cor, caso um filtro de cor esteja selecionado
        if (filtroCor) {
            produtosFiltrados = produtosFiltrados.filter(produto => produto.cor_produto === filtroCor);
        }

        // Filtra produtos por tamanho, caso um filtro de tamanho esteja selecionado
        if (filtroTamanho) {
            produtosFiltrados = produtosFiltrados.filter(produto => produto.tamanho_produto === filtroTamanho);
        }

        // Filtra produtos por preço mínimo e máximo, considerando a categoria e o preço promocional
        if (filtroPrecoMin && filtroPrecoMax) {
            produtosFiltrados = produtosFiltrados.filter(produto => {
                // Verifica se o produto está dentro do intervalo de preço
                const precoProduto = (produto.categoria_produto === 'promocoes' && produto.preco_promocional_produto)
                    ? produto.preco_promocional_produto // Se for da categoria promocional, usa o preço promocional
                    : produto.preco_produto; // Caso contrário, usa o preço regular

                return precoProduto >= filtroPrecoMin && precoProduto <= filtroPrecoMax;
            });
        }

        return produtosFiltrados;
    };

    // Lista de cores com nome e código hexadecimal
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
        { nome: 'lilás', cor: '#C8A2C8' },
    ];

    const handleListaAmei = async (produto) => {
        if (!user?.id_user) {
            alert('Você precisa estar logado para adicionar à lista amei.');
            return;
        }

        const id_user = user.id_user;

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
        if (!user?.id_user) {
            alert('Você precisa estar logado para adicionar ao carrinho.');
            return;
        }

        const id_user = user.id_user;

        if (produto.qtd_produto === 0) {
            alert('Você não pode colocar um produto sem estoque no carrinho.');
            return;
        } else {
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

    // Lista de tamanhos
    const tamanhos = [
        { tamanho: 'PP' },
        { tamanho: 'P' },
        { tamanho: 'M' },
        { tamanho: 'G' },
        { tamanho: 'GG' },
    ]

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

    const handleLinkDetail = (nomeProduto) => {
        navigate(`/produto/${nomeProduto}`);
    }

    return (
        <React.Fragment>
            {/* Título e subtítulo da página */}
            <TituloProdutoGeral>{formatarTitulo(titulo)}</TituloProdutoGeral>
            <SubtituloProdutoGeral>{subtitulo}</SubtituloProdutoGeral>

            <ContainerCategoriaProduto>
                <ContainerCategoria>
                    <ContainerFiltros>
                        {/* Filtro de Cor */}
                        <Filtros>
                            <TxtFilter>Filtrar por cor</TxtFilter>
                            <FiltragemDiv>
                                <Filtragem>
                                    {cores.map(({ nome, cor }) => (
                                        <BtnFiltroCor
                                            key={nome}
                                            style={{
                                                backgroundColor: cor,
                                                border: corSelecionada === nome ? '2px solid #A87826' : 'none', // Borda de 2px para a cor selecionada
                                            }}
                                            onClick={() => {
                                                setCorSelecionada(corSelecionada === nome ? null : nome);
                                            }}
                                        />
                                    ))}
                                </Filtragem>
                            </FiltragemDiv>
                        </Filtros>

                        {/* Filtro de Tamanho */}
                        <Filtros>
                            <TxtFilter>Filtrar por tamanho</TxtFilter>
                            <FiltragemDiv>
                                {/* Botões para selecionar os tamanhos */}
                                <Filtragem>
                                    {tamanhos.map(({ tamanho }) => {
                                        return ( // Retornar o componente aqui
                                            <BtnFiltroTamanho
                                                key={tamanho}
                                                onClick={() => handleClickTamanho(tamanho)}
                                                style={tamanhoSelecionado === tamanho ? { backgroundColor: '#A87826', color: '#fff' } : {}}
                                            >
                                                {tamanho}
                                            </BtnFiltroTamanho>
                                        );
                                    })}
                                </Filtragem>
                                <BtnFiltroTamanho onClick={() => handleClickTamanho('único')} style={tamanhoSelecionado === 'único' ? { backgroundColor: '#A87826', color: '#fff', width: '3rem' } : { width: '3rem' }} >Único</BtnFiltroTamanho>
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
                            <TxtFilter>Filtrar por preço</TxtFilter>
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

                                    <TxtFiltroMaxMin>
                                        <BsDashLg />
                                    </TxtFiltroMaxMin>

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
                        {/* Mapeia apenas os itens da página atual */}
                        {currentItems.map((produto) => (
                            <ListaItemProduto key={produto.id_produto} onClick={() => handleLinkDetail(produto.nome_produto)}>
                                {/* Atualizando a URL da imagem para usar o Cloudinary */}
                                {produto.img_produto && (
                                    <ImgProduto src={produto.img_produto} alt={produto.nome_produto} />
                                )}
                                <ContainerEspecificacoesProduto>
                                    {produto.nome_produto && <NomeProduto>{produto.nome_produto}</NomeProduto>}
                                    <DivColumn>
                                        {produto.categoria_produto === 'promocoes' ? (
                                            <div>
                                                <PrecoPromocionalProduto>{formatCurrencyBr(produto.preco_produto)}</PrecoPromocionalProduto>
                                                <TxtProduto>{formatCurrencyBr(produto.preco_promocional_produto)}</TxtProduto>
                                            </div>
                                        ) : (
                                            <TxtProduto>{formatCurrencyBr(produto.preco_produto)}</TxtProduto>
                                        )}
                                        <TxtProduto>{formatParcelas(produto.parcela_produto)}</TxtProduto>
                                    </DivColumn>
                                    <ContainerButtonsFunctions>
                                        <ButtonAdicionarCarrinho
                                            title={listaAmeiStatus[produto.id_produto] ? 'Remover da lista "Amei"' : 'Adicionar no carrinho'}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                listaAmeiStatus[produto.id_produto]
                                                    ? handleRemoveFromAmei(produto.id_produto)
                                                    : handleListaAmei(produto)
                                            }}
                                        >
                                            {listaAmeiStatus[produto.id_produto] ? <TbHeartFilled /> : <TbHeart />}
                                        </ButtonAdicionarCarrinho>
                                        <ButtonAdicionarCarrinho
                                            title={carrinhoStatus[produto.id_produto] ? 'Remover do carrinho' : 'Adicionar no carrinho'}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                carrinhoStatus[produto.id_produto]
                                                    ? handleRemoveFromCarrinho(produto.id_produto)
                                                    : handleCarrinho(produto)
                                            }}
                                        >
                                            {carrinhoStatus[produto.id_produto] ? <TbShoppingCartFilled /> : <TbShoppingCart />}
                                        </ButtonAdicionarCarrinho>
                                    </ContainerButtonsFunctions>
                                    {produto.qtd_produto === 0 ? (
                                        <BotaoImagemDados style={{ background: '#FFF', color: '#A87826' }}>Avise quando chegar</BotaoImagemDados>
                                    ) : (
                                        <BotaoImagemDados
                                            title={carrinhoStatus[produto.id_produto] ? 'Remover do carrinho' : 'Adicionar no carrinho'}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                carrinhoStatus[produto.id_produto]
                                                    ? handleRemoveFromCarrinho(produto.id_produto)
                                                    : handleCarrinho(produto)
                                            }}
                                        >
                                            {carrinhoStatus[produto.id_produto] ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
                                        </BotaoImagemDados>
                                    )}
                                </ContainerEspecificacoesProduto>
                            </ListaItemProduto>
                        ))}

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
};

export default ProdutosGeral;
