// Importa o React para criar o componente funcional
import React from 'react'

// Importa estilos específicos para a página de Trocas e Devoluções
import {
    ContainerInformacoesTrocaDevolucoes,
    ItemListaTrocasDevolucoes,
    LinkMailTo,
    ListaNaoOrdenadaTrocasDevolucoes,
    ListaOrdenadaTrocasDevolucoes,
    TxtTrocasDevolucoes
} from '../styles/TrocaDevolucoesStyles'

// Importa estilos globais reutilizáveis para Container, Título e Subtítulo
import { Container, Titulo } from '../styles/GlobalStyles'

// Função que define o componente TrocasDevolucoes
function TrocasDevolucoes() {
    return (
        // Contêiner principal da página
        <Container>
            {/* Título da página */}
            <Titulo>Trocas e Devoluções</Titulo>

            {/* Contêiner para informações detalhadas de troca e devolução */}
            <ContainerInformacoesTrocaDevolucoes>

                {/* Texto introdutório sobre política de trocas e devoluções */}
                <TxtTrocasDevolucoes>
                    Nossa prioridade é garantir sua satisfação com nossos produtos e serviços. Caso precise realizar a troca ou devolução de algum item adquirido em nossa loja, siga as diretrizes abaixo:
                </TxtTrocasDevolucoes>

                {/* Lista ordenada com os tópicos sobre trocas e devoluções */}
                <ListaOrdenadaTrocasDevolucoes>

                    {/* Item 1: Prazo para trocas e devoluções */}
                    <ItemListaTrocasDevolucoes>Prazo para trocas e Devoluções</ItemListaTrocasDevolucoes>
                    <TxtTrocasDevolucoes>
                        Você pode solicitar a troca ou devolução de qualquer produto em até 7 dias corridos após o recebimento do item, conforme previsto no Código de Defesa do Consumidor (CDC).
                    </TxtTrocasDevolucoes>

                    {/* Item 2: Condições para trocas e devoluções */}
                    <ItemListaTrocasDevolucoes>Condições para Trocas e Devoluções</ItemListaTrocasDevolucoes>
                        <TxtTrocasDevolucoes>Para que a troca ou devolução seja realizada, o produto deve:</TxtTrocasDevolucoes>
                        <ListaNaoOrdenadaTrocasDevolucoes>
                            <li>Estar em sua embalagem original;</li>
                            <li>Não apresentar sinais de uso;</li>
                            <li>Conter todas as etiquetas e acessórios que o acompanham;</li>
                            <li>Apresentar a nota fiscal de compra.</li>
                        </ListaNaoOrdenadaTrocasDevolucoes>

                    {/* Item 3: Procedimento de troca ou devolução */}
                    <ItemListaTrocasDevolucoes>Procedimento de Troca ou Devolução</ItemListaTrocasDevolucoes>
                    <TxtTrocasDevolucoes>
                        Caso queira realizar a troca ou devolução, entre em contato com nossa equipe de atendimento pelo e-mail <LinkMailTo to="mailto:aureaclothingstore@gmail.com">[aureaclothingstore@gmail.com]</LinkMailTo>, informando o número do pedido, motivo da solicitação e fotos do produto (se necessário).
                    </TxtTrocasDevolucoes>
                    <TxtTrocasDevolucoes>
                        Após a aprovação da solicitação, você deverá enviar o item via SEDEX para o endereço que será informado. A taxa de envio será ressarcida após o recebimento e análise do produto, garantindo que ele cumpre as condições mencionadas acima.
                    </TxtTrocasDevolucoes>

                    {/* Item 4: Restituição de valores */}
                    <ItemListaTrocasDevolucoes>Restituição de Valores</ItemListaTrocasDevolucoes>
                        <TxtTrocasDevolucoes>Para devoluções, a restituição será feita no mesmo método de pagamento utilizado na compra:</TxtTrocasDevolucoes>
                        <ListaNaoOrdenadaTrocasDevolucoes>
                            <li>Para pagamentos com cartão de crédito, o estorno será feito diretamente na fatura.</li>
                            <li>Para pagamentos via boleto ou Pix, o valor será devolvido em até 10 dias úteis após a confirmação da devolução.</li>
                        </ListaNaoOrdenadaTrocasDevolucoes>

                    {/* Item 5: Troca de produtos */}
                    <ItemListaTrocasDevolucoes>Troca de Produtos</ItemListaTrocasDevolucoes>
                    <TxtTrocasDevolucoes>
                        Se o produto recebido estiver com defeito de fabricação ou em desacordo com o pedido, a troca será realizada sem custo adicional, após análise do item devolvido. No caso de trocas por outros motivos, os custos de reenvio do novo item serão arcados pelo cliente, exceto quando o item enviado estiver com defeito ou erro de pedido.
                    </TxtTrocasDevolucoes>

                    {/* Item 6: Ressarcimento do custo de envio */}
                    <ItemListaTrocasDevolucoes>Ressarcimento do Custo de Envio</ItemListaTrocasDevolucoes>
                    <TxtTrocasDevolucoes>
                        O valor do envio via SEDEX para a troca ou devolução será reembolsado integralmente assim que o produto chegar ao nosso centro de distribuição e passar pela verificação. O reembolso será realizado via transferência bancária ou estorno no cartão, dependendo do método de pagamento original.
                    </TxtTrocasDevolucoes>
                    <TxtTrocasDevolucoes>
                        Caso tenha dúvidas ou precise de mais informações, estamos à disposição em nossos canais de atendimento.
                    </TxtTrocasDevolucoes>
                </ListaOrdenadaTrocasDevolucoes>
            </ContainerInformacoesTrocaDevolucoes>
        </Container>
    )
}

// Exporta o componente para uso em outras partes da aplicação
export default TrocasDevolucoes
