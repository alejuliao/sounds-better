import React from 'react';
import { FooterBase } from './styles';
import Piano from '../../assets/img/piano.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.youtube.com/user/BrasilianMusician">
        <img className="Piano" src={Piano} alt="Vinheteiro" />
      </a>
      <p>
        Orgulhosamente apresenta
        {' '}
        <a href="https://www.youtube.com/user/BrasilianMusician">
          o melhor da música brasileira.
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
