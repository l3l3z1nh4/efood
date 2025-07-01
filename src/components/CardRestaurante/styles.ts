import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const CardBar = styled.div`
  background-color: ${cores.branco};
  width: 472px;
  height: 398px;
  border: 2px solid ${cores.principal};
  border-radius: 2px;
  color: ${cores.principal};

  @media screen and (max-width: 1024px) {
    max-width: 350px;
  }
`

export const ConteudoCard = styled.div`
  width: 100%;

  .img-tag {
    position: relative;
    margin-bottom: 0;
    height: 217px;
  }
  .tags-container {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 8px;
    z-index: 1;
  }

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 181px;
    padding: 8px;
  }

  .nome-nota {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3px;
    margin-bottom: 8px;
  }
`
export const Img = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Titulo = styled.h1`
  font-size: 18px;
  font-weight: 700px;
`

export const Nota = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
`

export const Estrela = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 8px;
  margin-bottom: 3px;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 8px;
`

export const Botao = styled(Link)`
  background-color: ${cores.principal};
  color: ${cores.secundaria};
  padding: 6px 0px;
  border-radius: 2px;
  display: flex;
  max-width: 20%;
  cursor: pointer;
  font-size: 14px;
  justify-content: center;
  margin-bottom: 6px;
  @media screen and (max-width: 1024px) {
    max-width: 90px;
  }
`
