import React from 'react';
import Iframe from 'react-iframe';
import { Main } from './styles';
import Menu from '../../components/menu';
import Footer from '../../components/Footer';

function Page404() {
  return (
    <>
      <Menu />
      <Main>
        <Iframe src="https://editor.p5js.org/Spoiler2204/embed/pajcOMYr-" width="100%" />
      </Main>
      <Footer />
    </>
  );
}

export default Page404;
