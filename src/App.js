import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // Definir la categoría y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=01a7b1d7bf48431c93bab9f857e6b271`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles)
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header
        titulo="Buscador de Noticias"
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
