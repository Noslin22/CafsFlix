import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo2.PNG';

function Footer() {
  return (
    <FooterBase>
      <a href="https://cafsflix.vercel.app/">
        <img src={Logo} alt="Logo Cafs Flix" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://www.instagram.com/jn_pedreira/">
          João Nilson
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
