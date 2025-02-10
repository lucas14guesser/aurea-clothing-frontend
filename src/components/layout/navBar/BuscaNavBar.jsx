import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { BotaoBuscaNav, ContainerInputButtonBuscaNav, InputBuscaNav } from '../../../styles/NavBarStyles';

function BuscaNavBar() {
  const [busca, setBusca] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && busca.trim()) {
      navigate(`/produtos-buscados?query=${encodeURIComponent(busca)}`);
    }
  };

  const handleSearch = () => {
    if (busca.trim()) {
      navigate(`/produtos-buscados?query=${encodeURIComponent(busca)}`);
    } else {
      alert('Digite algo para buscar.');
    }
  };

  return (
    <ContainerInputButtonBuscaNav>
      <InputBuscaNav
        type="text"
        name="busca"
        id="buscaNav"
        placeholder="O que você procura?"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <BotaoBuscaNav onClick={handleSearch}>
        <CiSearch />
      </BotaoBuscaNav>
    </ContainerInputButtonBuscaNav>
  );
}

export default BuscaNavBar;
