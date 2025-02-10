import React from 'react'
import { Container, LinkScrollToTop, Titulo, TxtGerais } from '../styles/GlobalStyles'

function PaymentFail() {
  return (
    <Container>
      <Titulo style={{marginBottom: '2rem'}}>Pagamento falhou</Titulo>
      <TxtGerais>
        Por favor, tente novamente. Verifique se as informações do pagamento estão corretas ou use outro método de pagamento.
      </TxtGerais>
      <TxtGerais>
        Se o problema persistir, entre em contato com seu banco.
      </TxtGerais>
      <LinkScrollToTop to='/meu-carrinho'>Voltar para o carrinho</LinkScrollToTop>
    </Container>
  )
}

export default PaymentFail