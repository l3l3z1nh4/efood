import styled from 'styled-components'

export const CardapioContainer = styled.div`
  padding: 60px 0px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 32px;
  row-gap: 32px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, auto);
  }
`
