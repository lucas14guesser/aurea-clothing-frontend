import React from 'react'
// Importação dos estilos personalizados para o componente
import { Container, Titulo } from '../styles/GlobalStyles'
import {
    ContainerInformacoesPoliticaPrivacidade,
    ItemListaPoliticaPrivacidade,
    LinkMailTo,
    ListaNaoOrdenadaPoliticaPrivacidade,
    TxtPoliticaPrivacidade
} from '../styles/PoliticaPrivacidadeStyles'

// Componente funcional que renderiza a Política de Privacidade
function PoliticaPrivacidade() {
    return (
        // Container principal para alinhar o conteúdo centralizado na página
        <Container>
            {/* Título da página */}
            <Titulo>Política de Privacidade</Titulo>

            {/* Container que agrupa todas as informações da política de privacidade */}
            <ContainerInformacoesPoliticaPrivacidade>

                {/* Texto introdutório sobre a política de privacidade da empresa */}
                <TxtPoliticaPrivacidade>
                    Na Áurea Clothing, sua privacidade e segurança são prioridades.
                    Este documento detalha como coletamos, usamos, compartilhamos e
                    protegemos suas informações pessoais. Ao acessar e utilizar nosso site,
                    você concorda com os termos desta Política de Privacidade.
                </TxtPoliticaPrivacidade>

                {/* Lista não ordenada para os diferentes tópicos da política */}
                <ListaNaoOrdenadaPoliticaPrivacidade>

                    {/* Seção 1: Coleta de Informações */}
                    <ItemListaPoliticaPrivacidade>1. Coleta de Informações</ItemListaPoliticaPrivacidade>
                    <TxtPoliticaPrivacidade>
                        Coletamos informações pessoais fornecidas diretamente por você durante
                        o processo de compra, cadastro, ou quando interage conosco. Essas
                        informações podem incluir:
                    </TxtPoliticaPrivacidade>

                    {/* Sub-lista de informações coletadas */}
                    <ListaNaoOrdenadaPoliticaPrivacidade>
                        <li>Nome</li>
                        <li>Endereço de e-mail</li>
                        <li>Endereço de entrega e cobrança</li>
                        <li>Número de telefone</li>
                        <li>Informações de pagamento (cartão de crédito, débito, etc.)</li>
                        <li>Detalhes do pedido e histórico de compras</li>
                    </ListaNaoOrdenadaPoliticaPrivacidade>

                    {/* Seção 2: Uso das Informações */}
                    <ItemListaPoliticaPrivacidade>2. Uso das Informações</ItemListaPoliticaPrivacidade>
                    <TxtPoliticaPrivacidade>
                        As informações coletadas são utilizadas para:
                    </TxtPoliticaPrivacidade>

                    {/* Sub-lista de usos das informações */}
                    <ListaNaoOrdenadaPoliticaPrivacidade>
                        <li>Processar suas compras e gerenciar seus pedidos</li>
                        <li>Garantir uma experiência personalizada de navegação e compra</li>
                        <li>Enviar atualizações sobre seus pedidos e ofertas promocionais, caso tenha optado por recebê-las</li>
                        <li>Melhorar nosso site, produtos e serviços</li>
                        <li>Proteger a segurança e integridade do site</li>
                    </ListaNaoOrdenadaPoliticaPrivacidade>

                    {/* Seção 3: Compartilhamento de Informações */}
                    <ItemListaPoliticaPrivacidade>3. Compartilhamento de Informações</ItemListaPoliticaPrivacidade>
                    <TxtPoliticaPrivacidade>
                        Não vendemos ou compartilhamos suas informações pessoais com terceiros,
                        exceto em situações necessárias, como:
                    </TxtPoliticaPrivacidade>

                    {/* Sub-lista de situações onde o compartilhamento é necessário */}
                    <ListaNaoOrdenadaPoliticaPrivacidade>
                        <li>Processamento de pagamentos</li>
                        <li>Envio de produtos</li>
                        <li>Cumprimento de obrigações legais</li>
                        <li>Proteção dos direitos da Áurea Clothing em disputas legais</li>
                    </ListaNaoOrdenadaPoliticaPrivacidade>

                    {/* Seção 4: Segurança das Informações */}
                    <ItemListaPoliticaPrivacidade>4. Segurança das Informações</ItemListaPoliticaPrivacidade>
                    <TxtPoliticaPrivacidade>
                        Adotamos medidas técnicas e organizacionais apropriadas para proteger
                        suas informações contra acessos não autorizados, perda, destruição ou alteração.
                    </TxtPoliticaPrivacidade>

                    {/* Seção 5: Cookies */}
                    <ItemListaPoliticaPrivacidade>5. Cookies</ItemListaPoliticaPrivacidade>
                    <TxtPoliticaPrivacidade>
                        Utilizamos cookies para melhorar sua experiência no nosso site.
                        Eles nos ajudam a personalizar o conteúdo, armazenar suas preferências
                        e analisar o comportamento do usuário.
                    </TxtPoliticaPrivacidade>

                    {/* Seção 6: Direitos do Usuário */}
                    <ItemListaPoliticaPrivacidade>6. Direitos do Usuário</ItemListaPoliticaPrivacidade>
                    <TxtPoliticaPrivacidade>
                        Você tem o direito de acessar, corrigir ou excluir suas informações
                        pessoais a qualquer momento. Para isso, basta entrar em contato conosco
                        através de nossos canais de atendimento.
                    </TxtPoliticaPrivacidade>

                    {/* Seção 7: Alterações na Política de Privacidade */}
                    <ItemListaPoliticaPrivacidade>7. Alterações na Política de Privacidade</ItemListaPoliticaPrivacidade>
                    <TxtPoliticaPrivacidade>
                        Podemos atualizar esta Política de Privacidade periodicamente para refletir
                        mudanças em nossas práticas ou conforme exigido pela lei. Todas as alterações
                        serão publicadas nesta página.
                    </TxtPoliticaPrivacidade>

                    {/* Seção 8: Contato */}
                    <ItemListaPoliticaPrivacidade>8. Contato</ItemListaPoliticaPrivacidade>
                    <TxtPoliticaPrivacidade>
                        Em caso de dúvidas ou preocupações sobre nossa Política de Privacidade,
                        entre em contato conosco pelo e-mail:
                        <LinkMailTo to="mailto:aureaclothingstore@gmail.com">aureaclothingstore@gmail.com</LinkMailTo>.
                    </TxtPoliticaPrivacidade>
                </ListaNaoOrdenadaPoliticaPrivacidade>
            </ContainerInformacoesPoliticaPrivacidade>
        </Container>
    )
}

// Exporta o componente para ser usado em outras partes da aplicação
export default PoliticaPrivacidade
