import React from 'react'; // Importa o React para o funcionamento do componente
import { ContainerHomePage } from '../styles/HomePageStyles'; // Importa os estilos específicos da página inicial
import Informacoes from '../components/layout/homePage/Informacoes'; // Importa o componente de informações da página
import Banner from '../components/layout/homePage/Banner'; // Importa o componente de banner
import CarouselLancamentos from '../components/layout/homePage/carousel/CarouselLancamentos'; // Importa o carrossel de lançamentos
import CarouselJeans from '../components/layout/homePage/carousel/CarouselJeans'; // Importa o carrossel de jeans
import CarouselAcessorios from '../components/layout/homePage/carousel/CarouselAcessorios'; // Importa o carrossel de acessórios
import CarouselPromocoes from '../components/layout/homePage/carousel/CarouselPromocoes'; // Importa o carrossel de promoções
import CarouselAlfaiataria from '../components/layout/homePage/carousel/CarouselAlfaiataria'; // Importa o carrossel de alfaiataria
import CarouselMacaquinhos from '../components/layout/homePage/carousel/CarouselMacaquinhos'; // Importa o carrossel de macaquinhos
import CarouselConjuntos from '../components/layout/homePage/carousel/CarouselConjuntos'; // Importa o carrossel de conjuntos
import CarouselVestidos from '../components/layout/homePage/carousel/CarouselVestidos'; // Importa o carrossel de vestidos
import CarouselShorts from '../components/layout/homePage/carousel/CarouselShorts'; // Importa o carrossel de shorts

// Função do componente HomePage
function HomePage() {
  return (
    <React.Fragment>
      {/* Componente Banner: Exibe um banner promocional ou de destaque na página inicial */}
      <Banner />

      {/* Contêiner principal da página inicial, onde todos os outros componentes são renderizados */}
      <ContainerHomePage>
        {/* Carrossel de Lançamentos: Exibe os lançamentos de produtos em um carrossel */}
        <CarouselLancamentos />

        {/* Componente Informações: Exibe informações gerais ou úteis sobre a loja ou produtos */}
        <Informacoes />

        {/* Carrossel de Promoções: Exibe promoções ou ofertas em um carrossel */}
        <CarouselPromocoes />

        {/* Carrossel de Alfaiataria: Exibe itens da categoria alfaiataria em um carrossel */}
        <CarouselAlfaiataria />

        {/* Carrossel de Jeans: Exibe produtos da categoria jeans em um carrossel */}
        <CarouselJeans />

        {/* Carrossel de Macaquinhos: Exibe produtos da categoria macaquinhos em um carrossel */}
        <CarouselMacaquinhos />

        {/* Carrossel de Conjuntos: Exibe produtos da categoria conjuntos em um carrossel */}
        <CarouselConjuntos />

        {/* Carrossel de Vestidos: Exibe produtos da categoria vestidos em um carrossel */}
        <CarouselVestidos />

        {/* Carrossel de Shorts: Exibe produtos da categoria shorts em um carrossel */}
        <CarouselShorts />

        {/* Carrossel de Acessórios: Exibe produtos da categoria acessórios em um carrossel */}
        <CarouselAcessorios />
      </ContainerHomePage>
    </React.Fragment>
  );
}

export default HomePage; // Exporta o componente HomePage para ser utilizado em outras partes do aplicativo
