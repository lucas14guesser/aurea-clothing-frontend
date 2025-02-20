import React, { useContext, useEffect, useState } from 'react'
import { Container, Titulo, TxtGerais } from '../styles/GlobalStyles'
import { ButtonProdutos, ContainerCrudProduto, ContainerFuncao, ContainerFuncoes, ContainerGeralFuncao, FileNameProduto, ImgTable, InputProdutos, InputProdutosFileWrapper, LabelInputProdutos, LabelProdutos, ListaProdutos, SectionBtnProdutos, SelectProdutos, SpanTxt } from '../styles/ProdutosStyle'
import { MdOutlineCategory, MdOutlineAttachMoney, MdNumbers, MdOutlineColorLens, MdOutlineHeight } from "react-icons/md";
import { AiOutlineFileImage, AiOutlineFieldNumber, AiOutlineProduct } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BtnMenuUser, LinkMail, MenuUser, RowMenuTitle } from '../styles/UserDashboardStyles';
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
import { UserContext } from '../router/userContext'; // Contexto de usuário para obter informações do usuário atual
import { CiSearch } from 'react-icons/ci';
import { BotaoBuscaNav, InputBuscaNav } from '../styles/NavBarStyles';
import { formatCurrencyBr, formatParcelas } from '../services/Functions';
import { BotaoPaginacao, ContainerPaginacao, ThProduto1, ThProduto4, ThProduto5, ThProduto6, ThProduto7 } from '../styles/ProdutoStyles';
import { ContainerSearchCdRastreio } from '../styles/CdRastreioStyles';


