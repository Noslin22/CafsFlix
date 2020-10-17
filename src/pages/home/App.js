import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categorias from '../../repositories/categorias';
import Page from '../../components/pageDefault';

function Home() {
  const [dadosIniciais, setDados] = useState([]);

  useEffect(() => {
    categorias.getWithVideos()
      .then((categoriasVideos) => {
        setDados(categoriasVideos);
      });
  }, []);

  return (
    <Page paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].nome}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Efésios 1:7"
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </Page>
  );
}

export default Home;
