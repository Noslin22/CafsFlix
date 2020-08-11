/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Page from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categsRepository from '../../../repositories/categorias';
import {
  InputContainer,
  CategorySelectInput,
  CategoryTitleEditInput,
  EditCategorySection,
  DivButtons,
  ButtonShowCategoryEdit,
  ButtonModifyCategoryTitle,
  ButtonDeleteCategory,
  TitleH1,
} from './style';

function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categorias, setCategorias] = useState([]);

  const myForm = useForm(valoresIniciais);

  useEffect(() => {
    categsRepository.getAll().then((responseJson) => {
      setCategorias([
        ...responseJson]);
    });
    /* const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://db-cafsflix.herokuapp.com/categorias';
    fetch(URL).then(async (response) => {
      const responseJson = await response.json();
      setCategorias([
        ...responseJson]);
    }); */
  }, []);
  useEffect(() => {
    myForm.validate(myForm.values);
    // eslint-disable-next-line
  }, [myForm.values]);

  function showCategoryEdit() {
    document.getElementById('editCategoryShowButton').classList.add('hidden');
    document.getElementById('editCategorySection').classList.add('show-flex');
  }

  function handleSubmit(e) {
    e.preventDefault();
    // clearErrors();

    const isValid = myForm.validate(myForm.values);
    if (!isValid) return;

    categsRepository.create({
      nome: myForm.values.nome,
      descricao: myForm.values.descricao,
      link_extra: {
        text: myForm.values.descricao,
        url: '',
      },
      cor: myForm.values.cor,
    })
      .then(() => {
        history.push('/cadastro/categoria');
      });
    setCategorias([...categorias, myForm.values]);
    myForm.clearForm();
  }

  return (
    <Page>
      <ButtonShowCategoryEdit
        id="editCategoryShowButton"
        type="button"
        onClick={() => showCategoryEdit()}
        class=""
      >
        Editar ou Apagar uma Categoria
      </ButtonShowCategoryEdit>
      <EditCategorySection
        id="editCategorySection"
      >
        <div
          style={{
            display: 'flex',
            position: 'relative',
            marginBottom: '1px',
          }}
        >
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
            Edite uma Categoria
          </span>
        </div>
        {myForm.categoryTitleNewValueToEdit && <span style={{ color: 'red', fontSize: '16px', display: 'block' }}>{myForm.categoryEditErrorsMessages.nome}</span>}
        {myForm.categorySubtitleNewValueToEdit && <span style={{ color: 'red', fontSize: '16px', display: 'block' }}>{myForm.categoryEditErrorsMessages.descricao}</span>}
        <span style={{ color: 'red', fontSize: '16px', display: 'block' }}>{myForm.categoryEditErrorsMessages.cor}</span>
        {(myForm.categoryTitleNewValueToEdit
            || myForm.categorySubtitleNewValueToEdit) ? (
              <span
                style={{
                  color: 'red',
                  fontSize: '16px',
                  display: 'block',
                  marginBottom: '3rem',
                }}
              >
                {myForm.categoryEditErrorsMessages.end}
              </span>
          ) : (
            <span
              style={{
                color: 'red',
                fontSize: '16px',
                display: 'block',
                marginBottom: '3rem',
              }}
            />
          )}
        <InputContainer style={{ marginTop: '0px', marginBottom: '10px' }}>
          <span
            style={{
              position: 'absolute',
              transform: 'translateY(-120%)',
              paddingRight: '5px',
              backgroundColor: 'var(--grayDark)',
              fontSize: '16px',
            }}
          >
            Selecione a Categoria
          </span>
          <CategorySelectInput
            type="text"
            id="editCategoryField"
            value={myForm.categoryToEdit}
            placeholder="Título da Categoria"
            onChange={myForm.handleCategoryToEdit}
            autoComplete="off"
            list="suggestionsFor_editCategoryField"
          />
          <datalist id="suggestionsFor_editCategoryField">
            {
                myForm.categoryTitles.map((suggestion) => (
                  <option value={suggestion} key={`suggestionsFor_editCategoryField__option_${suggestion}`}>
                    {suggestion}
                  </option>
                ))
              }
          </datalist>
        </InputContainer>
        <InputContainer style={{ marginTop: '10px', marginBottom: '10px' }}>
          <span
            style={{
              position: 'absolute',
              transform: 'translateY(-120%)',
              paddingRight: '5px',
              backgroundColor: 'var(--grayDark)',
              fontSize: '16px',
            }}
          >
            Novo Título da Categoria
          </span>
          <CategoryTitleEditInput
            type="text"
            value={myForm.categoryTitleNewValueToEdit}
            placeholder="Novo Título da Categoria"
            onChange={myForm.handleCategoryTitleNewValueToEdit}
            autoComplete="off"
          />
        </InputContainer>
        <InputContainer style={{ marginTop: '10px' }}>
          <span
            style={{
              position: 'absolute',
              transform: 'translateY(-120%)',
              paddingRight: '5px',
              backgroundColor: 'var(--grayDark)',
              fontSize: '16px',
            }}
          >
            Novo Subtítulo da Categoria
          </span>
          <CategoryTitleEditInput
            type="text"
            value={myForm.categorySubtitleNewValueToEdit}
            placeholder="Novo Subtítulo da Categoria"
            onChange={myForm.handleCategorySubtitleNewValueToEdit}
            autoComplete="off"
          />
        </InputContainer>
        <DivButtons>
          <ButtonModifyCategoryTitle
            type="button"
            onClick={myForm.handleCategoryTitleEdit}
          >
            Modificar Categoria
          </ButtonModifyCategoryTitle>
          <ButtonDeleteCategory
            type="button"
            onClick={myForm.handleCategoryDelete}
          >
            <span style={{ fontWeight: 'bold' }}>Apague</span>
              &nbsp;a Categoria selecionada
          </ButtonDeleteCategory>
        </DivButtons>
      </EditCategorySection>
      <h1>
        Cadastro de Categoria:
        {' '}
        {myForm.values.nome}
      </h1>
      {myForm.values.nome && <span style={{ color: 'red', fontSize: '16px', display: 'block' }}>{myForm.errorsMessages.nome}</span>}
      {myForm.values.descricao && <span style={{ color: 'red', fontSize: '16px', display: 'block' }}>{myForm.errorsMessages.descricao}</span>}
      {myForm.values.cor && <span style={{ color: 'red', fontSize: '16px', display: 'block' }}>{myForm.errorsMessages.cor}</span>}
      {(myForm.values.nome || myForm.values.descricao) && <span style={{ color: 'red', fontSize: '16px', display: 'block' }}>{myForm.errorsMessages.end}</span>}
      <form>
        <FormField
          label="Nome da Categoria"
          value={myForm.values.nome}
          name="nome"
          onChange={myForm.handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          value={myForm.values.descricao}
          name="descricao"
          onChange={myForm.handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          value={myForm.values.cor}
          name="cor"
          onChange={myForm.handleChange}
        />
        <Button onClick={handleSubmit}>
          Cadastrar
        </Button>
      </form>
      <TitleH1 style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        Categorias Cadastradas:&nbsp;
      </TitleH1>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          listStyleType: 'none',
          padding: '1rem 0',
        }}
      >
        {categorias.map((categoria, index) => (
          <li
            style={{
              padding: '.5rem',
              marginBottom: '4px',
              borderRadius: '10px',
              borderBottom: '1px solid',
              backgroundImage: 'linear-gradient(to top, #6c737a 0%, #5a6066 2%, #4d5256 5%, #404447 8%, #2e3033 15%, var(--grayDark) 25%)',
              textShadow: '1px 1px black',
            }}
            // eslint-disable-next-line react/no-array-index-key
            key={`${categoria}:${index}`}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  width: '20%',
                  overflow: 'auto',
                  wordWrap: 'break-word',
                  fontWeight: 'bold',
                  color: `${categoria.cor}`,
                }}
              >
                {categoria.nome}
              </span>
              <span
                style={{
                  width: '40%',
                  overflow: 'auto',
                  wordWrap: 'break-word',
                  color: `${categoria.cor}`,
                  fontSize: '12px',
                }}
              >
                {categoria.descricao}
              </span>
              <span
                style={{
                  overflow: 'auto',
                  wordWrap: 'break-word',
                  color: 'white',
                  fontSize: '16px',
                  backgroundColor: `${categoria.cor}`,
                  fontWeight: 'bold',
                  padding: '3px',
                  borderRadius: '6px',
                }}
              >
                {categoria.cor}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export default CadastroCategoria;
