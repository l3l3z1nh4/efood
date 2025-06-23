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

    a {
      max-width: 256px;
    }

    a:visited {
      color: inherit;
    }

    img {
      width: 125px;
    }
  }
`
