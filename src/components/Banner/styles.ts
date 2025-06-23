import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerBar = styled.div`
  background-color: black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 280px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    color: ${cores.branco};
    gap: 146px;
    padding: 10px 0px;
    font-size: 32px;
    position: relative;
    h2 {
      font-weight: 100;
    }
    h1 {
      font-weight: 900;
    }
  }
`
