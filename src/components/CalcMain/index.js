import React from 'react';
import Produto from '../../assets/img/produto.png';
import Fundo from '../../assets/img/comparativo.png';

import { BannerMainContainer, ContentAreaContainer } from './styles';


export default function BannerMain() {
  const areaTitle = "Recomendações da OMS - FAO"
  const areaTextExtra = "Segundo a FAO em http://www.fao.org/3/aa040e/aa040e09.htm"

  return (
    <BannerMainContainer backgroundImage={Fundo} width="1800" height="1000">
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {areaTitle}
          </ContentAreaContainer.Title>
          
          <ContentAreaContainer.Description>
              {areaTextExtra}
          </ContentAreaContainer.Description>
          
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <img src={Produto} alt="Imagem" height="300"/>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
