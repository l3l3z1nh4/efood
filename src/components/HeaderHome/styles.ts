import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;
  background-color: ${cores.secundaria};
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    text-align: center;
    display: block;
    margin: 120px;
    max-width: 539px;

    img {
      margin-bottom: 150px;
      width: 125px;
    }

    p {
      height: 100%;
      font-weight: 900;
      font-size: 24px;
      color: ${cores.principal};
    }
  }
`
