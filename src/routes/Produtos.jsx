import React from 'react';
// Ajuste o caminho para o estilo, se necessário
import { ProdutosStyle } from '../style/ProdutosStyle.jsx';

const produtos = [
  {
    id: 1,
    imgSrc: 'src/assets/eletrica.jpg', 
    alt: 'produto_1',
    nome: 'eletrica',
    preco: 'R$200.000,00'
  },
  {
    id: 2,
    imgSrc: 'src/assets/hidreletrica.jpg', 
    alt: 'produto_2',
    nome: 'hidreletica',
    preco: 'R$700.000,00'
  },
  {
    id: 3,
    imgSrc: 'src/assets/eolica.jpg', 
    alt: 'produto_3',
    nome: 'eolica',
    preco: 'R$350.000,00'
  },
  {
    id: 4,
    imgSrc: 'src/assets/solar.jpg', 
    alt: 'produto_4',
    nome: 'solar',
    preco: 'R$70.000,00'
  },
  {
    id: 5,
    imgSrc: 'src/assets/biomassa.jpg', 
    alt: 'produto_5',
    nome: 'biomassa',
    preco: 'R$560.000,00'
  },
  {
    id: 6,
    imgSrc: 'src/assets/planeta.jpg', 
    alt: 'produto_6',
    nome: 'planeta limpo',
    preco: 'R$infinito'
  },
];

const Produtos = () => {
  return (
    <ProdutosStyle>
      <section className="produtos">
        {produtos.map(({ id, imgSrc, alt, nome, preco}) => (
          <div key={id} className="produto">
            <img src={imgSrc} alt={alt} />
            <h2>{nome}</h2>
            <p>{preco}</p>
            <button>Comprar</button>
          </div>
        ))}
      </section>
    </ProdutosStyle>
  );
};

export default Produtos;
