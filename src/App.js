import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import styled from 'styled-components';

const AppWrapper = styled.div`
  background-color: var(--grayDark);
`

function App() {
  return (
<AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"A abertura começa com nuvens cúmulos se movimentando. Entre elas surgem as palavras THE SIMPSONS, em amarelo. A câmera dá zoom até entrar na cidade de Springfield, passando pela Usina Nuclear de Springfield e as casas ao longe, ela chega à Escola Primária de Springfield."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[0]}
      />      

      <Carousel
        category={dadosIniciais.categorias[0]}
      />      

      <Carousel
        category={dadosIniciais.categorias[0]}
      />      

      <Carousel
        category={dadosIniciais.categorias[0]}
      />      

      <Footer />
    </AppWrapper>
  );
}

export default App;
