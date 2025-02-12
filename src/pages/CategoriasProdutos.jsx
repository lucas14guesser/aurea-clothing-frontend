import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProdutosGeral from '../components/layout/produtos/ProdutosGeral';
import axios from 'axios';
import SpinnerComponent from '../components/functions/main/SpinnerComponent';

export const CategoriasProdutos = () => {
  const { categoria } = useParams();
  const [dadosCategoria, setDadosCategoria] = useState({
    titulo: '',
    subtitulo: '',
    parcelamento: '',
    produtos: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        const resp = await axios.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/produto/categoria/${categoria}`);

        if (!resp.data.result || resp.data.result.length === 0) {
          throw new Error('Categoria não encontrada.');
        }

        setDadosCategoria({
          titulo: `Produtos de ${categoria}`,
          subtitulo: `Confira todos os nossos produtos da categoria ${categoria}`,
          parcelamento: 'Em até 12X',
          produtos: resp.data.result,
        });
      } catch (error) {
        setError('Categoria não encontrada.');
        navigate('/404', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchCategoria();
  }, [categoria, navigate]);

  if (loading) {
    return <SpinnerComponent />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ProdutosGeral
      titulo={dadosCategoria.titulo}
      subtitulo={dadosCategoria.subtitulo}
      produtos={dadosCategoria.produtos}
    />
  );
};

const SubCategoriasProdutos = () => {
  const { subcategoria } = useParams();
  const [dadosSubcategoria, setDadosSubcategoria] = useState({
    titulo: '',
    subtitulo: '',
    parcelamento: '',
    produtos: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubcategoria = async () => {
      try {
        const resp = await axios.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/produto/subcategoria/${subcategoria}`);

        if (!resp.data.result || resp.data.result.length === 0) {
          throw new Error('Subcategoria não encontrada.');
        }

        setDadosSubcategoria({
          titulo: `Produtos de ${subcategoria}`,
          subtitulo: `Confira todos os nossos produtos da subcategoria ${subcategoria}`,
          parcelamento: 'Em até 12X',
          produtos: resp.data.result,
        });
      } catch (error) {
        setError('Subcategoria não encontrada.');
        navigate('/404', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchSubcategoria();
  }, [subcategoria, navigate]);

  if (loading) {
    return <SpinnerComponent />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ProdutosGeral
      titulo={dadosSubcategoria.titulo}
      subtitulo={dadosSubcategoria.subtitulo}
      produtos={dadosSubcategoria.produtos}
    />
  );
};

export default SubCategoriasProdutos;
