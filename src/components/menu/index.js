/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../Button';

function Menu() {
  const novoVideo = !window.location.pathname.includes('/cadastro/video')
  && !window.location.pathname.includes('/cadastro/categoria') && window.location.pathname.includes('/admin');

  return (
    <nav className="Menu">
      <Link to="/">
        <img alt="Menu" className="Logo" src={Logo} />
      </Link>
      {
  novoVideo && (
    <Button as={Link} className="ButtonLink" to="/cadastro/video">
      Novo vídeo
    </Button>
  )
}
    </nav>
  );
}

export default Menu;
