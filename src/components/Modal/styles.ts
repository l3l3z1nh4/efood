import styled from 'styled-components'
import { cores } from '../../styles'
import { Descricao } from '../CardRestaurante/styles'
import { BotaoAdd } from '../CardPrato/styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
  border-radius: 2px;
  width: 100%;
  height: 344px;
  z-index: 1001;
  color: ${cores.secundaria};
  background-color: ${cores.principal};

  @media screen and (max-width: 768px) {
    max-width: 480px;
    height: auto;
  }
`
export const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  @media (max-width: 768px) {
    top: 5px;
    right: 10px;
  }
`

export const ModalConteudo = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 2px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`
export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 50%;

  @media (max-width: 768px) {
    gap: 24px;
  }

  ${Descricao} {
    padding: 0;
    line-height: 22px;
  }

  ${BotaoAdd} {
    max-width: 50%;
    margin-bottom: 2px;
  }
`
