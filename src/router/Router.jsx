import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ContaUser from '../pages/ContaUser'
import CadastroUser from '../pages/CadastroUser'
import Carrinho from '../pages/Carrinho'
import Pedidos from '../pages/Pedidos'
import SubCategoriasProdutos, { CategoriasProdutos } from '../pages/CategoriasProdutos'
import UserDashBoard from '../pages/UserDashboard'
import ListaAmei from '../pages/ListaAmei'
import DetalhesPedido from '../pages/DetalhesPedido'
import TrocasDevolucoes from '../pages/TrocasDevolucoes'
import PoliticaPrivacidade from '../pages/PoliticaPrivacidade'
import FaleConosco from '../pages/FaleConosco'
import Produto from '../pages/Produto'
import RedefinirMail from '../pages/RedefinirMail'
import RedefinirPass from '../pages/RedefinirPass'
import ConfigurarRedefinicaoMail from '../pages/ConfigurarRedefinicaoMail'
import PedidosAtivos from '../pages/PedidosAtivos'
import Pedido from '../pages/Pedido'
import PedidosEncerrados from '../pages/PedidosEncerrados'
import ConfigurarRedefinicaoSenha from '../pages/ConfigurarRedefinicaoSenha'
import Produtos from '../pages/Produtos'
import Banners from '../pages/Banners'
import ProdutosBuscados from '../pages/ProdutosBuscados'
import PageNotFound404 from '../pages/PageNotFound404'
import Cupom from '../pages/Cupom'
import CdRastreio from '../pages/CdRastreio'
import EsqueciMinhaSenha from '../components/layout/login/EsqueciMinhaSenha'
import PaymentSuccess from '../pages/PaymentSuccess'
import PaymentLoad from '../pages/PaymentLoad'
import PaymentFail from '../pages/PaymentFail'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<ContaUser />} />
      <Route path='/cadastro' element={<CadastroUser />} />
      <Route path='/:categoria' element={<CategoriasProdutos />} />
      <Route path='/:categoria/:subcategoria' element={<SubCategoriasProdutos />} />
      <Route path='/meu-carrinho' element={<Carrinho />} />
      <Route path='/meus-pedidos' element={<Pedidos />} />
      <Route path='/produto/:nome_produto' element={<Produto />} />
      <Route path='/minha-conta' element={<UserDashBoard />} />
      <Route path='/lista-amei' element={<ListaAmei />} />
      <Route path='/detalhes-pedido/:id_pedido' element={<DetalhesPedido />} />
      <Route path='/fale-conosco' element={<FaleConosco />} />
      <Route path='/trocas-devolucoes' element={<TrocasDevolucoes />} />
      <Route path='/politica-privacidade' element={<PoliticaPrivacidade />} />
      <Route path='/redefinir-mail' element={<RedefinirMail />} />
      <Route path='/redefinir-senha' element={<RedefinirPass />} />
      <Route path='/esqueci-minha-senha' element={<EsqueciMinhaSenha />} />
      <Route path='/redefinicao-mail' element={<ConfigurarRedefinicaoMail />} />
      <Route path='/redefinicao-senha' element={<ConfigurarRedefinicaoSenha />} />
      <Route path='/pedidos-ativos' element={<PedidosAtivos />} />
      <Route path='/pedidos-encerrados' element={<PedidosEncerrados />} />
      <Route path='/pedido/:id_pedido' element={<Pedido />} />
      <Route path='/produtos' element={<Produtos />} />
      <Route path='/banners' element={<Banners />} />
      <Route path='/produtos-buscados' element={<ProdutosBuscados />} />
      <Route path='/cupom' element={<Cupom />} />
      <Route path='/cd-rastreio' element={<CdRastreio />} />

      <Route path='/order-success' element={<PaymentSuccess />} />
      <Route path='/pay-load' element={<PaymentLoad />} />
      <Route path='/pay-fail' element={<PaymentFail />} />

      <Route path='/404' element={<PageNotFound404 />} />
      <Route path='*' element={<PageNotFound404 />} />
    </Routes>
  )
}

export default Router