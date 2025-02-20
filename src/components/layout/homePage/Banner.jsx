import React, { useEffect, useState } from 'react' // Importando React e hooks necessários para o componente
import { ContainerBanner } from '../../../styles/GlobalStyles' // Importando o componente de estilo global
import { ContainerCarouselBanner, ImagemCarouselBanner, NextCarouselBanner, PrevCarouselBanner } from '../../../styles/HomePageStyles' // Importando componentes de estilo para o carrossel de banners
import { useCarouselBanner } from '../../functions/homePage/carousel/CarouselFunctions' // Função personalizada para controlar o carrossel de banners
import axios from 'axios' // Biblioteca para fazer requisições HTTP (Axios)

function Banner() {
    // Estado para armazenar os banners que serão exibidos no carrossel
    const [banners, setBanners] = useState([]);

    // useEffect para buscar os dados dos banners do servidor assim que o componente for montado
    useEffect(() => {
        const fetchDadosBanners = async () => {
            try {
                // Requisição GET para obter os banners do servidor
                const resp = await axios.get('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/banners');
                setBanners(resp.data.result); // Salvando os banners no estado
            } catch (error) {
                console.error('Erro ao listar banners.', error); // Tratamento de erro caso a requisição falhe
            }
        }
        fetchDadosBanners(); // Chamando a função para buscar os banners assim que o componente for montado
    }, []) // O array vazio significa que o efeito será executado apenas uma vez, quando o componente for montado

    // Importando a função personalizada para o carrossel, que retorna os valores para controlar a navegação (anterior, próximo e contador)
    const { counterSlideBanner, nextSlideBanner, prevSlideBanner } = useCarouselBanner(banners.length);

    // useEffect para configurar a navegação automática do carrossel, passando a imagem a cada 3 segundos
    useEffect(() => {
        const intervaloId = setInterval(() => {
            nextSlideBanner(); // Chama a função para passar para o próximo banner
        }, 3000); // Define o intervalo de 3 segundos

        // Função de limpeza do intervalo quando o componente for desmontado ou o efeito for reexecutado
        return () => clearInterval(intervaloId);
    }, [nextSlideBanner]); // O efeito depende de 'nextSlideBanner', então será reexecutado se essa função mudar

    return (
        <ContainerBanner>
            {/* Passando o contador como prop */}
            <ContainerCarouselBanner $slideIndex={counterSlideBanner}>
                {Array.isArray(banners) && banners.map((banner) => {
                    return (
                        <ImagemCarouselBanner
                            src={banner.img_banner} // Agora usa a URL correta
                            alt={banner.nome_banner}
                            key={banner.id_banner}
                        />
                    );
                })}
            </ContainerCarouselBanner>

            {/* Setas de navegação */}
            <PrevCarouselBanner onClick={prevSlideBanner}>&#10094;</PrevCarouselBanner>
            <NextCarouselBanner onClick={nextSlideBanner}>&#10095;</NextCarouselBanner>
        </ContainerBanner>
    )
}

export default Banner;
