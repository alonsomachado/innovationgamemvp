import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logofocus.png';

function Footer() {
  return (
    <FooterBase>
      
      <img className="Logo" src={Logo} alt="FOCUS logo" width="160" height="120"/>
      
      <p>
        Criado para
        {' '}
        <a href="https://ambev-innogame.tech/">
          INNOVATION GAME 2  
        </a>
         Desafio de criar um novo Produto Não Alcóolico em Agosto de 2020
      </p>
    </FooterBase>
  );
}

export default Footer;
