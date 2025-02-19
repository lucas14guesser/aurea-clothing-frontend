import React, { useContext, useEffect, useState } from 'react' // Importando React e hooks necessários para o componente
import { Container, Titulo, TxtGerais } from '../styles/GlobalStyles.js' // Componentes de estilo global
import { ButtonProdutos, ContainerCrud, ContainerFuncao, ContainerFuncoes, ContainerGeralFuncao, FileNameProduto, ImgTableBanners, InputProdutos, InputProdutosFileWrapper, LabelInputProdutos, LabelProdutos, ListaProdutos, SectionBtnProdutos } from '../styles/ProdutosStyle.js' // Componentes de estilo específicos para a página de produtos
import { AiOutlineFileImage, AiOutlineProduct } from "react-icons/ai"; // Ícones específicos para imagens e produtos
import axios from 'axios'; // Biblioteca para fazer requisições HTTP
import { BtnMenuUser, LinkMail, MenuUser, RowMenuTitle } from '../styles/UserDashboardStyles.js'; // Componentes de estilo do menu do usuário
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io'; // Ícones de menu dropdown
import { UserContext } from '../router/userContext.jsx'; // Contexto do usuário para obter dados e funções relacionadas ao usuário
import { CiSearch } from 'react-icons/ci'; // Ícone de busca
import { BotaoBuscaNav, ContainerInputButtonBuscaNav, InputBuscaNav } from '../styles/NavBarStyles.js'; // Componentes de estilo para a barra de navegação
import { BsPencil } from 'react-icons/bs';
import { BotaoPaginacao, ContainerPaginacao, ThProduto1 } from '../styles/ProdutoStyles.js';

