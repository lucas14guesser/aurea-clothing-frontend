import React, { useContext, useEffect, useState } from 'react'; // Importa React e useState para gerenciar estados locais
import {
    AplicarCupom,
    ButtonAlterarEndereco,
    ButtonAplicarCupom,
    ButtonCarrinho,
    ButtonCupom,
    ContainerAplicarCupom,
    ContainerButton,
    ContainerCarrinho,
    ContainerCategoriaCarrinho,
    ContainerFreteEnderecos,
    ContainerFreteLabelInput,
    ContainerImgProduto,
    ContainerPagamento,
    ContainerSubTotal,
    CustomRadioButton,
    EntregaPagamento,
    FlexGapDiv,
    ImageProdutoCarrinho,
    InformacoesProduto,
    InptQtd,
    InputAlterarEndereco,
    InputCupom,
    LabelRadio,
    LinkContinuarComprando,
    PMb,
    RadioInput,
    TotalPagamento
} from '../styles/Carrinho'; // Importa os componentes de estilo
import { UserContext } from '../router/userContext';

import { StyledError, StyledSuccess, Subtitulo, Titulo, TxtGerais } from '../styles/GlobalStyles'; // Importa o componente Titulo de outro arquivo de estilo
import { FaArrowLeftLong, FaTrash } from "react-icons/fa6"; // Importa ícones para usar no carrinho
import { IoReload } from "react-icons/io5"; // Importa ícone de atualização
import axios from 'axios';
import { formatCurrencyBr } from '../services/Functions';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

initMercadoPago('APP_USR-35c3d4e6-b94e-42ea-9980-9723edf5be67');

