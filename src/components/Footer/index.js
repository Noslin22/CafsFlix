import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo2.PNG';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logo} alt="Logo Cafs Flix" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        por
        {' '}
        <a href="https://www.instagram.com/jn_pedreira/">
          João Nilson
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
