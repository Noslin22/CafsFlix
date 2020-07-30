import React from 'react';
import Page from '../../../components/pageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
      <Page>
        <h1>
        Cadastro de Video
        </h1>

        <Link to='/cadastro/categoria'>Cadastrar Categoria</Link>
      </Page>
    );
  }

  export default CadastroVideo;