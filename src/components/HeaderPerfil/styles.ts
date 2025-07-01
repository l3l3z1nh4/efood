import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.secundaria};
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 18px;
    font-weight: 900;
    color: ${cores.principal};

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }

  a {
    max-width: 256px;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      max-width: 100px;
    }
  }

  a:visited {
    color: inherit;
  }

  img {
    width: 125px;

    @media (max-width: 768px) {
      width: 90px;
    }

    @media screen and (max-width: 480px) {
      max-width: 70px;
    }
  }
`
