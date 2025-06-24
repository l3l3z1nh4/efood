import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const CardBar = styled.div`
  background-color: ${cores.branco};
  max-width: 360px;
  border: 2px solid ${cores.principal};
  border-radius: 2px;
  color: ${cores.principal};

  @media screen and (max-width: 768px) {
    min-width: 460px;
  }

  .img-tag {
    position: relative;
  }
  .tags-container {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 8px;
    z-index: 1;
  }

  .nome-nota {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3px;
    margin-bottom: 8px;
    padding-left: 8px;
  }
`

export const Img = styled.img`
  min-width: 360px;
  max-width: 100%;
  height: 180px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    min-width: 460px;
  }
`

export const Titulo = styled.h1`
  font-size: 18px;
  font-weight: 700px;
`

export const Nota = styled.div`
  font-size: 21px;
  display: flex;
  align-items: center;
`

export const Estrela = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 6px;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding-left: 8px;
  padding-right: 8px;
  line-height: 22px;
`

export const Botao = styled(Link)`
  background-color: ${cores.principal};
  color: ${cores.secundaria};
  padding: 6px;
  border-radius: 2px;
  margin: 8px;
  display: inline-block;
  cursor: pointer;
`
