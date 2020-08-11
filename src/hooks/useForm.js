import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import categsRepository from '../repositories/categorias';

function useForm(valoresIniciais) {
  const [categorias, setCategorias] = useState([]);
  const [categoryToEdit, setCategoryToEdit] = useState('');
  const [categoryTitleNewValueToEdit, setCategoryTitleNewValueToEdit] = useState('');
  const [categorySubtitleNewValueToEdit, setCategorySubtitleNewValueToEdit] = useState('');
  const [values, setValues] = useState(valoresIniciais);
  const [categoryEditErrorsMessages, setCategoryEditErrorsMessages] = useState({});
  const errorConditions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '@', '#', '$', '%', '!', '&', '*', '(', ')', '-', '=', '+', '[', ']', '{', '}', '.', ',', '|'];
  const [errorsMessages, setErrorsMessages] = useState({});
  const history = useHistory();

  useEffect(() => {
    categsRepository
      .getAll()
      .then((categs) => {
        setCategorias(categs);
      });
    // eslint-disable-next-line
    }, []);

  const categoryTitles = categorias.map(({ nome }) => nome);

  function setValor(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(info) {
    setValor(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  function clearErrors() {
    setErrorsMessages(() => ({}));
  }
  function handleCategoryToEdit(e) {
    setCategoryToEdit(e.target.value);
  }
  function handleCategoryTitleNewValueToEdit(e) {
    setCategoryTitleNewValueToEdit(e.target.value);
  }

  function handleCategorySubtitleNewValueToEdit(e) {
    setCategorySubtitleNewValueToEdit(e.target.value);
  }
  function handleCategoryDelete(e) {
    e.preventDefault();

    const categoriaEscolhida = categorias.find(
      // eslint-disable-next-line
        (categ) => (categ.nome === categoryToEdit)
    );
    const { id } = categoriaEscolhida;

    if (id === 0) {
      return;
    }

    categsRepository.deleteCateg(id)
      .then(() => {
        history.push('/');
      });
  }
  function validate(submitValues) {
    const hasSpecialCaracterTitle = errorConditions.some(
      (symbol) => submitValues.nome.includes(symbol),
    );
    const hasSpecialCaracterSubtitle = errorConditions.some(
      (symbol) => submitValues.descricao.includes(symbol),
    );
    const isTitleLengthInvalid = submitValues.nome.length < 4;
    const isSubtitleLengthInvalid = submitValues.descricao.length < 4;
    const isTitleInvalid = hasSpecialCaracterTitle || isTitleLengthInvalid;
    const isSubtitleInvalid = hasSpecialCaracterSubtitle || isSubtitleLengthInvalid;
    const invalidTitleMsg = 'Por favor, insira um título válido!';
    const invalidSubtitleMsg = 'Por favor, insira um subtítulo válido!';
    const endMsg = 'Apenas letras e espaços são permitidos, com um mínimo de 4 caracteres.';

    if (isTitleInvalid && isSubtitleInvalid) {
      setErrorsMessages({
        nome: invalidTitleMsg,
        descricao: invalidSubtitleMsg,
        end: endMsg,
      });
      return false;
    }
    if (isTitleInvalid) {
      setErrorsMessages({
        nome: invalidTitleMsg,
        end: endMsg,
      });
      return false;
    }
    if (isSubtitleInvalid) {
      setErrorsMessages({
        descricao: invalidSubtitleMsg,
        end: endMsg,
      });
      return false;
    }

    // Validar cor
    if (submitValues.cor.length < 4) {
      setErrorsMessages({
        cor: 'Please insert a valid color!',
        end: endMsg,
      });
      return false;
    }

    setErrorsMessages({});
    return true;
  }

  function validateCategoryEdit(editCategoryValues) {
    const hasSpecialCaracterTitle = errorConditions.some(
      (symbol) => editCategoryValues.nome.includes(symbol),
    );
    const hasSpecialCaracterSubtitle = errorConditions.some(
      (symbol) => editCategoryValues.descricao.includes(symbol),
    );
    const isTitleLengthInvalid = editCategoryValues.nome.length < 4;
    const isSubtitleLengthInvalid = editCategoryValues.descricao.length < 4;
    const isTitleInvalid = hasSpecialCaracterTitle || isTitleLengthInvalid;
    const isSubtitleInvalid = hasSpecialCaracterSubtitle || isSubtitleLengthInvalid;
    const invalidTitleMsg = 'Por favor, insira um título válido!';
    const invalidSubtitleMsg = 'Por favor, insira um subtítulo válido!';
    const endMsg = 'Apenas letras e espaços são permitidos, com um mínimo de 4 caracteres.';

    if (isTitleInvalid && isSubtitleInvalid) {
      setCategoryEditErrorsMessages({
        nome: invalidTitleMsg,
        descricao: invalidSubtitleMsg,
        end: endMsg,
      });
      return false;
    }
    if (isTitleInvalid) {
      setCategoryEditErrorsMessages({
        nome: invalidTitleMsg,
        end: endMsg,
      });
      return false;
    }
    if (isSubtitleInvalid) {
      setCategoryEditErrorsMessages({
        descricao: invalidSubtitleMsg,
        end: endMsg,
      });
      return false;
    }

    // Validar cor
    // if (editCategoryValues.cor.length < 4) {
    //   setCategoryEditErrorsMessages({
    //     cor: 'Please insert a valid color!',
    //     end: endMsg,
    //   });
    //   return false;
    // }

    setCategoryEditErrorsMessages({});
    return true;
  }
  function handleCategoryTitleEdit(e) {
    e.preventDefault();

    const isValid = validateCategoryEdit({
      nome: categoryTitleNewValueToEdit,
      descricao: categorySubtitleNewValueToEdit,
    });
    if (!isValid) return;

    const categoriaEscolhida = categorias.find(
      // eslint-disable-next-line
      (categ) => (categ.nome === categoryToEdit)
    );
    const { id } = categoriaEscolhida;

    categsRepository.edit({
      nome: categoryTitleNewValueToEdit,
      descricao: categorySubtitleNewValueToEdit,
      link_extra: {
        text: categorySubtitleNewValueToEdit,
      },
    }, id)
      .then(() => {
        history.push('/');
      });
  }

  useEffect(() => {
    validateCategoryEdit({
      nome: categoryTitleNewValueToEdit,
      descricao: categorySubtitleNewValueToEdit,
    });
    // eslint-disable-next-line
  }, [categoryTitleNewValueToEdit, categorySubtitleNewValueToEdit]);

  return {
    values,
    categoryToEdit,
    categoryTitles,
    categoryTitleNewValueToEdit,
    categorySubtitleNewValueToEdit,
    handleCategoryTitleNewValueToEdit,
    handleCategorySubtitleNewValueToEdit,
    handleCategoryTitleEdit,
    validate,
    handleChange,
    handleCategoryDelete,
    handleCategoryToEdit,
    clearForm,
    clearErrors,
    errorsMessages,
    categoryEditErrorsMessages,
  };
}

export default useForm;
