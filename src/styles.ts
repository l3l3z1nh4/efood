import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFFFFF',
  principal: '#E66767',
  secundaria: '#FFEBD9',
  fundo: 'rgba(255, 235, 217, 0.4)',
  amarelo: '#FFB930'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }


  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
