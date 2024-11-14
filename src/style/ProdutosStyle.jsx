import styled from 'styled-components'

export const ProdutosStyle = styled.section
    `

    .produtos {
    
    display: flex;
    width: 100%;
    height: 100%;
    row-gap: 4rem;
    flex-wrap: wrap
    
    }

     .produto {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #33372C;
          gap: .4rem;
          padding-top: 1rem;
          padding-bottom: 1rem;

    }

    .produtos > div {
          flex: 50%;
    }

     img {
          height: 16rem;
          width: 32rem;
     }

     button {
          padding: .4rem;
          background-color: #33372C;
     }
`
