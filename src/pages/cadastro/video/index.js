import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Page from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button, { ButtonWrapper } from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categorias';
import {
  InputContainerDeleteVideo,
  VideoDeleteInput,
} from './style';

function CadastroVideo() {
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videoToDelete, setVideoToDelete] = useState('');
  const history = useHistory();
  const categoryNames = categorias.map(({ nome }) => nome);
  const videoNames = videos.map(({ nome }) => nome);
  const { values, handleChange, clearForm } = useForm({
    id: '',
    nome: '',
    url: '',
    categoria: '',
  });
  useEffect(() => {
    categoriesRepository.getAll().then((categoriasServer) => {
      setCategorias(categoriasServer);
    });
    videosRepository.getAll().then((videosServer) => {
      setVideos(videosServer);
    });
  }, []);

  function handleDelete(e) {
    e.preventDefault();

    const videoEscolhido = videos.find(
      (video) => (video.nome === videoToDelete),
    );

    const { id } = videoEscolhido;

    if (id === 0) {
      return;
    }

    videosRepository.deleteVideo(id)
      .then(() => {
        history.push('/');
      });
  }

  function handleVideoToDelete(e) {
    setVideoToDelete(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const categoriaEscolhida = categorias.find(
      // eslint-disable-next-line
      (categoria) => (categoria.nome === values.categoria)
    );

    videosRepository.create({
      categoriaId: categoriaEscolhida.id,
      nome: values.nome,
      url: values.url,
    })
      .then(() => {
        clearForm();
        history.push('/');
      });
    // setCategorias([...categorias, values]);
    // clearValues();
  }

  return (
    <Page>
      <Button
        to="/cadastro/categoria"
        style={{
          borderWidth: '2.5px',
          borderColor: 'darkslateblue',
        }}
      >
        Nova Categoria
      </Button>
      <InputContainerDeleteVideo>
        <span
          style={{
            position: 'absolute',
            top: 'calc(-1rem - 6px)',
            transform: 'translateY(25%)',
            paddingRight: '5px',
            backgroundColor: 'var(--grayDark)',
            fontSize: '18px',
            fontWeight: 'bold',
          }}
        >
          Apagar um Vídeo
        </span>
        <VideoDeleteInput
          type="text"
          id="deleteVideoField"
          value={videoToDelete}
          placeholder="Título do Vídeo"
          onChange={handleVideoToDelete}
          autoComplete="off"
          list="suggestionsFor_deleteVideoField"
        />
        <datalist id="suggestionsFor_deleteVideoField">
          {
                videoNames.map((suggestion) => (
                  <option value={suggestion} key={`suggestionsFor_deleteVideoField__option_${suggestion}`}>
                    {suggestion}
                  </option>
                ))
              }
        </datalist>
        <Button
          onClick={handleDelete}
          style={{
            borderColor: 'red',
            borderWidth: '1.5px',
          }}
        >
          Apagar Vídeo
        </Button>
      </InputContainerDeleteVideo>
      <h1>
        Cadastro de Video
      </h1>

      <form>
        <FormField
          label="Nome do Vídeo"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="URL"
          value={values.url}
          name="url"
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          value={values.categoria}
          name="categoria"
          onChange={handleChange}
          suggestions={categoryNames}
        />
        <ButtonWrapper>
          <Button
            onClick={handleSubmit}
            type="submit"
            style={{
              paddingLeft: '50px',
              paddingRight: '50px',
              fontSize: '18px',
              borderWidth: '3.5px',
              background: 'var(--blueDark)',
            }}
          >
            Criar Vídeo
          </Button>
        </ButtonWrapper>
      </form>
    </Page>
  );
}

export default CadastroVideo;
