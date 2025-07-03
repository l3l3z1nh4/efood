import styled from 'styled-components'
import { cores } from '../../styles'
import { BotaoAdd } from '../CardPrato/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
  ul {
    margin-bottom: 36px;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.principal};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  color: ${cores.secundaria};

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media screen and (max-width: 480px) {
    max-width: 240px;
  }

  h1 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin-bottom: 16px;
  }
`
export const Formulario = styled.form`
  font-size: 14px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 700;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 8px;
    border: none;
    background-color: ${cores.secundaria};
    color: ${cores.cinza};
  }
  .group {
    display: flex;
    justify-content: space-between;
    gap: 34px;

    #numero-cartao {
      width: 228px;
    }
  }

  ${BotaoAdd} {
    margin-top: 24px;
    margin-bottom: 8px;
  }
`
