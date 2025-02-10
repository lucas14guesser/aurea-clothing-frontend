import React from 'react'
import { Container, Titulo, TxtGerais } from '../styles/GlobalStyles'

function PageNotFound404() {
  return (
    <Container>
        <Titulo style={{marginBottom: '4rem'}}>Erro 404 - Página não encontrada</Titulo>
        <TxtGerais>A página que você solicitou não foi encontrada ou não existe. Por favor, procure por outra página ou tente novamente mais tarde</TxtGerais>
    </Container>
  )
}

export default PageNotFound404