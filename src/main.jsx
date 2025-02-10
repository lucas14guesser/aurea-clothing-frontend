import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import NavBar from './components/layout/navBar/NavBar';
import Footer from './components/layout/footer/Footer';
import { UserProvider } from './router/userContext';
import ProtectedRoute from './router/ProtecaoRotas';
import ScrollToTop from './services/ScrollToTop';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <UserProvider>
        <ProtectedRoute>
          <Router />
        </ProtectedRoute>
      </UserProvider>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
