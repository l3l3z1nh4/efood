import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.secundaria};
  color: ${cores.principal};
  height: 298px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    margin-top: 38px;
    margin-bottom: 0;
  }

  .social {
    display: flex;
    gap: 8px;
    height: 24px;
    margin-top: -60px;

    img {
      margin: 0;
    }
  }

  p {
    font-size: 10px;
    max-width: 480px;
    width: 100%;
    margin-bottom: 38px;
    @media screen and (max-width: 480px) {
      max-width: 350px;
    }
  }
`
