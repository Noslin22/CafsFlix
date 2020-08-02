import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Page from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();
  const { valores, handleChange } = useForm({
    nome: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=kO1XALdcp_4',
    categoria: 'Front-End',
  });

  return (
    <Page>
      <h1>
        Cadastro de Video
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        history.push('/');
      }}
      >
        <FormField
          label="Nome do Vídeo"
          value={valores.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="URL"
          value={valores.url}
          name="url"
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          value={valores.categoria}
          name="categoria"
          onChange={handleChange}
        />

        <Button to="/" type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </Page>
  );
}

export default CadastroVideo;
