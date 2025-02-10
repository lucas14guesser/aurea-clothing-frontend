import React from 'react'
import { Container, LinkScrollToTop, Titulo, TxtGerais } from '../styles/GlobalStyles'

function PaymentSuccess() {
  return (
    <Container>
      <Titulo style={{ marginBottom: '2rem' }}>Pagamento aprovado</Titulo>
      <TxtGerais>
        Seu pagamento foi aprovado com sucesso. Estamos processando seu pedido e você receberá uma confirmação por e-mail em breve.
      </TxtGerais>
      <TxtGerais>
        Caso tenha dúvidas, você pode acompanhar o status do seu pedido na sua conta.
      </TxtGerais>
      <LinkScrollToTop to='/meus-pedidos'>Acompanhar pedido</LinkScrollToTop>
    </Container>
  )
}

export default PaymentSuccess