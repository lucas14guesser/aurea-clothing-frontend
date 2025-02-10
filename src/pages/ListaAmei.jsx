import React, { useState, useEffect, useContext } from 'react';
import {
    ButtonAdicionarCarrinho,
    ContainerButtonsFunctions,
    ContainerEspecificacoesProduto,
    ContainerProdutoProduto,
    LinkProduto,
    ListaItemProduto,
    NomeProduto,
} from '../styles/CategoriaProdutosStyle';
import { TbHeartFilled, TbShoppingBag, TbShoppingCart, TbShoppingCartFilled } from 'react-icons/tb';
import { UserContext } from '../router/userContext';
import axios from 'axios';
import { BotaoPaginacao, ContainerPaginacao, ImgProduto, PrecoPromocionalProduto, TxtProduto } from '../styles/ProdutoStyles';
import { TxtGerais } from '../styles/GlobalStyles';
import { formatCurrencyBr, formatParcelas } from '../services/Functions';
import { ContainerListaAmei, TituloListaAmei } from '../styles/ListaAmeiStyles';
import { BotaoImagemDados } from '../styles/HomePageStyles';
import { useNavigate } from 'react-router-dom';

function ListaAmei() {
    const { user } = useContext(UserContext);  // Agora você usa o user, que tem o id_user
    const [produtosAmei, setProdutosAmei] = useState([]);
    const [carrinhoStatus, setCarrinhoStatus] = useState({});    // Estado para o carrinho

    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPorPagina = 5; // Número de avaliações por página
    const inicioIndice = (paginaAtual - 1) * itensPorPagina;
    const fimIndice = inicioIndice + itensPorPagina;
    const ListaAmeiPaginada = Array.isArray(produtosAmei) ? produtosAmei.slice(inicioIndice, fimIndice) : [];

    const navigate = useNavigate();


    useEffect(() => {
        if (user && user.id_user) {
            axios.get(`http://localhost:3001/aurea/lista-amei/${user.id_user}`)
                .then((response) => {
                    setProdutosAmei(response.data);
                })
                .catch((error) => {
                    console.error('Erro ao buscar a lista "Amei":', error);
                });
        }
    }, [user]);

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

    const handleRemoveFromAmei = async (produtoId) => {
        try {
            const id_user = user.id_user;

            // Faz a requisição para remover do backend
            await axios.delete(`http://localhost:3001/aurea/lista-amei/${id_user}/${produtoId}`);

            // Atualiza o localStorage
            const listaAtual = JSON.parse(localStorage.getItem(`listaAmei_${id_user}`)) || [];
            const novaListaAmei = listaAtual.filter(produto => produto.id_produto !== produtoId);
            localStorage.setItem(`listaAmei_${id_user}`, JSON.stringify(novaListaAmei));

            // Atualiza o estado corretamente, filtrando a lista sem o produto removido
            setProdutosAmei(prevState => prevState.filter(produto => produto.id_produto !== produtoId));

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

                const resp = await axios.get(`http://localhost:3001/aurea/carrinho/${id_user}`);
                const listaBackend = resp.data;

                if (listaBackend.some((item) => item.id_produto === produto.id_produto)) {
                    return; // Produto já está no carrinho no backend
                }

                await axios.post('http://localhost:3001/aurea/carrinho', {
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
            await axios.delete(`http://localhost:3001/aurea/carrinho/${user.id_user}/${produtoId}`);

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

    const handleLinkDetail = (nomeProduto) => {
        navigate(`/produto/${nomeProduto}`);
    }

    return (
        <ContainerListaAmei>
            <TituloListaAmei>Minha Lista "Amei"</TituloListaAmei>
            <ContainerProdutoProduto>
                {ListaAmeiPaginada.length > 0 ? (
                    ListaAmeiPaginada.map((produto, index) => (
                        <ListaItemProduto key={`${produto.id_produto}-${index}`} onClick={() => handleLinkDetail(produto.nome_produto)}>  {/* Usando id_produto + index para garantir unicidade */}
                            <ImgProduto
                                src={`http://localhost:3001/uploads/${produto.img_produto}`}
                                alt={produto.nome_produto}
                            />
                            <ContainerEspecificacoesProduto>
                                <NomeProduto>{produto.nome_produto}</NomeProduto>
                                {produto.categoria_produto === 'promocoes' ? (
                                    <div>
                                        <PrecoPromocionalProduto>{formatCurrencyBr(produto.preco_produto)}</PrecoPromocionalProduto>
                                        <TxtProduto>{formatCurrencyBr(produto.preco_promocional_produto)}</TxtProduto>
                                    </div>
                                ) : (
                                    <TxtGerais style={{ color: '#A87826' }}>{formatCurrencyBr(produto.preco_produto)}</TxtGerais>
                                )}
                                <TxtGerais style={{ fontWeight: '600' }}>{formatParcelas(produto.parcela_produto)}</TxtGerais>
                                <ContainerButtonsFunctions>
                                    <ButtonAdicionarCarrinho
                                        title="Remover da lista 'Amei'"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleRemoveFromAmei(produto.id_produto)
                                        }}
                                    >
                                        <TbHeartFilled />
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
                    ))
                ) : (
                    <TxtGerais>Sua lista de "Amei" está vazia!</TxtGerais>
                )}

                {/* Paginação */}
                {produtosAmei.length > itensPorPagina && (
                    <ContainerPaginacao>
                        <BotaoPaginacao
                            disabled={paginaAtual === 1}
                            onClick={() => setPaginaAtual(paginaAtual - 1)}
                        >
                            Anterior
                        </BotaoPaginacao>
                        <span>Página {paginaAtual} de {Math.ceil(produtosAmei.length / itensPorPagina)}</span>
                        <BotaoPaginacao
                            disabled={paginaAtual === Math.ceil(produtosAmei.length / itensPorPagina)}
                            onClick={() => setPaginaAtual(paginaAtual + 1)}
                        >
                            Próxima
                        </BotaoPaginacao>
                    </ContainerPaginacao>
                )}

            </ContainerProdutoProduto>
        </ContainerListaAmei>
    );
}

export default ListaAmei;
