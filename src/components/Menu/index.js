import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logofocus.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="FOCUS logo" width="160" height="120"/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Cadastrar QRCode
      </Button>
    </nav>
  );
}

export default Menu;