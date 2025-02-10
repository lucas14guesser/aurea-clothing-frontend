import React, { createContext, useContext, useState, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState(null);

    const navigate = useNavigate();

    const isUserAdmin = () => userRole === 'admin';
    const isUserRegular = () => userRole === 'user';

    useEffect(() => {
        const checkAuth = async () => {
            setIsLoading(true);
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const response = await axios.get('http://localhost:3001/lex/auth/check', {
                        withCredentials: true,
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    if (response.data?.authenticated) {
                        const storedEmail = localStorage.getItem('userEmail');
                        const emailToFetch = storedEmail || response.data.email;
                        setUserEmail(emailToFetch);
                        setIsAuthenticated(true);
                        await fetchUserData(emailToFetch);
                    } else {
                        setUserEmail('');
                        setIsAuthenticated(false);
                        setUser(null);
                    }
                } else {
                    const authenticated = localStorage.getItem('isAuthenticated') === 'true';
                    setIsAuthenticated(authenticated);
                    if (authenticated) {
                        const storedEmail = localStorage.getItem('userEmail');
                        setUserEmail(storedEmail);
                        await fetchUserData(storedEmail);
                    } else {
                        setUserEmail('');
                        setUser(null);
                    }
                }
            } catch (error) {
                console.error('Erro ao verificar autenticação:', error);
                setUserEmail('');
                setIsAuthenticated(false);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };
        checkAuth();
    }, []);

    useEffect(() => {
        const authenticated = localStorage.getItem('isAuthenticated') === 'true';
        setIsAuthenticated(authenticated);
    }, []);

    const fetchUserData = async (email_user) => {
        try {
            const resp = await axios.get(`http://localhost:3001/aurea/usuario/mail/${email_user}`);
            if (resp.data.result.length > 0) {
                setUser(resp.data.result[0]);
                setUserRole(resp.data.result[0].funcao_user);
            } else {
                setUser(null);
                setUserRole(null);
            }
        } catch (error) {
            setUser(null);
            setUserRole(null);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (email_user) => {
        try {
            await fetchUserData(email_user);
            setUserEmail(email_user);
            setIsAuthenticated(true);
            localStorage.setItem('userEmail', email_user);
            localStorage.setItem('isAuthenticated', 'true');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setUser(null);
            setIsAuthenticated(false);
            localStorage.removeItem('isAuthenticated');
        }
    };

    const updateUserEmail = (email) => {
        setUserEmail(email);
        localStorage.setItem('userEmail', email);
    };

    const updateUser = (newUserData) => {
        setUser((prevUser) => ({
            ...prevUser,
            ...newUserData,
        }));
    };

    const logout = async () => {
        try {
            await axios.post('http://localhost:3001/aurea/auth/logout', {}, { withCredentials: true });
            setUserEmail('');
            setIsAuthenticated(false);
            setUser(null);
            setUserRole(null);
            localStorage.removeItem('userEmail');
            localStorage.removeItem('isAuthenticated');
            navigate('/login');
        } catch (error) {
            console.error('Erro ao fazer logout', error);
        }
    };

    return (
        <UserContext.Provider value={{
            user, userEmail, isAuthenticated, isLoading, userRole,
            login, logout, setUserEmail: updateUserEmail, updateUser, fetchUserData,
            isUserAdmin, isUserRegular,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export function useUser() {
    return useContext(UserContext);
}
