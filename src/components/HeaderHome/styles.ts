import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;
  background-color: ${cores.secundaria};
  height: 384px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    text-align: center;
    display: block;
    margin: 120px;
    max-width: 539px;

    img {
      margin-bottom: 130px;
      width: 125px;
      height: 57.5;
    }

    p {
      height: 100%;
      font-weight: 900;
      font-size: 36px;
      color: ${cores.principal};

      @media screen and (max-width: 768px) {
        font-size: 20px;
        width: 350px;
      }
    }
  }
`
