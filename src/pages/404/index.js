import React from 'react';
import Iframe from 'react-iframe';
import Main from './styles';
import Menu from '../../components/menu';
import Footer from '../../components/Footer';

function Page404() {
  return (
    <>
      <Menu />
      <Main>
        <iframe src="https://preview.p5js.org/Spoiler2204/embed/57oB5sj36" width="100%"></iframe>
      </Main>
      <Footer />
    </>
  );
}

export default Page404;
