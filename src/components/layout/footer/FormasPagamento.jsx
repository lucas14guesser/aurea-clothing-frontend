import React from 'react'
// Importando os componentes estilizados para o Footer
import { ImagemFormasPagamento, ItemListaFormasPagamento, ListaFormasPagamento, SubContainer } from '../../../styles/FooterStyles'
// Importando o componente Titulo para exibir o título da seção
import { Titulo } from '../../../styles/GlobalStyles'

function FormasPagamento() {
    return (
        // SubContainer é o contêiner principal da seção de formas de pagamento
        <SubContainer>
            {/* Titulo é um componente estilizado que exibe o título da seção */}
            <Titulo>
                Formas de pagamento
            </Titulo>

            {/* ListaFormasPagamento é o contêiner que vai agrupar os itens de pagamento */}
            <ListaFormasPagamento>
                {/* ItemListaFormasPagamento é o contêiner de cada linha de pagamento */}
                <ItemListaFormasPagamento>
                    {/* ImagemFormasPagamento exibe os logos das formas de pagamento */}
                    <ImagemFormasPagamento src="\assets/logo-mastercard.png" alt="Logo mastercard" title='Mastercard' />
                    <ImagemFormasPagamento src='\assets\logo-visa.png' alt='Logo Visa' title='Visa' />
                    <ImagemFormasPagamento src='\assets\logo-hipercard.png' alt='Logo Hipercard' title='Hipercard' />
                    <ImagemFormasPagamento src='\assets\logo-elo.png' alt='Logo Elo' title='Elo' />
                    <ImagemFormasPagamento src='\assets\logo-american-express.png' alt='Logo American Express' title='American Express' />
                    <ImagemFormasPagamento src='\assets\logo-pix.png' alt='Logo Pix' title='Pix' />
                </ItemListaFormasPagamento>
            </ListaFormasPagamento>
        </SubContainer>
    )
}

export default FormasPagamento