function Produtos() {
  // Obtendo dados do contexto de usuário, incluindo funções para logout
  const { user, logout } = useContext(UserContext);

  const [imgProduto, setImgProduto] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [categoriaProduto, setCategoriaProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [parcelaProduto, setParcelaProduto] = useState('');
  const [qtdProduto, setQtdProduto] = useState('');
  const [corProduto, setCorProduto] = useState('');
  const [tamanhoProduto, setTamanhoProduto] = useState('');
  const [subcategoriaProduto, setSubcategoriaProduto] = useState('');
  const [idProduto, setIdProduto] = useState('');
  const [produtos, setProdutos] = useState([]);

  const [idPromocao, setIdPromocao] = useState('');
  const [precoPromocao, setPrecoPromocao] = useState('');
  const [parcelaPromocao, setParcelaPromocao] = useState('');

  const [idDespromocao, setIdDespromocao] = useState('');
  const [categoriaDespromocao, setCategoriaDespromocao] = useState('');
  const [parcelaDespromocao, setParcelaDespromocao] = useState('');
  const [subcategoriaDespromocao, setSubcategoriaDespromocao] = useState('');

  // Estado para controlar a visibilidade do menu do usuário
  const [openMenuUser, setOpenMenuUser] = useState(false);

  const [search, setSearch] = useState('');
  const [filterProduto, setFilterProduto] = useState([]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Função para calcular o índice inicial e final dos itens da página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtra os produtos para mostrar apenas os itens da página atual
  const currentItems = filterProduto.slice(startIndex, endIndex);

  // Calcula o número total de páginas
  const totalPages = Math.ceil(filterProduto.length / itemsPerPage);

  // Função para mudar a página
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [tipoTamanho, setTipoTamanho] = useState('');

  const subcategorias = {
    alfaiataria: ['Calças', 'Blazer', 'Shorts'],
    acessorios: ['Bolsas', 'Bonés', 'Cintos'],
  };

  const handleTipoTamanhoChange = (e) => {
    setTipoTamanho(e.target.value);
    setTamanhoProduto('');
  };

  const tamanhosAlfanumericos = ['PP', 'P', 'M', 'G', 'GG'];
  const tamanhosNumericos = ['34', '36', '38', '40', '42', '44'];
  const tamanhosUnico = ['único'];

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const resp = await axios.get('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/produtos');
        setProdutos(resp.data.result);
        setFilterProduto(resp.data.result);
      } catch (error) {
        console.error('Erro ao buscar todos os produtos.', error);
      }
    }
    fetchProdutos();
  }, []);

  const handleSearchProduto = (e) => {
    const pesquisado = e.target.value.toLowerCase();
    setSearch(pesquisado);

    const results = produtos.filter((produto) =>
      produto.nome_produto.toLowerCase().includes(pesquisado)
    );
    setFilterProduto(results);
  }

  const handleCadastrarProduto = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Adicionar os dados ao FormData
    formData.append('img_produto', imgProduto); // A imagem deve ser enviada como um arquivo
    formData.append('nome_produto', nomeProduto);
    formData.append('categoria_produto', categoriaProduto);
    formData.append('preco_produto', precoProduto);
    formData.append('parcela_produto', parcelaProduto);
    formData.append('qtd_produto', qtdProduto);
    formData.append('cor_produto', corProduto);
    formData.append('tamanho_produto', tamanhoProduto);
    formData.append('subcategoria_produto', subcategoriaProduto);

    try {
      const resp = await axios.post('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/produto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Importante para envio de arquivos
        },
      });

      if (resp.data.result) {
        alert('Produto cadastrado com sucesso!');
        setImgProduto(''); // Limpar o arquivo após o envio
        setNomeProduto('');
        setCategoriaProduto('');
        setPrecoProduto('');
        setParcelaProduto('');
        setQtdProduto('');
        setCorProduto('');
        setTamanhoProduto('');
        setSubcategoriaProduto('');
      } else {
        alert('Erro ao cadastrar produto.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar produto', error);
    }
  };

  const handleExcluirProduto = async (e) => {
    e.preventDefault();

    if (!idProduto || isNaN(idProduto)) {
      alert('Por favor, insira um ID de produto válido');
      return;
    }

    try {
      const resp = await axios.delete(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/produto/${idProduto}`);
      if (resp.data.result) {
        setIdProduto('');
        alert('Produto excluído com sucesso!');
      } else {
        alert('Erro ao excluir produto.');
      }
    } catch (error) {
      console.error('Erro ao excluir produto', error);
      alert('Erro ao excluir produto.');
    }
  }

  const handlePromocaoProduto = async (e) => {
    e.preventDefault();

    const dataPromocao = {
      categoria_produto: 'promocoes',  // Categoria alterada para promoção
      preco_promocional_produto: precoPromocao,
      parcela_produto: parcelaPromocao,
    };

    try {
      const resp = await axios.put(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/produto/${idPromocao}`, dataPromocao);
      if (resp.data.result) {
        alert('Produto em promoção!');
        setIdPromocao('');
        setPrecoPromocao('');
        setParcelaPromocao('');
      } else {
        alert('Erro ao promover o produto');
      }
    } catch (error) {
      alert('Erro ao promover o produto');
      console.error(error);
    }
  };

  const handleDespromocaoProduto = async (e) => {
    e.preventDefault();

    const dataDespromocao = {
      categoria_produto: categoriaDespromocao,  // Restaurando a categoria original
      preco_promocional_produto: null,  // Garantindo que o preço promocional seja removido
      parcela_produto: parcelaDespromocao, // Se for necessário alterar a parcela também
      subcategoria_produto: subcategoriaDespromocao,
    };

    try {
      const resp = await axios.put(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/produto/${idDespromocao}`, dataDespromocao);
      if (resp.data.result) {
        alert('Produto não está mais em promoção.');
        setCategoriaDespromocao('');
        setPrecoPromocao('');
        setParcelaPromocao('');
      } else {
        alert('Erro ao despromocionar o produto.');
      }
    } catch (error) {
      alert('Erro ao despromocionar o produto.');
      console.error(error);
    }
  };

  // Função para alternar a exibição do menu do usuário
  const handleClickMenuUser = () => {
    setOpenMenuUser(!openMenuUser);
  };

  return (
    <React.Fragment>
      {/* Menu do usuário */}
      {openMenuUser ? (
        <RowMenuTitle>
          <IoIosArrowDown style={{ fontSize: '2rem', color: '#A87826', cursor: 'pointer' }} onClick={handleClickMenuUser} />
          <Titulo>Boas-vindas, {user.nome_user}</Titulo>
        </RowMenuTitle>
      ) : (
        <RowMenuTitle>
          <IoIosMenu style={{ fontSize: '2rem', color: '#A87826', cursor: 'pointer' }} onClick={handleClickMenuUser} />
          <Titulo>Boas-vindas, {user.nome_user}</Titulo>
        </RowMenuTitle>
      )}

      {/* Links do menu do usuário */}
      {openMenuUser && (
        <MenuUser>
          <LinkMail to='/minha-conta'>Minha Conta</LinkMail>
          <LinkMail to='/pedidos-ativos'>Pedidos Ativos</LinkMail>
          <LinkMail to='/pedidos-encerrados'>Pedidos Encerrados</LinkMail>
          <BtnMenuUser onClick={logout}>Sair</BtnMenuUser>
        </MenuUser>
      )}
      <Container>
        <Titulo>Produtos</Titulo>

        <ContainerGeralFuncao>
          <ContainerFuncoes>
            <ContainerFuncao>
              <ContainerCrudProduto>
                <TxtGerais style={{ color: '#A87826' }}>Cadastrar Produto no catálogo</TxtGerais>
                <InputProdutosFileWrapper>
                  <LabelInputProdutos>
                    <LabelProdutos><AiOutlineFileImage /></LabelProdutos>
                    <label htmlFor='fileInput'>Escolher Imagem</label>
                    <input type="file" id='fileInput' required onChange={(e) => setImgProduto(e.target.files[0])} />
                    {imgProduto && <FileNameProduto>{imgProduto.name}</FileNameProduto>}
                  </LabelInputProdutos>
                </InputProdutosFileWrapper>

                <LabelInputProdutos>
                  <LabelProdutos htmlFor='nome_produto'><BsPencil /></LabelProdutos>
                  <InputProdutos type='text' placeholder='Nome do Produto' id='nome_produto' required value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
                </LabelInputProdutos>

                <LabelInputProdutos>
                  <LabelProdutos htmlFor='categoria_produto'><MdOutlineCategory /></LabelProdutos>
                  <SelectProdutos id="categoria_produto" required value={categoriaProduto} onChange={(e) => setCategoriaProduto(e.target.value)}>
                    <option value="">Categoria</option>
                    <option value="alfaiataria">Alfaiataria</option>
                    <option value="blusas">Blusas</option>
                    <option value="jeans">Jeans</option>
                    <option value="macaquinhos">Macaquinhos</option>
                    <option value="conjuntos">Conjuntos</option>
                    <option value="vestidos">Vestidos</option>
                    <option value="saias">Saias</option>
                    <option value="shorts">Shorts</option>
                    <option value="acessorios">Acessórios</option>
                    <option value="lancamentos">Lançamentos</option>
                    <option value="promocoes">Promoções</option>
                  </SelectProdutos>
                </LabelInputProdutos>

                <LabelInputProdutos>
                  <LabelProdutos htmlFor='preco_produto'><MdOutlineAttachMoney /></LabelProdutos>
                  <InputProdutos type='number' placeholder='Preço do Produto' id='preco_produto' required value={precoProduto} onChange={(e) => setPrecoProduto(e.target.value)} />
                </LabelInputProdutos>

                <LabelInputProdutos>
                  <LabelProdutos htmlFor='parcela_produto'><MdNumbers /></LabelProdutos>
                  <SelectProdutos id="parcela_produto" required value={parcelaProduto} onChange={(e) => setParcelaProduto(e.target.value)}>
                    <option value="">Parcelas disponíveis</option>
                    <option value="1">À vista</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </SelectProdutos>
                </LabelInputProdutos>

                <LabelInputProdutos>
                  <LabelProdutos htmlFor='qtd_produto'><AiOutlineFieldNumber /></LabelProdutos>
                  <InputProdutos type='number' placeholder='Quantidade do Produto' id='qtd_produto' required value={qtdProduto} onChange={(e) => setQtdProduto(e.target.value)} />
                </LabelInputProdutos>

                <LabelInputProdutos>
                  <LabelProdutos htmlFor='cor_produto'><MdOutlineColorLens /></LabelProdutos>
                  <SelectProdutos id="cor_produto" required value={corProduto} onChange={(e) => setCorProduto(e.target.value)}>
                    <option value="">Cor</option>
                    <option value="amarelo">Amarelo</option>
                    <option value="azul">Azul</option>
                    <option value="branco">Branco</option>
                    <option value="cinza">Cinza</option>
                    <option value="laranja">Laranja</option>
                    <option value="marrom">Marrom</option>
                    <option value="nude">Nude</option>
                    <option value="preto">Preto</option>
                    <option value="rosa">Rosa</option>
                    <option value="rosê">Rosê</option>
                    <option value="roxo">Roxo</option>
                    <option value="verde">Verde</option>
                    <option value="vermelho">Vermelho</option>
                  </SelectProdutos>
                </LabelInputProdutos>

                {/* Seletor de tipo de tamanho */}
                <LabelInputProdutos>
                  <LabelProdutos htmlFor="tipo_tamanho"><MdOutlineHeight /></LabelProdutos>
                  <SelectProdutos
                    id="tipo_tamanho"
                    value={tipoTamanho}
                    onChange={handleTipoTamanhoChange}
                  >
                    <option value="">Tipo de tamanho</option> {/* Opção inicial sem valor */}
                    <option value="alfanumerico">Alfanumérico (P, PP, M, G, GG)</option>
                    <option value="numerico">Numérico (34, 36, 38, 40, 42, 44)</option>
                    <option value="unico">Único</option> {/* Adicionando a opção "Único" */}
                  </SelectProdutos>
                </LabelInputProdutos>

                {/* Campo de tamanho do produto */}
                <LabelInputProdutos>
                  <LabelProdutos htmlFor="tamanho_produto"><MdOutlineHeight /></LabelProdutos>
                  <SelectProdutos
                    id="tamanho_produto"
                    required
                    value={tamanhoProduto}
                    onChange={(e) => setTamanhoProduto(e.target.value)}
                  >
                    <option value="">Selecione o tamanho</option> {/* Opção inicial sem valor */}
                    {/* Exibe as opções dependendo da escolha do tipo de tamanho */}
                    {tipoTamanho === 'alfanumerico' ? (
                      tamanhosAlfanumericos.map((tamanho) => (
                        <option key={tamanho} value={tamanho}>
                          {tamanho}
                        </option>
                      ))
                    ) : tipoTamanho === 'numerico' ? (
                      tamanhosNumericos.map((tamanho) => (
                        <option key={tamanho} value={tamanho}>
                          {tamanho}
                        </option>
                      ))
                    ) : tipoTamanho === 'unico' ? (
                      tamanhosUnico.map((tamanho) => (
                        <option key={tamanho} value={tamanho}>
                          {tamanho}
                        </option>
                      ))
                    ) : null}
                  </SelectProdutos>
                </LabelInputProdutos>

                {categoriaProduto in subcategorias && (
                  <LabelInputProdutos>
                    <LabelProdutos htmlFor="subcategoria_produto"><BiCategory /></LabelProdutos>
                    <SelectProdutos id="subcategoria_produto" required value={subcategoriaProduto} onChange={(e) => setSubcategoriaProduto(e.target.value)}>
                      <option value="">Subcategoria</option>
                      {subcategorias[categoriaProduto].map((subcategoria) => (
                        <option key={subcategoria} value={subcategoria.toLowerCase()}>
                          {subcategoria}
                        </option>
                      ))}
                    </SelectProdutos>
                  </LabelInputProdutos>
                )}
                <SectionBtnProdutos>
                  <ButtonProdutos onClick={handleCadastrarProduto}>Cadastrar</ButtonProdutos>
                </SectionBtnProdutos>
              </ContainerCrudProduto>
            </ContainerFuncao>

            <ContainerFuncao>
              <ContainerCrudProduto>
                <TxtGerais style={{ color: '#A87826' }}>Excluir Produto do catálogo</TxtGerais>
                <LabelInputProdutos>
                  <LabelProdutos htmlFor='id_produto'><AiOutlineProduct /></LabelProdutos>
                  <InputProdutos type='number' id='id_produto' placeholder='ID do produto' value={idProduto} onChange={(e) => setIdProduto(e.target.value)} />
                </LabelInputProdutos>
                <SectionBtnProdutos>
                  <ButtonProdutos onClick={handleExcluirProduto}>Excluir</ButtonProdutos>
                </SectionBtnProdutos>
              </ContainerCrudProduto>
            </ContainerFuncao>
          </ContainerFuncoes>

          <ContainerFuncoes>
            <ContainerFuncao>
              <ContainerCrudProduto>
                <TxtGerais style={{ color: '#A87826' }}>Colocar produto em promoção</TxtGerais>
                <LabelInputProdutos>
                  <LabelProdutos htmlFor='id_promocao'><AiOutlineProduct /></LabelProdutos>
                  <InputProdutos type='number' id='id_promocao' placeholder='ID do produto' value={idPromocao} onChange={(e) => setIdPromocao(e.target.value)} />
                </LabelInputProdutos>

                <LabelInputProdutos>
                  <LabelProdutos htmlFor='preco_promocao'><MdOutlineAttachMoney /></LabelProdutos>
                  <InputProdutos type='number' id='preco_promocao' placeholder='Novo preço promocional' value={precoPromocao} onChange={(e) => setPrecoPromocao(e.target.value)} />
                </LabelInputProdutos>

                <LabelInputProdutos>
                  <LabelProdutos htmlFor='parcela_promocao'><MdNumbers /></LabelProdutos>
                  <SelectProdutos id="parcela_promocao" required value={parcelaPromocao} onChange={(e) => setParcelaPromocao(e.target.value)}>
                    <option value="">Parcelas disponíveis</option>
                    <option value="1">À vista</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </SelectProdutos>
                </LabelInputProdutos>
                <SectionBtnProdutos>
                  <ButtonProdutos onClick={handlePromocaoProduto}>Colocar Promoção</ButtonProdutos>
                </SectionBtnProdutos>
              </ContainerCrudProduto>
            </ContainerFuncao>

            <ContainerFuncao>
              <ContainerCrudProduto>
                <TxtGerais style={{ color: '#A87826' }}>Remover promoção do produto</TxtGerais>
                <LabelInputProdutos>
                  <LabelProdutos htmlFor='id_promocao'><AiOutlineProduct /></LabelProdutos>
                  <InputProdutos type='number' id='id_promocao' placeholder='ID do produto' value={idDespromocao} onChange={(e) => setIdDespromocao(e.target.value)} />
                </LabelInputProdutos>

                <LabelInputProdutos>
                  <LabelProdutos htmlFor='categoria_despromocao'><MdOutlineCategory /></LabelProdutos>
                  <SelectProdutos id="categoria_despromocao" required value={categoriaDespromocao} onChange={(e) => setCategoriaDespromocao(e.target.value)}>
                    <option value="">Categoria</option>
                    <option value="alfaiataria">Alfaiataria</option>
                    <option value="blusas">Blusas</option>
                    <option value="jeans">Jeans</option>
                    <option value="macaquinhos">Macaquinhos</option>
                    <option value="conjuntos">Conjuntos</option>
                    <option value="vestidos">Vestidos</option>
                    <option value="saias">Saias</option>
                    <option value="shorts">Shorts</option>
                    <option value="acessorios">Acessórios</option>
                    <option value="lancamentos">Lançamentos</option>
                    <option value="promocoes">Promoções</option>
                  </SelectProdutos>
                </LabelInputProdutos>

                <LabelInputProdutos>
                  <LabelProdutos htmlFor='parcela_promocao'><MdNumbers /></LabelProdutos>
                  <SelectProdutos id="parcela_promocao" required value={parcelaDespromocao} onChange={(e) => setParcelaDespromocao(e.target.value)}>
                    <option value="">Parcelas disponíveis</option>
                    <option value="1">À vista</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </SelectProdutos>
                </LabelInputProdutos>

                {categoriaDespromocao && categoriaDespromocao in subcategorias && (
                  <LabelInputProdutos>
                    <LabelProdutos htmlFor="subcategoria_despromocao"><BiCategory /></LabelProdutos>
                    <SelectProdutos id="subcategoria_despromocao" required value={subcategoriaDespromocao} onChange={(e) => setSubcategoriaDespromocao(e.target.value)}>
                      <option value="">Subcategoria</option>
                      {subcategorias[categoriaDespromocao].map((subcategoria) => (
                        <option key={subcategoria} value={subcategoria.toLowerCase()}>
                          {subcategoria}
                        </option>
                      ))}
                    </SelectProdutos>
                  </LabelInputProdutos>
                )}

                <SectionBtnProdutos>
                  <ButtonProdutos onClick={handleDespromocaoProduto}>Remover Promoção</ButtonProdutos>
                </SectionBtnProdutos>
              </ContainerCrudProduto>
            </ContainerFuncao>
          </ContainerFuncoes>

        </ContainerGeralFuncao>

        <ContainerSearchCdRastreio>
          {/* Campo de entrada de texto para a busca - possui um placeholder para guiar o usuário */}
          <InputBuscaNav
            type="text"
            name="searchProduto"
            id="searchProduto"
            value={search}
            placeholder='Produto que procura?'
            onChange={handleSearchProduto}
          />
          {/* Botão de busca que exibe um ícone de lupa (CiSearch) */}
          <BotaoBuscaNav>
            <CiSearch />
          </BotaoBuscaNav>
        </ContainerSearchCdRastreio>

        <ListaProdutos>
          <table>
            <thead>
              <tr>
                <ThProduto1>ID</ThProduto1>
                <ThProduto7>Imagem</ThProduto7>
                <ThProduto7>Nome</ThProduto7>
                <ThProduto7>Categoria</ThProduto7>
                <ThProduto7>Preço</ThProduto7>
                <ThProduto4>Parcela</ThProduto4>
                <ThProduto6>Quantidade</ThProduto6>
                <ThProduto5>Cor</ThProduto5>
                <ThProduto5>Tamanho</ThProduto5>
                <ThProduto7>Subcategoria</ThProduto7>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(currentItems) && currentItems.map((produto) => (
                <tr key={produto.id_produto}>
                  <td>
                    <Link to={`/produto/${produto.nome_produto}`} style={{ textDecoration: 'none', color: '#A87826' }}>
                      {produto.id_produto}
                    </Link>
                  </td>
                  <td>
                    <ImgTable src={produto.img_produto} alt={produto.nome_produto} />
                  </td>
                  <td>{produto.nome_produto}</td>
                  <td>{produto.categoria_produto}</td>
                  <td>
                    {produto.categoria_produto === 'promocoes' ? (
                      <>
                        <span style={{ textDecoration: 'line-through' }}>
                          <SpanTxt>{formatCurrencyBr(produto.preco_produto)}</SpanTxt>
                        </span>
                        <span style={{ color: '#A87826' }}>
                          <SpanTxt>{formatCurrencyBr(produto.preco_promocional_produto)}</SpanTxt>
                        </span>
                      </>
                    ) : (
                      <span>
                        <SpanTxt>{formatCurrencyBr(produto.preco_produto)}</SpanTxt>
                      </span>
                    )}
                  </td>
                  <td>{formatParcelas(produto.parcela_produto)}</td>
                  <td>{produto.qtd_produto}</td>
                  <td>{produto.cor_produto}</td>
                  <td>{produto.tamanho_produto}</td>
                  <td>{produto.subcategoria_produto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ListaProdutos>
        {/* Controles de paginação */}
        <ContainerPaginacao>
          <BotaoPaginacao
            disabled={currentPage === 1}
            onClick={() => changePage(currentPage - 1)}
          >
            Anterior
          </BotaoPaginacao>

          <span>Página {currentPage} de {totalPages}</span>

          <BotaoPaginacao
            disabled={currentPage === totalPages}
            onClick={() => changePage(currentPage + 1)}
          >
            Próxima
          </BotaoPaginacao>
        </ContainerPaginacao>


      </Container>
    </React.Fragment>
  )
}

export default Produtos