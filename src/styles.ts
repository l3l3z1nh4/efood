import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFFFFF',
  principal: '#E66767',
  secundaria: '#FFEBD9',
  fundo: 'rgba(255, 235, 217, 0.4)',
  amarelo: '#FFB930',
  cinza: '#4B4B4B'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;

    body{
    @media screen and (max-width: 768px) {
      overflow-x: hidden;
    }
    }
  }


  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

  @media (max-width: 1080px) {
    max-width: 768px;
  }

  @media (max-width: 768px) {
    max-width: 480px;
  }

  @media screen and (max-width: 480px) {
    max-width: 350px;
  }
  }
`
