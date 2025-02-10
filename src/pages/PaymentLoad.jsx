import React from 'react'
import { Container, LinkScrollToTop, Titulo, TxtGerais } from '../styles/GlobalStyles'

function PaymentLoad() {
  return (
    <Container>
      <Titulo style={{ marginBottom: '2rem' }}>Pagamento pendente</Titulo>
      <TxtGerais>
        Estamos processando o seu pagamento. Esse processo pode levar alguns minutos.
        Verifique se você recebeu uma notificação de confirmação do seu banco ou método de pagamento.
      </TxtGerais>
      <LinkScrollToTop to='/meu-carrinho'>Voltar para o carrinho</LinkScrollToTop>
    </Container>
  )
}

export default PaymentLoad