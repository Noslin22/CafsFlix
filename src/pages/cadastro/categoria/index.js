/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import Page from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(info) {
    setValor(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }

  useEffect(() => {
    const URL = 'https://db-cafsflix.herokuapp.com/categorias';
    fetch(URL).then(async (response) => {
      const responseJson = await response.json();
      setCategorias([
        ...responseJson]);
    });
  }, []);

  return (
    <Page>
      <h1>
        Cadastro de Categoria:
        {' '}
        {valores.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosEvento) {
        infosEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);

        setValores(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          value={valores.nome}
          name="nome"
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          value={valores.descricao}
          name="descricao"
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          value={valores.cor}
          name="cor"
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria /* indice */) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
    </Page>
  );
}

export default CadastroCategoria;
