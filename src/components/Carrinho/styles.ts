import styled from 'styled-components'
import { cores } from '../../styles'

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
`

export const Preco = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: ${cores.secundaria};
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.secundaria};
  padding: 8px;
  position: relative;
  color: ${cores.principal};
  background-color: ${cores.secundaria};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
  }

  button {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 75px;
    right: 0;

    img {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
`