function Banners() {
  // Obtendo dados do contexto do usuário
  const { user, logout } = useContext(UserContext);

  // Definindo estados para armazenar dados de banners e controle de inputs
  const [imgBanner, setImgBanner] = useState(''); // Armazena a imagem que o usuário escolhe para o banner
  const [idBanner, setIdBanner] = useState(''); // Armazena o ID do banner a ser excluído
  const [nomeBanner, setNomeBanner] = useState(''); // Armazena o nome do banner
  const [banners, setBanners] = useState([]); // Armazena todos os banners obtidos do backend
  const [openMenuUser, setOpenMenuUser] = useState(false); // Controla a visibilidade do menu do usuário
  const [search, setSearch] = useState(''); // Armazena o valor da busca
  const [filterBanner, setFilterBanner] = useState([]); // Armazena banners filtrados pela busca

  // Função para alternar a visibilidade do menu de usuário (expandir ou retrair)
  const handleClickMenuUser = () => {
    setOpenMenuUser(!openMenuUser);
  };

  // Função para filtrar banners com base no texto de busca
  const handleSearchBanner = (e) => {
    const pesquisado = e.target.value.toLowerCase(); // Converte a busca para minúsculas
    setSearch(pesquisado);

    const results = banners
      .filter((banner) =>
        banner.nome_banner.toLowerCase().includes(pesquisado) // Filtra os banners pelo nome da imagem
      )
      .sort((a, b) => b.id_banner - a.id_banner); // Ordenação decrescente
    setFilterBanner(results); // Atualiza o estado com os banners filtrados
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Função para calcular o índice inicial e final dos itens da página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtra os produtos para mostrar apenas os itens da página atual
  const currentItems = filterBanner.slice(startIndex, endIndex);

  // Calcula o número total de páginas
  const totalPages = Math.ceil(filterBanner.length / itemsPerPage);

  // Função para mudar a página
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Função para inserir um novo banner
  const handleInserirBanner = async (e) => {
    e.preventDefault();

    const formDataBanner = new FormData();
    formDataBanner.append('img_banner', imgBanner);
    formDataBanner.append('nome_banner', nomeBanner);

    try {
      // Envia o arquivo para o backend e recebe a URL da imagem no Cloudinary
      const resp = await axios.post('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/banner', formDataBanner, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (resp.data.result) {
        alert('Banner inserido com sucesso!');
        setImgBanner('');
        setNomeBanner('');

        // Atualizar a lista de banners com o novo inserido
        const newBanner = {
          img_banner: resp.data.result.img_banner, // A URL da imagem
          nome_banner: nomeBanner, // O nome do banner
          public_id: resp.data.result.public_id, // O public_id
          id_banner: resp.data.result.id_banner // ID retornado do backend
        };
        setBanners([...banners, newBanner]);
        setFilterBanner([...filterBanner, newBanner]); // Também atualiza os banners filtrados
      } else {
        alert('Erro ao inserir banner');
      }
    } catch (error) {
      console.error('Erro ao inserir banner.', error);
    }
  };

  // Função para excluir um banner baseado no ID
  const handleExcluirBanner = async (e) => {
    e.preventDefault();

    if (!nomeBanner) {
      alert('Por favor, insira o nome do arquivo do banner'); // Valida se o nome foi inserido
      return;
    }

    try {
      // Envia uma requisição DELETE para o servidor passando o nome do arquivo do banner
      const resp = await axios.delete(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/banner/${nomeBanner}`);

      if (resp.data.result) {
        setNomeBanner(''); // Limpa o campo após a exclusão
        alert('Banner excluído com sucesso!'); // Mensagem de sucesso
      } else {
        alert('Erro ao excluir o banner.'); // Mensagem de erro caso a exclusão falhe
      }
    } catch (error) {
      console.error('Erro ao excluir Banner', error); // Log de erro
      alert('Erro ao excluir o banner.'); // Mensagem de erro
    }
  };

  // useEffect para buscar os banners ao carregar o componente
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const resp = await axios.get('https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/banners'); // Requisição GET para obter banners
        setBanners(resp.data.result); // Armazena os banners no estado
        setFilterBanner(resp.data.result); // Armazena banners filtrados inicialmente (sem filtro)
      } catch (error) {
        console.error('Erro ao buscar todos os banners.', error); // Log de erro
      }
    };
    fetchBanners(); // Executa a função ao carregar o componente
  }, []); // O array vazio significa que o useEffect é executado apenas uma vez

  return (
    <React.Fragment>
      {/* Exibição do menu do usuário com alternância de ícones e boas-vindas */}
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

      {/* Exibição do menu do usuário se estiver aberto */}
      {openMenuUser && (
        <MenuUser>
          <LinkMail to='/minha-conta'>Minha Conta</LinkMail>
          <LinkMail to='/pedidos-ativos'>Pedidos Ativos</LinkMail>
          <LinkMail to='/pedidos-encerrados'>Pedidos Encerrados</LinkMail>
          <BtnMenuUser onClick={logout}>Sair</BtnMenuUser>
        </MenuUser>
      )}

      {/* Seção principal do componente Banners */}
      <Container>
        <Titulo>Banners</Titulo>
        <ContainerGeralFuncao>
          <ContainerFuncoes>
            {/* Função de Inserir Banner */}
            <ContainerFuncao>
              <ContainerCrud>
                <TxtGerais style={{ color: '#A87826' }}>Inserir Banner</TxtGerais>
                <InputProdutosFileWrapper>
                  <LabelInputProdutos>
                    <LabelProdutos><AiOutlineFileImage /></LabelProdutos>
                    <label htmlFor='fileInput'>Escolher Imagem</label>
                    <input type="file" id='fileInput' required onChange={(e) => setImgBanner(e.target.files[0])} /> {/* Input para escolher arquivo */}
                    {imgBanner && <FileNameProduto>{imgBanner.name}</FileNameProduto>} {/* Exibe o nome do arquivo escolhido */}
                  </LabelInputProdutos>
                </InputProdutosFileWrapper>

                <LabelInputProdutos>
                  <LabelProdutos htmlFor='nome_banner'><BsPencil /> </LabelProdutos>
                  <InputProdutos type="text" id='nome_banner' placeholder='Nome do Banner' value={nomeBanner} required onChange={(e) => setNomeBanner(e.target.value)} /> {/* Input para armazenar o nome do banner */}
                </LabelInputProdutos>

                <SectionBtnProdutos>
                  <ButtonProdutos onClick={handleInserirBanner}>Inserir</ButtonProdutos> {/* Botão para inserir o banner */}
                </SectionBtnProdutos>
              </ContainerCrud>
            </ContainerFuncao>

            {/* Função de Excluir Banner */}
            <ContainerFuncao>
              <ContainerCrud>
                <TxtGerais style={{ color: '#A87826' }}>Excluir Banner</TxtGerais>
                <LabelInputProdutos>
                  <LabelProdutos htmlFor='id_banner'><AiOutlineProduct /></LabelProdutos>
                  <InputProdutos type='number' id='id_banner' placeholder='ID do banner' value={idBanner} onChange={(e) => setIdBanner(e.target.value)} /> {/* Input para inserir ID do banner */}
                </LabelInputProdutos>
                <SectionBtnProdutos>
                  <ButtonProdutos onClick={handleExcluirBanner}>Excluir</ButtonProdutos> {/* Botão para excluir o banner */}
                </SectionBtnProdutos>
              </ContainerCrud>
            </ContainerFuncao>
          </ContainerFuncoes>
        </ContainerGeralFuncao>
        {/* Campo de busca */}
        <ContainerInputButtonBuscaNav style={{ width: '100%', justifyContent: 'center', margin: '2rem 0 0 0' }}>
          <InputBuscaNav
            type="text"
            name="searchBanner"
            id="searchBanner"
            value={search}
            placeholder='Banner que procura?'
            onChange={handleSearchBanner} // Atualiza a busca conforme o usuário digita
          />
          <BotaoBuscaNav>
            <CiSearch /> {/* Ícone de lupa */}
          </BotaoBuscaNav>
        </ContainerInputButtonBuscaNav>

        {/* Exibição da lista de banners filtrados */}
        <ListaProdutos>
          <table>
            <thead>
              <tr>
                <ThProduto1>ID</ThProduto1>
                <th>Imagem</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(currentItems) &&
                currentItems
                  .slice() // Faz uma cópia para evitar mutação do estado original
                  .sort((a, b) => b.id_banner - a.id_banner) // Ordena do maior para o menor ID
                  .map((banner) => (
                    <tr key={banner.id_banner}>
                      <td>{banner.id_banner}</td>
                      <td>
                        <ImgTableBanners
                          src={banner.img_banner} // Agora, `img_banner` será a URL do Cloudinary
                          alt={banner.nome_banner}
                          title={banner.nome_banner}
                        />
                      </td>
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
  );
}

export default Banners;