function Carrinho() {
    const { user } = useContext(UserContext);
    const [produtosCarrinho, setProdutosCarrinho] = useState([]);
    const [freteAtivo, setFreteAtivo] = useState(false); // Estado para controlar o frete

    const [produtoEstoque, setProdutoEstoque] = useState([]);

    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numEndereco, setNumEndereco] = useState('');
    const [enderecosExtras, setEnderecosExtras] = useState({
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
        numeroComplemento: '' // Este campo será preenchido pelo usuário
    });
    const [frete, setFrete] = useState('');
    const [freteSedex, setFreteSedex] = useState('');
    const [freteJadlog, setFreteJadlog] = useState('');

    const [nomeCupom, setNomeCupom] = useState('');
    const [cupom, setCupom] = useState([]);
    const [valorComDesconto, setValorComDesconto] = useState('');
    const [sucessCupom, setSucessCupom] = useState(null); // Para mensagens de sucesso
    const [errorCupom, setErrorCupom] = useState(null); // Para mensagens de erro

    const [totalAtualizado, setTotalAtualizado] = useState(false); // Para controlar se o valor foi atualizado
    const [preferenceId, setPreferenceId] = useState(null);

    // Busca os produtos do carrinho ao montar o componente
    useEffect(() => {
        const fetchCarrinho = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/aurea/carrinho/${user.id_user}`);
                if (response.status === 200) {
                    setProdutosCarrinho(response.data);
                } else {
                }
            } catch (error) {
            }
        };

        fetchCarrinho();
    }, [user.id_user]);

    // Calcula o subtotal com base nos produtos do carrinho
    const calcularSubtotal = () => {
        return produtosCarrinho.reduce((acc, item) => {
            if (!item.produto) return acc; // Ignora itens sem produto

            const preco =
                item.produto.categoria_produto === 'promocoes' && item.produto.preco_promocional_produto
                    ? item.produto.preco_promocional_produto
                    : item.produto.preco_produto;

            return acc + preco * item.qtd_produto_carrinho;
        }, 0);
    };

    useEffect(() => {
        const fetchCarrinhoComProdutos = async () => {
            try {
                if (user && user.id_user) {
                    // Requisição para buscar o carrinho do usuário
                    const respCarrinho = await axios.get(`http://localhost:3001/aurea/carrinho/${user.id_user}`);
                    const carrinho = respCarrinho.data;

                    if (Array.isArray(carrinho)) {
                        // Para cada item no carrinho, busca os detalhes do produto relacionado
                        const carrinhoComProdutos = await Promise.all(
                            carrinho.map(async (item) => {
                                try {
                                    const respProduto = await axios.get(`http://localhost:3001/aurea/produto/${item.id_produto}`);
                                    return { ...item, produto: respProduto.data.result }; // Adiciona os dados do produto ao item do carrinho
                                } catch (error) {
                                    return { ...item, produto: null }; // Caso o produto não seja encontrado
                                }
                            })
                        );

                        setProdutosCarrinho(carrinhoComProdutos); // Atualiza o estado do carrinho com produtos detalhados
                    }
                }
            } catch (error) {
            }
        };

        fetchCarrinhoComProdutos();
    }, [user.id_user]);

    useEffect(() => {
        const fetchDadosCupomNome = async () => {
            if (nomeCupom.trim()) { // Verifica se o campo nomeCupom não está vazio
                try {
                    const resp = await axios.get(`http://localhost:3001/aurea/listar-cupom/${nomeCupom}`);
                    if (resp.data.result) {
                        setCupom(resp.data.result); // Atualiza o estado com o cupom encontrado
                    } else {
                        setCupom([]); // Se não encontrar, reseta o estado de cupons
                    }
                } catch (error) {
                    setCupom([]); // Se houver erro, reseta o estado de cupons
                }
            } else {
                setCupom([]); // Se o campo estiver vazio, reseta os cupons
            }
        };

        fetchDadosCupomNome(); // Chama a função para buscar o cupom
    }, [nomeCupom]); // Só chama quando nomeCupom mudar

    const handleRemoveFromCarrinho = async (produtoId) => {
        try {
            // Faz a requisição para o backend para remover o produto do carrinho
            const response = await axios.delete(`http://localhost:3001/aurea/carrinho/${user.id_user}/${produtoId}`);

            if (response.status === 200) {
                // Atualiza o estado após remoção no backend
                const novoCarrinho = produtosCarrinho.filter((produto) => produto.id_produto !== produtoId);
                setProdutosCarrinho(novoCarrinho);

                // Atualiza o localStorage
                const listaAtual = JSON.parse(localStorage.getItem(`carrinho${user.id_user}`)) || [];
                const novoCarrinhos = listaAtual.filter(produto => produto.id_produto !== produtoId);
                localStorage.setItem(`carrinho${user.id_user}`, JSON.stringify(novoCarrinhos));

            } else {
                alert('Erro ao remover produto do carrinho.');
            }
        } catch (error) {
            alert('Erro ao remover o produto do carrinho.');
        }
    };

    const handleAtualizarCarrinho = async () => {
        if (!user || !user.id_user) {
            alert("Usuário não está logado ou ID inválido.");
            return;
        }

        try {
            // Faz a requisição para buscar os dados atualizados do carrinho
            const response = await axios.get(`http://localhost:3001/aurea/carrinho/${user.id_user}`);

            if (response.status === 200) {
                const carrinho = response.data;

                // Verifica se o carrinho contém produtos
                if (Array.isArray(carrinho)) {
                    // Para cada item no carrinho, busca os detalhes do produto relacionado
                    const carrinhoComProdutos = await Promise.all(
                        carrinho.map(async (item) => {
                            try {
                                const respProduto = await axios.get(`http://localhost:3001/aurea/produto/${item.id_produto}`);
                                return { ...item, produto: respProduto.data.result }; // Adiciona os dados do produto ao item do carrinho
                            } catch (error) {
                                return { ...item, produto: null }; // Caso o produto não seja encontrado
                            }
                        })
                    );

                    setProdutosCarrinho(carrinhoComProdutos); // Atualiza o estado do carrinho com produtos detalhados
                    alert("Carrinho atualizado com sucesso!");
                }
            } else {
                alert("Erro ao atualizar o carrinho.");
            }
        } catch (error) {

            // Mensagem detalhada para o usuário
            if (error.response) {
                // Se a resposta contém erro, mostramos o erro específico
                alert(`Erro ao atualizar o carrinho: ${error.response.data.error || 'Erro desconhecido'}`);
            } else if (error.request) {
                // Se não houver resposta do servidor
                alert('Erro ao conectar-se ao servidor. Tente novamente.');
            } else {
                // Caso algo tenha dado errado na configuração da requisição
                alert('Erro inesperado ao atualizar o carrinho.');
            }
        }
    };

    // Estados locais para gerenciar a visibilidade dos formulários de cupom e endereço
    const [openCart, setOpenCart] = useState(false); // Gerencia se o formulário de cupom está aberto
    const [openEndereco, setOpenEndereco] = useState(false); // Gerencia se o formulário de endereço está aberto

    // Função que alterna a visibilidade do formulário de cupom
    const handleToggleCart = () => {
        setOpenCart(!openCart); // Alterna o estado de openCart
    };

    // Função para obter o endereço completo a partir do CEP, chamada no backend
    const obterEnderecoPorCep = async (cep) => {
        try {
            // Faz uma requisição GET para o backend para obter o endereço baseado no CEP fornecido
            const response = await axios.get(`http://localhost:3001/aurea/obter-endereco/${cep}`);

            // Retorna o endereço completo obtido da resposta
            return response.data;
        } catch (error) {
            // Em caso de erro, exibe no console e lança um erro com uma mensagem personalizada
            throw new Error('Erro ao obter endereço.');
        }
    };

    const calcularFrete = async (cep) => {
        try {
            // Verifique se o CEP está válido antes de prosseguir
            if (!cep || cep.length !== 8) {
                setFrete("CEP inválido.");
                return;
            }

            // Primeiro, obter o endereço completo a partir do CEP
            const enderecoCompleto = await obterEnderecoPorCep(cep);

            // Simula o cálculo do frete e define os inputs a serem renderizados
            // Atualiza os dados do endereço
            const novosEnderecos = {
                rua: enderecoCompleto.logradouro,
                bairro: enderecoCompleto.bairro,
                cidade: enderecoCompleto.localidade,
                estado: enderecoCompleto.uf,
                numeroComplemento: '' // Este campo será preenchido pelo usuário
            };

            setEnderecosExtras(novosEnderecos);

            // Verifique se o endereço foi encontrado
            if (!enderecoCompleto || !enderecoCompleto.logradouro) {
                setFrete("Endereço não encontrado.");
                return;
            }

            // Verificar se o endereço está dentro da Grande Florianópolis
            const cidadesGrandesFlorianopolis = [
                'Florianópolis', 'São José', 'Palhoça', 'Biguaçu', 'Governador Celso Ramos', 'Santo Amaro da Imperatriz', 'Águas Mornas', 'Anitápolis', 'Rancho Queimado', 'Tijucas'
            ];

            const cidade = enderecoCompleto.localidade; // Cidade do endereço obtido

            // Se a cidade for uma das da Grande Florianópolis, aplicar o frete fixo
            if (cidadesGrandesFlorianopolis.includes(cidade)) {
                setEndereco(`Destino: ${enderecoCompleto.logradouro}, ${enderecoCompleto.bairro}, ${enderecoCompleto.localidade} - ${enderecoCompleto.uf}`);
                setFrete("DISK Tenha - R$ 14,00, prazo: 3 dias úteis.");
                setFreteAtivo(true);  // Define o frete fixo como ativo
            } else {
                setFrete("");  // Limpar qualquer valor de frete anterior
                // Caso contrário, realiza o cálculo de frete via API do Melhor Envio
                const dadosFrete = {
                    from: { postal_code: "88131300" }, // CEP de origem fixo
                    to: { postal_code: cep }, // CEP de destino do input
                    products: [
                        {
                            weight: 1,
                            width: 15,
                            height: 10,
                            length: 20,
                            insurance_value: 100,
                            quantity: 1
                        }
                    ],
                    services: [] // SEDEX já configurado no backend
                };

                // Enviando a requisição para o backend
                const resp = await axios.post("http://localhost:3001/aurea/calcular-frete", dadosFrete);

                // Verifique se há resultados e acesse o primeiro item
                if (resp.data && resp.data.length > 0) {
                    const resultados = resp.data;

                    // Acessar a opção 2 (index 1) para SEDEX
                    const resposta = resultados[1]; // Para acessar a segunda opção de frete (SEDEX)
                    const respJadlog = resultados[3];

                    // Verifique se price e delivery_time estão presentes
                    if (resposta.price && resposta.delivery_time) {
                        const enderecoCompletoFormatado = `${enderecoCompleto.logradouro}, ${enderecoCompleto.bairro}, ${enderecoCompleto.localidade} - ${enderecoCompleto.uf}`;

                        // Exibindo os dados no frontend
                        setEndereco(`Destino: ${enderecoCompletoFormatado}`);
                        setFreteSedex(`R$ ${resposta.price}, prazo: ${resposta.delivery_time} dias úteis.`);
                        setFreteAtivo(true);  // Define o frete calculado como ativo
                    } else {
                        setFrete("Erro ao calcular o valor ou o prazo do frete.");
                    }

                    if (respJadlog.price && respJadlog.delivery_time) {
                        const enderecoCompletoFormatado = `${enderecoCompleto.logradouro}, ${enderecoCompleto.bairro}, ${enderecoCompleto.localidade} - ${enderecoCompleto.uf}`;

                        // Exibindo os dados no frontend
                        setEndereco(`Destino: ${enderecoCompletoFormatado}`);
                        setFreteJadlog(`R$ ${respJadlog.price}, prazo: ${respJadlog.delivery_time} dias úteis.`);
                        setFreteAtivo(true);  // Define o frete calculado como ativo
                    } else {
                        setFrete("Erro ao calcular o valor ou o prazo do frete.");
                    }
                } else {
                    setFrete("Nenhuma opção de frete encontrada.");
                }
            }

            // Atualiza o valor total do carrinho com o novo frete
            handleUpdateValorTotal(); // Atualiza o valor total após o cálculo do frete
        } catch (error) {
            setFrete("Erro ao calcular frete.");
        }
    };

    // Função para calcular o frete selecionado
    const calcularFreteSelecionado = () => {
        let valorFrete = 0;
        if (frete === "sedex" && freteSedex) {
            const match = freteSedex.match(/R\$ (\d+(\.\d+)?)/); // Regex para extrair o valor numérico
            if (match) {
                valorFrete = parseFloat(match[1]); // Extrai o valor numérico
            }
        } else if (frete === "jadlog" && freteJadlog) {
            const match = freteJadlog.match(/R\$ (\d+(\.\d+)?)/); // Regex para extrair o valor numérico
            if (match) {
                valorFrete = parseFloat(match[1]); // Extrai o valor numérico
            }
        }
        return valorFrete;
    };

    const calcularDescontoCupom = () => {
        let desconto = 0;

        if (nomeCupom) {
            const match = cupom.find((cupom) => cupom.nome_cupom === nomeCupom);
            if (match) {
                desconto = match.desconto_cupom; // Porcentagem do desconto
                setSucessCupom(`Cupom aplicado: ${desconto}% de desconto.`);
                setErrorCupom(null); // Resetando o erro
                setValorComDesconto(desconto); // Atualiza o estado do desconto
            } else {
                setSucessCupom(null); // Resetando a mensagem de sucesso
                setErrorCupom('Cupom inválido.');
                setValorComDesconto(0); // Resetando o desconto se não encontrar
            }
        }

        return desconto;
    };

    // Calcula o total considerando o frete, se ativo
    const calcularTotal = () => {
        const subtotal = calcularSubtotal(); // Cálculo do subtotal dos produtos

        // Verifica se o frete é fixo ou calculado
        let valorFrete = 0;
        if (freteAtivo) {
            if (frete === "DISK Tenha - R$ 14,00, prazo: 3 dias úteis.") {
                valorFrete = 14; // Frete fixo de R$ 14,00
            } else {
                valorFrete = calcularFreteSelecionado(); // Cálculo do frete baseado na escolha do usuário
            }
        }

        // Calcula o valor total com frete antes do desconto
        let valorTotalComFrete = subtotal + valorFrete;

        // Calcula o valor do desconto sobre o valor total (subtotal + frete)
        let descontoValor = 0;
        if (valorComDesconto > 0) {
            descontoValor = valorTotalComFrete * (valorComDesconto / 100); // Aplica o desconto sobre o valor total (subtotal + frete)
        }

        // Calcula o valor final após o desconto
        let total = valorTotalComFrete - descontoValor;

        return total;
    };

    const handleChangeEnderecos = (e) => {
        const { name, value } = e.target;
        setEnderecosExtras(prevState => ({
            ...prevState,
            [name]: value // Atualiza o campo específico com o valor inserido
        }));
    };

    // Função para atualizar o valor total
    const handleUpdateValorTotal = async () => {
        try {
            const idUser = user.id_user;
            const valorSubtotal = calcularSubtotal(); // Reutiliza a lógica do subtotal

            let valorFrete = 0;
            // Verifica se o frete está ativo e é fixo ou calculado
            if (freteAtivo) {
                if (frete === "DISK Tenha - R$ 14,00, prazo: 3 dias úteis.") {
                    valorFrete = 14; // Frete fixo de R$ 14,00
                } else {
                    valorFrete = calcularFreteSelecionado(); // Cálculo do frete baseado na escolha do usuário
                }
            }

            // Obtém o valor do desconto a partir da função que calcula o cupom
            const descontoPercentual = calcularDescontoCupom();

            // Calcula o valor total com frete antes do desconto
            let valorTotalComFrete = valorSubtotal + valorFrete;

            // Calcula o valor do desconto sobre o valor total (subtotal + frete)
            let descontoValor = 0;
            if (descontoPercentual > 0) {
                descontoValor = valorTotalComFrete * (descontoPercentual / 100); // Aplica o desconto sobre o valor total
            }

            // Calcula o valor final após o desconto
            const valorTotal = valorTotalComFrete - descontoValor;

            // Verifica se o valor total é zero, indicando que o carrinho está vazio
            if (valorTotal === 0) {
                return; // Não faz a requisição se o carrinho estiver vazio
            }

            // Envia o valor total, frete e desconto para o backend
            const response = await axios.put(
                `http://localhost:3001/aurea/carrinho/valor-total/${idUser}`,
                { frete: valorFrete, desconto: descontoValor } // Envia o valor do desconto calculado
            );

            if (response.status === 200) {
                setTotalAtualizado(true); // Atualiza o estado para refletir que o valor foi atualizado
            } else {
            }
        } catch (error) {
        }
    };

    // useEffect para atualizar o total quando as dependências mudarem
    useEffect(() => {
        handleUpdateValorTotal(); // Atualiza o valor total quando o frete ou os produtos mudarem
    }, [frete, produtosCarrinho]);

    const handleUpdateQuantidade = async (idCarrinho, novaQuantidade) => {
        try {
            // Verificar se a quantidade é válida
            if (isNaN(novaQuantidade) || novaQuantidade <= 0) {
                alert("Quantidade inválida.");
                return;
            }

            // Atualiza a quantidade no backend
            const response = await axios.put(`http://localhost:3001/aurea/carrinho/put/${idCarrinho}`, {
                qtd_produto_carrinho: novaQuantidade,
            });

            if (response.status === 200) {
                // Atualiza o estado local apenas após a confirmação do backend
                setProdutosCarrinho((prevCarrinho) =>
                    prevCarrinho.map((produto) =>
                        produto.id_carrinho === idCarrinho
                            ? { ...produto, qtd_produto_carrinho: novaQuantidade }
                            : produto
                    )
                );

                // Atualiza o subtotal no backend após a confirmação
                await handleUpdateValorTotal();
            }
        } catch (error) {
            console.error("Erro ao atualizar quantidade:", error);
        }
    };

    const criarPreferencia = async () => {
        if (!enderecosExtras.numeroComplemento) {
            alert("É obrigatório preencher o número do complemento.");
        } else {
            try {
                // Calcula o total do carrinho
                const total = calcularTotal();

                // Busca os produtos do carrinho no backend
                const responseCarrinho = await axios.get(
                    `http://localhost:3001/aurea/carrinho/${user.id_user}`
                );
                if (responseCarrinho.status !== 200) {
                    throw new Error("Erro ao buscar o carrinho.");
                }

                const produtosCarrinho = responseCarrinho.data;

                // Verifique se produtosCarrinho é um array válido
                if (!Array.isArray(produtosCarrinho)) {
                    throw new Error("Carrinho não é um array válido.");
                }

                // Prepare os dados a serem enviados para o backend
                const { data } = await axios.post("http://localhost:3001/aurea/create_preference", {
                    items: [
                        {
                            id: "carrinho",
                            title: "Produtos Aurea Clothing",
                            quantity: 1,
                            unit_price: total, // Valor total calculado no front-end
                        },
                    ],
                    payer: {
                        email: user.email_user,
                    },
                    metadata: {
                        id_user: user.id_user,
                        produtosCarrinho: produtosCarrinho.map(produto => ({
                            id_produto: produto.id_produto || (produto.produto ? produto.produto.id_produto : null),
                            qtd_produto: produto.qtd_produto_carrinho || 0,
                        })),
                        endereco: `${enderecosExtras.rua}, ${enderecosExtras.bairro}, ${enderecosExtras.cidade}, ${enderecosExtras.estado}`,
                        num_endereco: enderecosExtras.numeroComplemento,
                        opcao_frete: frete,
                    },

                });

                // Obtenha o preferenceId do retorno
                const preferenceId = data.id;

                // Verifique se o SDK está carregado
                if (window.MercadoPago) {
                    const mp = new window.MercadoPago("APP_USR-35c3d4e6-b94e-42ea-9980-9723edf5be67");

                    // Abra o modal de pagamento com o preferenceId
                    mp.checkout({
                        preference: {
                            id: preferenceId,
                        },
                        autoOpen: true, // Abre automaticamente o modal
                    });

                    // Limpa o carrinho no frontend e no localStorage após a criação da preferência
                    setProdutosCarrinho([]); // Atualiza o estado do carrinho no frontend
                    localStorage.removeItem(`carrinho${user.id_user}`);
                }
            } catch (error) {
                alert("Ocorreu um erro ao tentar processar o pagamento. Tente novamente.");
            }
        }
    };

    return (
        <ContainerCarrinho> {/* Estilo aplicado diretamente no componente */}
            <Titulo> {/* Título da página */}
                Carrinho de compras
            </Titulo>
            <ContainerCategoriaCarrinho> {/* Container para a lista de produtos no carrinho */}
                {produtosCarrinho.length > 0 ? (
                    <FlexGapDiv>
                        <table>
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Preço</th>
                                    <th>Quantidade</th>
                                    <th>Funções</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtosCarrinho.map((item) => (
                                    <tr key={item.id_carrinho}>
                                        <td style={{ borderRight: '0' }}>
                                            {item.produto ? (
                                                <ContainerImgProduto>
                                                    <ImageProdutoCarrinho
                                                        src={`http://localhost:3001/uploads/${item.produto.img_produto}`}
                                                        alt={`Imagem do produto: ${item.produto.nome_produto}`}
                                                    />
                                                    <div>
                                                        <InformacoesProduto>{item.produto.nome_produto}</InformacoesProduto>
                                                        <InformacoesProduto>Cor: {item.produto.cor_produto}</InformacoesProduto>
                                                        <InformacoesProduto>Tamanho: {item.produto.tamanho_produto}</InformacoesProduto>
                                                    </div>
                                                </ContainerImgProduto>
                                            ) : (
                                                'Produto não encontrado'
                                            )}
                                        </td>
                                        {item.produto && item.produto.categoria_produto === 'promocoes' ? (
                                            <td>{item.produto.preco_promocional_produto ? formatCurrencyBr(item.produto.preco_promocional_produto) : 'N/A'}</td>
                                        ) : (
                                            <td>{item.produto && item.produto.preco_produto ? formatCurrencyBr(item.produto.preco_produto) : 'N/A'}</td>
                                        )}
                                        <td>
                                            <InptQtd
                                                type="number"
                                                value={item.qtd_produto_carrinho}
                                                onKeyDown={(e) => {
                                                    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
                                                        e.preventDefault();
                                                    }
                                                }}
                                                min={1}
                                                onChange={async (e) => {
                                                    const novaQuantidade = parseInt(e.target.value, 10);

                                                    // Verificar se a nova quantidade é válida
                                                    if (isNaN(novaQuantidade) || novaQuantidade <= 0) {
                                                        alert("Quantidade inválida");
                                                        return;
                                                    }

                                                    // Verificar se item.produto e item.produto.id_produto estão definidos
                                                    if (item.produto && item.produto.id_produto) {
                                                        // Faz a requisição para pegar a quantidade em estoque
                                                        try {
                                                            const response = await axios.get(`http://localhost:3001/aurea/produto/${item.produto.id_produto}`);
                                                            const produtoEstoque = response.data.result;

                                                            // Se a quantidade desejada for maior do que o estoque disponível
                                                            if (novaQuantidade > produtoEstoque.qtd_produto) {
                                                                handleUpdateQuantidade(item.id_carrinho, produtoEstoque.qtd_produto); // Atualiza com a quantidade máxima
                                                            } else {
                                                                handleUpdateQuantidade(item.id_carrinho, novaQuantidade); // Atualiza normalmente
                                                            }
                                                        } catch (error) {
                                                            console.error("Erro ao verificar estoque:", error);
                                                        }
                                                    } else {
                                                        console.error("Produto ou id_produto não encontrado.");
                                                    }
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <FaTrash onClick={() => handleRemoveFromCarrinho(item.id_produto)} style={{ cursor: 'pointer' }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </FlexGapDiv>
                ) : (
                    <p>Seu carrinho está vazio.</p> // Exibe mensagem caso o carrinho esteja vazio
                )}
            </ContainerCategoriaCarrinho>

            <TxtGerais>Subtotal: {formatCurrencyBr(calcularSubtotal())}</TxtGerais>

            <ContainerButton> {/* Container para os botões de controle do carrinho */}
                <LinkContinuarComprando to="/"> {/* Link para voltar e continuar comprando */}
                    <FaArrowLeftLong /> Continuar Comprando
                </LinkContinuarComprando>
                <ButtonCarrinho onClick={handleAtualizarCarrinho}> {/* Botão de atualizar o carrinho */}
                    <IoReload /> Atualizar Carrinho
                </ButtonCarrinho>
            </ContainerButton>

            <ContainerPagamento> {/* Container para a área de pagamento */}
                <ContainerAplicarCupom> {/* Container para a área de cupom */}
                    <TxtGerais>Tem um cupom?</TxtGerais>
                    <ButtonCupom onClick={handleToggleCart}> {/* Botão para abrir o formulário de cupom */}
                        Clique aqui para inserir seu código
                    </ButtonCupom>
                    {openCart && ( /* Exibe o campo para aplicar o cupom apenas se o estado de openCart for verdadeiro */
                        <div>
                            <PMb>Se você tiver um código de cupom, aplique-o abaixo.</PMb>
                            <AplicarCupom> {/* Formulário para aplicar o cupom */}
                                <InputCupom type="text" name='codigo-do-cupom' id='codigo-do-cupom' placeholder='Código do Cupom.' value={nomeCupom} onChange={(e) => setNomeCupom(e.target.value)} />
                                <ButtonAplicarCupom onClick={calcularDescontoCupom}>Aplicar cupom</ButtonAplicarCupom>
                            </AplicarCupom>
                            {sucessCupom ? (
                                <StyledSuccess style={{ textAlign: 'start' }}>{sucessCupom}</StyledSuccess>
                            ) : errorCupom ? (
                                <StyledError style={{ textAlign: 'start' }}>{errorCupom}</StyledError>
                            ) : (
                                <p></p>
                            )}
                        </div>
                    )}
                </ContainerAplicarCupom>

                <ContainerSubTotal> {/* Exibe o subtotal, endereço e taxas de pagamento */}
                    <EntregaPagamento>
                        <Subtitulo>Frete</Subtitulo>

                        <ContainerFreteLabelInput>
                            <ContainerFreteEnderecos>

                                <InputAlterarEndereco
                                    type="text"
                                    placeholder="CEP"
                                    value={cep}
                                    onChange={(e) => {
                                        setCep(e.target.value);
                                        setFrete('');  // Resetando o valor do frete
                                        setFreteAtivo(false);  // Resetando o estado do frete ativo
                                    }}
                                />
                                {/* Renderiza os inputs com os dados preenchidos */}
                                {enderecosExtras.rua && (
                                    <div>
                                        <InputAlterarEndereco
                                            type="text"
                                            name="rua"
                                            placeholder="Rua"
                                            value={enderecosExtras.rua}
                                            readOnly
                                        />
                                        <InputAlterarEndereco
                                            type="text"
                                            name="bairro"
                                            placeholder="Bairro"
                                            value={enderecosExtras.bairro}
                                            readOnly
                                        />
                                        <InputAlterarEndereco
                                            type="text"
                                            name="cidade"
                                            placeholder="Cidade"
                                            value={enderecosExtras.cidade}
                                            readOnly
                                        />
                                        <InputAlterarEndereco
                                            type="text"
                                            name="estado"
                                            placeholder="Estado"
                                            value={enderecosExtras.estado}
                                            readOnly
                                        />
                                        <InputAlterarEndereco
                                            type="text"
                                            name="numeroComplemento"
                                            placeholder="Número"
                                            value={enderecosExtras.numeroComplemento}
                                            onChange={handleChangeEnderecos}  // Permite a alteração desse campo
                                            required
                                        />
                                    </div>
                                )}
                            </ContainerFreteEnderecos>
                            <ButtonAlterarEndereco onClick={() => calcularFrete(cep)}>Calcular frete</ButtonAlterarEndereco>
                            <div>
                                {/* Verificar se ambos os fretes estão definidos antes de renderizar */}
                                {freteAtivo ? (
                                    frete.startsWith("DISK") ? (
                                        <div>
                                            <TxtGerais>{frete}</TxtGerais>

                                            <TotalPagamento>
                                                {/* Exibe o valor total atualizado com base no cálculo do frete */}
                                                <TxtGerais>
                                                    <strong style={{ fontWeight: "500" }}>Total: </strong>
                                                    {formatCurrencyBr(calcularTotal())} {/* Exibe o valor total com o frete adicionado */}
                                                </TxtGerais>
                                            </TotalPagamento>

                                            <ButtonAlterarEndereco onClick={criarPreferencia}>Ir para o pagamento</ButtonAlterarEndereco>
                                        </div>
                                    ) : (
                                        <div>
                                            <LabelRadio>
                                                <RadioInput
                                                    type="radio"
                                                    name="frete"
                                                    value="sedex"
                                                    checked={frete === "sedex"}
                                                    onChange={(e) => setFrete(e.target.value)}
                                                />
                                                <CustomRadioButton />
                                                <TxtGerais>Sedex - {freteSedex}</TxtGerais>
                                            </LabelRadio>
                                            <LabelRadio>
                                                <RadioInput
                                                    type="radio"
                                                    name="frete"
                                                    value="jadlog"
                                                    checked={frete === "jadlog"}
                                                    onChange={(e) => setFrete(e.target.value)}
                                                />
                                                <CustomRadioButton />
                                                <TxtGerais>Jadlog - {freteJadlog}</TxtGerais>
                                            </LabelRadio>
                                            {frete ? (
                                                <div>
                                                    <TotalPagamento>
                                                        {/* Exibe o valor total atualizado com base no cálculo do frete */}
                                                        <TxtGerais>
                                                            <strong style={{ fontWeight: "500" }}>Total: </strong>
                                                            {formatCurrencyBr(calcularTotal())} {/* Exibe o valor total com o frete adicionado */}
                                                        </TxtGerais>
                                                    </TotalPagamento>

                                                    <ButtonAlterarEndereco onClick={criarPreferencia}>Ir para o pagamento</ButtonAlterarEndereco>
                                                </div>
                                            ) : (
                                                <p></p>
                                            )}
                                        </div>
                                    )
                                ) : (
                                    <TxtGerais>Calcule o frete clicando no botão acima.</TxtGerais>
                                )}
                            </div>
                        </ContainerFreteLabelInput>
                    </EntregaPagamento>
                </ContainerSubTotal>
            </ContainerPagamento>
        </ContainerCarrinho>
    );
}

export default Carrinho; // Exporta o componente Carrinho