// Função que formata o valor para o formato de moeda brasileira (R$ 100,00)
export const formatCurrencyBr = (valor) => {
  if (typeof valor !== "number") return "0,00"; // Caso o valor não seja um número
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // Formata como moeda brasileira
};

// Função para formatar datas no formato brasileiro (DD/MM/AAAA)
export const formatDateBrDefault = (data) => {
  if (!data) {
    return 'N/A'; // Ou qualquer outro valor padrão, como 'Data não disponível'
  }
  
  const dateParts = data.split('-'); // Divide a data em partes (AAAA-MM-DD)
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // Meses começam em 0 no JavaScript
  const day = parseInt(dateParts[2]);

  new Date(year, month, day); // Cria um novo objeto Date

  return `${String(day).padStart(2, '0')}/${String(month + 1).padStart(2, '0')}/${year}`; // Retorna a data formatada
};

// Função que formata as parcelas do produto
export const formatParcelas = (parcelas) => {
  if (!parcelas || parcelas === 1) {
    return "À vista"; // Se não houver parcelas ou for 1 parcela, retorna "À vista"
  }
  return `Em até ${parcelas}X`; // Caso contrário, retorna o número de parcelas com "X" (ex: 10X)
};

// Função que formata as parcelas do produto do lado do cliente
export const formatParcelasClientes = (parcelas) => {
  if (!parcelas || parcelas === 1) {
    return "À vista"; // Se não houver parcelas ou for 1 parcela, retorna "À vista"
  }
  return `${parcelas}X`; // Caso contrário, retorna o número de parcelas com "X" (ex: 10X)
};

// Função que formata o título das categorias com palavras amigáveis
export const formatarTitulo = (titulo) => {
  if (!titulo || typeof titulo !== 'string') {
    return ''; // Retorna uma string vazia ou outro valor padrão caso título seja inválido
  }

  const dicionario = {
    calcas: 'calças',
    acessorios: 'acessórios',
    bones: 'bonés',
    lancamentos: 'lançamentos',
    promocoes: 'promoções',
  };

  let tituloFormatado = titulo;

  for (let chave in dicionario) {
    const regex = new RegExp(`\\b${chave}\\b`, 'g');
    tituloFormatado = tituloFormatado.replace(regex, dicionario[chave]);
  }

  return tituloFormatado;
};

// Função para verificar se o produto é fallback
export const isFallbackProduct = (produto) => {
  // Garantir que id_produto seja uma string antes de usar startsWith
  return String(produto.id_produto).startsWith("fallback");
};

// Função para preencher com produtos de fallback
export const preencherComFallback = (produtos) => {
  const minimoProdutos = 3;
  let produtosCompletos = [...produtos];

  // Adiciona produtos de fallback até que o total seja 3
  while (produtosCompletos.length < minimoProdutos) {
    const produtoFallback = {
      id_produto: `fallback-${produtosCompletos.length}`,
      nome_produto: "Não contém produto",
      img_produto: "fallback-img.png", // imagem de fallback
      preco_produto: 0,
      parcela_produto: 1,
      qtd_produto: 0,
    };
    produtosCompletos.push(produtoFallback);
  }

  return produtosCompletos;
};

// Função para definir a URL da imagem, utilizando uma imagem de fallback quando não houver imagem
export const getImageUrl = (imgProduto) => {
  if (imgProduto && imgProduto.startsWith("http")) {
    // Retorna a URL da imagem do Cloudinary se estiver disponível
    return imgProduto;
  } else {
    // URL da imagem de fallback
    return 'https://res.cloudinary.com/dnmkzbbhq/image/upload/v1740071033/fallbackproduto_khrvuh.jpg';
  }
};