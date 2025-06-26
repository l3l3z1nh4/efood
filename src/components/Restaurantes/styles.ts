import styled from 'styled-components'
import { cores } from '../../styles'

export const RestaurantesSection = styled.section`
  background-color: ${cores.fundo};
  width: 100%;
`

export const RestaurantesLista = styled.main`
  padding: 60px 0px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, auto);
  column-gap: 80px;
  row-gap: 32px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, auto);
  }
`
