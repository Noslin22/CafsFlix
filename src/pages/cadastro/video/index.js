import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Page from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import { ButtonDelete } from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryName = categorias.map(({ nome }) => nome);
  const { valores, handleChange, clearForm } = useForm({
    nome: '',
    url: '',
    categoria: '',
  });
  useEffect(() => {
    categoriesRepository.getAll().then((categoriasServer) => {
      setCategorias(categoriasServer);
    });
  }, []);

  const categoriaEscolhida = categorias.find((categoria) => categoria.nome === valores.categoria);

  function submit() {
    videosRepository.createVideo({
      nome: valores.nome,
      url: valores.url,
      categoriaId: categoriaEscolhida.id,
    }).then(() => {
      history.push('/');
    });
  }

  function deleteVideo() {
    videosRepository.deleteVideo(
      valores.id,
    ).then(() => {
      clearForm();
      history.push('/');
    });
  }

  return (
    <Page>
      <h1>
        Cadastro de Video
      </h1>

      <form>
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
          suggestions={categoryName}
        />

        <FormField
          label="Id"
          value={valores.id}
          name="id"
          onChange={handleChange}
        />
        <ButtonDelete onClick={submit} type="submit">
          Cadastrar Vídeo
        </ButtonDelete>

        <ButtonDelete onClick={deleteVideo} type="delete">
          Deletar Vídeo
        </ButtonDelete>

        <ButtonDelete to="/cadastro/categoria">
          Cadastrar Categoria
        </ButtonDelete>
      </form>
    </Page>
  );
}

export default CadastroVideo;
