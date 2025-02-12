import { React, useContext, useEffect, useState } from 'react';
import { BotaoImagemDados, Carousel, CarouselHidden, CarouselSlide, ContainerCarousel, ContainerImagemDados, ImagemCarousel, LinkProdutoHome, NextCarousel, PrevCarousel, TituloCarousel, TituloImagemDados } from '../../../../styles/HomePageStyles';
import { useCarouselAcessorios } from '../../../functions/homePage/carousel/CarouselFunctions';
import { TxtGerais } from '../../../../styles/GlobalStyles';
import { ButtonAdicionarCarrinho, ContainerButtonsFunctions } from '../../../../styles/CategoriaProdutosStyle';
import { TbHeart, TbHeartFilled, TbShoppingCart, TbShoppingCartFilled } from 'react-icons/tb';
import axios from 'axios';
import { UserContext } from '../../../../router/userContext';
import { formatCurrencyBr, formatParcelas, getImageUrl, isFallbackProduct, preencherComFallback } from '../../../../services/Functions';
import ModalAvisar from '../../../functions/modals/ModalAvisar';
import { useNavigate } from 'react-router-dom';

function CarouselAcessorios() {
    const { user } = useContext(UserContext);

    const [produtos, setProdutos] = useState([]);
    const [produtosAcessorios, setProdutosAcessorios] = useState([]);
    const [listaAmeiStatus, setListaAmeiStatus] = useState({}); // Estado para controlar o ícone de cada produto
    const [carrinhoStatus, setCarrinhoStatus] = useState({}); // Estado para controlar o ícone de cada produto

    const [emailUser, setEmailUser] = useState('');
    const [produtoAviso, setProdutoAviso] = useState(null);

    const [sendLoading, setSendLoading] = useState(false);

    const [modalAviso, setModalAviso] = useState(false);
    const navigate = useNavigate();


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

    useEffect(() => {
        const fetchDadosProdutos = async () => {
            try {
                // Fazendo a requisição à API para obter os produtos
                const resp = await axios.get('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/produtos');
                const produtos = resp.data.result;
                setProdutos(produtos);

                // Filtrando os produtos da categoria "acessorios"
                const acessorios = produtos.filter((produto) => produto.categoria_produto === 'acessorios');
                // Preenche com fallback se necessário
                const produtosCompletos = preencherComFallback(acessorios);
                setProdutosAcessorios(produtosCompletos);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchDadosProdutos();
    }, []); // Executa apenas uma vez quando o componente é montado


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
            console.error('Erro ao adicionar à lista "Amei"');
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

    const handleLinkDetail = (nomeProduto) => {
        navigate(`/produto/${nomeProduto}`);
    }

    // Importando as funções do carrossel
    const { counterSlideAcessorios, prevSlideAcessorios, nextSlideAcessorios } = useCarouselAcessorios(produtosAcessorios.length);

    // UseEffect responsável por passar as imagens do carrossel automaticamente
    useEffect(() => {
        const intervaloId = setInterval(() => {
            nextSlideAcessorios();
        }, 6000);

        return () => clearInterval(intervaloId);
    }, [nextSlideAcessorios]);

    const [screenSize, setScreenSize] = useState(getScreenSize());
    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getScreenSize());
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Função para definir as faixas de largura
    function getScreenSize() {
        const width = window.innerWidth;
        if (width <= 360) return "small-360"; // Dispositivos com largura de 360px
        if (width <= 430) return "small"; // Mobile
        if (width <= 630) return "medium"; // Tablets pequenos
        if (width <= 1220) return "large"; // Tablets grandes
        return "extra-large"; // Desktop
    }

    // Configurações baseadas no tamanho da tela
    const config = {
        "small-360": { imageWidth: 16, gapSize: 1, paddingSize: 0.5 },
        small: { imageWidth: 19, gapSize: 1, paddingSize: 0.5 },
        medium: { imageWidth: 14, gapSize: 0.75, paddingSize: 0.75 },
        large: { imageWidth: 16, gapSize: 1, paddingSize: 1 },
        "extra-large": { imageWidth: 19, gapSize: 1, paddingSize: 1 },
    };
    const { imageWidth, gapSize, paddingSize } = config[screenSize];

    // Cálculo necessário para redimensionar as imagens
    const slideWidthGap = imageWidth + gapSize + 2 * paddingSize;

    return (
        <ContainerCarousel>
            <TituloCarousel>Acessórios</TituloCarousel>
            <Carousel>
                {/* Seta estilizada para voltar à imagem anterior */}
                <PrevCarousel onClick={prevSlideAcessorios}>&#10094;</PrevCarousel>
                <CarouselHidden>
                    {/* Estilo do styled-components com estilo próprio que faz com que a rotação horizontal seja feita e redimensionada para o tamanho correto da imagem. */}
                    <CarouselSlide style={{ transform: `translateX(${-counterSlideAcessorios * slideWidthGap}rem)` }}>
                        {/* Mapeamento dos produtos da categoria "acessorios" */}
                        {produtosAcessorios.map((produto, index) => (
                            <ContainerImagemDados key={produto.id_produto || index} onClick={() => handleLinkDetail(produto.nome_produto)}>
                                <ImagemCarousel src={getImageUrl(produto.img_produto)} alt={produto.nome_produto} />
                                <TituloImagemDados>{produto.nome_produto}</TituloImagemDados>
                                <TxtGerais>{formatCurrencyBr(produto.preco_produto)}</TxtGerais>
                                <TxtGerais>{formatParcelas(produto.parcela_produto)}</TxtGerais>

                                {/* Condicional para não exibir os botões para produtos de fallback */}
                                {!isFallbackProduct(produto) && (
                                    <ContainerButtonsFunctions>
                                        <ButtonAdicionarCarrinho
                                            title={listaAmeiStatus[produto.id_produto] ? 'Remover da lista "Amei"' : 'Adicionar à lista "Amei"'}
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
                                )}

                                {produto ? (
                                    isFallbackProduct(produto) ? (
                                        <BotaoImagemDados style={{ background: '#FFF', color: '#A87826' }}>
                                            Produto indisponível
                                        </BotaoImagemDados>
                                    ) : produto.qtd_produto === 0 ? (
                                        <BotaoImagemDados style={{ background: '#FFF', color: '#A87826' }}>
                                            Avise quando chegar
                                        </BotaoImagemDados>
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
                                    )
                                ) : (
                                    <BotaoImagemDados>
                                        Produto indisponível
                                    </BotaoImagemDados>
                                )}
                            </ContainerImagemDados>
                        ))}
                    </CarouselSlide>
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
                </CarouselHidden>
                {/* Seta estilizada para avançar para a próxima imagem */}
                <NextCarousel onClick={nextSlideAcessorios}>&#10095;</NextCarousel>
            </Carousel>
        </ContainerCarousel>
    );
}

export default CarouselAcessorios;
