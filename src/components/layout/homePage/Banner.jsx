import React, { useEffect, useState } from 'react';
import { ContainerBanner } from '../../../styles/GlobalStyles';
import { ContainerCarouselBanner, ImagemCarouselBanner, NextCarouselBanner, PrevCarouselBanner } from '../../../styles/HomePageStyles';
import { useCarouselBanner } from '../../functions/homePage/carousel/CarouselFunctions';
import axios from 'axios';

function Banner() {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const fetchDadosBanners = async () => {
            try {
                const resp = await axios.get('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/banners');
                setBanners(resp.data.result);
            } catch (error) {
                console.error('Erro ao listar banners.', error);
            }
        }
        fetchDadosBanners();
    }, []);

    const { counterSlideBanner, nextSlideBanner, prevSlideBanner } = useCarouselBanner(banners.length);

    useEffect(() => {
        const intervaloId = setInterval(() => {
            nextSlideBanner();
        }, 3000);

        return () => clearInterval(intervaloId);
    }, [nextSlideBanner]);

    return (
        <ContainerBanner>
            <ContainerCarouselBanner $slideIndex={counterSlideBanner}>
                {Array.isArray(banners) && banners.map((banner) => (
                    <ImagemCarouselBanner
                        src={banner.img_banner} // Agora está pegando a URL correta do Cloudinary
                        alt={banner.nome_banner}
                        key={banner.id_banner}
                    />
                ))}
            </ContainerCarouselBanner>

            <PrevCarouselBanner onClick={prevSlideBanner}>&#10094;</PrevCarouselBanner>
            <NextCarouselBanner onClick={nextSlideBanner}>&#10095;</NextCarouselBanner>
        </ContainerBanner>
    );
}

export default Banner;
