import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from './userContext';

const ProtectedRoute = ({ children }) => {
    const { user, isAuthenticated, isLoading } = useUser();
    const location = useLocation();
    const navigate = useNavigate();
    const [isChecking, setIsChecking] = useState(true);

    const publicRoutes = [
        '/', '/login', '/cadastro', '/produto/:nome_produto', '/fale-conosco', '/trocas-devolucoes', '/politica-privacidade', '/esqueci-minha-senha', '/produtos-buscados',
        '/alfaiataria', '/blusas', '/jeans', '/macaquinhos', '/conjuntos', '/vestidos', '/saias', '/shorts', '/acessorios', '/lancamentos', '/promocoes',
        '/alfaiataria/calcas', '/alfaiataria/blazer', '/alfaiataria/short',
        '/acessorios/bolsas', '/acessorios/cintos', '/acessorios/bones',
        '/404',
    ];

    const adminRoutes = ['/pedidos-ativos', '/pedidos-encerrados', '/produtos', '/banners', '/cupom', '/cd-rastreio',];

    const isPublicRoute = publicRoutes.some((route) => {
        const dynamicRoutePattern = new RegExp(`^${route.replace(/:\w+/g, '[^/]+')}$`);
        return dynamicRoutePattern.test(location.pathname);
    });
    const isAdminRoute = adminRoutes.includes(location.pathname);

    const isTokenRoute = location.pathname === '/redefinir-mail'; // Identifica a rota que exige token
    const token = new URLSearchParams(location.search).get('token'); // Extrai o token da query string

    const isTokenRoutePass = location.pathname === '/redefinir-senha'; // Identifica a rota que exige token
    const tokenPass = new URLSearchParams(location.search).get('token'); // Extrai o token da query string

    useEffect(() => {
        const checkAuth = async () => {
            if (isLoading) return;

            if (isAuthenticated) {
                if (location.pathname === '/login' || location.pathname === '/cadastro') {
                    navigate('/minha-conta', { replace: true });
                }

                if (isAdminRoute && user?.funcao_user !== 'admin') {
                    navigate('/nao-autorizado', { replace: true });
                    return;
                }
            } else if (!isAuthenticated && !isPublicRoute) {
                navigate('/login', { replace: true });
                return;
            }

            // Verifica se a rota exige token e se o token não foi passado
            if (isTokenRoute && !token) {
                navigate('/erro-token', { replace: true }); // Redireciona para uma página de erro
                return;
            }

            // Verifica se a rota exige token e se o token não foi passado
            if (isTokenRoutePass && !tokenPass) {
                navigate('/erro-token', { replace: true }); // Redireciona para uma página de erro
                return;
            }

            // Verifica se a URL é a de "produtos-buscados" e se a query "query" está presente
            if (location.pathname === '/produtos-buscados') {
                const query = new URLSearchParams(location.search).get('query');
                if (!query) {
                    navigate('/erro-query', { replace: true }); // Redireciona para uma página de erro caso a query não esteja presente
                    return;
                }
            }

            setIsChecking(false);
        };

        checkAuth();
    }, [
        isAuthenticated,
        isLoading,
        location.pathname,
        location.search,
        navigate,
        user?.funcao_user,
        isTokenRoute,
        token,
    ]);

    if (!isPublicRoute && (isLoading || isChecking)) {
        return <div>Carregando...</div>;
    }

    return isAuthenticated || isPublicRoute || (isTokenRoute && token) ? children : null;
};

export default ProtectedRoute;
