import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const rootElement = document.getElementById('root');
        if (rootElement) {
            rootElement.scrollTo(0, 0); // Rola o elemento #root para o topo
        } else {
            window.scrollTo(0, 0); // Como fallback, usa a janela
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
