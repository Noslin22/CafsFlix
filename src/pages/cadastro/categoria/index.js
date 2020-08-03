/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import Page from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const { valores, handleChange, clearForm } = useForm(valoresIniciais);

  function submit() {
    setCategorias([
      ...categorias,
      valores,
    ]);
    clearForm();
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://db-cafsflix.herokuapp.com/categorias';
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

      <form>
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
        <Button onClick={submit} type="submit">
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
