import styled from 'styled-components'
import { cores } from '../../styles'

export const RestaurantesContainer = styled.section`
  background-color: ${cores.fundo};
  width: 100%;
`

export const RestaurantesLista = styled.main`
  padding: 60px 0px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 32px;
  row-gap: 32px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, auto);
  }
  @media screen and (min-width: 1800px) {
    grid-template-columns: repeat(3, auto);
    max-width: 1800px;
  }
`
