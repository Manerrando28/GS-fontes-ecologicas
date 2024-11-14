import React from 'react';

import { HomeStyle } from '../style/HomeStyle';
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <HomeStyle>
    <main className="home">
      <section className="hero">
        <h1>Bem-vindo à Fontes ecologicas!</h1>
        <img src="src/assets/ecologico.jpg"></img>
        <p>
          Descubra as melhores fontes – de energia renovaveis temos
          uma ampla vantagem para que nossos clientes tenha o que 
          precisar de nergia renovavel para o meio ambiente.E que 
          estamos solicitos em ajudar
         
        </p>
        <br></br>
        <br></br>
        <p>Ficou curioso e quer dar uma olhada em nossas fontes de energia?</p>
        <br></br>
        <Link className="link" to = '/Produtos'>Ver Fontes</Link>
      </section>
    </main>
    </HomeStyle>
  );
};

export default Home;
