import styled from 'styled-components'
import { cores } from '../../styles'
import { Descricao } from '../CardRestaurante/styles'

export const CardBar = styled.div`
  background-color: ${cores.principal};
  color: ${cores.secundaria};
  max-width: 338px;
  padding: 8px;
  gap: 12px;
  border: 2px solid ${cores.principal};
  border-radius: 2px;
  display: flex;
  flex-direction: column;

  ${Descricao} {
    padding: 0;
    font-size: 14px;
    line-height: 22px;
  }

  @media screen and (max-width: 768px) {
    max-width: 480px;
  }
`

export const BotaoAdd = styled.button`
  background-color: ${cores.secundaria};
  color: ${cores.principal};
  border: none;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 700;
  padding: 4px;
  cursor: pointer;
`
