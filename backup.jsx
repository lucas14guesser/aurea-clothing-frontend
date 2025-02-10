import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        banners: resolve(__dirname, './src/pages/Banners.jsx'),
        cadastroUser: resolve(__dirname, './src/pages/CadastroUser.jsx'),
        carrinho: resolve(__dirname, './src/pages/Carrinho.jsx'),
        categoriasProdutos: resolve(__dirname, './src/pages/CategoriasProdutos.jsx'),
        cdRastreio: resolve(__dirname, './src/pages/CdRastreio.jsx'),
        configurarRedefinicaoMail: resolve(__dirname, './src/pages/ConfigurarRedefinicaoMail.jsx'),
        configurarRedefinicaoSenha: resolve(__dirname, './src/pages/ConfigurarRedefinicaoSenha.jsx'),
        contaUser: resolve(__dirname, './src/pages/ContaUser.jsx'),
        cupom: resolve(__dirname, './src/pages/Cupom.jsx'),
        detalhesPedido: resolve(__dirname,'./src/pages/DetalhesPedido.jsx'),
        faleConosco: resolve(__dirname,'./src/pages/FaleConosco.jsx'),
        homePage: resolve(__dirname,'./src/pages/HomePage.jsx'),
        listaAmei: resolve(__dirname,'./src/pages/ListaAmei.jsx'),
        pageNotFound404: resolve(__dirname,'./src/pages/PageNotFound404.jsx'),
        paymentFail: resolve(__dirname,'./src/pages/PaymentFail.jsx'),
        paymentLoad: resolve(__dirname,'./src/pages/PaymentLoad.jsx'),
        paymentSuccess: resolve(__dirname,'./src/pages/PaymentSuccess.jsx'),
        pedido: resolve(__dirname,'./src/pages/Pedido.jsx'),
        pedidos: resolve(__dirname,'./src/pages/Pedidos.jsx'),
        pedidosAtivos: resolve(__dirname,'./src/pages/PedidosAtivos.jsx'),
        pedidosEncerrados: resolve(__dirname,'./src/pages/PedidosEncerrados.jsx'),
        politicaPrivacidade: resolve(__dirname,'./src/pages/PoliticaPrivacidade.jsx'),
        produto: resolve(__dirname,'./src/pages/Produto.jsx'),
        produtos: resolve(__dirname,'./src/pages/Produtos.jsx'),
        produtosBuscados: resolve(__dirname,'./src/pages/ProdutosBuscados.jsx'),
        redefinirMail: resolve(__dirname,'./src/pages/ReedefinirMail.jsx'),
        redefinirPass: resolve(__dirname,'./src/pages/RedefinirPass.jsx'),
        trocasDevolucoes: resolve(__dirname,'./src/pages/TrocasDevolucoes.jsx'),
        userDashboard: resolve(__dirname,'./src/pages/UserDashboard.jsx'),
      }
    }
  }
})