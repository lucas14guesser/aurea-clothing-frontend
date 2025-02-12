import React, { useState } from 'react';
import { Container, Titulo, TxtGerais } from '../styles/GlobalStyles';
import { DivDuvida, LinhaLista, LinkInformacao, TextareaFaleConosco, TextoOverflow } from '../styles/FaleConoscoStyles';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RiMailLine } from 'react-icons/ri'
import { ItemListaPoliticaPrivacidade, ListaNaoOrdenadaPoliticaPrivacidade, ListaOrdenadaPoliticaPrivacidade } from '../styles/PoliticaPrivacidadeStyles';
import { ButtonLoginCadastro, FlexRowLabelInputLoginCadastro, InputLoginCadastro, LabelLoginCadastro } from '../styles/ContaUserStyles';
import axios from 'axios';

function FaleConosco() {
    // Estado que mantém quais itens estão abertos (visíveis)
    const [openItems, setOpenItems] = useState({});

    // Estado inicial do email e da duvida preenchidas no fim da página.
    const [email, setEmail] = useState('');
    const [duvida, setDuvida] = useState('');

    // Estado de carregamento no envio de e-mail.
    const [sendLoading, setSendLoading] = useState(false);

    // Lista de dúvidas contendo a categoria, itens, pergunta e resposta. A chave tem a função de abrir e fechar determinado item.
    const duvidas = [
        {
            categoria: "Pedidos e Pagamentos",
            itens: [
                {
                    chave: "rastrear",
                    pergunta: "Como posso rastrear meu pedido?",
                    resposta: "As informações de rastreio estarão na aba - [Meus Pedidos] - [Ver detalhes do pedido] - [Rastrear pedido]"
                },
                {
                    chave: "pagamento",
                    pergunta: "Meu pagamento foi recusado, o que devo fazer?",
                    resposta: "Se seu pagamento foi recusado você deverá entrar em contato com seu banco para identificar o problema com seu método de pagamento"
                },
                {
                    chave: "finalizar",
                    pergunta: "Como posso cancelar ou alterar meu pedido após finalizá-lo?",
                    resposta: "Se o seu pagamento já foi aprovado, você deve mandar um e-mail para [aureaclothingstore@gmail.com] pedindo o cancelamento do produto. Caso o pagamento não tenha sido cancelado, você pode cancelar pelo site na aba - [Meus pedidos] - [Ver detalhes do pedido] - [Cancelar Pedido]"
                },
                {
                    chave: "metodos",
                    pergunta: "Quais métodos de pagamento vocês aceitam?",
                    resposta: "Pix, boleto bancário, cartão de crédito, cartão de débito"
                }
            ]
        },
        {
            categoria: "Tamanhos e Medidas",
            itens: [
                {
                    chave: "devolucao",
                    pergunta: "E se a roupa não servir, posso trocar?",
                    resposta: "Sim. Você tem um prazo de até 7 dias para pedir a troca."
                }
            ]
        },
        {
            categoria: "Trocas e Devoluções",
            itens: [
                {
                    chave: "devolver",
                    pergunta: "Como faço para devolver um produto?",
                    resposta: "Você tem um prazo de até 7 dias para a devolução do seu produto. Para devolver você deve ir até - [Meus pedidos] - [Ver detalhes do pedido] - [Solicitar Devolução]"
                },
                {
                    chave: "prazoDevolucao",
                    pergunta: "Qual o prazo para troca ou devolução?",
                    resposta: "O prazo é de até 7 dias após o recebimento do produto."
                },
                {
                    chave: "defeito",
                    pergunta: "O produto chegou com defeito, o que faço?",
                    resposta: "Solicite a troca do seu produto pelo site, vá até a aba - [Meus Pedidos] - [Ver detalhes do pedido] - [Solicitar Troca]"
                }
            ]
        },
        {
            categoria: "Entrega",
            itens: [
                {
                    chave: "entregaRegiao",
                    pergunta: "Vocês entregam para minha região?",
                    resposta: "Entregamos para todo o Brasil"
                }
            ]
        },
        {
            categoria: "Produtos",
            itens: [
                {
                    chave: "produtoEsgotado",
                    pergunta: "O produto está esgotado, ele será reposto?",
                    resposta: "Sim, o produto será reposto. Caso o produto esteja em falta você pode receber uma mensagem via e-mail quando ele for reposto, basta ir até o produto que deseja e clicar no botão [Avise-me]"
                },
                {
                    chave: "materialRoupa",
                    pergunta: "Onde posso encontrar informações sobre os materiais das roupas?",
                    resposta: "As informações de todos os produtos estão descritas na página de compra deste produto."
                }
            ]
        },
        {
            categoria: "Cupons e Promoções",
            itens: [
                {
                    chave: "cupomDesconto",
                    pergunta: "Como aplicar um cupom de desconto?",
                    resposta: "Em - [Meu carrinho] haverá uma opção para a aplicação de cupons de desconto."
                },
                {
                    chave: "promocoesAtivas",
                    pergunta: "Vocês têm promoções ativas?",
                    resposta: "Sim, sempre fazemos promoções ativas. Elas são avisadas através de banners na página principal do site."
                },
                {
                    chave: "fidelidade",
                    pergunta: "Existe um programa de fidelidade?",
                    resposta: "Existe um programa de cashback onde você recebe 3% do valor do produto de volta e poderá acumular e utilizá-lo nas suas próximas compras."
                }
            ]
        },
        {
            categoria: "Conta e Segurança",
            itens: [
                {
                    chave: "criarConta",
                    pergunta: "Como crio uma conta no site?",
                    resposta: "Existe um ícone de usuário na Barra de navegação do site, passando o mouse em cima deste ícone irá abrir algumas funções, uma delas é a - [Minha conta] que se você não estiver logado no site, poderá ser encaminhado para uma tela de Login e Cadastro."
                },
                {
                    chave: "recuperarSenha",
                    pergunta: "Esqueci minha senha, como recupero?",
                    resposta: "Na tela de Login é exibido um Link para recuperação de senha."
                },
                {
                    chave: "atualizarDados",
                    pergunta: "Como atualizo meus dados pessoais?",
                    resposta: "Na aba - [Minha conta] caso você esteja logado no site, aparecerá o painel do usuário com suas informações, lá você verá um botão clicável - [Editar] que ao clicar você poderá editar suas informações pessoais."
                }
            ]
        },
        {
            categoria: "Segurança de Dados",
            itens: [
                {
                    chave: "segurancaDados",
                    pergunta: "Como meus dados estão protegidos?",
                    resposta: "Seus dados são protegidos através de cookies."
                },
                {
                    chave: "politicaPrivacidade",
                    pergunta: "Vocês têm uma política de privacidade?",
                    resposta: "Temos, você pode acessá-la através de um link - [Politica de privacidade] localizado no rodapé do site."
                },
                {
                    chave: "usoCookies",
                    pergunta: "Como vocês usam cookies?",
                    resposta: "Utilizamos cookies para endereçar informações de acesso do usuário para manter a segurança e qualidade de navegação do mesmo."
                }
            ]
        }
    ];

    // Função de envio de e-mail para a API
    const handleSendHelp = async (e) => {
        // Previne o comportamento padrão do formulário (evitar recarregamento da página)
        e.preventDefault();

        // Define o estado de "loading" como verdadeiro, indicando que o processo de envio está em andamento
        setSendLoading(true);

        // Cria um objeto com os dados que serão enviados para a API (email do usuário e a dúvida)
        const dadosEnvio = {
            email_user: email,   // Email do usuário
            duvida_user: duvida, // Dúvida ou mensagem do usuário
        };

        try {
            // Faz a requisição POST para a API, enviando os dados com o axios
            const resp = await axios.post('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/duvida', dadosEnvio);

            // Verifica se a resposta da API foi bem-sucedida (código 200)
            if (resp.status === 200) {
                // Exibe uma mensagem de sucesso para o usuário
                alert('E-mail enviado com sucesso!');
                // Limpa os campos de email e dúvida após o envio bem-sucedido
                setEmail('');
                setDuvida('');
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

    // Função para alternar o estado de visibilidade de um item
    const handleToggleTxt = (item) => {
        setOpenItems((prevOpenItems) => ({
            ...prevOpenItems, // Mantém o estado atual dos outros itens
            [item]: !prevOpenItems[item] // Alterna o estado do item atual (abre ou fecha)
        }));
    };

    return (
        <Container>
            {/* Título principal da página */}
            <Titulo>Central de Dúvidas</Titulo>

            {/* Div para agrupar os itens de dúvida */}
            <DivDuvida>
                {/* Lista ordenada que exibe todas as categorias e seus itens */}
                <ListaOrdenadaPoliticaPrivacidade>
                    {/* Mapeia todas as categorias de dúvidas */}
                    {duvidas.map((categoria, index) => (
                        <React.Fragment key={index}>
                            {/* Exibe o título da categoria */}
                            <ItemListaPoliticaPrivacidade>{categoria.categoria}</ItemListaPoliticaPrivacidade>

                            {/* Lista não ordenada para os itens dentro da categoria */}
                            <ListaNaoOrdenadaPoliticaPrivacidade style={{ listStyle: 'none' }}>
                                {/* Mapeia todos os itens de cada categoria */}
                                {categoria.itens.map((item) => (
                                    <React.Fragment key={item.chave}>
                                        {/* Cada pergunta é representada por uma linha clicável */}
                                        <LinhaLista>
                                            {/* Quando clicado, alterna a visibilidade da resposta */}
                                            <LinkInformacao onClick={() => handleToggleTxt(item.chave)}>
                                                {openItems[item.chave] ? (
                                                    <TxtGerais>
                                                        {/* Ícone de seta para baixo (item aberto) e a pergunta */}
                                                        <IoIosArrowDown /> {item.pergunta}
                                                    </TxtGerais>
                                                ) : (
                                                    <TxtGerais>
                                                        {/* Ícone de seta para frente (item fechado) e a pergunta */}
                                                        <IoIosArrowForward /> {item.pergunta}
                                                    </TxtGerais>
                                                )}
                                            </LinkInformacao>
                                        </LinhaLista>

                                        {/* Exibe a resposta somente se o item estiver aberto */}
                                        {openItems[item.chave] && <TextoOverflow>{item.resposta}</TextoOverflow>}
                                    </React.Fragment>
                                ))}
                            </ListaNaoOrdenadaPoliticaPrivacidade>
                        </React.Fragment>
                    ))}
                </ListaOrdenadaPoliticaPrivacidade>
                <LabelLoginCadastro style={{color: '#000'}}>Caso se a sua dúvida não estiver nesta lista, por favor, descreva ela no campo à baixo e nos envie.</LabelLoginCadastro>
                <FlexRowLabelInputLoginCadastro>
                    <LabelLoginCadastro>
                        <RiMailLine />
                    </LabelLoginCadastro>
                    <InputLoginCadastro type="text" placeholder='Seu e-mail' required value={email} onChange={(e) => setEmail(e.target.value)} />
                </FlexRowLabelInputLoginCadastro>
                <FlexRowLabelInputLoginCadastro style={{ alignItems: 'flex-start' }}>
                    <LabelLoginCadastro>
                        <IoHelpCircleOutline />
                    </LabelLoginCadastro>
                    <TextareaFaleConosco type="text" placeholder='Descreva sua dúvida...' required value={duvida} onChange={(e) => setDuvida(e.target.value)} />
                </FlexRowLabelInputLoginCadastro>
                <ButtonLoginCadastro onClick={handleSendHelp} disabled={sendLoading} style={{width: '10rem'}}>{sendLoading ? 'Enviando...' : 'Enviar'}</ButtonLoginCadastro>
            </DivDuvida>
        </Container>
    );
}

export default FaleConosco
