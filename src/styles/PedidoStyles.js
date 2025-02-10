import styled from "styled-components";

export const TituloPedido = styled.h1`
font-size: 2rem;
color: #A87826;
margin: 2rem 0 0 4rem;
`
export const ContainerPedidosAtivo = styled.div`
display: flex;
flex-direction: column;
margin: 4.5rem 0 1.5rem 0;
gap: .5rem;
justify-content: center;
align-items: center;

    @media (max-width: 430px) {
        margin: 2rem 0;
    }
`

export const ThPedidoAtEcID = styled.th`
width: 10%;

    @media (max-width: 360px) {
        width: auto;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: auto;
    }

    @media (min-width: 430px) and (max-width: 520px) {
        width: auto;
    }
`
export const ThPedidoAtEcData = styled.th`
width: 5%;

    @media (max-width: 360px) {
        width: auto;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: auto;
    }

    @media (min-width: 430px) and (max-width: 520px) {
        width: auto;
    }
`
export const ThPedidoAtEcPagamento = styled.th`
width: 7%;

    @media (max-width: 360px) {
        width: auto;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: auto;
    }

    @media (min-width: 430px) and (max-width: 520px) {
        width: auto;
    }
`
export const ThPedidoAtEcStatus = styled.th`
width: 8%;

    @media (max-width: 360px) {
        width: auto;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: auto;
    }

    @media (min-width: 430px) and (max-width: 520px) {
        width: auto;
    }
`