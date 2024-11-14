import React from 'react';
import '../style/SobreStyle.jsx'
import { SobreStyle } from '../style/SobreStyle.jsx';

const Sobre = () => {
  return (
    <SobreStyle>
    <main className="sobre">
      <section className="sobre-intro">
        <h1>Sobre o Fontes Energeticas</h1>
        <p>
          Bem-vindo a – sua fonte Energeticas  tudo sobre o
          mundo das energias! Aqui, celebramos a paixão, a emoção e o espírito
          de um lugar mais limpo e que ajude todo mundo.
        </p>
      </section>
      
      <section className="sobre-missao">
        <p>
          Na Fontes energeticas estamos dipostos a ajudar. Por isso,
          oferecemos uma ampla variedade de produtos de alta qualidade, das
          energias mais renovaveis, para diferentes lugares ao redor do mundo. Seja
          você um empresario, ou uma empresa  ou alguém,
          que busca mais estabilidade ao planeta  no dia a dia, temos o produto certo
          para você.
        </p>

        <p>
          Nosso compromisso é oferecer uma experiência de compra excepcional,
          com atendimento especializado, entrega rápida e fácil, e uma seleção
          de produtos que acompanhe as diversidades e inovações do mundo
          ecologico. Queremos ajudar você a alcançar seu melhor, com
          confiança e seguranca.
        </p>
      </section>
    </main>
    </SobreStyle>
  );
};

export default Sobre;
